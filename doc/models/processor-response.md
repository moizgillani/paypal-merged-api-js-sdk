
# Processor Response

The processor response information for payment requests, such as direct credit card transactions.

## Structure

`ProcessorResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `avsCode` | [`AVSCodeEnum \| undefined`](../../doc/models/avs-code-enum.md) | Optional | The address verification code for Visa, Discover, Mastercard, or American Express transactions. |
| `cvvCode` | [`CVVCodeEnum \| undefined`](../../doc/models/cvv-code-enum.md) | Optional | The card verification value code for for Visa, Discover, Mastercard, or American Express. |
| `responseCode` | [`ResponseCodeEnum \| undefined`](../../doc/models/response-code-enum.md) | Optional | Processor response code for the non-PayPal payment processor errors. |
| `paymentAdviceCode` | [`PaymentAdviceCodeEnum \| undefined`](../../doc/models/payment-advice-code-enum.md) | Optional | The declined payment transactions might have payment advice codes. The card networks, like Visa and Mastercard, return payment advice codes. |

## Example (as JSON)

```json
{
  "avs_code": "M",
  "cvv_code": "U",
  "response_code": "PPII",
  "payment_advice_code": "01"
}
```

