
# Refund Status Details

The details of the refund status.

## Structure

`RefundStatusDetails`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `reason` | [`RefundReasonEnum \| undefined`](../../doc/models/refund-reason-enum.md) | Optional | The reason why the refund has the `PENDING` or `FAILED` status. |

## Example (as JSON)

```json
{
  "reason": "ECHECK"
}
```

