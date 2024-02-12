
# PAYPALIDERROR

## Structure

`PAYPALIDERROR`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `issue` | [`NotEligiblePaypalTxIdProcessingEnum \| undefined`](../../doc/models/not-eligible-paypal-tx-id-processing-enum.md) | Optional | - |
| `description` | [`PaypalTxIdProcessingPermissionNeededEnum \| undefined`](../../doc/models/paypal-tx-id-processing-permission-needed-enum.md) | Optional | - |

## Example (as JSON)

```json
{
  "issue": "NOT_ELIGIBLE_FOR_PAYPAL_TRANSACTION_ID_PROCESSING",
  "description": "API caller is not enable to process payments using `paypal_transaction_id`. Please contact customer support to request permissions to process transactions with PayPal transaction ID."
}
```

