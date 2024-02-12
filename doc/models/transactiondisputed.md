
# TRANSACTIONDISPUTED

## Structure

`TRANSACTIONDISPUTED`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `issue` | [`CapturesRefund422IssuesItemsAnyof21IssueEnum \| undefined`](../../doc/models/captures-refund-422-issues-items-anyof-21-issue-enum.md) | Optional | - |
| `description` | [`CapturesRefund422IssuesItemsAnyof21DescriptionEnum \| undefined`](../../doc/models/captures-refund-422-issues-items-anyof-21-description-enum.md) | Optional | - |

## Example (as JSON)

```json
{
  "issue": "TRANSACTION_DISPUTED",
  "description": "Partial refunds cannot be offered at this time because there is an open case on this transaction. Visit the PayPal Resolution Center to review this case."
}
```

