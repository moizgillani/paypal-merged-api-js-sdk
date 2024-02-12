
# Application Context Shipping Preference Enum

DEPRECATED. DEPRECATED. The shipping preference: Displays the shipping address to the customer. Enables the customer to choose an address on the PayPal site. Restricts the customer from changing the address during the payment-approval process.  The fields in `application_context` are now available in the `experience_context` object under the `payment_source` which supports them (eg. `payment_source.paypal.experience_context.shipping_preference`). Please specify this field in the `experience_context` object instead of the `application_context` object.

## Enumeration

`ApplicationContextShippingPreferenceEnum`

## Fields

| Name |
|  --- |
| `gETFROMFILE` |
| `nOSHIPPING` |
| `sETPROVIDEDADDRESS` |

