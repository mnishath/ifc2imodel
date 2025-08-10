import axios from 'axios';
import { URLSearchParams } from 'url';

const BENTLEY_API_URL = 'https://api.bentley.com';

export class BentleyService {
  static getAuthorizationUrl(): string {
    const params = new URLSearchParams({
      client_id: process.env.BENTLEY_CLIENT_ID!,
      response_type: 'code',
      scope: 'itwins:read imodels:read',
      redirect_uri: process.env.BENTLEY_REDIRECT_URI!,
    });
    return `${BENTLEY_API_URL}/ims/connect/authorize?${params.toString()}`;
  }

  static async getAccessToken(code: string): Promise<any> {
    const params = new URLSearchParams({
      client_id: process.env.BENTLEY_CLIENT_ID!,
      client_secret: process.env.BENTLEY_CLIENT_SECRET!,
      grant_type: 'authorization_code',
      code: code,
      redirect_uri: process.env.BENTLEY_REDIRECT_URI!,
    });

    const response = await axios.post(
      `${BENTLEY_API_URL}/ims/connect/token`,
      params,
      { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } }
    );
    return response.data;
  }
  // Actual methods to get iTwins and iModels would be implemented here in a real scenario
}