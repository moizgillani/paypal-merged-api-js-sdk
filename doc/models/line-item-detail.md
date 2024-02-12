
# Line Item Detail

## Structure

`LineItemDetail`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `commodityCode` | `string \| undefined` | Optional | Code used to classify items purchased and track the total amount spent across various categories of products and services. Different corporate purchasing organizations may use different standards, but the United Nations Standard Products and Services Code (UNSPSC) is frequently used.<br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `12`, *Pattern*: `^[a-zA-Z0-9_'.-]*$` |
| `discountAmount` | [`Money \| undefined`](../../doc/models/money.md) | Optional | Use this field to break down the discount amount included in the total purchase amount. The value provided here will not add to the total purchase amount. The value cannot be negative. |
| `totalAmount` | [`Money \| undefined`](../../doc/models/money.md) | Optional | The subtotal for all items. Must equal the sum of (items[].unit_amount * items[].quantity) for all items. item_total.value can not be a negative number. |
| `unitOfMeasure` | `string \| undefined` | Optional | Unit of measure is a standard used to express the magnitude of a quantity in international trade. Most commonly used (but not limited to) examples are: Acre (ACR), Ampere (AMP), Centigram (CGM), Centimetre (CMT), Cubic inch (INQ), Cubic metre (MTQ), Fluid ounce (OZA), Foot (FOT), Hour (HUR), Item (ITM), Kilogram (KGM), Kilometre (KMT), Kilowatt (KWT), Liquid gallon (GLL), Liter (LTR), Pounds (LBS), Square foot (FTK).<br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `12`, *Pattern*: `^[a-zA-Z0-9_'.-]*$` |

## Example (as JSON)

```json
{
  "commodity_code": "commodity_code2",
  "discount_amount": {
    "currency_code": "currency_code2",
    "value": "value8"
  },
  "total_amount": {
    "currency_code": "currency_code2",
    "value": "value8"
  },
  "unit_of_measure": "unit_of_measure6"
}
```

