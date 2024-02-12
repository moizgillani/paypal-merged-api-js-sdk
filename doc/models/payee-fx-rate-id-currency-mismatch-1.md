
# Payee FX Rate ID Currency Mismatch 1

## Structure

`PayeeFXRateIDCurrencyMismatch1`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `issue` | [`PayeeFxRateIdCurrencyMismatch1IssueEnum \| undefined`](../../doc/models/payee-fx-rate-id-currency-mismatch-1-issue-enum.md) | Optional | - |
| `description` | [`PayeeFxRateIdCurrencyMismatch1DescriptionEnum \| undefined`](../../doc/models/payee-fx-rate-id-currency-mismatch-1-description-enum.md) | Optional | - |

## Example (as JSON)

```json
{
  "issue": "PAYEE_FX_RATE_ID_CURRENCY_MISMATCH",
  "description": "The specified FX Rate ID is for a currency that does not match with the currency of this request. Please specify a different FX Rate ID and try the request again. Alternately, remove the FX Rate ID to process the request using the default exchange rate."
}
```

