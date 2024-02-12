
# Captures Refund Response 409 Json Error

## Structure

`CapturesRefundResponse409JsonError`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `name` | [`Error409NameEnum \| undefined`](../../doc/models/error-409-name-enum.md) | Optional | - |
| `message` | [`Error409MessageEnum \| undefined`](../../doc/models/error-409-message-enum.md) | Optional | - |
| `issues` | [`ErrorDetails14Payments[] \| undefined`](../../doc/models/error-details-14-payments.md) | Optional | - |
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
      "description": "A previous request on this resource is currently in progress. Please wait for sometime and try again. It is best to space out the initial and the subsequent request(s) to avoid receiving this error."
    }
  ],
  "debug_id": "debug_id6",
  "information_link": "information_link0"
}
```

