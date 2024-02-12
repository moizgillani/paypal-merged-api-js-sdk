
# PENDINGCAPTURE

## Structure

`PENDINGCAPTURE`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `issue` | [`CapturesRefund422IssuesItemsAnyof15IssueEnum \| undefined`](../../doc/models/captures-refund-422-issues-items-anyof-15-issue-enum.md) | Optional | - |
| `description` | [`CapturesRefund422IssuesItemsAnyof15DescriptionEnum \| undefined`](../../doc/models/captures-refund-422-issues-items-anyof-15-description-enum.md) | Optional | - |

## Example (as JSON)

```json
{
  "issue": "PENDING_CAPTURE",
  "description": "Cannot initiate a refund as the capture is pending. Capture is typically pending when the payer has funded the transaction using e-check/bank funded."
}
```

