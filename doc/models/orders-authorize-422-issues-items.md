
# Orders Authorize 422 Issues Items

## Structure

`OrdersAuthorize422IssuesItems`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `issue` | [`ActionDoesNotMatchIntentIssueEnum \| undefined`](../../doc/models/action-does-not-match-intent-issue-enum.md) | Optional | - |
| `description` | [`ActionDoesNotMatchIntentDescriptionEnum \| undefined`](../../doc/models/action-does-not-match-intent-description-enum.md) | Optional | - |

## Example (as JSON)

```json
{
  "issue": "ACTION_DOES_NOT_MATCH_INTENT",
  "description": "Order was created with an intent to 'CAPTURE'. Please use v2/checkout/orders/order_id/capture to complete the transaction or alternately Create an order with an intent of 'AUTHORIZE'."
}
```

