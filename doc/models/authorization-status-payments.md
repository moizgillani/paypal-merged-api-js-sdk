
# Authorization Status Payments

The status fields for an authorized payment.

## Structure

`AuthorizationStatusPayments`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `status` | [`AuthorizedPaymentStatusEnum \| undefined`](../../doc/models/authorized-payment-status-enum.md) | Optional | The status for the authorized payment. |
| `statusDetails` | [`AuhorizationStatusDetailsPayments \| undefined`](../../doc/models/auhorization-status-details-payments.md) | Optional | The details of the authorized order pending status. |

## Example (as JSON)

```json
{
  "status": "DENIED",
  "status_details": {
    "reason": "PENDING_REVIEW"
  }
}
```

