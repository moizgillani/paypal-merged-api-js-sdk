
# Card Response Payment Method Tokens

Full representation of a Card Payment Token.

## Structure

`CardResponsePaymentMethodTokens`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `name` | `string \| undefined` | Optional | The card holder's name as it appears on the card.<br>**Constraints**: *Minimum Length*: `2`, *Maximum Length*: `300`, *Pattern*: `^[A-Za-z ]+$` |
| `lastDigits` | `string \| undefined` | Optional | The last digits of the payment card.<br>**Constraints**: *Minimum Length*: `2`, *Maximum Length*: `4`, *Pattern*: `[0-9]{2,}` |
| `brand` | [`CardBrandEnum \| undefined`](../../doc/models/card-brand-enum.md) | Optional | The card brand or network. Typically used in the response.<br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `255`, *Pattern*: `^[A-Z_]+$` |
| `expiry` | `string \| undefined` | Optional | The card expiration year and month, in [Internet date format](https://tools.ietf.org/html/rfc3339#section-5.6).<br>**Constraints**: *Minimum Length*: `7`, *Maximum Length*: `7`, *Pattern*: `^[0-9]{4}-(0[1-9]\|1[0-2])$` |
| `billingAddress` | `unknown \| undefined` | Optional | The billing address for this card. Supports only the `address_line_1`, `address_line_2`, `admin_area_1`, `admin_area_2`, `postal_code`, and `country_code` properties. |
| `verificationStatus` | `string \| undefined` | Optional | Card Verification status.<br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `255`, *Pattern*: `^[0-9A-Z_]+$` |
| `verification` | [`CardVerificationDetails \| undefined`](../../doc/models/card-verification-details.md) | Optional | Card Verification details including the authorization details and 3D SECURE details. |

## Example (as JSON)

```json
{
  "name": "name6",
  "last_digits": "last_digits0",
  "brand": "CB_NATIONALE",
  "expiry": "expiry4",
  "billing_address": {
    "key1": "val1",
    "key2": "val2"
  }
}
```

