
# PLATFORMFEENOTENABLED

## Structure

`PLATFORMFEENOTENABLED`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `issue` | [`CapturesRefund422IssuesItemsAnyof24IssueEnum \| undefined`](../../doc/models/captures-refund-422-issues-items-anyof-24-issue-enum.md) | Optional | - |
| `description` | [`CapturesRefund422IssuesItemsAnyof24DescriptionEnum \| undefined`](../../doc/models/captures-refund-422-issues-items-anyof-24-description-enum.md) | Optional | - |

## Example (as JSON)

```json
{
  "issue": "PLATFORM_FEE_NOT_ENABLED",
  "description": "The API Caller account is not setup to be able to process refunds with 'platform_fees'. Please contact your Account Manager. This feature is useful when you want to contribute a portion of the 'platform_fees' you had capture as part of the refund being processed."
}
```

