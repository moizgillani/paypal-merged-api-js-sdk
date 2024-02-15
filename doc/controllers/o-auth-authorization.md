# O Auth Authorization

```ts
const oAuthAuthorizationController = new OAuthAuthorizationController(client);
```

## Class Name

`OAuthAuthorizationController`

## Methods

* [Request Token Oauth 2](../../doc/controllers/o-auth-authorization.md#request-token-oauth-2)
* [Request Token Oauth 2 Payment Method Tokens](../../doc/controllers/o-auth-authorization.md#request-token-oauth-2-payment-method-tokens)


# Request Token Oauth 2

Create a new OAuth 2 token.

:information_source: **Note** This endpoint does not require authentication.

```ts
async requestTokenOauth2(
  authorization: string,
  scope?: string,
  fieldParameters?: Record<string, unknown>,
  requestOptions?: RequestOptions
): Promise<ApiResponse<OAuthToken>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `authorization` | `string` | Header, Required | Authorization header in Basic auth format |
| `scope` | `string \| undefined` | Form, Optional | Requested scopes as a space-delimited list. |
| `fieldParameters` | `Record<string, string>` | Optional | Pass additional field parameters. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`OAuthToken`](../../doc/models/o-auth-token.md)

## Example Usage

```ts
const authorization = 'Authorization8';

const fieldParameters: Record<string, string> = {
  'key0': 'additionalFieldParams9'
};

try {
  // @ts-expect-error: unused variables
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { result, ...httpResponse } = await oAuthAuthorizationController.requestTokenOauth2(
  authorization,
  undefined,
  fieldParameters
);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
  if (error instanceof ApiError) {
    // @ts-expect-error: unused variables
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 400 | OAuth 2 provider returned an error. | [`OAuthProviderError`](../../doc/models/o-auth-provider-error.md) |
| 401 | OAuth 2 provider says client authentication failed. | [`OAuthProviderError`](../../doc/models/o-auth-provider-error.md) |


# Request Token Oauth 2 Payment Method Tokens

Create a new OAuth 2 token.

:information_source: **Note** This endpoint does not require authentication.

```ts
async requestTokenOauth2PaymentMethodTokens(
  authorization: string,
  scope?: string,
  fieldParameters?: Record<string, unknown>,
  requestOptions?: RequestOptions
): Promise<ApiResponse<OAuthToken>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `authorization` | `string` | Header, Required | Authorization header in Basic auth format |
| `scope` | `string \| undefined` | Form, Optional | Requested scopes as a space-delimited list. |
| `fieldParameters` | `Record<string, string>` | Optional | Pass additional field parameters. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`OAuthToken`](../../doc/models/o-auth-token.md)

## Example Usage

```ts
const authorization = 'Authorization8';

const fieldParameters: Record<string, string> = {
  'key0': 'additionalFieldParams9'
};

try {
  // @ts-expect-error: unused variables
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { result, ...httpResponse } = await oAuthAuthorizationController.requestTokenOauth2PaymentMethodTokens(
  authorization,
  undefined,
  fieldParameters
);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
  if (error instanceof ApiError) {
    // @ts-expect-error: unused variables
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 400 | OAuth 2 provider returned an error. | [`OAuthProviderError`](../../doc/models/o-auth-provider-error.md) |
| 401 | OAuth 2 provider says client authentication failed. | [`OAuthProviderError`](../../doc/models/o-auth-provider-error.md) |

