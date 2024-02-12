
# Invalid Currency Code 1

## Structure

`InvalidCurrencyCode1`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `issue` | [`InvalidCurrencyCode1IssueEnum \| undefined`](../../doc/models/invalid-currency-code-1-issue-enum.md) | Optional | - |
| `description` | [`InvalidCurrencyCode1DescriptionEnum \| undefined`](../../doc/models/invalid-currency-code-1-description-enum.md) | Optional | - |

## Example (as JSON)

```json
{
  "issue": "INVALID_CURRENCY_CODE",
  "description": "Currency code is invalid or is not currently supported. Please refer https://developer.paypal.com/api/rest/reference/currency-codes/ for list of supported currency codes."
}
```

