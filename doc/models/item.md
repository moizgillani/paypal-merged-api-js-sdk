
# Item

The details for the items to be purchased.

## Structure

`Item`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `name` | `string` | Required | The item name or title.<br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `127` |
| `unitAmount` | [`Money`](../../doc/models/money.md) | Required | The item price or rate per unit. If you specify <code>unit_amount</code>, <code>purchase_units[].amount.breakdown.item_total</code> is required. Must equal <code>unit_amount * quantity</code> for all items. <code>unit_amount.value</code> can not be a negative number. |
| `tax` | [`Money \| undefined`](../../doc/models/money.md) | Optional | The item tax for each unit. If <code>tax</code> is specified, <code>purchase_units[].amount.breakdown.tax_total</code> is required. Must equal <code>tax * quantity</code> for all items. <code>tax.value</code> can not be a negative number. |
| `quantity` | `string` | Required | The item quantity. Must be a whole number.<br>**Constraints**: *Maximum Length*: `10`, *Pattern*: `^[1-9][0-9]{0,9}$` |
| `description` | `string \| undefined` | Optional | The detailed item description.<br>**Constraints**: *Maximum Length*: `127` |
| `sku` | `string \| undefined` | Optional | The stock keeping unit (SKU) for the item.<br>**Constraints**: *Maximum Length*: `127` |
| `category` | [`ItemCategoryEnum \| undefined`](../../doc/models/item-category-enum.md) | Optional | The item category type.<br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `20` |

## Example (as JSON)

```json
{
  "name": "name2",
  "unit_amount": {
    "currency_code": "USD",
    "value": "100.00"
  },
  "quantity": "quantity8",
  "tax": {
    "currency_code": "currency_code0",
    "value": "value6"
  },
  "description": "description2",
  "sku": "sku8",
  "category": "DIGITAL_GOODS"
}
```

