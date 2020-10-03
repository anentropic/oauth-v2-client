export default interface OauthOptions {
    callbackUrl?: string;
    authUrl: string;
    accessTokenUrl?: string;
    clientId: string;
    clientSecret?: string;
    scope?: Array<string>;
    state?: string;
    username?: string;
    password?: string;
    codeChallengeMethod?: "S256" | "plain";
    codeVerifier?: string;
    basicAuthHeader?: boolean;
  }
  