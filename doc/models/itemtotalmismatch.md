
# ITEMTOTALMISMATCH

## Structure

`ITEMTOTALMISMATCH`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `issue` | [`ItemTotalMismatchIssueEnum \| undefined`](../../doc/models/item-total-mismatch-issue-enum.md) | Optional | - |
| `description` | [`ItemTotalMismatchDescriptionEnum \| undefined`](../../doc/models/item-total-mismatch-description-enum.md) | Optional | - |

## Example (as JSON)

```json
{
  "issue": "ITEM_TOTAL_MISMATCH",
  "description": "Should equal sum of (unit_amount * quantity) across all items for a given purchase_unit."
}
```

