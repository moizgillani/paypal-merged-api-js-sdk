
# Tax Total Mismatch 1

## Structure

`TaxTotalMismatch1`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `issue` | [`TaxTotalMismatch1IssueEnum \| undefined`](../../doc/models/tax-total-mismatch-1-issue-enum.md) | Optional | - |
| `description` | [`TaxTotalMismatch1DescriptionEnum \| undefined`](../../doc/models/tax-total-mismatch-1-description-enum.md) | Optional | - |

## Example (as JSON)

```json
{
  "issue": "TAX_TOTAL_MISMATCH",
  "description": "Should equal sum of (tax * quantity) across all items for a given purchase_unit."
}
```

