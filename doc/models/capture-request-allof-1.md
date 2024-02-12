
# Capture Request Allof 1

## Structure

`CaptureRequestAllof1`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `amount` | [`Money \| undefined`](../../doc/models/money.md) | Optional | The amount to capture. To capture a portion of the full authorized amount, specify an amount. If amount is not specified, the full authorized amount is captured. The amount must be a positive number and in the same currency as the authorization against which the payment is being captured. |
| `invoiceId` | `string \| undefined` | Optional | The API caller-provided external invoice number for this order. Appears in both the payer's transaction history and the emails that the payer receives.<br>**Constraints**: *Maximum Length*: `127` |
| `finalCapture` | `boolean \| undefined` | Optional | Indicates whether you can make additional captures against the authorized payment. Set to `true` if you do not intend to capture additional payments against the authorization. Set to `false` if you intend to capture additional payments against the authorization.<br>**Default**: `false` |
| `paymentInstruction` | [`PaymentInstruction \| undefined`](../../doc/models/payment-instruction.md) | Optional | Any additional payment instructions to be consider during payment processing. This processing instruction is applicable for Capturing an order or Authorizing an Order. |
| `noteToPayer` | `string \| undefined` | Optional | An informational note about this settlement. Appears in both the payer's transaction history and the emails that the payer receives.<br>**Constraints**: *Maximum Length*: `255` |
| `softDescriptor` | `string \| undefined` | Optional | The payment descriptor on the payer's account statement.<br>**Constraints**: *Maximum Length*: `22` |

## Example (as JSON)

```json
{
  "final_capture": false,
  "amount": {
    "currency_code": "currency_code6",
    "value": "value0"
  },
  "invoice_id": "invoice_id6",
  "payment_instruction": {
    "platform_fees": [
      {
        "amount": {
          "currency_code": "currency_code6",
          "value": "value0"
        },
        "payee": {
          "email_address": "email_address4",
          "merchant_id": "merchant_id6"
        }
      },
      {
        "amount": {
          "currency_code": "currency_code6",
          "value": "value0"
        },
        "payee": {
          "email_address": "email_address4",
          "merchant_id": "merchant_id6"
        }
      },
      {
        "amount": {
          "currency_code": "currency_code6",
          "value": "value0"
        },
        "payee": {
          "email_address": "email_address4",
          "merchant_id": "merchant_id6"
        }
      }
    ],
    "disbursement_mode": "INSTANT",
    "payee_pricing_tier_id": "payee_pricing_tier_id2",
    "payee_receivable_fx_rate_id": "payee_receivable_fx_rate_id0"
  },
  "note_to_payer": "note_to_payer6"
}
```

