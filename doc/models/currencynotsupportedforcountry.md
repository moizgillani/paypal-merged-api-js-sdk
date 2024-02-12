
# CURRENCYNOTSUPPORTEDFORCOUNTRY

## Structure

`CURRENCYNOTSUPPORTEDFORCOUNTRY`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `issue` | [`CurrencyNotSupportedForCountryIssueEnum \| undefined`](../../doc/models/currency-not-supported-for-country-issue-enum.md) | Optional | - |
| `description` | [`CurrencyNotSupportedForCountryDescriptionEnum \| undefined`](../../doc/models/currency-not-supported-for-country-description-enum.md) | Optional | - |

## Example (as JSON)

```json
{
  "issue": "CURRENCY_NOT_SUPPORTED_FOR_COUNTRY",
  "description": "For the payment_source specified, the currency of the Order is restricted by the country in which the payee account is based. Please refer https://developer.paypal.com/api/rest/reference/currency-codes/ for list of supported currency codes."
}
```

