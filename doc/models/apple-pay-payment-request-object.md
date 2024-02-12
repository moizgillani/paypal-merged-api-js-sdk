
# Apple Pay Payment Request Object

Information needed to pay using ApplePay.

## Structure

`ApplePayPaymentRequestObject`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `string \| undefined` | Optional | ApplePay transaction identifier, this will be the unique identifier for this transaction provided by Apple. The pattern is defined by an external party and supports Unicode.<br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `250`, *Pattern*: `^.*$` |
| `name` | `string \| undefined` | Optional | The name of the account holder associated with this payment method.<br>**Constraints**: *Minimum Length*: `3`, *Maximum Length*: `300` |
| `emailAddress` | `string \| undefined` | Optional | The email address of the account holder associated with this payment method.<br>**Constraints**: *Minimum Length*: `3`, *Maximum Length*: `254`, *Pattern*: `^.+@[^"\-].+$` |
| `phoneNumber` | [`Phone \| undefined`](../../doc/models/phone.md) | Optional | The phone number, in its canonical international [E.164 numbering plan format](https://www.itu.int/rec/T-REC-E.164/en). Supports only the `national_number` property. |
| `decryptedToken` | [`DecryptedApplePayTokenData \| undefined`](../../doc/models/decrypted-apple-pay-token-data.md) | Optional | The decrypted payload details for the apple pay token. |
| `storedCredential` | `string \| undefined` | Optional | The card expiration year and month, in [Internet date format](https://tools.ietf.org/html/rfc3339#section-5.6).<br>**Constraints**: *Minimum Length*: `7`, *Maximum Length*: `7`, *Pattern*: `^[0-9]{4}-(0[1-9]\|1[0-2])$` |
| `vaultId` | `string \| undefined` | Optional | The PayPal-generated ID for the saved apple pay payment_source. This ID should be stored on the merchant's server so the saved payment source can be used for future transactions.<br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `255`, *Pattern*: `^[0-9a-zA-Z_-]+$` |
| `attributes` | `unknown \| undefined` | Optional | - |

## Example (as JSON)

```json
{
  "id": "id4",
  "name": "name4",
  "email_address": "email_address2",
  "phone_number": {
    "country_code": "country_code2",
    "national_number": "national_number6",
    "extension_number": "extension_number8"
  },
  "decrypted_token": {
    "transaction_amount": {
      "currency_code": "currency_code6",
      "value": "value2"
    },
    "tokenized_card": {
      "id": "id4",
      "name": "name4",
      "number": "number2",
      "expiry": "expiry2",
      "security_code": "security_code6"
    },
    "device_manufacturer_id": "device_manufacturer_id6",
    "payment_data_type": "3DSECURE",
    "payment_data": {
      "cryptogram": "cryptogram6",
      "eci_indicator": "eci_indicator0",
      "emv_data": "emv_data0",
      "pin": "pin4"
    }
  }
}
```

