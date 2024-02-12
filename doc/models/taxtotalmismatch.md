
# TAXTOTALMISMATCH

## Structure

`TAXTOTALMISMATCH`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `issue` | [`TaxTotalMismatchIssueEnum \| undefined`](../../doc/models/tax-total-mismatch-issue-enum.md) | Optional | - |
| `description` | [`TaxTotalMismatchDescriptionEnum \| undefined`](../../doc/models/tax-total-mismatch-description-enum.md) | Optional | - |

## Example (as JSON)

```json
{
  "issue": "TAX_TOTAL_MISMATCH",
  "description": "Should equal sum of (tax * quantity) across all items for a given purchase_unit."
}
```

