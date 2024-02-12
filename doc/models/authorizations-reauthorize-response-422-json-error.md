
# Authorizations Reauthorize Response 422 Json Error

## Structure

`AuthorizationsReauthorizeResponse422JsonError`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `name` | [`UnprocessableRequestNameEnum \| undefined`](../../doc/models/unprocessable-request-name-enum.md) | Optional | - |
| `message` | [`UnprocessableRequestmessageEnum \| undefined`](../../doc/models/unprocessable-requestmessage-enum.md) | Optional | - |
| `issues` | [`ErrorDetails6Payments[] \| undefined`](../../doc/models/error-details-6-payments.md) | Optional | - |
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
      "description": "Currency code is invalid or is not currently supported. Please refer https://developer.paypal.com/docs/api/reference/currency-codes/ for list of supported currency codes."
    },
    {
      "field": "field2",
      "value": "value0",
      "location": "location2",
      "issue": "issue4",
      "description": "Currency code is invalid or is not currently supported. Please refer https://developer.paypal.com/docs/api/reference/currency-codes/ for list of supported currency codes."
    },
    {
      "field": "field2",
      "value": "value0",
      "location": "location2",
      "issue": "issue4",
      "description": "Currency code is invalid or is not currently supported. Please refer https://developer.paypal.com/docs/api/reference/currency-codes/ for list of supported currency codes."
    }
  ],
  "debug_id": "debug_id0",
  "information_link": "information_link4"
}
```

