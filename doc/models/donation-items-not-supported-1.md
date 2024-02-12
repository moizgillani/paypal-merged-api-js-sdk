
# Donation Items Not Supported 1

## Structure

`DonationItemsNotSupported1`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `issue` | [`DonationItemsNotSupported1IssueEnum \| undefined`](../../doc/models/donation-items-not-supported-1-issue-enum.md) | Optional | - |
| `description` | [`DonationItemsNotSupported1DescriptionEnum \| undefined`](../../doc/models/donation-items-not-supported-1-description-enum.md) | Optional | - |

## Example (as JSON)

```json
{
  "issue": "DONATION_ITEMS_NOT_SUPPORTED",
  "description": "If 'purchase_unit' has \"DONATION\" as the 'items.category' then the Order can at most have one purchase_unit. Multiple purchase_units are not supported if either of them have at least one items with category as \"DONATION\"."
}
```

