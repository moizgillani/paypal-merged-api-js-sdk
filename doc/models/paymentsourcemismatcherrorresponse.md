
# PAYMENTSOURCEMISMATCHERRORRESPONSE

## Structure

`PAYMENTSOURCEMISMATCHERRORRESPONSE`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `issue` | [`PaymentSourceMismatch2IssueEnum \| undefined`](../../doc/models/payment-source-mismatch-2-issue-enum.md) | Optional | - |
| `description` | [`PaymentSourceMismatch2DescriptionEnum \| undefined`](../../doc/models/payment-source-mismatch-2-description-enum.md) | Optional | - |

## Example (as JSON)

```json
{
  "issue": "PAYMENT_SOURCE_MISMATCH",
  "description": "The `payment_source` in the request must match the `payment_source` used for the authorization or capture referenced by `previous_transaction_reference`. Please use `previous_transaction_reference` whose `payment_source` matches with the `payment_source` specified in the order."
}
```

