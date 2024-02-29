
# Getting Started with Merged Api

## Introduction

An order represents a payment between two or more parties. Use the Orders API to create, update, retrieve, authorize, and capture orders., Call the Payments API to authorize payments, capture authorized payments, refund payments that have already been captured, and show payment information. Use the Payments API in conjunction with the <a href="/docs/api/orders/v2/">Orders API</a>. For more information, see the <a href="/docs/checkout/">PayPal Checkout Overview</a>., The Payment Method Tokens API saves payment methods so payers don't have to enter details for future transactions. Payers can check out faster or pay without being present after they agree to save a payment method.<br><br>The API associates a payment method with a temporary setup token. Pass the setup token to the API to exchange the setup token for a permanent token.<br><br>The permanent token represents a payment method that's saved to the vault. This token can be used repeatedly for checkout or recurring transactions such as subscriptions.

Find out more here: [https://developer.paypal.com/docs/api/orders/v2/](https://developer.paypal.com/docs/api/orders/v2/)

## Install the Package

Run the following command from your project directory to install the package from npm:

```ts
npm install test-paypal-sdk@1.0.7
```

For additional package details, see the [Npm page for the test-paypal-sdk@1.0.7 npm](https://www.npmjs.com/package/test-paypal-sdk/v/1.0.7).

## Initialize the API Client

**_Note:_** Documentation for the client can be found [here.](https://www.github.com/moizgillani/paypal-merged-api-js-sdk/tree/1.0.7/doc/client.md)

The following parameters are configurable for the API Client:

| Parameter | Type | Description |
|  --- | --- | --- |
| `environment` | `Environment` | The API environment. <br> **Default: `Environment.Production`** |
| `timeout` | `number` | Timeout for API calls.<br>*Default*: `0` |
| `httpClientOptions` | `Partial<HttpClientOptions>` | Stable configurable http client options. |
| `unstableHttpClientOptions` | `any` | Unstable configurable http client options. |
| `oauth2Credentials` | [`Oauth2Credentials`](https://www.github.com/moizgillani/paypal-merged-api-js-sdk/tree/1.0.7/doc/$a/https://www.github.com/moizgillani/paypal-merged-api-js-sdk/tree/1.0.7/oauth-2-client-credentials-grant.md) | The credential object for oauth2 |
| `oauth2PaymentMethodTokensCredentials` | [`Oauth2PaymentMethodTokensCredentials`](https://www.github.com/moizgillani/paypal-merged-api-js-sdk/tree/1.0.7/doc/$a/https://www.github.com/moizgillani/paypal-merged-api-js-sdk/tree/1.0.7/oauth-2-client-credentials-grant-1.md) | The credential object for oauth2PaymentMethodTokens |

### HttpClientOptions

| Parameter | Type | Description |
|  --- | --- | --- |
| `timeout` | `number` | Timeout in milliseconds. |
| `httpAgent` | `any` | Custom http agent to be used when performing http requests. |
| `httpsAgent` | `any` | Custom https agent to be used when performing http requests. |
| `retryConfig` | `Partial<RetryConfiguration>` | Configurations to retry requests. |

### RetryConfiguration

| Parameter | Type | Description |
|  --- | --- | --- |
| `maxNumberOfRetries` | `number` | Maximum number of retries. <br> *Default*: `0` |
| `retryOnTimeout` | `boolean` | Whether to retry on request timeout. <br> *Default*: `true` |
| `retryInterval` | `number` | Interval before next retry. Used in calculation of wait time for next request in case of failure. <br> *Default*: `1` |
| `maximumRetryWaitTime` | `number` | Overall wait time for the requests getting retried. <br> *Default*: `0` |
| `backoffFactor` | `number` | Used in calculation of wait time for next request in case of failure. <br> *Default*: `2` |
| `httpStatusCodesToRetry` | `number[]` | Http status codes to retry against. <br> *Default*: `[408, 413, 429, 500, 502, 503, 504, 521, 522, 524]` |
| `httpMethodsToRetry` | `HttpMethod[]` | Http methods to retry against. <br> *Default*: `['GET', 'PUT']` |

The API client can be initialized as follows:

```ts
const client = new Client({
  oauth2Credentials: {
    oAuthClientId: 'OAuthClientId',
    oAuthClientSecret: 'OAuthClientSecret',
    oAuthScopes: [
      OAuthScopeOauth2Enum.HttpsUriPaypalComServicesPaymentsPayment,
      OAuthScopeOauth2Enum.HttpsUriPaypalComServicesPaymentsPaymentReferenceTransaction
    ]
  },
  oauth2PaymentMethodTokensCredentials: {
    oAuthClientId: 'OAuthClientId',
    oAuthClientSecret: 'OAuthClientSecret',
    oAuthScopes: [
      OAuthScopeOauth2PaymentMethodTokensEnum.HttpsUriPaypalComServicesVaultPaymentTokensReadwrite,
      OAuthScopeOauth2PaymentMethodTokensEnum.HttpsUriPaypalComServicesVaultPaymentTokensRead
    ]
  },
  timeout: 0,
  environment: Environment.Production,
});
```

## Environments

The SDK can be configured to use a different environment for making API calls. Available environments are:

### Fields

| Name | Description |
|  --- | --- |
| production | **Default** PayPal Sandbox Environment |
| environment2 | PayPal Live Environment |

## Authorization

This API uses the following authentication schemes.

* [`Oauth2 (OAuth 2 Client Credentials Grant)`](https://www.github.com/moizgillani/paypal-merged-api-js-sdk/tree/1.0.7/doc/$a/https://www.github.com/moizgillani/paypal-merged-api-js-sdk/tree/1.0.7/oauth-2-client-credentials-grant.md)
* [`Oauth2_PaymentMethodTokens (OAuth 2 Client Credentials Grant)`](https://www.github.com/moizgillani/paypal-merged-api-js-sdk/tree/1.0.7/doc/$a/https://www.github.com/moizgillani/paypal-merged-api-js-sdk/tree/1.0.7/oauth-2-client-credentials-grant-1.md)

## List of APIs

* [O Auth Authorization](https://www.github.com/moizgillani/paypal-merged-api-js-sdk/tree/1.0.7/doc/controllers/o-auth-authorization.md)
* [Orders](https://www.github.com/moizgillani/paypal-merged-api-js-sdk/tree/1.0.7/doc/controllers/orders.md)
* [Authorizations](https://www.github.com/moizgillani/paypal-merged-api-js-sdk/tree/1.0.7/doc/controllers/authorizations.md)
* [Captures](https://www.github.com/moizgillani/paypal-merged-api-js-sdk/tree/1.0.7/doc/controllers/captures.md)
* [Refunds](https://www.github.com/moizgillani/paypal-merged-api-js-sdk/tree/1.0.7/doc/controllers/refunds.md)
* [Payment-Tokens](https://www.github.com/moizgillani/paypal-merged-api-js-sdk/tree/1.0.7/doc/controllers/payment-tokens.md)
* [Setup-Tokens](https://www.github.com/moizgillani/paypal-merged-api-js-sdk/tree/1.0.7/doc/controllers/setup-tokens.md)

## Classes Documentation

* [ApiResponse](https://www.github.com/moizgillani/paypal-merged-api-js-sdk/tree/1.0.7/doc/api-response.md)
* [ApiError](https://www.github.com/moizgillani/paypal-merged-api-js-sdk/tree/1.0.7/doc/api-error.md)

