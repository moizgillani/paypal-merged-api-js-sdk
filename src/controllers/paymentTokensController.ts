/**
 * Merged ApiLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { ApiResponse, RequestOptions } from '../core';
import { CustomError } from '../errors/customError';
import {
  PaymentTokenRequest,
  paymentTokenRequestSchema,
} from '../models/paymentTokenRequest';
import {
  PaymentTokenResponse,
  paymentTokenResponseSchema,
} from '../models/paymentTokenResponse';
import {
  VaultOfACustomer,
  vaultOfACustomerSchema,
} from '../models/vaultOfACustomer';
import { boolean, number, optional, string } from '../schema';
import { BaseController } from './baseController';

export class PaymentTokensController extends BaseController {
  /**
   * Creates a Payment Token from the given payment source and adds it to the Vault of the associated
   * customer.
   *
   * @param payPalRequestId   The server stores keys for 3 hours.
   * @param body              Payment Token creation with a financial instrument and an
   *                                                        optional customer_id.
   * @return Response from the API call
   */
  async paymentTokensCreate(
    payPalRequestId: string,
    body: PaymentTokenRequest,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<PaymentTokenResponse>> {
    const req = this.createRequest('POST', '/v3/vault/payment-tokens');
    req.baseUrl('default_Payment Method Tokens');
    const mapped = req.prepareArgs({
      payPalRequestId: [payPalRequestId, string()],
      body: [body, paymentTokenRequestSchema],
    });
    req.header('PayPal-Request-Id', mapped.payPalRequestId);
    req.header('Content-Type', 'application/json');
    req.json(mapped.body);
    req.throwOn(400, CustomError, 'Request is not well-formed, syntactically incorrect, or violates schema.');
    req.throwOn(403, CustomError, 'Authorization failed due to insufficient permissions.');
    req.throwOn(404, CustomError, 'Request contains reference to resources that do not exist.');
    req.throwOn(422, CustomError, 'The requested action could not be performed, semantically incorrect, or failed business validation.');
    req.throwOn(500, CustomError, 'An internal server error has occurred.');
    req.authenticate([{ oauth2PaymentMethodTokens: true }]);
    return req.callAsJson(paymentTokenResponseSchema, requestOptions);
  }

  /**
   * Returns all payment tokens for a customer.
   *
   * @param customerId     A unique identifier representing a specific customer in merchant's/partner's
   *                                  system or records.
   * @param pageSize       A non-negative, non-zero integer indicating the maximum number of results to
   *                                  return at one time.
   * @param page           A non-negative, non-zero integer representing the page of the results.
   * @param totalRequired  A boolean indicating total number of items (total_items) and pages (total_pages)
   *                                  are expected to be returned in the response.
   * @return Response from the API call
   */
  async customerPaymentTokensGet(
    customerId: string,
    pageSize?: number,
    page?: number,
    totalRequired?: boolean,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<VaultOfACustomer>> {
    const req = this.createRequest('GET', '/v3/vault/payment-tokens');
    req.baseUrl('default_Payment Method Tokens');
    const mapped = req.prepareArgs({
      customerId: [customerId, string()],
      pageSize: [pageSize, optional(number())],
      page: [page, optional(number())],
      totalRequired: [totalRequired, optional(boolean())],
    });
    req.query('customer_id', mapped.customerId);
    req.query('page_size', mapped.pageSize);
    req.query('page', mapped.page);
    req.query('total_required', mapped.totalRequired);
    req.throwOn(400, CustomError, 'Request is not well-formed, syntactically incorrect, or violates schema.');
    req.throwOn(403, CustomError, 'Authorization failed due to insufficient permissions.');
    req.throwOn(500, CustomError, 'An internal server error has occurred.');
    req.authenticate([{ oauth2PaymentMethodTokens: true }]);
    return req.callAsJson(vaultOfACustomerSchema, requestOptions);
  }

  /**
   * Returns a readable representation of vaulted payment source associated with the payment token id.
   *
   * @param id A representation of a vault token.
   * @return Response from the API call
   */
  async paymentTokensGet(
    id: string,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<PaymentTokenResponse>> {
    const req = this.createRequest('GET');
    req.baseUrl('default_Payment Method Tokens');
    const mapped = req.prepareArgs({ id: [id, string()] });
    req.appendTemplatePath`/v3/vault/payment-tokens/${mapped.id}`;
    req.throwOn(403, CustomError, 'Authorization failed due to insufficient permissions.');
    req.throwOn(404, CustomError, 'The specified resource does not exist.');
    req.throwOn(422, CustomError, 'The requested action could not be performed, semantically incorrect, or failed business validation.');
    req.throwOn(500, CustomError, 'An internal server error has occurred.');
    req.authenticate([{ oauth2PaymentMethodTokens: true }]);
    return req.callAsJson(paymentTokenResponseSchema, requestOptions);
  }

  /**
   * Delete the payment token associated with the payment token id.
   *
   * @param id A representation of a vault token.
   * @return Response from the API call
   */
  async paymentTokensDelete(
    id: string,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<void>> {
    const req = this.createRequest('DELETE');
    req.baseUrl('default_Payment Method Tokens');
    const mapped = req.prepareArgs({ id: [id, string()] });
    req.appendTemplatePath`/v3/vault/payment-tokens/${mapped.id}`;
    req.throwOn(400, CustomError, 'Request is not well-formed, syntactically incorrect, or violates schema.');
    req.throwOn(403, CustomError, 'Authorization failed due to insufficient permissions.');
    req.throwOn(500, CustomError, 'An internal server error has occurred.');
    req.authenticate([{ oauth2PaymentMethodTokens: true }]);
    return req.call(requestOptions);
  }
}
