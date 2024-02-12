
# ORDERISPENDINGAPPROVAL

## Structure

`ORDERISPENDINGAPPROVAL`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `issue` | [`OrderIsPendingApprovalIssueEnum \| undefined`](../../doc/models/order-is-pending-approval-issue-enum.md) | Optional | - |
| `description` | [`OrderIsPendingApprovalDescriptionEnum \| undefined`](../../doc/models/order-is-pending-approval-description-enum.md) | Optional | - |

## Example (as JSON)

```json
{
  "issue": "ORDER_IS_PENDING_APPROVAL",
  "description": "The order was confirmed and payer action completed but order approval processing from PayPal is pending. No action is needed from Payee or Payer. Please wait until order status changes to 'APPROVED'."
}
```

