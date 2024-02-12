
# Captures Refund Response 400 Json Error

## Structure

`CapturesRefundResponse400JsonError`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `name` | [`BadRequestNameEnum \| undefined`](../../doc/models/bad-request-name-enum.md) | Optional | - |
| `message` | [`BadRequestMessageEnum \| undefined`](../../doc/models/bad-request-message-enum.md) | Optional | - |
| `issues` | [`ErrorDetails7Payments[] \| undefined`](../../doc/models/error-details-7-payments.md) | Optional | - |
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
      "description": "A required field / parameter is missing."
    },
    {
      "field": "field2",
      "value": "value0",
      "location": "location2",
      "issue": "issue4",
      "description": "A required field / parameter is missing."
    },
    {
      "field": "field2",
      "value": "value0",
      "location": "location2",
      "issue": "issue4",
      "description": "A required field / parameter is missing."
    }
  ],
  "debug_id": "debug_id6",
  "information_link": "information_link2"
}
```

