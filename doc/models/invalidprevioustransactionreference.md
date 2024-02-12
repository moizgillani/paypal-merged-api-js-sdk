
# INVALIDPREVIOUSTRANSACTIONREFERENCE

## Structure

`INVALIDPREVIOUSTRANSACTIONREFERENCE`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `issue` | [`InvalidPreviousTransactionReferenceIssueEnum \| undefined`](../../doc/models/invalid-previous-transaction-reference-issue-enum.md) | Optional | - |
| `description` | [`InvalidPreviousTransactionReferenceDescriptionEnum \| undefined`](../../doc/models/invalid-previous-transaction-reference-description-enum.md) | Optional | - |

## Example (as JSON)

```json
{
  "issue": "INVALID_PREVIOUS_TRANSACTION_REFERENCE",
  "description": "The authorization or capture referenced by `previous_transaction_reference` is not valid. This could be either because the previous_transaction_reference is not found or doesn't belong to the payee. Please use a valid `previous_transaction_reference`."
}
```

