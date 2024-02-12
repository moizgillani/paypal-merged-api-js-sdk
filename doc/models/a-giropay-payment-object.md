
# A Giropay Payment Object

Information needed to pay using giropay.

## Structure

`AGiropayPaymentObject`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `name` | `string \| undefined` | Optional | The name of the account holder associated with this payment method.<br>**Constraints**: *Minimum Length*: `3`, *Maximum Length*: `300` |
| `countryCode` | `string \| undefined` | Optional | The [two-character ISO-3166-1 country code](/docs/integration/direct/rest/country-codes/) of the bank.<br>**Constraints**: *Minimum Length*: `2`, *Maximum Length*: `2`, *Pattern*: `^([A-Z]{2}\|C2)$` |
| `bic` | `string \| undefined` | Optional | The bank identification code (BIC).<br>**Constraints**: *Minimum Length*: `8`, *Maximum Length*: `11`, *Pattern*: `^[A-Z-a-z0-9]{4}[A-Z-a-z]{2}[A-Z-a-z0-9]{2}([A-Z-a-z0-9]{3})?$` |

## Example (as JSON)

```json
{
  "country_code": "US",
  "name": "name8",
  "bic": "bic0"
}
```

