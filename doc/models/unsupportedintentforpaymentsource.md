
# UNSUPPORTEDINTENTFORPAYMENTSOURCE

## Structure

`UNSUPPORTEDINTENTFORPAYMENTSOURCE`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `issue` | [`UnsupportedIntentForPaymentSourceIssueEnum \| undefined`](../../doc/models/unsupported-intent-for-payment-source-issue-enum.md) | Optional | - |
| `description` | [`UnsupportedIntentForPaymentSourceDescriptionEnum \| undefined`](../../doc/models/unsupported-intent-for-payment-source-description-enum.md) | Optional | - |

## Example (as JSON)

```json
{
  "issue": "UNSUPPORTED_INTENT_FOR_PAYMENT_SOURCE",
  "description": "`intent=AUTHORIZE` is not supported for the specified payment_source. Only `intent=CAPTURE` is supported."
}
```

