import 'express-session';

// This tells TypeScript that our SessionData object can have an accessToken property.
declare module 'express-session' {
  export interface SessionData {
    accessToken?: string;
  }
}