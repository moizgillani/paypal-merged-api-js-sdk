
# PREVIOUSTRANSACTIONREFERENCEVOIDEDERROR

## Structure

`PREVIOUSTRANSACTIONREFERENCEVOIDEDERROR`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `issue` | [`PreviousTransactionReferenceVoided1IssueEnum \| undefined`](../../doc/models/previous-transaction-reference-voided-1-issue-enum.md) | Optional | - |
| `description` | [`PreviousTransactionReferenceVoided1DescriptionEnum \| undefined`](../../doc/models/previous-transaction-reference-voided-1-description-enum.md) | Optional | - |

## Example (as JSON)

```json
{
  "issue": "PREVIOUS_TRANSACTION_REFERENCE_VOIDED",
  "description": "The status of authorization referenced by `previous_transaction_reference` is `VOIDED` and hence cannot be used for this order. Please use a `previous_transaction_reference` whose status is not `VOIDED`."
}
```

