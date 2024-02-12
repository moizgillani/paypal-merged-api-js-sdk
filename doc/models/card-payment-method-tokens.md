
# Card Payment Method Tokens

The payment card to use to fund a payment. Can be a credit or debit card.

## Structure

`CardPaymentMethodTokens`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `string \| undefined` | Optional | The PayPal-generated ID for the card.<br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `256`, *Pattern*: `^[A-Za-z0-9-_.+=]+$` |
| `name` | `string \| undefined` | Optional | The card holder's name as it appears on the card.<br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `300`, *Pattern*: `^.{1,300}$` |
| `number` | `string \| undefined` | Optional | The primary account number (PAN) for the payment card.<br>**Constraints**: *Minimum Length*: `13`, *Maximum Length*: `19`, *Pattern*: `^[0-9]{13,19}$` |
| `expiry` | `string \| undefined` | Optional | The card expiration year and month, in [Internet date format](https://tools.ietf.org/html/rfc3339#section-5.6).<br>**Constraints**: *Minimum Length*: `7`, *Maximum Length*: `7`, *Pattern*: `^[0-9]{4}-(0[1-9]\|1[0-2])$` |
| `securityCode` | `string \| undefined` | Optional | The three- or four-digit security code of the card. Also known as the CVV, CVC, CVN, CVE, or CID. This parameter cannot be present in the request when `payment_initiator=MERCHANT`.<br>**Constraints**: *Minimum Length*: `3`, *Maximum Length*: `4`, *Pattern*: `^[0-9]{3,4}$` |
| `lastDigits` | `string \| undefined` | Optional | The last digits of the payment card.<br>**Constraints**: *Minimum Length*: `2`, *Maximum Length*: `4`, *Pattern*: `^[0-9]{2,4}$` |
| `cardType` | [`CardBrandEnum \| undefined`](../../doc/models/card-brand-enum.md) | Optional | The card brand or network. Typically used in the response.<br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `255`, *Pattern*: `^[A-Z_]+$` |
| `type` | [`CardTypeEnum \| undefined`](../../doc/models/card-type-enum.md) | Optional | The payment card type.<br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `255`, *Pattern*: `^[A-Z_]+$` |
| `brand` | [`CardBrandEnum \| undefined`](../../doc/models/card-brand-enum.md) | Optional | The card brand or network. Typically used in the response.<br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `255`, *Pattern*: `^[A-Z_]+$` |
| `billingAddress` | [`PortablePostalAddressMediumGrained \| undefined`](../../doc/models/portable-postal-address-medium-grained.md) | Optional | The billing address for this card. Supports only the `address_line_1`, `address_line_2`, `admin_area_1`, `admin_area_2`, `postal_code`, and `country_code` properties. |

## Example (as JSON)

```json
{
  "id": "id8",
  "name": "name8",
  "number": "number6",
  "expiry": "expiry6",
  "security_code": "security_code0"
}
```

