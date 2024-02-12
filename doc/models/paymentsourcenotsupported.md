
# PAYMENTSOURCENOTSUPPORTED

## Structure

`PAYMENTSOURCENOTSUPPORTED`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `issue` | [`PaymentSourceNotSupportedIssueEnum \| undefined`](../../doc/models/payment-source-not-supported-issue-enum.md) | Optional | - |
| `description` | [`PaymentSourceNotSupportedDescriptionEnum \| undefined`](../../doc/models/payment-source-not-supported-description-enum.md) | Optional | - |

## Example (as JSON)

```json
{
  "issue": "PAYMENT_SOURCE_NOT_SUPPORTED",
  "description": "The payer selected method of payment is not supported when multiple purchase units are specified for an Order."
}
```

