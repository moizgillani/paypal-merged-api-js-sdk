
# Orders Confirm 422 Issues Items

## Structure

`OrdersConfirm422IssuesItems`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `issue` | [`OrderAlreadyCapturedIssueEnum \| undefined`](../../doc/models/order-already-captured-issue-enum.md) | Optional | - |
| `description` | [`OrderAlreadyCapturedDescriptionEnum \| undefined`](../../doc/models/order-already-captured-description-enum.md) | Optional | - |

## Example (as JSON)

```json
{
  "issue": "ORDER_ALREADY_CAPTURED",
  "description": "Order already captured. If 'intent=CAPTURE' only one capture per order is allowed."
}
```

