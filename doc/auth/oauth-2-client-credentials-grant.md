
# OAuth 2 Client Credentials Grant



Documentation for accessing and setting credentials for Oauth2.

## Auth Credentials

| Name | Type | Description | Setter |
|  --- | --- | --- | --- |
| OAuthClientId | `string` | OAuth 2 Client ID | `oAuthClientId` |
| OAuthClientSecret | `string` | OAuth 2 Client Secret | `oAuthClientSecret` |
| OAuthToken | `OAuthToken` | Object for storing information about the OAuth token | `oAuthToken` |
| OAuthScopes | `OAuthScopeOauth2Enum[]` | List of scopes that apply to the OAuth token | `oAuthScopes` |



**Note:** Auth credentials can be set using `oauth2Credentials` object in the client.

## Usage Example

### Client Initialization

You must initialize the client with *OAuth 2.0 Client Credentials Grant* credentials as shown in the following code snippet.

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
});
```



Your application must obtain user authorization before it can execute an endpoint call in case this SDK chooses to use *OAuth 2.0 Client Credentials Grant*. This authorization includes the following steps

The `fetchToken` method will exchange the OAuth client credentials for an *access token*. The access token is an object containing information for authorizing client requests and refreshing the token itself.

You must have initialized the client with scopes for which you need permission to access.

```ts
try {
  const token = await client.oauth2Manager?.fetchToken();
  if (token) {
    client.withConfiguration({
      oauth2Credentials: {
        ...config.oauth2Credentials,
        oAuthToken: token
      }
    });
  }
} catch(error) {
  // handle ApiError or OAuthProviderError if needed
}
```

The client can now make authorized endpoint calls.

### Scopes

Scopes enable your application to only request access to the resources it needs while enabling users to control the amount of access they grant to your application. Available scopes are defined in the [`OAuthScopeOauth2Enum`](../../doc/models/o-auth-scope-oauth-2-enum.md) enumeration.

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

### Storing an access token for reuse

It is recommended that you store the access token for reuse.

```ts
Store the token in session storage or local storage.
```

### Creating a client from a stored token

To authorize a client from a stored access token, just set the access token in Configuration along with the other configuration parameters before creating the client:

```ts
const newClient = client.withConfiguration({
  oauth2Credentials: {
    ...config.oauth2Credentials,
    oAuthToken: token
  }
});
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

// create a new client from configuration
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

// obtain access token, needed for client to be authorized
const previousToken = await loadTokenFromDatabase();
if (previousToken) {
  // restore previous access token and update the cloned configuration with the token
  client.withConfiguration({
    oauth2Credentials: {
      ...config.oauth2Credentials,
      oAuthToken: previousToken
    }
  });
} else {
  // obtain a new access token
  try {
    const token = await client.oauth2Manager?.fetchToken();
    if (token) {
        await saveTokenToDatabase(token);
        client.withConfiguration({
          oauth2Credentials: {
            ...config.oauth2Credentials,
            oAuthToken: token
          }
        });
    }
  } catch (error) {
      if (error instanceof OAuthProviderError) {
          // handle OAuthProviderError if needed
      }
    }
}
```


