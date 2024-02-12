
# Orders Confirm 422

## Structure

`OrdersConfirm422`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `issues` | [`OrdersConfirm422IssuesItems[] \| undefined`](../../doc/models/containers/orders-confirm-422-issues-items.md) | Optional | - |

## Example (as JSON)

```json
{
  "issues": [
    {
      "issue": "ORDER_ALREADY_CAPTURED",
      "description": "Order already captured. If 'intent=CAPTURE' only one capture per order is allowed."
    },
    {
      "issue": "ORDER_ALREADY_CAPTURED",
      "description": "Order already captured. If 'intent=CAPTURE' only one capture per order is allowed."
    }
  ]
}
```

