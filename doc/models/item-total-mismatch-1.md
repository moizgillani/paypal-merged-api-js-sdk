
# Item Total Mismatch 1

## Structure

`ItemTotalMismatch1`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `issue` | [`ItemTotalMismatch1IssueEnum \| undefined`](../../doc/models/item-total-mismatch-1-issue-enum.md) | Optional | - |
| `description` | [`ItemTotalMismatch1DescriptionEnum \| undefined`](../../doc/models/item-total-mismatch-1-description-enum.md) | Optional | - |

## Example (as JSON)

```json
{
  "issue": "ITEM_TOTAL_MISMATCH",
  "description": "Should equal sum of (unit_amount * quantity) across all items for a given purchase_unit."
}
```

