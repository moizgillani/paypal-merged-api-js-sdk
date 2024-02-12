
# Card Request Allof 1

## Structure

`CardRequestAllof1`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `verificationMethod` | `string \| undefined` | Optional | The API caller can opt in to verify the payment token through PayPal offered verification services (e.g. Smart Dollar Auth, 3DS).<br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `255`, *Pattern*: `^[0-9A-Z_]+$` |
| `experienceContext` | [`ExperienceContextPaymentMethodTokens \| undefined`](../../doc/models/experience-context-payment-method-tokens.md) | Optional | Customizes the Vault creation flow experience for your customers. |

## Example (as JSON)

```json
{
  "verification_method": "verification_method4",
  "experience_context": {
    "brand_name": "brand_name2",
    "locale": "locale6",
    "return_url": "return_url4",
    "cancel_url": "cancel_url6",
    "shipping_preference": "shipping_preference8"
  }
}
```

