
# ORDERCOMPLETEONPAYMENTAPPROVAL

## Structure

`ORDERCOMPLETEONPAYMENTAPPROVAL`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `issue` | [`OrderCompleteOnPaymentApprovalIssueEnum \| undefined`](../../doc/models/order-complete-on-payment-approval-issue-enum.md) | Optional | - |
| `description` | [`OrderCompleteOnPaymentApprovalDescriptionEnum \| undefined`](../../doc/models/order-complete-on-payment-approval-description-enum.md) | Optional | - |

## Example (as JSON)

```json
{
  "issue": "ORDER_COMPLETE_ON_PAYMENT_APPROVAL",
  "description": "A processing_instruction of `ORDER_COMPLETE_ON_PAYMENT_APPROVAL` is required for the specified payment_source. Please refer to the integration guide https://developer.paypal.com/docs/limited-release/alternative-payment-methods-with-orders/ for more details"
}
```

