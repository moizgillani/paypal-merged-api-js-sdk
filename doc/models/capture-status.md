
# Capture Status

The status of a captured payment.

## Structure

`CaptureStatus`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `status` | [`CaptureStatus1Enum \| undefined`](../../doc/models/capture-status-1-enum.md) | Optional | The status of the captured payment. |
| `statusDetails` | [`CaptureStatusDetails \| undefined`](../../doc/models/capture-status-details.md) | Optional | The details of the captured payment status. |

## Example (as JSON)

```json
{
  "status": "COMPLETED",
  "status_details": {
    "reason": "CHARGEBACK"
  }
}
```

