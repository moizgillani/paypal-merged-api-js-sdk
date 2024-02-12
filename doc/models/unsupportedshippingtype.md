
# UNSUPPORTEDSHIPPINGTYPE

## Structure

`UNSUPPORTEDSHIPPINGTYPE`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `issue` | [`UnsupportedShippingTypeIssueEnum \| undefined`](../../doc/models/unsupported-shipping-type-issue-enum.md) | Optional | - |
| `description` | [`UnsupportedShippingTypeDescriptionEnum \| undefined`](../../doc/models/unsupported-shipping-type-description-enum.md) | Optional | - |

## Example (as JSON)

```json
{
  "issue": "UNSUPPORTED_SHIPPING_TYPE",
  "description": "The provided `shipping.type` is only supported for `application_context.shipping_preference`=`SET_PROVIDED_ADDRESS` or `NO_SHIPPING`."
}
```

