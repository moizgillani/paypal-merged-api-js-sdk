
# Refund Status Payments

The refund status.

## Structure

`RefundStatusPayments`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `status` | [`RefundStatus1Enum \| undefined`](../../doc/models/refund-status-1-enum.md) | Optional | The status of the refund. |
| `statusDetails` | [`RefundStatusDetailsPayments \| undefined`](../../doc/models/refund-status-details-payments.md) | Optional | The details of the refund status. |

## Example (as JSON)

```json
{
  "status": "PENDING",
  "status_details": {
    "reason": "ECHECK"
  }
}
```

