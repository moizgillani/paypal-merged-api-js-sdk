
# Bancontact Payment Object

Information used to pay Bancontact.

## Structure

`BancontactPaymentObject`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `name` | `string \| undefined` | Optional | The name of the account holder associated with this payment method.<br>**Constraints**: *Minimum Length*: `3`, *Maximum Length*: `300` |
| `countryCode` | `string \| undefined` | Optional | The [two-character ISO-3166-1 country code](/docs/integration/direct/rest/country-codes/) of the bank.<br>**Constraints**: *Minimum Length*: `2`, *Maximum Length*: `2`, *Pattern*: `^([A-Z]{2}\|C2)$` |
| `bic` | `string \| undefined` | Optional | The bank identification code (BIC).<br>**Constraints**: *Minimum Length*: `8`, *Maximum Length*: `11`, *Pattern*: `^[A-Z-a-z0-9]{4}[A-Z-a-z]{2}[A-Z-a-z0-9]{2}([A-Z-a-z0-9]{3})?$` |
| `ibanLastChars` | `string \| undefined` | Optional | The last characters of the IBAN used to pay.<br>**Constraints**: *Minimum Length*: `4`, *Maximum Length*: `34`, *Pattern*: `[a-zA-Z0-9]{4}` |
| `cardLastDigits` | `string \| undefined` | Optional | The last digits of the card used to fund the Bancontact payment.<br>**Constraints**: *Minimum Length*: `4`, *Maximum Length*: `4`, *Pattern*: `[0-9]{4}` |
| `attributes` | `unknown \| undefined` | Optional | Attributes for SEPA direct debit object. |

## Example (as JSON)

```json
{
  "country_code": "US",
  "name": "name6",
  "bic": "bic8",
  "iban_last_chars": "iban_last_chars4",
  "card_last_digits": "card_last_digits0"
}
```

