
# Orders Trackers Patch Response 403 Json Error

## Structure

`OrdersTrackersPatchResponse403JsonError`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `name` | [`ForbiddenRequestNameEnum \| undefined`](../../doc/models/forbidden-request-name-enum.md) | Optional | - |
| `message` | [`ForbiddenRequestMessageEnum \| undefined`](../../doc/models/forbidden-request-message-enum.md) | Optional | - |
| `issues` | [`ErrorDetails17[] \| undefined`](../../doc/models/error-details-17.md) | Optional | - |
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
      "description": "You do not have permission to access or perform operations on this resource."
    },
    {
      "field": "field2",
      "value": "value0",
      "location": "location2",
      "issue": "issue4",
      "description": "You do not have permission to access or perform operations on this resource."
    }
  ],
  "debug_id": "debug_id0",
  "information_link": "information_link4"
}
```

