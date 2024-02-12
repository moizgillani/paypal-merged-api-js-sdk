
# Authorizations Reauthorize 422

## Structure

`AuthorizationsReauthorize422`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `issues` | [`Authorizationsreauthorize422issuesItems[] \| undefined`](../../doc/models/containers/authorizationsreauthorize-422-issues-items.md) | Optional | - |

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

