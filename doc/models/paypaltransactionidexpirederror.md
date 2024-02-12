
# PAYPALTRANSACTIONIDEXPIREDERROR

## Structure

`PAYPALTRANSACTIONIDEXPIREDERROR`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `issue` | [`PaypalTransactionIdExpired1IssueEnum \| undefined`](../../doc/models/paypal-transaction-id-expired-1-issue-enum.md) | Optional | - |
| `description` | [`PaypalTransactionIdExpired1DescriptionEnum \| undefined`](../../doc/models/paypal-transaction-id-expired-1-description-enum.md) | Optional | - |

## Example (as JSON)

```json
{
  "issue": "PAYPAL_TRANSACTION_ID_EXPIRED",
  "description": "Specified `paypal_transaction_id` has expired. PayPal transaction ID expires 4 years after the date of the initial transaction."
}
```

