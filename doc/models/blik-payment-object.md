
# BLIK Payment Object

Information used to pay using BLIK.

## Structure

`BLIKPaymentObject`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `name` | `string \| undefined` | Optional | The name of the account holder associated with this payment method.<br>**Constraints**: *Minimum Length*: `3`, *Maximum Length*: `300` |
| `countryCode` | `string \| undefined` | Optional | The [two-character ISO-3166-1 country code](/docs/integration/direct/rest/country-codes/) of the bank.<br>**Constraints**: *Minimum Length*: `2`, *Maximum Length*: `2`, *Pattern*: `^([A-Z]{2}\|C2)$` |
| `email` | `string \| undefined` | Optional | The email address of the account holder associated with this payment method.<br>**Constraints**: *Minimum Length*: `3`, *Maximum Length*: `254`, *Pattern*: `^.+@[^"\-].+$` |
| `oneClick` | [`BLIKOneClickPaymentObject \| undefined`](../../doc/models/blik-one-click-payment-object.md) | Optional | The one-click integration flow object. |

## Example (as JSON)

```json
{
  "country_code": "US",
  "name": "name6",
  "email": "email0",
  "one_click": {
    "consumer_reference": "consumer_reference2"
  }
}
```

