/**
 * Merged ApiLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { ApiError } from '@apimatic/core';
import { ApiResponse, RequestOptions } from '../core';
import {
  AuthorizationsCaptureResponse400JsonError,
} from '../errors/authorizationsCaptureResponse400JsonError';
import {
  AuthorizationsCaptureResponse403JsonError,
} from '../errors/authorizationsCaptureResponse403JsonError';
import {
  AuthorizationsCaptureResponse404JsonError,
} from '../errors/authorizationsCaptureResponse404JsonError';
import {
  AuthorizationsCaptureResponse422JsonError,
} from '../errors/authorizationsCaptureResponse422JsonError';
import {
  AuthorizationsGetResponse403JsonError,
} from '../errors/authorizationsGetResponse403JsonError';
import {
  AuthorizationsGetResponse404JsonError,
} from '../errors/authorizationsGetResponse404JsonError';
import {
  AuthorizationsReauthorizeResponse400JsonError,
} from '../errors/authorizationsReauthorizeResponse400JsonError';
import {
  AuthorizationsReauthorizeResponse403JsonError,
} from '../errors/authorizationsReauthorizeResponse403JsonError';
import {
  AuthorizationsReauthorizeResponse404JsonError,
} from '../errors/authorizationsReauthorizeResponse404JsonError';
import {
  AuthorizationsReauthorizeResponse422JsonError,
} from '../errors/authorizationsReauthorizeResponse422JsonError';
import {
  AuthorizationsVoidResponse401JsonError,
} from '../errors/authorizationsVoidResponse401JsonError';
import {
  AuthorizationsVoidResponse403JsonError,
} from '../errors/authorizationsVoidResponse403JsonError';
import {
  AuthorizationsVoidResponse404JsonError,
} from '../errors/authorizationsVoidResponse404JsonError';
import {
  AuthorizationsVoidResponse409JsonError,
} from '../errors/authorizationsVoidResponse409JsonError';
import {
  AuthorizationsVoidResponse422JsonError,
} from '../errors/authorizationsVoidResponse422JsonError';
import { M400ErrorError } from '../errors/m400ErrorError';
import { M401ErrorError } from '../errors/m401ErrorError';
import {
  AdditionalAuthorization,
  additionalAuthorizationSchema,
} from '../models/additionalAuthorization';
import {
  AdditionalCapture,
  additionalCaptureSchema,
} from '../models/additionalCapture';
import { CaptureRequest, captureRequestSchema } from '../models/captureRequest';
import {
  ReauthorizeRequest,
  reauthorizeRequestSchema,
} from '../models/reauthorizeRequest';
import { optional, string } from '../schema';
import { BaseController } from './baseController';

export class AuthorizationsController extends BaseController {
  /**
   * Shows details for an authorized payment, by ID.
   *
   * @param authorizationId  The PayPal-generated ID for the authorized payment to void.
   * @return Response from the API call
   */
  async authorizationsGet(
    authorizationId: string,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<AdditionalAuthorization>> {
    const req = this.createRequest('GET');
    const mapped = req.prepareArgs({
      authorizationId: [authorizationId, string()],
    });
    req.appendTemplatePath`/v2/payments/authorizations/${mapped.authorizationId}`;
    req.throwOn(401, M401ErrorError, 'Authentication failed due to missing authorization header, or invalid authentication credentials.');
    req.throwOn(403, AuthorizationsGetResponse403JsonError, 'The request failed because the caller has insufficient permissions.');
    req.throwOn(404, AuthorizationsGetResponse404JsonError, 'The request failed because the resource does not exist.');
    req.throwOn(500, ApiError, 'The request failed because an internal server error occurred.');
    req.defaultToError(ApiError, 'The default response.');
    req.authenticate([{ oauth2: true }]);
    return req.callAsJson(additionalAuthorizationSchema, requestOptions);
  }

  /**
   * Captures an authorized payment, by ID.
   *
   * @param authorizationId   The PayPal-generated ID for the authorized payment to void.
   * @param payPalRequestId   The server stores keys for 45 days.
   * @param prefer            The preferred server response upon successful completion of the
   *                                                   request. Value is:<ul><li><code>return=minimal</code>. The
   *                                                   server returns a minimal response to optimize communication
   *                                                   between the API caller and the server. A minimal response
   *                                                   includes the <code>id</code>, <code>status</code> and HATEOAS
   *                                                   links.</li><li><code>return=representation</code>. The server
   *                                                   returns a complete resource representation, including the
   *                                                   current state of the resource.</li></ul>
   * @param body
   * @return Response from the API call
   */
  async authorizationsCapture(
    authorizationId: string,
    payPalRequestId: string,
    prefer?: string,
    body?: CaptureRequest,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<AdditionalCapture>> {
    const req = this.createRequest('POST');
    const mapped = req.prepareArgs({
      authorizationId: [authorizationId, string()],
      payPalRequestId: [payPalRequestId, string()],
      prefer: [prefer, optional(string())],
      body: [body, optional(captureRequestSchema)],
    });
    req.header('PayPal-Request-Id', mapped.payPalRequestId);
    req.header('Content-Type', 'application/json');
    req.header('Prefer', mapped.prefer);
    req.json(mapped.body);
    req.appendTemplatePath`/v2/payments/authorizations/${mapped.authorizationId}/capture`;
    req.throwOn(400, AuthorizationsCaptureResponse400JsonError, 'The request failed because it is not well-formed or is syntactically incorrect or violates schema.');
    req.throwOn(401, M401ErrorError, 'Authentication failed due to missing authorization header, or invalid authentication credentials.');
    req.throwOn(403, AuthorizationsCaptureResponse403JsonError, 'The request failed because the caller has insufficient permissions.');
    req.throwOn(404, AuthorizationsCaptureResponse404JsonError, 'The request failed because the resource does not exist.');
    req.throwOn(422, AuthorizationsCaptureResponse422JsonError, 'The request failed because it is semantically incorrect or failed business validation.');
    req.throwOn(500, ApiError, 'The request failed because an internal server error occurred.');
    req.defaultToError(ApiError, 'The default response.');
    req.authenticate([{ oauth2: true }]);
    return req.callAsJson(additionalCaptureSchema, requestOptions);
  }

  /**
   * Reauthorizes an authorized PayPal account payment, by ID. To ensure that funds are still available,
   * reauthorize a payment after its initial three-day honor period expires. Within the 29-day
   * authorization period, you can issue multiple re-authorizations after the honor period expires.
   * <br/><br/>If 30 days have transpired since the date of the original authorization, you must create
   * an authorized payment instead of reauthorizing the original authorized payment.<br/><br/>A
   * reauthorized payment itself has a new honor period of three days.<br/><br/>You can reauthorize an
   * authorized payment once for up to 115% of the original authorized amount, not to exceed an increase
   * of $75 USD.<br/><br/>Supports only the `amount` request parameter.<blockquote><strong>Note:</strong>
   * This request is currently not supported for Partner use cases.</blockquote>
   *
   * @param authorizationId   The PayPal-generated ID for the authorized payment to void.
   * @param payPalRequestId   The server stores keys for 45 days.
   * @param prefer            The preferred server response upon successful completion of
   *                                                       the request. Value is:<ul><li><code>return=minimal</code>.
   *                                                       The server returns a minimal response to optimize
   *                                                       communication between the API caller and the server. A
   *                                                       minimal response includes the <code>id</code>,
   *                                                       <code>status</code> and HATEOAS links.
   *                                                       </li><li><code>return=representation</code>. The server
   *                                                       returns a complete resource representation, including the
   *                                                       current state of the resource.</li></ul>
   * @param body
   * @return Response from the API call
   */
  async authorizationsReauthorize(
    authorizationId: string,
    payPalRequestId: string,
    prefer?: string,
    body?: ReauthorizeRequest,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<AdditionalAuthorization>> {
    const req = this.createRequest('POST');
    const mapped = req.prepareArgs({
      authorizationId: [authorizationId, string()],
      payPalRequestId: [payPalRequestId, string()],
      prefer: [prefer, optional(string())],
      body: [body, optional(reauthorizeRequestSchema)],
    });
    req.header('PayPal-Request-Id', mapped.payPalRequestId);
    req.header('Content-Type', 'application/json');
    req.header('Prefer', mapped.prefer);
    req.json(mapped.body);
    req.appendTemplatePath`/v2/payments/authorizations/${mapped.authorizationId}/reauthorize`;
    req.throwOn(400, AuthorizationsReauthorizeResponse400JsonError, 'The request failed because it is not well-formed or is syntactically incorrect or violates schema.');
    req.throwOn(401, M401ErrorError, 'Authentication failed due to missing authorization header, or invalid authentication credentials.');
    req.throwOn(403, AuthorizationsReauthorizeResponse403JsonError, 'The request failed because the caller has insufficient permissions.');
    req.throwOn(404, AuthorizationsReauthorizeResponse404JsonError, 'The request failed because the resource does not exist.');
    req.throwOn(422, AuthorizationsReauthorizeResponse422JsonError, 'The request failed because it either is semantically incorrect or failed business validation.');
    req.throwOn(500, ApiError, 'The request failed because an internal server error occurred.');
    req.defaultToError(ApiError, 'The default response.');
    req.authenticate([{ oauth2: true }]);
    return req.callAsJson(additionalAuthorizationSchema, requestOptions);
  }

  /**
   * Voids, or cancels, an authorized payment, by ID. You cannot void an authorized payment that has been
   * fully captured.
   *
   * @param authorizationId       The PayPal-generated ID for the authorized payment to void.
   * @param payPalAuthAssertion   An API-caller-provided JSON Web Token (JWT) assertion that identifies the
   *                                        merchant. For details, see [PayPal-Auth-Assertion](/docs/api/reference/api-
   *                                        requests/#paypal-auth-assertion).<blockquote><strong>Note:</strong>For
   *                                        three party transactions in which a partner is managing the API calls on
   *                                        behalf of a merchant, the partner must identify the merchant using either a
   *                                        PayPal-Auth-Assertion header or an access token with target_subject.
   *                                        </blockquote>
   * @param prefer                The preferred server response upon successful completion of the request.
   *                                        Value is:<ul><li><code>return=minimal</code>. The server returns a minimal
   *                                        response to optimize communication between the API caller and the server. A
   *                                        minimal response includes the <code>id</code>, <code>status</code> and
   *                                        HATEOAS links.</li><li><code>return=representation</code>. The server
   *                                        returns a complete resource representation, including the current state of
   *                                        the resource.</li></ul>
   * @return Response from the API call
   */
  async authorizationsVoid(
    authorizationId: string,
    payPalAuthAssertion?: string,
    prefer?: string,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<AdditionalAuthorization>> {
    const req = this.createRequest('POST');
    const mapped = req.prepareArgs({
      authorizationId: [authorizationId, string()],
      payPalAuthAssertion: [payPalAuthAssertion, optional(string())],
      prefer: [prefer, optional(string())],
    });
    req.header('PayPal-Auth-Assertion', mapped.payPalAuthAssertion);
    req.header('Prefer', mapped.prefer);
    req.appendTemplatePath`/v2/payments/authorizations/${mapped.authorizationId}/void`;
    req.throwOn(400, M400ErrorError, 'The request failed because it is not well-formed or is syntactically incorrect or violates schema.');
    req.throwOn(401, AuthorizationsVoidResponse401JsonError, 'Authentication failed due to missing authorization header, or invalid authentication credentials.');
    req.throwOn(403, AuthorizationsVoidResponse403JsonError, 'The request failed because the caller has insufficient permissions.');
    req.throwOn(404, AuthorizationsVoidResponse404JsonError, 'The request failed because the resource does not exist.');
    req.throwOn(409, AuthorizationsVoidResponse409JsonError, 'The request failed because a previous call for the given resource is in progress.');
    req.throwOn(422, AuthorizationsVoidResponse422JsonError, 'The request failed because it either is semantically incorrect or failed business validation.');
    req.throwOn(500, ApiError, 'The request failed because an internal server error occurred.');
    req.defaultToError(ApiError, 'The default response.');
    req.authenticate([{ oauth2: true }]);
    return req.callAsJson(additionalAuthorizationSchema, requestOptions);
  }
}
