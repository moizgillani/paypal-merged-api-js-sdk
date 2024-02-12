
# PLATFORMFEEEXCEEDED

## Structure

`PLATFORMFEEEXCEEDED`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `issue` | [`CapturesRefund422IssuesItemsAnyof22IssueEnum \| undefined`](../../doc/models/captures-refund-422-issues-items-anyof-22-issue-enum.md) | Optional | - |
| `description` | [`CapturesRefund422IssuesItemsAnyof22DescriptionEnum \| undefined`](../../doc/models/captures-refund-422-issues-items-anyof-22-description-enum.md) | Optional | - |

## Example (as JSON)

```json
{
  "issue": "PLATFORM_FEE_EXCEEDED",
  "description": "Platform fee amount specified exceeds the amount that is available for refund. You can only refund up to the available platform fee amount. This error is also returned when no platform_fee was specified or was zero when the payment was captured."
}
```

