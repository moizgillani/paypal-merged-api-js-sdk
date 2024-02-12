
# PAYERACTIONREQUIREDERROR

## Structure

`PAYERACTIONREQUIREDERROR`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `issue` | [`PayerActionRequired1IssueEnum \| undefined`](../../doc/models/payer-action-required-1-issue-enum.md) | Optional | - |
| `description` | [`PayerActionRequired1DescriptionEnum \| undefined`](../../doc/models/payer-action-required-1-description-enum.md) | Optional | - |

## Example (as JSON)

```json
{
  "issue": "PAYER_ACTION_REQUIRED",
  "description": "Transaction cannot complete successfully, instruct the buyer to return to PayPal."
}
```

