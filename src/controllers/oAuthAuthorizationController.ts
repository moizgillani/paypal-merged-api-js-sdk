/**
 * Paypal Merged APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { ApiResponse, RequestOptions } from '../core';
import { OAuthProviderError } from '../errors/oAuthProviderError';
import { OAuthToken, oAuthTokenSchema } from '../models/oAuthToken';
import { optional, string } from '../schema';
import { BaseController } from './baseController';

export class OAuthAuthorizationController extends BaseController {
  /**
   * Create a new OAuth 2 token.
   *
   * @param authorization Authorization header in Basic auth format
   * @param scope         Requested scopes as a space-delimited list.
   * @return Response from the API call
   */
  async requestToken(
    authorization: string,
    scope?: string,
    fieldParameters?: Record<string, unknown>,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<OAuthToken>> {
    const req = this.createRequest('POST', '/v1/oauth2/token');
    const mapped = req.prepareArgs({
      authorization: [authorization, string()],
      scope: [scope, optional(string())],
    });
    req.header('Authorization', mapped.authorization);
    req.form({
      grant_type: 'client_credentials',
      scope: mapped.scope,
      ...fieldParameters
    });
    req.throwOn(400, OAuthProviderError, 'OAuth 2 provider returned an error.');
    req.throwOn(401, OAuthProviderError, 'OAuth 2 provider says client authentication failed.');
    req.authenticate(false);
    return req.callAsJson(oAuthTokenSchema, requestOptions);
  }
}
