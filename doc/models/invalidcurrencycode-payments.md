
# INVALIDCURRENCYCODE Payments

## Structure

`INVALIDCURRENCYCODEPayments`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `issue` | [`InvalidCurrencyCodeIssueEnum \| undefined`](../../doc/models/invalid-currency-code-issue-enum.md) | Optional | - |
| `description` | [`InvalidCurrencyCodeDescriptionPaymentsEnum \| undefined`](../../doc/models/invalid-currency-code-description-payments-enum.md) | Optional | - |

## Example (as JSON)

```json
{
  "issue": "INVALID_CURRENCY_CODE",
  "description": "Currency code is invalid or is not currently supported. Please refer https://developer.paypal.com/docs/api/reference/currency-codes/ for list of supported currency codes."
}
```

