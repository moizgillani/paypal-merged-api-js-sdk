
# CURRENCYNOTSUPPORTEDFORBANKERROR

## Structure

`CURRENCYNOTSUPPORTEDFORBANKERROR`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `issue` | [`CurrencyNotSupportedForBank1IssueEnum \| undefined`](../../doc/models/currency-not-supported-for-bank-1-issue-enum.md) | Optional | - |
| `description` | [`CurrencyNotSupportedForBank1DescriptionEnum \| undefined`](../../doc/models/currency-not-supported-for-bank-1-description-enum.md) | Optional | - |

## Example (as JSON)

```json
{
  "issue": "CURRENCY_NOT_SUPPORTED_FOR_BANK",
  "description": "The payment_source does not support the currency of the Order. For ACH debit, only USD is supported and for SEPA debit, only EUR is supported."
}
```

