
# PAYMENTTYPENOTSUPPORTEDFORINTENT

## Structure

`PAYMENTTYPENOTSUPPORTEDFORINTENT`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `issue` | [`PaymentTypeNotSupportedForIntentIssueEnum \| undefined`](../../doc/models/payment-type-not-supported-for-intent-issue-enum.md) | Optional | - |
| `description` | [`PaymentTypeNotSupportedForIntentDescriptionEnum \| undefined`](../../doc/models/payment-type-not-supported-for-intent-description-enum.md) | Optional | - |

## Example (as JSON)

```json
{
  "issue": "PAYMENT_TYPE_NOT_SUPPORTED_FOR_INTENT",
  "description": "Provided payment type not supported for order intent. Payment authorizations are supported only for order with `intent=AUTHORIZE` and payment captures are supported only for order with `intent=CAPTURE`."
}
```

