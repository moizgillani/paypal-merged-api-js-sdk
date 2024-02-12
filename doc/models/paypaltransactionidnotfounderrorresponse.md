
# PAYPALTRANSACTIONIDNOTFOUNDERRORRESPONSE

## Structure

`PAYPALTRANSACTIONIDNOTFOUNDERRORRESPONSE`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `issue` | [`PaypalTransactionIdNotFound3IssueEnum \| undefined`](../../doc/models/paypal-transaction-id-not-found-3-issue-enum.md) | Optional | - |
| `description` | [`PaypalTransactionIdNotFound3DescriptionEnum \| undefined`](../../doc/models/paypal-transaction-id-not-found-3-description-enum.md) | Optional | - |

## Example (as JSON)

```json
{
  "issue": "PAYPAL_TRANSACTION_ID_NOT_FOUND",
  "description": "Specified `paypal_transaction_id` was not found. Verify the value and try the request again."
}
```

