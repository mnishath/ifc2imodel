import { Request, Response } from 'express';
import { BentleyService } from '../services/bentley.service';
import logger from '../utils/logger';

export const login = (req: Request, res: Response) => {
  const authorizationUrl = BentleyService.getAuthorizationUrl();
  res.redirect(authorizationUrl);
};

export const handleCallback = async (req: Request, res: Response) => {
  const code = req.query.code as string;
  if (!code) {
    return res.status(400).send('Authorization code is missing.');
  }

  try {
    const tokenSet = await BentleyService.getAccessToken(code);
    req.session.accessToken = tokenSet.access_token;
    logger.info('User authenticated successfully.');
    res.redirect('http://localhost:5173/dashboard');
  } catch (error) {
    logger.error('Authentication failed:', error);
    res.status(500).send('Authentication failed.');
  }
};

export const logout = (req: Request, res: Response) => {
  req.session.destroy((err) => {
    if (err) {
      return res.status(500).send('Could not log out.');
    }
    res.status(200).send('Logged out');
  });
};

export const getMe = (req: Request, res: Response) => {
    if (req.session.accessToken) {
        res.json({ loggedIn: true });
    } else {
        res.json({ loggedIn: false });
    }
};