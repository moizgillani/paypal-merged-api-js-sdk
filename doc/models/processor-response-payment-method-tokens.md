
# Processor Response Payment Method Tokens

The processor information. Might be required for payment requests, such as direct credit card transactions.

## Structure

`ProcessorResponsePaymentMethodTokens`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `avsCode` | [`AVSCodeEnum \| undefined`](../../doc/models/avs-code-enum.md) | Optional | The address verification code for Visa, Discover, Mastercard, or American Express transactions. |
| `cvvCode` | [`CVVCodeEnum \| undefined`](../../doc/models/cvv-code-enum.md) | Optional | The card verification value code for for Visa, Discover, Mastercard, or American Express. |
| `responseCode` | [`ProcessorResponseResponseCodeEnum \| undefined`](../../doc/models/processor-response-response-code-enum.md) | Optional | Processor response code for the non-PayPal payment processor errors. |
| `paymentAdviceCode` | [`PaymentAdviceCodeEnum \| undefined`](../../doc/models/payment-advice-code-enum.md) | Optional | The declined payment transactions might have payment advice codes. The card networks, like Visa and Mastercard, return payment advice codes. |

## Example (as JSON)

```json
{
  "avs_code": "S",
  "cvv_code": "P",
  "response_code": "5180",
  "payment_advice_code": "01"
}
```

