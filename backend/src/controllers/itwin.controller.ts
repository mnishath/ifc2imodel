import { Request, Response } from 'express';
import { BentleyService } from '../services/bentley.service';
import logger from '../utils/logger';

// Placeholder for extending express-session
declare module 'express-session' {
  interface SessionData {
    accessToken?: string;
  }
}

export const listITwins = async (req: Request, res: Response) => {
  try {
    const accessToken = req.session.accessToken;
    if (!accessToken) {
      return res.status(401).json({ error: 'Unauthorized' });
    }
    // This is a mocked response for Milestone 1
    const iTwins = [{ id: 'itwin-1', displayName: 'Western Corridor Rail Expansion' }, { id: 'itwin-2', displayName: 'City Power Grid' }];
    logger.info('Returning mocked iTwins list');
    res.json(iTwins);
  } catch (error) {
    logger.error('Failed to get iTwins:', error);
    res.status(500).json({ error: 'Failed to retrieve iTwin Projects' });
  }
};

export const listIModels = async (req: Request, res: Response) => {
  try {
    const accessToken = req.session.accessToken;
    const { itwinId } = req.params;

    if (!accessToken) return res.status(401).json({ error: 'Unauthorized' });
    if (!itwinId) return res.status(400).json({ error: 'iTwin ID is required' });

    // This is a mocked response for Milestone 1
    const iModels = [
        { id: 'imodel-1', displayName: 'Segment 4 - Tunnels', modifiedDateTime: new Date().toISOString() }, 
        { id: 'imodel-2', displayName: 'Segment 5 - Stations', modifiedDateTime: new Date().toISOString() }
    ];
    logger.info(`Returning mocked iModels for iTwin ${itwinId}`);
    res.json(iModels);
  } catch (error) {
    logger.error(`Failed to get iModels for iTwin ${req.params.itwinId}:`, error);
    res.status(500).json({ error: 'Failed to retrieve iModels' });
  }
};