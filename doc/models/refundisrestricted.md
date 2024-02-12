
# REFUNDISRESTRICTED

## Structure

`REFUNDISRESTRICTED`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `issue` | [`CapturesRefund422IssuesItemsAnyof23IssueEnum \| undefined`](../../doc/models/captures-refund-422-issues-items-anyof-23-issue-enum.md) | Optional | - |
| `description` | [`CapturesRefund422IssuesItemsAnyof23DescriptionEnum \| undefined`](../../doc/models/captures-refund-422-issues-items-anyof-23-description-enum.md) | Optional | - |

## Example (as JSON)

```json
{
  "issue": "REFUND_IS_RESTRICTED",
  "description": "This refund can only be processed by the API caller that had 'captured' the transaction. If you facilitate your transactions via a platform/partner, please initiate a refund through them."
}
```

