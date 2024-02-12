
# Getting Started with Paypal Merged API

## Introduction

An order represents a payment between two or more parties. Use the Orders API to create, update, retrieve, authorize, and capture orders., Call the Payments API to authorize payments, capture authorized payments, refund payments that have already been captured, and show payment information. Use the Payments API in conjunction with the <a href="/docs/api/orders/v2/">Orders API</a>. For more information, see the <a href="/docs/checkout/">PayPal Checkout Overview</a>., The Payment Method Tokens API saves payment methods so payers don't have to enter details for future transactions. Payers can check out faster or pay without being present after they agree to save a payment method.<br><br>The API associates a payment method with a temporary setup token. Pass the setup token to the API to exchange the setup token for a permanent token.<br><br>The permanent token represents a payment method that's saved to the vault. This token can be used repeatedly for checkout or recurring transactions such as subscriptions.

Find out more here: [https://developer.paypal.com/docs/api/orders/v2/](https://developer.paypal.com/docs/api/orders/v2/)

## Install the Package

Run the following command from your project directory to install the package from npm:

```ts
npm install test-paypal-sdk@1.0.3
```

For additional package details, see the [Npm page for the test-paypal-sdk@1.0.3 npm](https://www.npmjs.com/package/test-paypal-sdk/v/1.0.3).

## Initialize the API Client

**_Note:_** Documentation for the client can be found [here.](https://www.github.com/moizgillani/paypal-merged-api-js-sdk/tree/1.0.3/doc/client.md)

The following parameters are configurable for the API Client:

| Parameter | Type | Description |
|  --- | --- | --- |
| `environment` | Environment | The API environment. <br> **Default: `Environment.Production`** |
| `timeout` | `number` | Timeout for API calls.<br>*Default*: `0` |
| `httpClientOptions` | `Partial<HttpClientOptions>` | Stable configurable http client options. |
| `unstableHttpClientOptions` | `any` | Unstable configurable http client options. |
| `oAuthClientId` | `string` | OAuth 2 Client ID |
| `oAuthClientSecret` | `string` | OAuth 2 Client Secret |
| `oAuthToken` | `OAuthToken` | Object for storing information about the OAuth token |
| `oAuthScopes` | `OAuthScopeEnum[]` |  |

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
  timeout: 0,
  environment: Environment.Production,
  oAuthClientId: 'OAuthClientId',
  oAuthClientSecret: 'OAuthClientSecret',
  oAuthScopes: [
    OAuthScopeEnum.HttpsUriPaypalComServicesPaymentsPayment,
    OAuthScopeEnum.HttpsUriPaypalComServicesPaymentsPaymentReferenceTransaction,
    OAuthScopeEnum.HttpsUriPaypalComServicesPaymentsInitiatepayment,
    OAuthScopeEnum.HttpsUriPaypalComServicesPaymentsOrdersClientSideIntegration,
    OAuthScopeEnum.HttpsUriPaypalComServicesPaymentsPaymentAuthcapture,
    OAuthScopeEnum.HttpsUriPaypalComServicesPaymentsRefund,
    OAuthScopeEnum.HttpsUriPaypalComServicesPaymentsNonReferencedCredit,
    OAuthScopeEnum.HttpsUriPaypalComServicesPaymentsRealtimepayment,
    OAuthScopeEnum.HttpsUriPaypalComServicesPaymentsReversepayment,
    OAuthScopeEnum.HttpsUriPaypalComServicesVaultPaymentTokensReadwrite,
    OAuthScopeEnum.HttpsUriPaypalComServicesVaultPaymentTokensRead,
    OAuthScopeEnum.HttpsUriPaypalComServicesVaultCustomersRead,
    OAuthScopeEnum.HttpsUriPaypalComServicesVaultCustomersReadwrite
  ],
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

This API uses `OAuth 2 Client Credentials Grant`.

## Client Credentials Grant

Your application must obtain user authorization before it can execute an endpoint call in case this SDK chooses to use *OAuth 2.0 Client Credentials Grant*. This authorization includes the following steps

The `fetchToken` method will exchange the OAuth client credentials for an *access token*. The access token is an object containing information for authorizing client requests and refreshing the token itself.

You must have initialized the client with [scopes]($h/__authorize/Scopes) for which you need permission to access.

```ts
try {
  const token = await client.clientCredentialsAuthManager.fetchToken();
  client.withConfiguration({
    oAuthToken: token,
  });
} catch(error) {
  // handle ApiError or OAuthProviderError if needed
}
```

The client can now make authorized endpoint calls.

### Scopes

Scopes enable your application to only request access to the resources it needs while enabling users to control the amount of access they grant to your application. Available scopes are defined in the `OAuthScopeEnum` enumeration.

| Scope Name | Description |
|  --- | --- |
| `HttpsUriPaypalComServicesPaymentsPayment` | Manage payments and checkout workflow. |
| `HttpsUriPaypalComServicesPaymentsPaymentReferenceTransaction` | Permission to initiate reference transaction |
| `HttpsUriPaypalComServicesPaymentsInitiatepayment` | Initiates payments and checkout workflows. |
| `HttpsUriPaypalComServicesPaymentsOrdersClientSideIntegration` | Allows client-side integration on Create, Get, Patch, Authorize & Capture Order endpoints. |
| `HttpsUriPaypalComServicesPaymentsPaymentAuthcapture` | Permission to do non-real time payments like capture on authorization |
| `HttpsUriPaypalComServicesPaymentsRefund` | Permission to initiate a refund on a capture transaction |
| `HttpsUriPaypalComServicesPaymentsNonReferencedCredit` | Permission to initiate non referenced credit |
| `HttpsUriPaypalComServicesPaymentsRealtimepayment` | Permission to do any real time payment, with support for sale/authorize/order intents |
| `HttpsUriPaypalComServicesPaymentsReversepayment` | Permission to do any reverse payment |
| `HttpsUriPaypalComServicesVaultPaymentTokensReadwrite` | Manage payment instruments |
| `HttpsUriPaypalComServicesVaultPaymentTokensRead` | Permission to only read from vault |
| `HttpsUriPaypalComServicesVaultCustomersRead` | Permission to read customer information. |
| `HttpsUriPaypalComServicesVaultCustomersReadwrite` | Permission to create/update customer information. |

### Storing an access token for reuse

It is recommended that you store the access token for reuse.

```ts
Store the token in session storage or local storage.
```

### Creating a client from a stored token

To authorize a client from a stored access token, just set the access token in Configuration along with the other configuration parameters before creating the client:

```ts
const newClient = client.withConfiguration({oAuthToken: token});
```

### Complete example

```ts
// function for storing token to database
async function saveTokenToDatabase(token: OAuthToken) {
  // Code to save the token to the database
}

// function for loading token from database
async function loadTokenFromDatabase(): Promise<OAuthToken | undefined> {
  // Load token from the database and return it (return undefined if no token exists)
  return undefined;
}

// create a new client
const client = new Client({
  timeout: 0,
  environment: Environment.Production,
  oAuthClientId: 'OAuthClientId',
  oAuthClientSecret: 'OAuthClientSecret',
  oAuthScopes: [
    OAuthScopeEnum.HttpsUriPaypalComServicesPaymentsPayment,
    OAuthScopeEnum.HttpsUriPaypalComServicesPaymentsPaymentReferenceTransaction,
    OAuthScopeEnum.HttpsUriPaypalComServicesPaymentsInitiatepayment,
    OAuthScopeEnum.HttpsUriPaypalComServicesPaymentsOrdersClientSideIntegration,
    OAuthScopeEnum.HttpsUriPaypalComServicesPaymentsPaymentAuthcapture,
    OAuthScopeEnum.HttpsUriPaypalComServicesPaymentsRefund,
    OAuthScopeEnum.HttpsUriPaypalComServicesPaymentsNonReferencedCredit,
    OAuthScopeEnum.HttpsUriPaypalComServicesPaymentsRealtimepayment,
    OAuthScopeEnum.HttpsUriPaypalComServicesPaymentsReversepayment,
    OAuthScopeEnum.HttpsUriPaypalComServicesVaultPaymentTokensReadwrite,
    OAuthScopeEnum.HttpsUriPaypalComServicesVaultPaymentTokensRead,
    OAuthScopeEnum.HttpsUriPaypalComServicesVaultCustomersRead,
    OAuthScopeEnum.HttpsUriPaypalComServicesVaultCustomersReadwrite
  ],
});

// obtain access token, needed for client to be authorized
const previousToken = await loadTokenFromDatabase();
if (previousToken) {
  // restore previous access token and update the cloned configuration with the token
  return client.withConfiguration({
   oAuthToken: previousToken,
  });
} else {
  // obtain a new access token
  try {
    const token = await client.clientCredentialsAuthManager.fetchToken();
    await saveTokenToDatabase(token);
    return client.withConfiguration({
     oAuthToken: token,
    });
  } catch (error) {
      if (error instanceof OAuthProviderError) {
          // handle OAuthProviderError if needed
      }
      return client;
    }
}
```

## List of APIs

* [O Auth Authorization](https://www.github.com/moizgillani/paypal-merged-api-js-sdk/tree/1.0.3/doc/controllers/o-auth-authorization.md)
* [Orders](https://www.github.com/moizgillani/paypal-merged-api-js-sdk/tree/1.0.3/doc/controllers/orders.md)
* [Authorizations](https://www.github.com/moizgillani/paypal-merged-api-js-sdk/tree/1.0.3/doc/controllers/authorizations.md)
* [Captures](https://www.github.com/moizgillani/paypal-merged-api-js-sdk/tree/1.0.3/doc/controllers/captures.md)
* [Refunds](https://www.github.com/moizgillani/paypal-merged-api-js-sdk/tree/1.0.3/doc/controllers/refunds.md)
* [Payment-Tokens](https://www.github.com/moizgillani/paypal-merged-api-js-sdk/tree/1.0.3/doc/controllers/payment-tokens.md)
* [Setup-Tokens](https://www.github.com/moizgillani/paypal-merged-api-js-sdk/tree/1.0.3/doc/controllers/setup-tokens.md)

## Classes Documentation

* [ApiResponse](https://www.github.com/moizgillani/paypal-merged-api-js-sdk/tree/1.0.3/doc/api-response.md)
* [ApiError](https://www.github.com/moizgillani/paypal-merged-api-js-sdk/tree/1.0.3/doc/api-error.md)

