
# PARTIALREFUNDNOTALLOWED

## Structure

`PARTIALREFUNDNOTALLOWED`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `issue` | [`CapturesRefund422IssuesItemsAnyof13IssueEnum \| undefined`](../../doc/models/captures-refund-422-issues-items-anyof-13-issue-enum.md) | Optional | - |
| `description` | [`CapturesRefund422IssuesItemsAnyof13DescriptionEnum \| undefined`](../../doc/models/captures-refund-422-issues-items-anyof-13-description-enum.md) | Optional | - |

## Example (as JSON)

```json
{
  "issue": "PARTIAL_REFUND_NOT_ALLOWED",
  "description": "You cannot do a refund less than the original capture amount."
}
```

