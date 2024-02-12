
# REFUNDNOTPERMITTEDDUETOCHARGEBACK

## Structure

`REFUNDNOTPERMITTEDDUETOCHARGEBACK`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `issue` | [`CapturesRefund422IssuesItemsAnyof20IssueEnum \| undefined`](../../doc/models/captures-refund-422-issues-items-anyof-20-issue-enum.md) | Optional | - |
| `description` | [`CapturesRefund422IssuesItemsAnyof20DescriptionEnum \| undefined`](../../doc/models/captures-refund-422-issues-items-anyof-20-description-enum.md) | Optional | - |

## Example (as JSON)

```json
{
  "issue": "REFUND_NOT_PERMITTED_DUE_TO_CHARGEBACK",
  "description": "Refunds are not allowed on this capture due to a chargeback on the card or bank. Please contact the payee to resolve the chargeback."
}
```

