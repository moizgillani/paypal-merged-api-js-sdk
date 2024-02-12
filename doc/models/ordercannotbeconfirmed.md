
# ORDERCANNOTBECONFIRMED

## Structure

`ORDERCANNOTBECONFIRMED`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `issue` | [`OrderCannotBeConfirmedIssueEnum \| undefined`](../../doc/models/order-cannot-be-confirmed-issue-enum.md) | Optional | - |
| `description` | [`OrderCannotBeConfirmedDescriptionEnum \| undefined`](../../doc/models/order-cannot-be-confirmed-description-enum.md) | Optional | - |

## Example (as JSON)

```json
{
  "issue": "ORDER_CANNOT_BE_CONFIRMED",
  "description": "An order with status = 'COMPLETED' cannot be confirmed again."
}
```

