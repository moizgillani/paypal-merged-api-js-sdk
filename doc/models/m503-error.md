
# M503 Error

Error response for 503

## Structure

`M503Error`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `name` | [`Error503NameEnum \| undefined`](../../doc/models/error-503-name-enum.md) | Optional | - |
| `message` | [`Error503MessageEnum \| undefined`](../../doc/models/error-503-message-enum.md) | Optional | - |
| `debugId` | `string \| undefined` | Optional | The PayPal internal ID. Used for correlation purposes. |
| `informationLink` | `string \| undefined` | Optional | The information link, or URI, that shows detailed information about this error for the developer. |

## Example (as JSON)

```json
{
  "name": "SERVICE_UNAVAILABLE",
  "message": "Service Unavailable.",
  "debug_id": "90957fca61718",
  "information_link": "https://developer.paypal.com/docs/api/orders/v2/#error-SERVICE_UNAVAILABLE"
}
```

