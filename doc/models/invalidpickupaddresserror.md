
# INVALIDPICKUPADDRESSERROR

## Structure

`INVALIDPICKUPADDRESSERROR`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `issue` | [`InvalidPickupAddress1IssueEnum \| undefined`](../../doc/models/invalid-pickup-address-1-issue-enum.md) | Optional | - |
| `description` | [`InvalidPickupAddress1DescriptionEnum \| undefined`](../../doc/models/invalid-pickup-address-1-description-enum.md) | Optional | - |

## Example (as JSON)

```json
{
  "issue": "INVALID_PICKUP_ADDRESS",
  "description": "If the 'shipping_option.type' is set as 'PICKUP' then the 'shipping_detail.name.full_name' should start with 'S2S' meaning Ship To Store. Example: 'S2S My Store'."
}
```

