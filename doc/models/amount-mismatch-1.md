
# Amount Mismatch 1

## Structure

`AmountMismatch1`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `issue` | [`AmountMismatch1IssueEnum \| undefined`](../../doc/models/amount-mismatch-1-issue-enum.md) | Optional | - |
| `description` | [`AmountMismatch1DescriptionEnum \| undefined`](../../doc/models/amount-mismatch-1-description-enum.md) | Optional | - |

## Example (as JSON)

```json
{
  "issue": "AMOUNT_MISMATCH",
  "description": "Should equal item_total + tax_total + shipping + handling + insurance - shipping_discount - discount."
}
```

