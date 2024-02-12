
# M401 Error Payments

Error response for 401

## Structure

`M401ErrorPayments`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `name` | [`UnauthorizedRequestNameEnum \| undefined`](../../doc/models/unauthorized-request-name-enum.md) | Optional | - |
| `message` | [`UnauthorizedRequestMessageEnum \| undefined`](../../doc/models/unauthorized-request-message-enum.md) | Optional | - |
| `issues` | [`ErrorDetails[] \| undefined`](../../doc/models/error-details.md) | Optional | - |
| `debugId` | `string \| undefined` | Optional | The PayPal internal ID. Used for correlation purposes. |
| `informationLink` | `string \| undefined` | Optional | The information link, or URI, that shows detailed information about this error for the developer. |

## Example (as JSON)

```json
{
  "name": "AUTHENTICATION_FAILURE",
  "message": "Authentication failed due to missing authorization header, or invalid authentication credentials.",
  "issues": [
    {
      "field": "field2",
      "value": "value0",
      "location": "location2",
      "issue": "issue4",
      "description": "description8"
    }
  ],
  "debug_id": "debug_id2",
  "information_link": "information_link6"
}
```

