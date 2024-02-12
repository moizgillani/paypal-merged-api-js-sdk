
# M403 Error

Error response for 403

## Structure

`M403Error`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `name` | [`ForbiddenRequestNameEnum \| undefined`](../../doc/models/forbidden-request-name-enum.md) | Optional | - |
| `message` | [`ForbiddenRequestMessageEnum \| undefined`](../../doc/models/forbidden-request-message-enum.md) | Optional | - |
| `issues` | [`ErrorDetails[] \| undefined`](../../doc/models/error-details.md) | Optional | - |
| `debugId` | `string \| undefined` | Optional | The PayPal internal ID. Used for correlation purposes. |
| `informationLink` | `string \| undefined` | Optional | The information link, or URI, that shows detailed information about this error for the developer. |

## Example (as JSON)

```json
{
  "name": "NOT_AUTHORIZED",
  "message": "Authorization failed due to insufficient permissions.",
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
    },
    {
      "field": "field2",
      "value": "value0",
      "location": "location2",
      "issue": "issue4",
      "description": "description8"
    }
  ],
  "debug_id": "debug_id2",
  "information_link": "information_link8"
}
```

