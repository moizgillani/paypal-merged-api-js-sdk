
# Authorization Status

The status fields for an authorized payment.

## Structure

`AuthorizationStatus`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `status` | [`AuthorizedPaymentStatusEnum \| undefined`](../../doc/models/authorized-payment-status-enum.md) | Optional | The status for the authorized payment. |
| `statusDetails` | [`AuhorizationStatusDetails \| undefined`](../../doc/models/auhorization-status-details.md) | Optional | The details of the authorized order pending status. |

## Example (as JSON)

```json
{
  "status": "VOIDED",
  "status_details": {
    "reason": "PENDING_REVIEW"
  }
}
```

