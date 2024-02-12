
# CURRENCYNOTSUPPORTEDFORBANK

## Structure

`CURRENCYNOTSUPPORTEDFORBANK`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `issue` | [`CurrencyNotSupportedForBankIssueEnum \| undefined`](../../doc/models/currency-not-supported-for-bank-issue-enum.md) | Optional | - |
| `description` | [`CurrencyNotSupportedForBankDescriptionEnum \| undefined`](../../doc/models/currency-not-supported-for-bank-description-enum.md) | Optional | - |

## Example (as JSON)

```json
{
  "issue": "CURRENCY_NOT_SUPPORTED_FOR_BANK",
  "description": "The payment_source does not support the currency of the Order. For ACH debit, only USD is supported and for SEPA debit, only EUR is supported."
}
```

