
# INVALIDCURRENCYCODE

## Structure

`INVALIDCURRENCYCODE`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `issue` | [`InvalidCurrencyCodeIssueEnum \| undefined`](../../doc/models/invalid-currency-code-issue-enum.md) | Optional | - |
| `description` | [`InvalidCurrencyCodeDescriptionEnum \| undefined`](../../doc/models/invalid-currency-code-description-enum.md) | Optional | - |

## Example (as JSON)

```json
{
  "issue": "INVALID_CURRENCY_CODE",
  "description": "Currency code is invalid or is not currently supported. Please refer https://developer.paypal.com/api/rest/reference/currency-codes/ for list of supported currency codes."
}
```

