/**
 * Merged ApiLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import {
  compositeAuthenticationProvider,
  requestAuthenticationProvider,
} from './authentication';
import { Configuration } from './configuration';

export function createAuthProviderFromConfig(config: Partial<Configuration>) {
  const authConfig = {
    oauth2:
      config.oauth2Credentials &&
      requestAuthenticationProvider (
        config.oauth2Credentials.oAuthToken
    ),
    oauth2PaymentMethodTokens:
      config.oauth2PaymentMethodTokensCredentials &&
      requestAuthenticationProvider (
        config.oauth2PaymentMethodTokensCredentials.oAuthToken
    ),
  };

  return compositeAuthenticationProvider <
    keyof typeof authConfig,
    typeof authConfig
  > (authConfig);
}

