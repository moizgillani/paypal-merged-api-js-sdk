/**
 * Merged ApiLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { ApiError } from '@apimatic/core';
import { ApiResponse, RequestOptions } from '../core';
import {
  CapturesGetResponse403JsonError,
} from '../errors/capturesGetResponse403JsonError';
import {
  CapturesGetResponse404JsonError,
} from '../errors/capturesGetResponse404JsonError';
import {
  CapturesRefundResponse400JsonError,
} from '../errors/capturesRefundResponse400JsonError';
import {
  CapturesRefundResponse401JsonError,
} from '../errors/capturesRefundResponse401JsonError';
import {
  CapturesRefundResponse403JsonError,
} from '../errors/capturesRefundResponse403JsonError';
import {
  CapturesRefundResponse404JsonError,
} from '../errors/capturesRefundResponse404JsonError';
import {
  CapturesRefundResponse409JsonError,
} from '../errors/capturesRefundResponse409JsonError';
import {
  CapturesRefundResponse422JsonError,
} from '../errors/capturesRefundResponse422JsonError';
import { M401ErrorError } from '../errors/m401ErrorError';
import {
  AdditionalCapture,
  additionalCaptureSchema,
} from '../models/additionalCapture';
import { RefundPayments, refundPaymentsSchema } from '../models/refundPayments';
import { RefundRequest, refundRequestSchema } from '../models/refundRequest';
import { optional, string } from '../schema';
import { BaseController } from './baseController';

export class CapturesController extends BaseController {
  /**
   * Shows details for a captured payment, by ID.
   *
   * @param captureId  The PayPal-generated ID for the captured payment to refund.
   * @return Response from the API call
   */
  async capturesGet(
    captureId: string,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<AdditionalCapture>> {
    const req = this.createRequest('GET');
    const mapped = req.prepareArgs({ captureId: [captureId, string()] });
    req.appendTemplatePath`/v2/payments/captures/${mapped.captureId}`;
    req.throwOn(401, M401ErrorError, 'Authentication failed due to missing authorization header, or invalid authentication credentials.');
    req.throwOn(403, CapturesGetResponse403JsonError, 'The request failed because the caller has insufficient permissions.');
    req.throwOn(404, CapturesGetResponse404JsonError, 'The request failed because the resource does not exist.');
    req.throwOn(500, ApiError, 'The request failed because an internal server error occurred.');
    req.defaultToError(ApiError, 'The default response.');
    req.authenticate([{ oauth2: true }]);
    return req.callAsJson(additionalCaptureSchema, requestOptions);
  }

  /**
   * Refunds a captured payment, by ID. For a full refund, include an empty payload in the JSON request
   * body. For a partial refund, include an <code>amount</code> object in the JSON request body.
   *
   * @param captureId             The PayPal-generated ID for the captured payment to refund.
   * @param payPalRequestId       The server stores keys for 45 days.
   * @param prefer                The preferred server response upon successful completion of
   *                                                      the request. Value is:<ul><li><code>return=minimal</code>.
   *                                                      The server returns a minimal response to optimize
   *                                                      communication between the API caller and the server. A
   *                                                      minimal response includes the <code>id</code>,
   *                                                      <code>status</code> and HATEOAS links.
   *                                                      </li><li><code>return=representation</code>. The server
   *                                                      returns a complete resource representation, including the
   *                                                      current state of the resource.</li></ul>
   * @param payPalAuthAssertion   An API-caller-provided JSON Web Token (JWT) assertion that
   *                                                      identifies the merchant. For details, see [PayPal-Auth-
   *                                                      Assertion](/docs/api/reference/api-requests/#paypal-auth-
   *                                                      assertion).<blockquote><strong>Note:</strong>For three party
   *                                                      transactions in which a partner is managing the API calls on
   *                                                      behalf of a merchant, the partner must identify the merchant
   *                                                      using either a PayPal-Auth-Assertion header or an access
   *                                                      token with target_subject.</blockquote>
   * @param body
   * @return Response from the API call
   */
  async capturesRefund(
    captureId: string,
    payPalRequestId: string,
    prefer?: string,
    payPalAuthAssertion?: string,
    body?: RefundRequest,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<RefundPayments>> {
    const req = this.createRequest('POST');
    const mapped = req.prepareArgs({
      captureId: [captureId, string()],
      payPalRequestId: [payPalRequestId, string()],
      prefer: [prefer, optional(string())],
      payPalAuthAssertion: [payPalAuthAssertion, optional(string())],
      body: [body, optional(refundRequestSchema)],
    });
    req.header('PayPal-Request-Id', mapped.payPalRequestId);
    req.header('Content-Type', 'application/json');
    req.header('Prefer', mapped.prefer);
    req.header('PayPal-Auth-Assertion', mapped.payPalAuthAssertion);
    req.json(mapped.body);
    req.appendTemplatePath`/v2/payments/captures/${mapped.captureId}/refund`;
    req.throwOn(400, CapturesRefundResponse400JsonError, 'The request failed because it is not well-formed or is syntactically incorrect or violates schema.');
    req.throwOn(401, CapturesRefundResponse401JsonError, 'Authentication failed due to missing authorization header, or invalid authentication credentials.');
    req.throwOn(403, CapturesRefundResponse403JsonError, 'The request failed because the caller has insufficient permissions.');
    req.throwOn(404, CapturesRefundResponse404JsonError, 'The request failed because the resource does not exist.');
    req.throwOn(409, CapturesRefundResponse409JsonError, 'The request failed because a previous call for the given resource is in progress.');
    req.throwOn(422, CapturesRefundResponse422JsonError, 'The request failed because it either is semantically incorrect or failed business validation.');
    req.throwOn(500, ApiError, 'The request failed because an internal server error occurred.');
    req.defaultToError(ApiError, 'The default response.');
    req.authenticate([{ oauth2: true }]);
    return req.callAsJson(refundPaymentsSchema, requestOptions);
  }
}
