
# ORDERALREADYAUTHORIZED

## Structure

`ORDERALREADYAUTHORIZED`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `issue` | [`OrderAlreadyAuthorizedIssueEnum \| undefined`](../../doc/models/order-already-authorized-issue-enum.md) | Optional | - |
| `description` | [`OrderAlreadyAuthorizedDescriptionEnum \| undefined`](../../doc/models/order-already-authorized-description-enum.md) | Optional | - |

## Example (as JSON)

```json
{
  "issue": "ORDER_ALREADY_AUTHORIZED",
  "description": "Order already captured. If 'intent=CAPTURE' only one capture per order is allowed."
}
```

