
# Level 3 Card Processing Data

The level 3 card processing data collections, If your merchant account has been configured for Level 3 processing this field will be passed to the processor on your behalf. Please contact your PayPal Technical Account Manager to define level 3 data for your business.

## Structure

`Level3CardProcessingData`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `shippingAmount` | [`Money \| undefined`](../../doc/models/money.md) | Optional | Use this field to break down the shipping cost included in the total purchase amount. The value provided here will not add to the total purchase amount. The value cannot be negative. |
| `dutyAmount` | [`Money \| undefined`](../../doc/models/money.md) | Optional | Use this field to break down the duty amount included in the total purchase amount. The value provided here will not add to the total purchase amount. The value cannot be negative. |
| `discountAmount` | [`Money \| undefined`](../../doc/models/money.md) | Optional | Use this field to break down the discount amount included in the total purchase amount. The value provided here will not add to the total purchase amount. The value cannot be negative. |
| `shippingAddress` | [`PortableInternationalPostalAddress \| undefined`](../../doc/models/portable-international-postal-address.md) | Optional | The address of the payer. Supports only the `address_line_1`, `address_line_2`, `admin_area_1`, `admin_area_2`, `postal_code`, and `country_code` properties. Also referred to as the billing address of the customer. |
| `shipsFromPostalCode` | `string \| undefined` | Optional | Use this field to specify the postal code of the shipping location.<br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `60`, *Pattern*: `^[a-zA-Z0-9_'.-]*$` |
| `lineItems` | [`Lineitem[] \| undefined`](../../doc/models/lineitem.md) | Optional | A list of the items that were purchased with this payment. If your merchant account has been configured for Level 3 processing this field will be passed to the processor on your behalf.<br>**Constraints**: *Minimum Items*: `1`, *Maximum Items*: `100` |

## Example (as JSON)

```json
{
  "shipping_amount": {
    "currency_code": "currency_code0",
    "value": "value6"
  },
  "duty_amount": {
    "currency_code": "currency_code6",
    "value": "value2"
  },
  "discount_amount": {
    "currency_code": "currency_code2",
    "value": "value8"
  },
  "shipping_address": {
    "address_line_1": "address_line_10",
    "address_line_2": "address_line_20",
    "address_line_3": "address_line_36",
    "admin_area_4": "admin_area_44",
    "admin_area_3": "admin_area_32",
    "country_code": "country_code0"
  },
  "ships_from_postal_code": "ships_from_postal_code6"
}
```

