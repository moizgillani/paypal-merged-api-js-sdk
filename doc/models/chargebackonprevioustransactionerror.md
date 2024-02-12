
# CHARGEBACKONPREVIOUSTRANSACTIONERROR

## Structure

`CHARGEBACKONPREVIOUSTRANSACTIONERROR`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `issue` | [`PreviousTransactionReferenceChargebackIssue1Enum \| undefined`](../../doc/models/previous-transaction-reference-chargeback-issue-1-enum.md) | Optional | - |
| `description` | [`CaptureWithChargebackNotUsableDescEnum \| undefined`](../../doc/models/capture-with-chargeback-not-usable-desc-enum.md) | Optional | - |

## Example (as JSON)

```json
{
  "issue": "PREVIOUS_TRANSACTION_REFERENCE_HAS_CHARGEBACK",
  "description": "The capture referenced by `previous_transaction_reference` has a chargeback and hence cannot be used for this order. Please use a `previous_transaction_reference` which does not have a chargeback."
}
```

