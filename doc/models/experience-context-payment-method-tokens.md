
# Experience Context Payment Method Tokens

Customizes the Vault creation flow experience for your customers.

## Structure

`ExperienceContextPaymentMethodTokens`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `brandName` | `string \| undefined` | Optional | The label that overrides the business name in the PayPal account on the PayPal site. The pattern is defined by an external party and supports Unicode.<br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `300`, *Pattern*: `^.*$` |
| `locale` | `string \| undefined` | Optional | The BCP 47-formatted locale of pages that the PayPal vaulting experience shows. PayPal supports a five-character code. For example, `DA-DK`, `HE-IL`, `ID-ID`, `JA-JP`, `NO-NO`, `PT-BR`, `RU-RU`, `SV-SE`, `TH-TH`, `ZH-CN`, `ZH-HK`, or `ZH-TW`.<br>**Constraints**: *Minimum Length*: `2`, *Maximum Length*: `10`, *Pattern*: `^[a-z]{2}(?:-[A-Z][a-z]{3})?(?:-(?:[A-Z]{2}\|[0-9]{3}))?$` |
| `returnUrl` | `string \| undefined` | Optional | The URL where the customer is redirected after customer approves leaves the flow. It is a required field for contingency flows like PayPal wallet, 3DS.<br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `4000` |
| `cancelUrl` | `string \| undefined` | Optional | The URL where the customer is redirected after customer cancels or leaves the flow. It is a required field for contingency flows like PayPal wallet, 3DS.<br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `4000` |
| `shippingPreference` | `string \| undefined` | Optional | The shipping preference. This only applies to PayPal payment source.<br>**Default**: `'GET_FROM_FILE'`<br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `255`, *Pattern*: `^[0-9A-Z_]+$` |
| `vaultInstruction` | `string \| undefined` | Optional | Vault Instruction on action to be performed after a successful payer approval.<br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `255`, *Pattern*: `^[A-Z_]+$` |

## Example (as JSON)

```json
{
  "shipping_preference": "GET_FROM_FILE",
  "brand_name": "brand_name4",
  "locale": "locale8",
  "return_url": "return_url4",
  "cancel_url": "cancel_url8"
}
```

