
# IBANCOUNTRYNOTSUPPORTEDERROR

## Structure

`IBANCOUNTRYNOTSUPPORTEDERROR`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `issue` | [`IbanCountryNotSupported1IssueEnum \| undefined`](../../doc/models/iban-country-not-supported-1-issue-enum.md) | Optional | - |
| `description` | [`IbanCountryNotSupported1DescriptionEnum \| undefined`](../../doc/models/iban-country-not-supported-1-description-enum.md) | Optional | - |

## Example (as JSON)

```json
{
  "issue": "IBAN_COUNTRY_NOT_SUPPORTED",
  "description": "Country code of issuer bank for the provided IBAN is not supported for SEPA debit payments."
}
```

