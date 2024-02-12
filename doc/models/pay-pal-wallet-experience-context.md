
# Pay Pal Wallet Experience Context

Customizes the payer experience during the approval process for payment with PayPal.<blockquote><strong>Note:</strong> Partners and Marketplaces might configure <code>brand_name</code> and <code>shipping_preference</code> during partner account setup, which overrides the request values.</blockquote>

## Structure

`PayPalWalletExperienceContext`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `brandName` | `string \| undefined` | Optional | The label that overrides the business name in the PayPal account on the PayPal site. The pattern is defined by an external party and supports Unicode.<br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `127`, *Pattern*: `^.*$` |
| `locale` | `string \| undefined` | Optional | The BCP 47-formatted locale of pages that the PayPal payment experience shows. PayPal supports a five-character code. For example, `da-DK`, `he-IL`, `id-ID`, `ja-JP`, `no-NO`, `pt-BR`, `ru-RU`, `sv-SE`, `th-TH`, `zh-CN`, `zh-HK`, or `zh-TW`.<br>**Constraints**: *Minimum Length*: `2`, *Maximum Length*: `10`, *Pattern*: `^[a-z]{2}(?:-[A-Z][a-z]{3})?(?:-(?:[A-Z]{2}\|[0-9]{3}))?$` |
| `shippingPreference` | [`ShippingPreferenceEnum \| undefined`](../../doc/models/shipping-preference-enum.md) | Optional | The location from which the shipping address is derived.<br>**Default**: `ShippingPreferenceEnum.GETFROMFILE`<br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `24`, *Pattern*: `^[A-Z_]+$` |
| `returnUrl` | `string \| undefined` | Optional | The URL where the customer will be redirected upon approving a payment. |
| `cancelUrl` | `string \| undefined` | Optional | The URL where the customer will be redirected upon cancelling the payment approval. |
| `landingPage` | [`LandingPageTypeEnum \| undefined`](../../doc/models/landing-page-type-enum.md) | Optional | The type of landing page to show on the PayPal site for customer checkout.<br>**Default**: `LandingPageTypeEnum.NOPREFERENCE`<br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `13`, *Pattern*: `^[0-9A-Z_]+$` |
| `userAction` | [`UserActionEnum \| undefined`](../../doc/models/user-action-enum.md) | Optional | Configures a <strong>Continue</strong> or <strong>Pay Now</strong> checkout flow.<br>**Default**: `UserActionEnum.CONTINUE`<br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `8`, *Pattern*: `^[0-9A-Z_]+$` |
| `paymentMethodPreference` | [`MerchantPreferredPaymentMethodsEnum \| undefined`](../../doc/models/merchant-preferred-payment-methods-enum.md) | Optional | The merchant-preferred payment methods.<br>**Default**: `MerchantPreferredPaymentMethodsEnum.UNRESTRICTED`<br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `255`, *Pattern*: `^[0-9A-Z_]+$` |

## Example (as JSON)

```json
{
  "brand_name": "EXAMPLE INC",
  "shipping_preference": "SET_PROVIDED_ADDRESS",
  "return_url": "https://example.com/returnUrl",
  "cancel_url": "https://example.com/cancelUrl",
  "landing_page": "LOGIN",
  "user_action": "PAY_NOW",
  "payment_method_preference": "IMMEDIATE_PAYMENT_REQUIRED",
  "locale": "locale0"
}
```

