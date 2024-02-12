
# P24 Payment Object

Information used to pay using P24(Przelewy24).

## Structure

`P24PaymentObject`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `name` | `string \| undefined` | Optional | The name of the account holder associated with this payment method.<br>**Constraints**: *Minimum Length*: `3`, *Maximum Length*: `300` |
| `email` | `string \| undefined` | Optional | The email address of the account holder associated with this payment method.<br>**Constraints**: *Minimum Length*: `3`, *Maximum Length*: `254`, *Pattern*: `^.+@[^"\-].+$` |
| `countryCode` | `string \| undefined` | Optional | The [two-character ISO-3166-1 country code](/docs/integration/direct/rest/country-codes/) of the bank.<br>**Constraints**: *Minimum Length*: `2`, *Maximum Length*: `2`, *Pattern*: `^([A-Z]{2}\|C2)$` |
| `paymentDescriptor` | `string \| undefined` | Optional | P24 generated payment description.<br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `2000` |
| `methodId` | `string \| undefined` | Optional | Numeric identifier of the payment scheme or bank used for the payment.<br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `300` |
| `methodDescription` | `string \| undefined` | Optional | Friendly name of the payment scheme or bank used for the payment.<br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `2000` |

## Example (as JSON)

```json
{
  "country_code": "US",
  "name": "name2",
  "email": "email4",
  "payment_descriptor": "payment_descriptor6",
  "method_id": "method_id6"
}
```

