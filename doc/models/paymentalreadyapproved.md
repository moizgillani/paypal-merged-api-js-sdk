
# PAYMENTALREADYAPPROVED

## Structure

`PAYMENTALREADYAPPROVED`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `issue` | [`PaymentAlreadyApprovedIssueEnum \| undefined`](../../doc/models/payment-already-approved-issue-enum.md) | Optional | - |
| `description` | [`PaymentAlreadyApprovedDescriptionEnum \| undefined`](../../doc/models/payment-already-approved-description-enum.md) | Optional | - |

## Example (as JSON)

```json
{
  "issue": "PAYMENT_ALREADY_APPROVED",
  "description": "The payment has already been approved.  Please capture the order, or create and confirm a new order with this payment source."
}
```

