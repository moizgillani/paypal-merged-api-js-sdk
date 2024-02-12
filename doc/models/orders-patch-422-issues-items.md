
# Orders Patch 422 Issues Items

## Structure

`OrdersPatch422IssuesItems`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `issue` | [`AmountMismatchIssueEnum \| undefined`](../../doc/models/amount-mismatch-issue-enum.md) | Optional | - |
| `description` | [`AmountMismatchDescriptionEnum \| undefined`](../../doc/models/amount-mismatch-description-enum.md) | Optional | - |

## Example (as JSON)

```json
{
  "issue": "AMOUNT_MISMATCH",
  "description": "Should equal item_total + tax_total + shipping + handling + insurance - shipping_discount - discount."
}
```

