
# Refund Status

The refund status.

## Structure

`RefundStatus`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `status` | [`RefundStatus1Enum \| undefined`](../../doc/models/refund-status-1-enum.md) | Optional | The status of the refund. |
| `statusDetails` | [`RefundStatusDetails \| undefined`](../../doc/models/refund-status-details.md) | Optional | The details of the refund status. |

## Example (as JSON)

```json
{
  "status": "CANCELLED",
  "status_details": {
    "reason": "ECHECK"
  }
}
```

