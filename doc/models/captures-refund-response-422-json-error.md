
# Captures Refund Response 422 Json Error

## Structure

`CapturesRefundResponse422JsonError`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `name` | [`UnprocessableRequestNameEnum \| undefined`](../../doc/models/unprocessable-request-name-enum.md) | Optional | - |
| `message` | [`UnprocessableRequestmessageEnum \| undefined`](../../doc/models/unprocessable-requestmessage-enum.md) | Optional | - |
| `issues` | [`ErrorDetails23[] \| undefined`](../../doc/models/error-details-23.md) | Optional | - |
| `debugId` | `string \| undefined` | Optional | The PayPal internal ID. Used for correlation purposes. |
| `informationLink` | `string \| undefined` | Optional | The information link, or URI, that shows detailed information about this error for the developer. |

## Example (as JSON)

```json
{
  "name": "UNPROCESSABLE_ENTITY",
  "message": "The requested action could not be performed, semantically incorrect, or failed business validation.",
  "issues": [
    {
      "field": "field2",
      "value": "value0",
      "location": "location2",
      "issue": "issue4",
      "description": "Must be greater than zero. If the currency supports decimals, only two decimal place precision is supported."
    },
    {
      "field": "field2",
      "value": "value0",
      "location": "location2",
      "issue": "issue4",
      "description": "Must be greater than zero. If the currency supports decimals, only two decimal place precision is supported."
    }
  ],
  "debug_id": "debug_id8",
  "information_link": "information_link2"
}
```

