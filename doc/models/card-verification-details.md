
# Card Verification Details

Card Verification details including the authorization details and 3D SECURE details.

## Structure

`CardVerificationDetails`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `networkTransactionId` | `string \| undefined` | Optional | Transaction Identifier as given by the network to indicate a previously executed CIT authorization. Only present when authorization is successful for a verification.<br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `1024`, *Pattern*: `^[a-zA-Z0-9-_@.:&+=*^'~#!$%()]+$` |
| `time` | `string \| undefined` | Optional | The date and time when the instrument was verified.<br>**Constraints**: *Minimum Length*: `20`, *Maximum Length*: `64`, *Pattern*: `^[0-9]{4}-(0[1-9]\|1[0-2])-(0[1-9]\|[1-2][0-9]\|3[0-1])[T,t]([0-1][0-9]\|2[0-3]):[0-5][0-9]:([0-5][0-9]\|60)([.][0-9]+)?([Zz]\|[+-][0-9]{2}:[0-9]{2})$` |
| `amount` | [`Money \| undefined`](../../doc/models/money.md) | Optional | The amount used for card verification. |
| `processorResponse` | [`ProcessorResponsePaymentMethodTokens \| undefined`](../../doc/models/processor-response-payment-method-tokens.md) | Optional | The processor information. |
| `threeDSecure` | `unknown \| undefined` | Optional | - |

## Example (as JSON)

```json
{
  "network_transaction_id": "network_transaction_id4",
  "time": "time2",
  "amount": {
    "currency_code": "currency_code6",
    "value": "value0"
  },
  "processor_response": {
    "avs_code": "3",
    "cvv_code": "3",
    "response_code": "0100",
    "payment_advice_code": "03"
  },
  "three_d_secure": {
    "key1": "val1",
    "key2": "val2"
  }
}
```

