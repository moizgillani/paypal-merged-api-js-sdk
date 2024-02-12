
# ORDERALREADYCAPTUREDERROR

## Structure

`ORDERALREADYCAPTUREDERROR`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `issue` | [`OrderAlreadyCaptured1IssueEnum \| undefined`](../../doc/models/order-already-captured-1-issue-enum.md) | Optional | - |
| `description` | [`OrderAlreadyCaptured1DescriptionEnum \| undefined`](../../doc/models/order-already-captured-1-description-enum.md) | Optional | - |

## Example (as JSON)

```json
{
  "issue": "ORDER_ALREADY_CAPTURED",
  "description": "Order already captured.If 'intent=CAPTURE' only one capture per order is allowed."
}
```

