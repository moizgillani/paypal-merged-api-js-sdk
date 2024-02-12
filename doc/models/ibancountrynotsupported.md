
# IBANCOUNTRYNOTSUPPORTED

## Structure

`IBANCOUNTRYNOTSUPPORTED`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `issue` | [`IbanCountryNotSupportedIssueEnum \| undefined`](../../doc/models/iban-country-not-supported-issue-enum.md) | Optional | - |
| `description` | [`IbanCountryNotSupportedDescriptionEnum \| undefined`](../../doc/models/iban-country-not-supported-description-enum.md) | Optional | - |

## Example (as JSON)

```json
{
  "issue": "IBAN_COUNTRY_NOT_SUPPORTED",
  "description": "Country code of issuer bank for the provided IBAN is not supported for SEPA debit payments."
}
```

