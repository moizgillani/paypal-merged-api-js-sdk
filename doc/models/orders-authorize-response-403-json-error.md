
# Orders Authorize Response 403 Json Error

## Structure

`OrdersAuthorizeResponse403JsonError`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `name` | [`ForbiddenRequestNameEnum \| undefined`](../../doc/models/forbidden-request-name-enum.md) | Optional | - |
| `message` | [`ForbiddenRequestMessageEnum \| undefined`](../../doc/models/forbidden-request-message-enum.md) | Optional | - |
| `issues` | [`ErrorDetails9[] \| undefined`](../../doc/models/error-details-9.md) | Optional | - |
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
      "description": "API caller is not enabled to process payments with the specified type of token. Please contact customer support to request permissions to process transactions with this type of token."
    }
  ],
  "debug_id": "debug_id6",
  "information_link": "information_link2"
}
```

