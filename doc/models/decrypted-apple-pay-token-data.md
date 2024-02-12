
# Decrypted Apple Pay Token Data

Information about the Payment data obtained by decrypting Apple Pay token.

## Structure

`DecryptedApplePayTokenData`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `transactionAmount` | [`Money \| undefined`](../../doc/models/money.md) | Optional | The transaction amount for the payment that the payer has approved on apple platform. |
| `tokenizedCard` | [`Card`](../../doc/models/card.md) | Required | Apple Pay tokenized credit card used to pay. |
| `deviceManufacturerId` | `string \| undefined` | Optional | Apple Pay Hex-encoded device manufacturer identifier. The pattern is defined by an external party and supports Unicode.<br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `2000`, *Pattern*: `^.*$` |
| `paymentDataType` | [`ApplePayPaymentTypeEnum \| undefined`](../../doc/models/apple-pay-payment-type-enum.md) | Optional | Indicates the type of payment data passed, in case of Non China the payment data is 3DSECURE and for China it is EMV.<br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `16`, *Pattern*: `^[0-9A-Z_]+$` |
| `paymentData` | [`DecryptedApplePayPaymentDetailsData \| undefined`](../../doc/models/decrypted-apple-pay-payment-details-data.md) | Optional | Apple Pay payment data object which contains the cryptogram, eci_indicator and other data. |

## Example (as JSON)

```json
{
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
  "device_manufacturer_id": "device_manufacturer_id2",
  "payment_data_type": "3DSECURE",
  "payment_data": {
    "cryptogram": "cryptogram6",
    "eci_indicator": "eci_indicator0",
    "emv_data": "emv_data0",
    "pin": "pin4"
  }
}
```

