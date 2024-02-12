
# Orders Authorize 422

## Structure

`OrdersAuthorize422`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `issues` | [`OrdersAuthorize422IssuesItems[] \| undefined`](../../doc/models/containers/orders-authorize-422-issues-items.md) | Optional | - |

## Example (as JSON)

```json
{
  "issues": [
    {
      "issue": "ACTION_DOES_NOT_MATCH_INTENT",
      "description": "Order was created with an intent to 'CAPTURE'. Please use v2/checkout/orders/order_id/capture to complete the transaction or alternately Create an order with an intent of 'AUTHORIZE'."
    }
  ]
}
```

