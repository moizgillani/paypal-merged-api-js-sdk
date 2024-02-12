
# Card Request

The payment card to use to fund a payment. Can be a credit or debit card.<blockquote><strong>Note:</strong> Passing card number, cvv and expiry directly via the API requires <a href="https://www.pcisecuritystandards.org/pci_security/completing_self_assessment"> PCI SAQ D compliance</a>. <br>*PayPal offers a mechanism by which you do not have to take on the <strong>PCI SAQ D</strong> burden by using hosted fields - refer to <a href="https://developer.paypal.com/docs/checkout/advanced/integrate/">this Integration Guide</a>*.</blockquote>

## Structure

`CardRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `string \| undefined` | Optional | The PayPal-generated ID for the card.<br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `256`, *Pattern*: `^[A-Za-z0-9-_.+=]+$` |
| `name` | `string \| undefined` | Optional | The card holder's name as it appears on the card.<br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `300`, *Pattern*: `^.{1,300}$` |
| `number` | `string \| undefined` | Optional | The primary account number (PAN) for the payment card.<br>**Constraints**: *Minimum Length*: `13`, *Maximum Length*: `19`, *Pattern*: `^[0-9]{13,19}$` |
| `expiry` | `string \| undefined` | Optional | The card expiration year and month, in [Internet date format](https://tools.ietf.org/html/rfc3339#section-5.6).<br>**Constraints**: *Minimum Length*: `7`, *Maximum Length*: `7`, *Pattern*: `^[0-9]{4}-(0[1-9]\|1[0-2])$` |
| `securityCode` | `string \| undefined` | Optional | The three- or four-digit security code of the card. Also known as the CVV, CVC, CVN, CVE, or CID. This parameter cannot be present in the request when `payment_initiator=MERCHANT`.<br>**Constraints**: *Minimum Length*: `3`, *Maximum Length*: `4`, *Pattern*: `^[0-9]{3,4}$` |
| `lastDigits` | `string \| undefined` | Optional | The last digits of the payment card.<br>**Constraints**: *Minimum Length*: `2`, *Maximum Length*: `4`, *Pattern*: `^[0-9]{2,4}$` |
| `cardType` | [`CardBrandEnum \| undefined`](../../doc/models/card-brand-enum.md) | Optional | The card brand or network. Typically used in the response.<br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `255`, *Pattern*: `^[A-Z_]+$` |
| `type` | [`CardTypeEnum \| undefined`](../../doc/models/card-type-enum.md) | Optional | The payment card type.<br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `255`, *Pattern*: `^[A-Z_]+$` |
| `brand` | [`CardBrandEnum \| undefined`](../../doc/models/card-brand-enum.md) | Optional | The card brand or network. Typically used in the response.<br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `255`, *Pattern*: `^[A-Z_]+$` |
| `billingAddress` | [`PortableInternationalPostalAddress \| undefined`](../../doc/models/portable-international-postal-address.md) | Optional | The address of the payer. Supports only the `address_line_1`, `address_line_2`, `admin_area_1`, `admin_area_2`, `postal_code`, and `country_code` properties. Also referred to as the billing address of the customer. |
| `attributes` | [`CardAttributes \| undefined`](../../doc/models/card-attributes.md) | Optional | Additional attributes associated with the use of this card. |
| `vaultId` | `string \| undefined` | Optional | The PayPal-generated ID for the saved card payment source. Typically stored on the merchant's server.<br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `255`, *Pattern*: `^[0-9a-zA-Z_-]+$` |
| `storedCredential` | [`StoredPaymentSource \| undefined`](../../doc/models/stored-payment-source.md) | Optional | Provides additional details to process a payment using a `payment_source` that has been stored or is intended to be stored (also referred to as stored_credential or card-on-file).<br/>Parameter compatibility:<br/>`payment_type=ONE_TIME` is compatible only with `payment_initiator=CUSTOMER`. `usage=FIRST` is compatible only with `payment_initiator=CUSTOMER`. `previous_transaction_reference` or `previous_network_transaction_reference` is compatible only with `payment_initiator=MERCHANT`. Only one of the parameters - `previous_transaction_reference` and `previous_network_transaction_reference` - can be present in the request. |
| `networkToken` | [`NetworkToken \| undefined`](../../doc/models/network-token.md) | Optional | A 3rd party network token refers to a network token that the merchant provisions from and vaults with an external TSP (Token Service Provider) other than PayPal. |
| `experienceContext` | [`CardExperienceContext \| undefined`](../../doc/models/card-experience-context.md) | Optional | Customizes the payer experience during the 3DS Approval for payment. |

## Example (as JSON)

```json
{
  "id": "id8",
  "name": "name8",
  "number": "number4",
  "expiry": "expiry6",
  "security_code": "security_code0"
}
```

