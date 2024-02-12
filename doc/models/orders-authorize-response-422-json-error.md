
# Orders Authorize Response 422 Json Error

## Structure

`OrdersAuthorizeResponse422JsonError`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `name` | [`UnprocessableRequestNameEnum \| undefined`](../../doc/models/unprocessable-request-name-enum.md) | Optional | - |
| `message` | [`UnprocessableRequestmessageEnum \| undefined`](../../doc/models/unprocessable-requestmessage-enum.md) | Optional | - |
| `issues` | [`ErrorDetails11[] \| undefined`](../../doc/models/error-details-11.md) | Optional | - |
| `debugId` | `string \| undefined` | Optional | The PayPal internal ID. Used for correlation purposes. |
| `informationLink` | `string \| undefined` | Optional | The information link, or URI, that shows detailed information about this error for the developer. |

## Example (as JSON)

```json
{
  "name": "UNPROCESSABLE_ENTITY",
  "message": "The requested action could not be performed, semantically incorrect, or failed business validation.",
  "issues": [
    {
      "field": "field2",
      "value": "value0",
      "location": "location2",
      "issue": "issue4",
      "description": "Order was created with an intent to 'CAPTURE'. Please use v2/checkout/orders/order_id/capture to complete the transaction or alternately Create an order with an intent of 'AUTHORIZE'."
    }
  ],
  "debug_id": "debug_id6",
  "information_link": "information_link0"
}
```

