
# INVALIDPICKUPADDRESS

## Structure

`INVALIDPICKUPADDRESS`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `issue` | [`InvalidPickupAddressIssueEnum \| undefined`](../../doc/models/invalid-pickup-address-issue-enum.md) | Optional | - |
| `description` | [`InvalidPickupAddressDescriptionEnum \| undefined`](../../doc/models/invalid-pickup-address-description-enum.md) | Optional | - |

## Example (as JSON)

```json
{
  "issue": "INVALID_PICKUP_ADDRESS",
  "description": "If the 'shipping_option.type' is set as 'PICKUP' then the 'shipping_detail.name.full_name' should start with 'S2S' meaning Ship To Store. Example: 'S2S My Store'."
}
```

