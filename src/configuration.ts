/**
 * Merged ApiLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { HttpClientOptions } from './clientAdapter';
import { OAuthScopeOauth2Enum } from './models/oAuthScopeOauth2Enum';
import {
  OAuthScopeOauth2PaymentMethodTokensEnum,
} from './models/oAuthScopeOauth2PaymentMethodTokensEnum';
import { OAuthToken } from './models/oAuthToken';

/** An interface for all configuration parameters required by the SDK. */
export interface Configuration {
  timeout: number;
  environment: Environment;
  oauth2Credentials?: {
    oAuthClientId: string;
    oAuthClientSecret: string;
    oAuthToken?: OAuthToken;
    oAuthScopes?: OAuthScopeOauth2Enum[];
  };
  oauth2PaymentMethodTokensCredentials?: {
    oAuthClientId: string;
    oAuthClientSecret: string;
    oAuthToken?: OAuthToken;
    oAuthScopes?: OAuthScopeOauth2PaymentMethodTokensEnum[];
  };
  httpClientOptions?: Partial<HttpClientOptions>;
  unstable_httpClientOptions?: any;
}

/** Environments available for API */
export enum Environment {
  Production = 'production',
  Environment2 = 'environment2',
}
