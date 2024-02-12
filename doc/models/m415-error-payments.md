
# M415 Error Payments

Error response for 415

## Structure

`M415ErrorPayments`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `name` | [`Error415NameEnum \| undefined`](../../doc/models/error-415-name-enum.md) | Optional | - |
| `message` | [`Error415MessageEnum \| undefined`](../../doc/models/error-415-message-enum.md) | Optional | - |
| `issues` | [`ErrorDetails[] \| undefined`](../../doc/models/error-details.md) | Optional | - |
| `debugId` | `string \| undefined` | Optional | The PayPal internal ID. Used for correlation purposes. |
| `informationLink` | `string \| undefined` | Optional | The information link, or URI, that shows detailed information about this error for the developer. |

## Example (as JSON)

```json
{
  "name": "UNSUPPORTED_MEDIA_TYPE",
  "message": "The server does not support the request payload's media type.",
  "issues": [
    {
      "field": "field2",
      "value": "value0",
      "location": "location2",
      "issue": "issue4",
      "description": "description8"
    },
    {
      "field": "field2",
      "value": "value0",
      "location": "location2",
      "issue": "issue4",
      "description": "description8"
    }
  ],
  "debug_id": "debug_id0",
  "information_link": "information_link4"
}
```

