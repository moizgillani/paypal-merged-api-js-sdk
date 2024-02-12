
# SHIPPINGOPTIONSNOTSUPPORTED

## Structure

`SHIPPINGOPTIONSNOTSUPPORTED`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `issue` | [`ShippingOptionNotSupportedIssueEnum \| undefined`](../../doc/models/shipping-option-not-supported-issue-enum.md) | Optional | - |
| `description` | [`ShippingOptionNotSupportedDescriptionEnum \| undefined`](../../doc/models/shipping-option-not-supported-description-enum.md) | Optional | - |

## Example (as JSON)

```json
{
  "issue": "SHIPPING_OPTIONS_NOT_SUPPORTED",
  "description": "Shipping options are not supported when `shipping.type` is specified or when 'application_context.shipping_preference' is set as 'NO_SHIPPING' or 'SET_PROVIDED_ADDRESS'."
}
```

