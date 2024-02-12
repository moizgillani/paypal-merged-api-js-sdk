
# Application Context

Customizes the payer experience during the approval process for the payment with PayPal.<blockquote><strong>Note:</strong> Partners and Marketplaces might configure <code>brand_name</code> and <code>shipping_preference</code> during partner account setup, which overrides the request values.</blockquote>

## Structure

`ApplicationContext`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `brandName` | `string \| undefined` | Optional | DEPRECATED. The label that overrides the business name in the PayPal account on the PayPal site. The fields in `application_context` are now available in the `experience_context` object under the `payment_source` which supports them (eg. `payment_source.paypal.experience_context.brand_name`). Please specify this field in the `experience_context` object instead of the `application_context` object.<br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `127` |
| `locale` | `string \| undefined` | Optional | The BCP 47-formatted locale of pages that the PayPal payment experience shows. PayPal supports a five-character code. For example, `da-DK`, `he-IL`, `id-ID`, `ja-JP`, `no-NO`, `pt-BR`, `ru-RU`, `sv-SE`, `th-TH`, `zh-CN`, `zh-HK`, or `zh-TW`.<br>**Constraints**: *Minimum Length*: `2`, *Maximum Length*: `10`, *Pattern*: `^[a-z]{2}(?:-[A-Z][a-z]{3})?(?:-(?:[A-Z]{2}\|[0-9]{3}))?$` |
| `landingPage` | [`ApplicationContextLandingPageEnum \| undefined`](../../doc/models/application-context-landing-page-enum.md) | Optional | DEPRECATED. DEPRECATED. The type of landing page to show on the PayPal site for customer checkout.  The fields in `application_context` are now available in the `experience_context` object under the `payment_source` which supports them (eg. `payment_source.paypal.experience_context.landing_page`). Please specify this field in the `experience_context` object instead of the `application_context` object.<br>**Default**: `ApplicationContextLandingPageEnum.NOPREFERENCE`<br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `13`, *Pattern*: `^[0-9A-Z_]+$` |
| `shippingPreference` | [`ApplicationContextShippingPreferenceEnum \| undefined`](../../doc/models/application-context-shipping-preference-enum.md) | Optional | DEPRECATED. DEPRECATED. The shipping preference: Displays the shipping address to the customer. Enables the customer to choose an address on the PayPal site. Restricts the customer from changing the address during the payment-approval process.  The fields in `application_context` are now available in the `experience_context` object under the `payment_source` which supports them (eg. `payment_source.paypal.experience_context.shipping_preference`). Please specify this field in the `experience_context` object instead of the `application_context` object.<br>**Default**: `ApplicationContextShippingPreferenceEnum.GETFROMFILE`<br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `20`, *Pattern*: `^[0-9A-Z_]+$` |
| `userAction` | [`ApplicationContextUserActionEnum \| undefined`](../../doc/models/application-context-user-action-enum.md) | Optional | DEPRECATED. Configures a <strong>Continue</strong> or <strong>Pay Now</strong> checkout flow.  The fields in `application_context` are now available in the `experience_context` object under the `payment_source` which supports them (eg. `payment_source.paypal.experience_context.user_action`). Please specify this field in the `experience_context` object instead of the `application_context` object.<br>**Default**: `ApplicationContextUserActionEnum.CONTINUE`<br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `8`, *Pattern*: `^[0-9A-Z_]+$` |
| `paymentMethod` | [`PaymentMethod \| undefined`](../../doc/models/payment-method.md) | Optional | DEPRECATED. The customer and merchant payment preferences. The fields in `application_context` are now available in the `experience_context` object under the `payment_source` which supports them (eg. `payment_source.paypal.experience_context.payment_method_selected`). Please specify this field in the `experience_context` object instead of the `application_context` object.. |
| `returnUrl` | `string \| undefined` | Optional | DEPRECATED. The URL where the customer is redirected after the customer approves the payment. The fields in `application_context` are now available in the `experience_context` object under the `payment_source` which supports them (eg. `payment_source.paypal.experience_context.return_url`). Please specify this field in the `experience_context` object instead of the `application_context` object. |
| `cancelUrl` | `string \| undefined` | Optional | DEPRECATED. The URL where the customer is redirected after the customer cancels the payment. The fields in `application_context` are now available in the `experience_context` object under the `payment_source` which supports them (eg. `payment_source.paypal.experience_context.cancel_url`). Please specify this field in the `experience_context` object instead of the `application_context` object. |
| `storedPaymentSource` | [`StoredPaymentSource \| undefined`](../../doc/models/stored-payment-source.md) | Optional | DEPRECATED. Provides additional details to process a payment using a `payment_source` that has been stored or is intended to be stored (also referred to as stored_credential or card-on-file).<br/>Parameter compatibility:<br/>`payment_type=ONE_TIME` is compatible only with `payment_initiator=CUSTOMER`. `usage=FIRST` is compatible only with `payment_initiator=CUSTOMER`. `previous_transaction_reference` or `previous_network_transaction_reference` is compatible only with `payment_initiator=MERCHANT`. Only one of the parameters - `previous_transaction_reference` and `previous_network_transaction_reference` - can be present in the request.  The fields in `stored_payment_source` are now available in the `stored_credential` object under the `payment_source` which supports them (eg. `payment_source.card.stored_credential.payment_initiator`). Please specify this field in the `payment_source` object instead of the `application_context` object. |

## Example (as JSON)

```json
{
  "landing_page": "NO_PREFERENCE",
  "shipping_preference": "GET_FROM_FILE",
  "user_action": "CONTINUE",
  "brand_name": "brand_name0",
  "locale": "locale4"
}
```

