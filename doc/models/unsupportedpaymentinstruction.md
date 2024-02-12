
# UNSUPPORTEDPAYMENTINSTRUCTION

## Structure

`UNSUPPORTEDPAYMENTINSTRUCTION`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `issue` | [`UnsupportedPaymentInstructionIssueEnum \| undefined`](../../doc/models/unsupported-payment-instruction-issue-enum.md) | Optional | - |
| `description` | [`UnsupportedPaymentInstructionDescriptionEnum \| undefined`](../../doc/models/unsupported-payment-instruction-description-enum.md) | Optional | - |

## Example (as JSON)

```json
{
  "issue": "UNSUPPORTED_PAYMENT_INSTRUCTION",
  "description": "You must provide the payment instruction when you capture an authorized payment for `intent=AUTHORIZE`. For details, see <a href=\"/docs/api/payments/v2/#authorizations_capture\">Capture authorization</a>. For `intent=CAPTURE`, send the payment instruction when you create the order."
}
```

