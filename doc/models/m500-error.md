
# M500 Error

Error response for 500

## Structure

`M500Error`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `name` | [`InternalServerErrorNameEnum \| undefined`](../../doc/models/internal-server-error-name-enum.md) | Optional | - |
| `message` | [`InternalServerErrorMessageEnum \| undefined`](../../doc/models/internal-server-error-message-enum.md) | Optional | - |
| `debugId` | `string \| undefined` | Optional | The PayPal internal ID. Used for correlation purposes. |
| `informationLink` | [`InternalServerErrorInformationLinkEnum \| undefined`](../../doc/models/internal-server-error-information-link-enum.md) | Optional | The information link, or URI, that shows detailed information about this error for the developer. |

## Example (as JSON)

```json
{
  "name": "INTERNAL_SERVER_ERROR",
  "message": "An internal server error occurred.",
  "debug_id": "90957fca61718",
  "information_link": "https://developer.paypal.com/api/orders/v2/#error-INTERNAL_SERVER_ERROR"
}
```

