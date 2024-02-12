
# REFUNDFAILEDINSUFFICIENTFUNDS

## Structure

`REFUNDFAILEDINSUFFICIENTFUNDS`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `issue` | [`CapturesRefund422IssuesItemsAnyof12IssueEnum \| undefined`](../../doc/models/captures-refund-422-issues-items-anyof-12-issue-enum.md) | Optional | - |
| `description` | [`CapturesRefund422IssuesItemsAnyof12DescriptionEnum \| undefined`](../../doc/models/captures-refund-422-issues-items-anyof-12-description-enum.md) | Optional | - |

## Example (as JSON)

```json
{
  "issue": "REFUND_FAILED_INSUFFICIENT_FUNDS",
  "description": "Capture could not be refunded due to insufficient funds. Please check to see if you have sufficient funds in your PayPal account or if the bank account linked to your PayPal account is verified and has sufficient funds."
}
```

