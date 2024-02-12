
# M400 Error

Error response for 400

## Structure

`M400Error`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `name` | [`BadRequestNameEnum \| undefined`](../../doc/models/bad-request-name-enum.md) | Optional | - |
| `message` | [`BadRequestMessageEnum \| undefined`](../../doc/models/bad-request-message-enum.md) | Optional | - |
| `issues` | [`ErrorDetails[] \| undefined`](../../doc/models/error-details.md) | Optional | - |
| `debugId` | `string \| undefined` | Optional | The PayPal internal ID. Used for correlation purposes. |
| `informationLink` | `string \| undefined` | Optional | The information link, or URI, that shows detailed information about this error for the developer. |

## Example (as JSON)

```json
{
  "name": "INVALID_REQUEST",
  "message": "Request is not well-formed, syntactically incorrect, or violates schema.",
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

