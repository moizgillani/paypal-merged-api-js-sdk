
# Unprocessable Entity Error 422 Response

## Structure

`UnprocessableEntityError422Response`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `issues` | [`Unprocessableentityerror422responseissuesItems[] \| undefined`](../../doc/models/containers/unprocessableentityerror-422-responseissues-items.md) | Optional | - |

## Example (as JSON)

```json
{
  "issues": [
    {
      "issue": "INVALID_CURRENCY_CODE",
      "description": "Currency code is invalid or is not currently supported. Please refer https://developer.paypal.com/docs/api/reference/currency-codes/ for list of supported currency codes."
    },
    {
      "issue": "INVALID_CURRENCY_CODE",
      "description": "Currency code is invalid or is not currently supported. Please refer https://developer.paypal.com/docs/api/reference/currency-codes/ for list of supported currency codes."
    }
  ]
}
```

