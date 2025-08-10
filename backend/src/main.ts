import { createServer } from './server';
import logger from './utils/logger';

const port = process.env.PORT || 3001;
const app = createServer();

app.listen(port, () => {
  logger.info(`Backend server listening at http://localhost:${port}`);
});