# Authorizations

Use the `/authorizations` resource to show details for, capture payment for, reauthorize, and void authorized payments.

```ts
const authorizationsController = new AuthorizationsController(client);
```

## Class Name

`AuthorizationsController`

## Methods

* [Authorizations Get](../../doc/controllers/authorizations.md#authorizations-get)
* [Authorizations Capture](../../doc/controllers/authorizations.md#authorizations-capture)
* [Authorizations Reauthorize](../../doc/controllers/authorizations.md#authorizations-reauthorize)
* [Authorizations Void](../../doc/controllers/authorizations.md#authorizations-void)


# Authorizations Get

Shows details for an authorized payment, by ID.

```ts
async authorizationsGet(
  authorizationId: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<AdditionalAuthorization>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `authorizationId` | `string` | Template, Required | The PayPal-generated ID for the authorized payment to void. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Requires scope

### Oauth2

`https://uri.paypal.com/services/payments/payment/authcapture`

## Response Type

[`AdditionalAuthorization`](../../doc/models/additional-authorization.md)

## Example Usage

```ts
const authorizationId = 'authorization_id8';

try {
  // @ts-expect-error: unused variables
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { result, ...httpResponse } = await authorizationsController.authorizationsGet(authorizationId);
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
| 401 | Authentication failed due to missing authorization header, or invalid authentication credentials. | [`M401ErrorError`](../../doc/models/m401-error-error.md) |
| 403 | The request failed because the caller has insufficient permissions. | [`AuthorizationsGetResponse403JsonError`](../../doc/models/authorizations-get-response-403-json-error.md) |
| 404 | The request failed because the resource does not exist. | [`AuthorizationsGetResponse404JsonError`](../../doc/models/authorizations-get-response-404-json-error.md) |
| 500 | The request failed because an internal server error occurred. | `ApiError` |
| Default | The default response. | `ApiError` |


# Authorizations Capture

Captures an authorized payment, by ID.

```ts
async authorizationsCapture(
  authorizationId: string,
  payPalRequestId: string,
  prefer?: string,
  body?: CaptureRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<AdditionalCapture>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `authorizationId` | `string` | Template, Required | The PayPal-generated ID for the authorized payment to void. |
| `payPalRequestId` | `string` | Header, Required | The server stores keys for 45 days. |
| `prefer` | `string \| undefined` | Header, Optional | The preferred server response upon successful completion of the request. Value is:<ul><li><code>return=minimal</code>. The server returns a minimal response to optimize communication between the API caller and the server. A minimal response includes the <code>id</code>, <code>status</code> and HATEOAS links.</li><li><code>return=representation</code>. The server returns a complete resource representation, including the current state of the resource.</li></ul> |
| `body` | [`CaptureRequest \| undefined`](../../doc/models/capture-request.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Requires scope

### Oauth2

`https://uri.paypal.com/services/payments/payment/authcapture`

## Response Type

[`AdditionalCapture`](../../doc/models/additional-capture.md)

## Example Usage

```ts
const authorizationId = 'authorization_id8';

const payPalRequestId = 'PayPal-Request-Id6';

const body: CaptureRequest = {
  invoiceId: 'INVOICE-123',
  noteToPayer: 'If the ordered color is not available, we will substitute with a different color free of charge.',
  amount: {
    currencyCode: 'USD',
    value: '10.99',
  },
  finalCapture: true,
  softDescriptor: 'Bob\'s Custom Sweaters',
};

try {
  // @ts-expect-error: unused variables
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { result, ...httpResponse } = await authorizationsController.authorizationsCapture(
  authorizationId,
  payPalRequestId,
  undefined,
  body
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
| 400 | The request failed because it is not well-formed or is syntactically incorrect or violates schema. | [`AuthorizationsCaptureResponse400JsonError`](../../doc/models/authorizations-capture-response-400-json-error.md) |
| 401 | Authentication failed due to missing authorization header, or invalid authentication credentials. | [`M401ErrorError`](../../doc/models/m401-error-error.md) |
| 403 | The request failed because the caller has insufficient permissions. | [`AuthorizationsCaptureResponse403JsonError`](../../doc/models/authorizations-capture-response-403-json-error.md) |
| 404 | The request failed because the resource does not exist. | [`AuthorizationsCaptureResponse404JsonError`](../../doc/models/authorizations-capture-response-404-json-error.md) |
| 422 | The request failed because it is semantically incorrect or failed business validation. | [`AuthorizationsCaptureResponse422JsonError`](../../doc/models/authorizations-capture-response-422-json-error.md) |
| 500 | The request failed because an internal server error occurred. | `ApiError` |
| Default | The default response. | `ApiError` |


# Authorizations Reauthorize

Reauthorizes an authorized PayPal account payment, by ID. To ensure that funds are still available, reauthorize a payment after its initial three-day honor period expires. Within the 29-day authorization period, you can issue multiple re-authorizations after the honor period expires.<br/><br/>If 30 days have transpired since the date of the original authorization, you must create an authorized payment instead of reauthorizing the original authorized payment.<br/><br/>A reauthorized payment itself has a new honor period of three days.<br/><br/>You can reauthorize an authorized payment once for up to 115% of the original authorized amount, not to exceed an increase of $75 USD.<br/><br/>Supports only the `amount` request parameter.<blockquote><strong>Note:</strong> This request is currently not supported for Partner use cases.</blockquote>

```ts
async authorizationsReauthorize(
  authorizationId: string,
  payPalRequestId: string,
  prefer?: string,
  body?: ReauthorizeRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<AdditionalAuthorization>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `authorizationId` | `string` | Template, Required | The PayPal-generated ID for the authorized payment to void. |
| `payPalRequestId` | `string` | Header, Required | The server stores keys for 45 days. |
| `prefer` | `string \| undefined` | Header, Optional | The preferred server response upon successful completion of the request. Value is:<ul><li><code>return=minimal</code>. The server returns a minimal response to optimize communication between the API caller and the server. A minimal response includes the <code>id</code>, <code>status</code> and HATEOAS links.</li><li><code>return=representation</code>. The server returns a complete resource representation, including the current state of the resource.</li></ul> |
| `body` | [`ReauthorizeRequest \| undefined`](../../doc/models/reauthorize-request.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Requires scope

### Oauth2

`https://uri.paypal.com/services/payments/payment/authcapture`

## Response Type

[`AdditionalAuthorization`](../../doc/models/additional-authorization.md)

## Example Usage

```ts
const authorizationId = 'authorization_id8';

const payPalRequestId = 'PayPal-Request-Id6';

const body: ReauthorizeRequest = {
  amount: {
    currencyCode: 'USD',
    value: '10.99',
  },
};

try {
  // @ts-expect-error: unused variables
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { result, ...httpResponse } = await authorizationsController.authorizationsReauthorize(
  authorizationId,
  payPalRequestId,
  undefined,
  body
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
| 400 | The request failed because it is not well-formed or is syntactically incorrect or violates schema. | [`AuthorizationsReauthorizeResponse400JsonError`](../../doc/models/authorizations-reauthorize-response-400-json-error.md) |
| 401 | Authentication failed due to missing authorization header, or invalid authentication credentials. | [`M401ErrorError`](../../doc/models/m401-error-error.md) |
| 403 | The request failed because the caller has insufficient permissions. | [`AuthorizationsReauthorizeResponse403JsonError`](../../doc/models/authorizations-reauthorize-response-403-json-error.md) |
| 404 | The request failed because the resource does not exist. | [`AuthorizationsReauthorizeResponse404JsonError`](../../doc/models/authorizations-reauthorize-response-404-json-error.md) |
| 422 | The request failed because it either is semantically incorrect or failed business validation. | [`AuthorizationsReauthorizeResponse422JsonError`](../../doc/models/authorizations-reauthorize-response-422-json-error.md) |
| 500 | The request failed because an internal server error occurred. | `ApiError` |
| Default | The default response. | `ApiError` |


# Authorizations Void

Voids, or cancels, an authorized payment, by ID. You cannot void an authorized payment that has been fully captured.

```ts
async authorizationsVoid(
  authorizationId: string,
  payPalAuthAssertion?: string,
  prefer?: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<AdditionalAuthorization>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `authorizationId` | `string` | Template, Required | The PayPal-generated ID for the authorized payment to void. |
| `payPalAuthAssertion` | `string \| undefined` | Header, Optional | An API-caller-provided JSON Web Token (JWT) assertion that identifies the merchant. For details, see [PayPal-Auth-Assertion](/docs/api/reference/api-requests/#paypal-auth-assertion).<blockquote><strong>Note:</strong>For three party transactions in which a partner is managing the API calls on behalf of a merchant, the partner must identify the merchant using either a PayPal-Auth-Assertion header or an access token with target_subject.</blockquote> |
| `prefer` | `string \| undefined` | Header, Optional | The preferred server response upon successful completion of the request. Value is:<ul><li><code>return=minimal</code>. The server returns a minimal response to optimize communication between the API caller and the server. A minimal response includes the <code>id</code>, <code>status</code> and HATEOAS links.</li><li><code>return=representation</code>. The server returns a complete resource representation, including the current state of the resource.</li></ul> |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Requires scope

### Oauth2

`https://uri.paypal.com/services/payments/payment/authcapture`

## Response Type

[`AdditionalAuthorization`](../../doc/models/additional-authorization.md)

## Example Usage

```ts
const authorizationId = 'authorization_id8';

const prefer = 'return=minimal';

try {
  // @ts-expect-error: unused variables
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { result, ...httpResponse } = await authorizationsController.authorizationsVoid(
  authorizationId,
  undefined,
  prefer
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
| 400 | The request failed because it is not well-formed or is syntactically incorrect or violates schema. | [`M400ErrorError`](../../doc/models/m400-error-error.md) |
| 401 | Authentication failed due to missing authorization header, or invalid authentication credentials. | [`AuthorizationsVoidResponse401JsonError`](../../doc/models/authorizations-void-response-401-json-error.md) |
| 403 | The request failed because the caller has insufficient permissions. | [`AuthorizationsVoidResponse403JsonError`](../../doc/models/authorizations-void-response-403-json-error.md) |
| 404 | The request failed because the resource does not exist. | [`AuthorizationsVoidResponse404JsonError`](../../doc/models/authorizations-void-response-404-json-error.md) |
| 409 | The request failed because a previous call for the given resource is in progress. | [`AuthorizationsVoidResponse409JsonError`](../../doc/models/authorizations-void-response-409-json-error.md) |
| 422 | The request failed because it either is semantically incorrect or failed business validation. | [`AuthorizationsVoidResponse422JsonError`](../../doc/models/authorizations-void-response-422-json-error.md) |
| 500 | The request failed because an internal server error occurred. | `ApiError` |
| Default | The default response. | `ApiError` |

