# Captures

Use the `/captures` resource to show details for and refund a captured payment.

```ts
const capturesController = new CapturesController(client);
```

## Class Name

`CapturesController`

## Methods

* [Captures Get](../../doc/controllers/captures.md#captures-get)
* [Captures Refund](../../doc/controllers/captures.md#captures-refund)


# Captures Get

Shows details for a captured payment, by ID.

```ts
async capturesGet(
  captureId: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<AdditionalCapture>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `captureId` | `string` | Template, Required | The PayPal-generated ID for the captured payment to refund. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Requires scope

### Oauth2

`https://uri.paypal.com/services/payments/payment/authcapture`

## Response Type

[`AdditionalCapture`](../../doc/models/additional-capture.md)

## Example Usage

```ts
const captureId = 'capture_id2';

try {
  // @ts-expect-error: unused variables
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { result, ...httpResponse } = await capturesController.capturesGet(captureId);
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
| 403 | The request failed because the caller has insufficient permissions. | [`CapturesGetResponse403JsonError`](../../doc/models/captures-get-response-403-json-error.md) |
| 404 | The request failed because the resource does not exist. | [`CapturesGetResponse404JsonError`](../../doc/models/captures-get-response-404-json-error.md) |
| 500 | The request failed because an internal server error occurred. | `ApiError` |
| Default | The default response. | `ApiError` |


# Captures Refund

Refunds a captured payment, by ID. For a full refund, include an empty payload in the JSON request body. For a partial refund, include an <code>amount</code> object in the JSON request body.

```ts
async capturesRefund(
  captureId: string,
  payPalRequestId: string,
  prefer?: string,
  payPalAuthAssertion?: string,
  body?: RefundRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<RefundPayments>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `captureId` | `string` | Template, Required | The PayPal-generated ID for the captured payment to refund. |
| `payPalRequestId` | `string` | Header, Required | The server stores keys for 45 days. |
| `prefer` | `string \| undefined` | Header, Optional | The preferred server response upon successful completion of the request. Value is:<ul><li><code>return=minimal</code>. The server returns a minimal response to optimize communication between the API caller and the server. A minimal response includes the <code>id</code>, <code>status</code> and HATEOAS links.</li><li><code>return=representation</code>. The server returns a complete resource representation, including the current state of the resource.</li></ul> |
| `payPalAuthAssertion` | `string \| undefined` | Header, Optional | An API-caller-provided JSON Web Token (JWT) assertion that identifies the merchant. For details, see [PayPal-Auth-Assertion](/docs/api/reference/api-requests/#paypal-auth-assertion).<blockquote><strong>Note:</strong>For three party transactions in which a partner is managing the API calls on behalf of a merchant, the partner must identify the merchant using either a PayPal-Auth-Assertion header or an access token with target_subject.</blockquote> |
| `body` | [`RefundRequest \| undefined`](../../doc/models/refund-request.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Requires scope

### Oauth2

`https://uri.paypal.com/services/payments/refund`

## Response Type

[`RefundPayments`](../../doc/models/refund-payments.md)

## Example Usage

```ts
const captureId = 'capture_id2';

const payPalRequestId = 'PayPal-Request-Id6';

const body: RefundRequest = {
  amount: {
    currencyCode: 'USD',
    value: '10.00',
  },
  invoiceId: 'INVOICE-123',
  noteToPayer: 'DefectiveProduct',
  paymentInstruction: {
    platformFees: [
      {
        amount: {
          currencyCode: 'USD',
          value: '1.00',
        },
      }
    ],
  },
};

try {
  // @ts-expect-error: unused variables
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { result, ...httpResponse } = await capturesController.capturesRefund(
  captureId,
  payPalRequestId,
  undefined,
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
| 400 | The request failed because it is not well-formed or is syntactically incorrect or violates schema. | [`CapturesRefundResponse400JsonError`](../../doc/models/captures-refund-response-400-json-error.md) |
| 401 | Authentication failed due to missing authorization header, or invalid authentication credentials. | [`CapturesRefundResponse401JsonError`](../../doc/models/captures-refund-response-401-json-error.md) |
| 403 | The request failed because the caller has insufficient permissions. | [`CapturesRefundResponse403JsonError`](../../doc/models/captures-refund-response-403-json-error.md) |
| 404 | The request failed because the resource does not exist. | [`CapturesRefundResponse404JsonError`](../../doc/models/captures-refund-response-404-json-error.md) |
| 409 | The request failed because a previous call for the given resource is in progress. | [`CapturesRefundResponse409JsonError`](../../doc/models/captures-refund-response-409-json-error.md) |
| 422 | The request failed because it either is semantically incorrect or failed business validation. | [`CapturesRefundResponse422JsonError`](../../doc/models/captures-refund-response-422-json-error.md) |
| 500 | The request failed because an internal server error occurred. | `ApiError` |
| Default | The default response. | `ApiError` |

