
# PAYERACTIONREQUIRED

## Structure

`PAYERACTIONREQUIRED`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `issue` | [`PayerActionRequiredIssueEnum \| undefined`](../../doc/models/payer-action-required-issue-enum.md) | Optional | - |
| `description` | [`PayerActionRequiredDescriptionEnum \| undefined`](../../doc/models/payer-action-required-description-enum.md) | Optional | - |

## Example (as JSON)

```json
{
  "issue": "PAYER_ACTION_REQUIRED",
  "description": "Transaction cannot complete successfully, instruct the buyer to return to PayPal."
}
```

