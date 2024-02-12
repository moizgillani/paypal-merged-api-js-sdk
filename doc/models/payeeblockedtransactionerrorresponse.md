
# PAYEEBLOCKEDTRANSACTIONERRORRESPONSE

## Structure

`PAYEEBLOCKEDTRANSACTIONERRORRESPONSE`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `issue` | [`PayeeBlockedTransaction2IssueEnum \| undefined`](../../doc/models/payee-blocked-transaction-2-issue-enum.md) | Optional | - |
| `description` | [`PayeeBlockedTransaction2DescriptionEnum \| undefined`](../../doc/models/payee-blocked-transaction-2-description-enum.md) | Optional | - |

## Example (as JSON)

```json
{
  "issue": "PAYEE_BLOCKED_TRANSACTION",
  "description": "The Fraud settings for this seller are such that this payment cannot be executed."
}
```

