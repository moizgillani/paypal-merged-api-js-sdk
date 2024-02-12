
# REFUNDCAPTURECURRENCYMISMATCH

## Structure

`REFUNDCAPTURECURRENCYMISMATCH`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `issue` | [`CapturesRefund422IssuesItemsAnyof7IssueEnum \| undefined`](../../doc/models/captures-refund-422-issues-items-anyof-7-issue-enum.md) | Optional | - |
| `description` | [`CapturesRefund422IssuesItemsAnyof7DescriptionEnum \| undefined`](../../doc/models/captures-refund-422-issues-items-anyof-7-description-enum.md) | Optional | - |

## Example (as JSON)

```json
{
  "issue": "REFUND_CAPTURE_CURRENCY_MISMATCH",
  "description": "Refund must be in the same currency as the capture"
}
```

