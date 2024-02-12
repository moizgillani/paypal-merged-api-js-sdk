
# PAYPALTRANSACTIONIDEXPIRED

## Structure

`PAYPALTRANSACTIONIDEXPIRED`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `issue` | [`PaypalTransactionIdExpiredIssueEnum \| undefined`](../../doc/models/paypal-transaction-id-expired-issue-enum.md) | Optional | - |
| `description` | [`PaypalTransactionIdExpiredDescriptionEnum \| undefined`](../../doc/models/paypal-transaction-id-expired-description-enum.md) | Optional | - |

## Example (as JSON)

```json
{
  "issue": "PAYPAL_TRANSACTION_ID_EXPIRED",
  "description": "Specified `paypal_transaction_id` has expired. PayPal transaction ID expires 4 years after the date of the initial transaction."
}
```

