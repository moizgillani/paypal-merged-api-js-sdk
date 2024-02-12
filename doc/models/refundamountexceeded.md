
# REFUNDAMOUNTEXCEEDED

## Structure

`REFUNDAMOUNTEXCEEDED`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `issue` | [`CapturesRefund422IssuesItemsAnyof10IssueEnum \| undefined`](../../doc/models/captures-refund-422-issues-items-anyof-10-issue-enum.md) | Optional | - |
| `description` | [`CapturesRefund422IssuesItemsAnyof10DescriptionEnum \| undefined`](../../doc/models/captures-refund-422-issues-items-anyof-10-description-enum.md) | Optional | - |

## Example (as JSON)

```json
{
  "issue": "REFUND_AMOUNT_EXCEEDED",
  "description": "The refund amount must be less than or equal to the capture amount that has not yet been refunded."
}
```

