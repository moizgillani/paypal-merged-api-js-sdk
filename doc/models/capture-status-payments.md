
# Capture Status Payments

The status of a captured payment.

## Structure

`CaptureStatusPayments`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `status` | [`CaptureStatus1Enum \| undefined`](../../doc/models/capture-status-1-enum.md) | Optional | The status of the captured payment. |
| `statusDetails` | [`CaptureStatusDetailsPayments \| undefined`](../../doc/models/capture-status-details-payments.md) | Optional | The details of the captured payment status. |

## Example (as JSON)

```json
{
  "status": "PARTIALLY_REFUNDED",
  "status_details": {
    "reason": "CHARGEBACK"
  }
}
```

