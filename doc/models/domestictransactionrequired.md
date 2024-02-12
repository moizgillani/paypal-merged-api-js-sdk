
# DOMESTICTRANSACTIONREQUIRED

## Structure

`DOMESTICTRANSACTIONREQUIRED`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `issue` | [`DomesticTransactionRequiredIssueEnum \| undefined`](../../doc/models/domestic-transaction-required-issue-enum.md) | Optional | - |
| `description` | [`DomesticTransactionRequiredDescriptionEnum \| undefined`](../../doc/models/domestic-transaction-required-description-enum.md) | Optional | - |

## Example (as JSON)

```json
{
  "issue": "DOMESTIC_TRANSACTION_REQUIRED",
  "description": "This transaction requires the payee and payer to be resident in the same country, a domestic transaction is required to create this payment."
}
```

