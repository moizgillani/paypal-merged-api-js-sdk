
# Shipping Details Payment Method Tokens

The shipping details.

## Structure

`ShippingDetailsPaymentMethodTokens`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `name` | [`PartyName \| undefined`](../../doc/models/party-name.md) | Optional | The name of the person to whom to ship the items. Supports only the `full_name` property. |
| `type` | [`ShippingType1Enum \| undefined`](../../doc/models/shipping-type-1-enum.md) | Optional | The method by which the payer wants to get their items from the payee e.g shipping, in-person pickup. Either type or options but not both may be present.<br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `255`, *Pattern*: `^[0-9A-Z_]+$` |
| `address` | [`PortablePostalAddressMediumGrained \| undefined`](../../doc/models/portable-postal-address-medium-grained.md) | Optional | The address of the person to whom to ship the items. Supports only the `address_line_1`, `address_line_2`, `admin_area_1`, `admin_area_2`, `postal_code`, and `country_code` properties. |

## Example (as JSON)

```json
{
  "name": {
    "prefix": "prefix8",
    "given_name": "given_name2",
    "surname": "surname8",
    "middle_name": "middle_name0",
    "suffix": "suffix0"
  },
  "type": "SHIPPING",
  "address": {
    "address_line_1": "address_line_16",
    "address_line_2": "address_line_26",
    "address_line_3": "address_line_32",
    "admin_area_4": "admin_area_40",
    "admin_area_3": "admin_area_38",
    "country_code": "country_code6"
  }
}
```

