
# DOMESTICTRANSACTIONREQUIREDERROR

## Structure

`DOMESTICTRANSACTIONREQUIREDERROR`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `issue` | [`DomesticTransactionRequired1IssueEnum \| undefined`](../../doc/models/domestic-transaction-required-1-issue-enum.md) | Optional | - |
| `description` | [`DomesticTransactionRequired1DescriptionEnum \| undefined`](../../doc/models/domestic-transaction-required-1-description-enum.md) | Optional | - |

## Example (as JSON)

```json
{
  "issue": "DOMESTIC_TRANSACTION_REQUIRED",
  "description": "This transaction requires the payee and payer to be resident in the same country, a domestic transaction is required to create this payment."
}
```

