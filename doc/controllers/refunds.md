# Refunds

Use the `/refunds` resource to show refund details.

```ts
const refundsController = new RefundsController(client);
```

## Class Name

`RefundsController`


# Refunds Get

Shows details for a refund, by ID.

```ts
async refundsGet(
  refundId: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<RefundPayments>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `refundId` | `string` | Template, Required | The PayPal-generated ID for the refund for which to show details. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Requires scope

### Oauth2

`https://uri.paypal.com/services/payments/refund`

## Response Type

[`RefundPayments`](../../doc/models/refund-payments.md)

## Example Usage

```ts
const refundId = 'refund_id4';

try {
  // @ts-expect-error: unused variables
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { result, ...httpResponse } = await refundsController.refundsGet(refundId);
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
| 401 | Authentication failed due to missing authorization header, or invalid authentication credentials. | [`RefundsGetResponse401JsonError`](../../doc/models/refunds-get-response-401-json-error.md) |
| 403 | The request failed because the caller has insufficient permissions. | [`RefundsGetResponse403JsonError`](../../doc/models/refunds-get-response-403-json-error.md) |
| 404 | The request failed because the resource does not exist. | [`RefundsGetResponse404JsonError`](../../doc/models/refunds-get-response-404-json-error.md) |
| 500 | The request failed because an internal server error occurred. | `ApiError` |
| Default | The default response. | `ApiError` |

