
# PAYPALIDPROCESSINGINELIGIBILITYERROR

## Structure

`PAYPALIDPROCESSINGINELIGIBILITYERROR`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `issue` | [`NotEligiblePaypalTransactionIdProcessingEnum \| undefined`](../../doc/models/not-eligible-paypal-transaction-id-processing-enum.md) | Optional | - |
| `description` | [`PaypalTransactionIdProcessingPermissionErrorEnum \| undefined`](../../doc/models/paypal-transaction-id-processing-permission-error-enum.md) | Optional | - |

## Example (as JSON)

```json
{
  "issue": "NOT_ELIGIBLE_FOR_PAYPAL_TRANSACTION_ID_PROCESSING",
  "description": "API caller is not enable to process payments using `paypal_transaction_id`. Please contact customer support to request permissions to process transactions with PayPal transaction ID."
}
```

