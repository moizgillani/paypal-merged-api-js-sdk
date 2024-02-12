
# M409 Error

Error response for 409

## Structure

`M409Error`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `name` | [`Error409NameEnum \| undefined`](../../doc/models/error-409-name-enum.md) | Optional | - |
| `message` | [`Error409MessageEnum \| undefined`](../../doc/models/error-409-message-enum.md) | Optional | - |
| `issues` | [`ErrorDetails[] \| undefined`](../../doc/models/error-details.md) | Optional | - |
| `debugId` | `string \| undefined` | Optional | The PayPal internal ID. Used for correlation purposes. |
| `informationLink` | `string \| undefined` | Optional | The information link, or URI, that shows detailed information about this error for the developer. |

## Example (as JSON)

```json
{
  "name": "RESOURCE_CONFLICT",
  "message": "The server has detected a conflict while processing this request.",
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
  "debug_id": "debug_id0",
  "information_link": "information_link6"
}
```

