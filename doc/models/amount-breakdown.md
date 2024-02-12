
# Amount Breakdown

The breakdown of the amount. Breakdown provides details such as total item amount, total tax amount, shipping, handling, insurance, and discounts, if any.

## Structure

`AmountBreakdown`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `itemTotal` | [`Money \| undefined`](../../doc/models/money.md) | Optional | The subtotal for all items. Required if the request includes `purchase_units[].items[].unit_amount`. Must equal the sum of `(items[].unit_amount * items[].quantity)` for all items. <code>item_total.value</code> can not be a negative number. |
| `shipping` | [`Money \| undefined`](../../doc/models/money.md) | Optional | The shipping fee for all items within a given `purchase_unit`. <code>shipping.value</code> can not be a negative number. |
| `handling` | [`Money \| undefined`](../../doc/models/money.md) | Optional | The handling fee for all items within a given `purchase_unit`. <code>handling.value</code> can not be a negative number. |
| `taxTotal` | [`Money \| undefined`](../../doc/models/money.md) | Optional | The total tax for all items. Required if the request includes `purchase_units.items.tax`. Must equal the sum of `(items[].tax * items[].quantity)` for all items. <code>tax_total.value</code> can not be a negative number. |
| `insurance` | [`Money \| undefined`](../../doc/models/money.md) | Optional | The insurance fee for all items within a given `purchase_unit`. <code>insurance.value</code> can not be a negative number. |
| `shippingDiscount` | [`Money \| undefined`](../../doc/models/money.md) | Optional | The shipping discount for all items within a given `purchase_unit`. <code>shipping_discount.value</code> can not be a negative number. |
| `discount` | [`Money \| undefined`](../../doc/models/money.md) | Optional | The discount for all items within a given `purchase_unit`. <code>discount.value</code> can not be a negative number. |

## Example (as JSON)

```json
{
  "item_total": {
    "currency_code": "currency_code0",
    "value": "value6"
  },
  "shipping": {
    "currency_code": "currency_code0",
    "value": "value6"
  },
  "handling": {
    "currency_code": "currency_code2",
    "value": "value8"
  },
  "tax_total": {
    "currency_code": "currency_code4",
    "value": "value0"
  },
  "insurance": {
    "currency_code": "currency_code2",
    "value": "value8"
  }
}
```

