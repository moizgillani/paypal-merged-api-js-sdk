
# ORDERALREADYAUTHORIZEDERROR

## Structure

`ORDERALREADYAUTHORIZEDERROR`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `issue` | [`OrderAlreadyAuthorized1IssueEnum \| undefined`](../../doc/models/order-already-authorized-1-issue-enum.md) | Optional | - |
| `description` | [`OrderAlreadyAuthorized1DescriptionEnum \| undefined`](../../doc/models/order-already-authorized-1-description-enum.md) | Optional | - |

## Example (as JSON)

```json
{
  "issue": "ORDER_ALREADY_AUTHORIZED",
  "description": "Order already authorized.If 'intent=AUTHORIZE' only one authorization per order is allowed."
}
```

