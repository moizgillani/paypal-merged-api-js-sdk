
# Payment Source Definition

The payment source definition.

## Structure

`PaymentSourceDefinition`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `card` | [`CardRequest \| undefined`](../../doc/models/card-request.md) | Optional | The payment card to use to fund a payment. Can be a credit or debit card.<blockquote><strong>Note:</strong> Passing card number, cvv and expiry directly via the API requires <a href="https://www.pcisecuritystandards.org/pci_security/completing_self_assessment"> PCI SAQ D compliance</a>. <br>*PayPal offers a mechanism by which you do not have to take on the <strong>PCI SAQ D</strong> burden by using hosted fields - refer to <a href="https://developer.paypal.com/docs/checkout/advanced/integrate/">this Integration Guide</a>*.</blockquote> |
| `token` | [`Token \| undefined`](../../doc/models/token.md) | Optional | The tokenized payment source to fund a payment. |
| `paypal` | [`PayPalWallet \| undefined`](../../doc/models/pay-pal-wallet.md) | Optional | Indicates that PayPal Wallet is the payment source. Main use of this selection is to provide additional instructions associated with this choice like vaulting. |
| `bancontact` | [`BancontactPaymentInformation \| undefined`](../../doc/models/bancontact-payment-information.md) | Optional | Bancontact is the most popular online payment in Belgium. [More Details](https://www.bancontact.com/). |
| `blik` | [`BLIKPaymentInformation \| undefined`](../../doc/models/blik-payment-information.md) | Optional | BLIK is a mobile payment system, created by Polish Payment Standard in order to allow millions of users to pay in shops, payout cash in ATMs and make online purchases and payments. [More Details](https://blikmobile.pl/). |
| `eps` | [`AnEpsPaymentInformation \| undefined`](../../doc/models/an-eps-payment-information.md) | Optional | The eps transfer is an online payment method developed by many Austrian banks. [More Details](https://www.eps-ueberweisung.at/). |
| `giropay` | [`AGiropayPaymentInformation \| undefined`](../../doc/models/a-giropay-payment-information.md) | Optional | Giropay is an Internet payment System in Germany, based on online banking. [More Details](https://giropay.de/). |
| `ideal` | [`TheIDEALPaymentInformation \| undefined`](../../doc/models/the-ideal-payment-information.md) | Optional | The Dutch payment method iDEAL is an online payment method that enables consumers to pay online through their own bank. [More Details](https://www.ideal.nl/). |
| `mybank` | [`MyBankPaymentInformation \| undefined`](../../doc/models/my-bank-payment-information.md) | Optional | MyBank is an e-authorisation solution which enables safe digital payments and identity authentication through a consumer’s own online banking portal or mobile application. [More Details](https://www.mybank.eu/). |
| `p24` | [`P24PaymentInformation \| undefined`](../../doc/models/p24-payment-information.md) | Optional | P24 (Przelewy24) is a secure and fast online bank transfer service linked to all the major banks in Poland. [More Details](https://www.przelewy24.pl/). |
| `sofort` | [`SofortPaymentInformation \| undefined`](../../doc/models/sofort-payment-information.md) | Optional | SOFORT Banking is a real-time bank transfer payment method that buyers use to transfer funds directly to merchants from their bank accounts. [More Details](https://www.klarna.com/sofort/). |
| `trustly` | [`TrustlyPaymentInformation \| undefined`](../../doc/models/trustly-payment-information.md) | Optional | Trustly is a payment method that allows customers to shop and pay from their bank account. [More Details](https://www.trustly.net/). |
| `applePay` | [`ApplePayPaymentRequestObject \| undefined`](../../doc/models/apple-pay-payment-request-object.md) | Optional | ApplePay payment source, allows buyer to pay using ApplePay, both on Web as well as on Native. |
| `googlePay` | `unknown \| undefined` | Optional | Google Pay payment source, allows buyer to pay using Google Pay. |
| `venmo` | [`VenmoPaymentRequestObject \| undefined`](../../doc/models/venmo-payment-request-object.md) | Optional | Information needed to indicate that Venmo is being used to fund the payment. |

## Example (as JSON)

```json
{
  "card": {
    "id": "id6",
    "name": "name6",
    "number": "number6",
    "expiry": "expiry4",
    "security_code": "security_code8"
  },
  "token": {
    "id": "id6",
    "type": "type4"
  },
  "paypal": {
    "vault_id": "vault_id0",
    "email_address": "email_address0",
    "name": {
      "prefix": "prefix8",
      "given_name": "given_name2",
      "surname": "surname8",
      "middle_name": "middle_name0",
      "suffix": "suffix0"
    },
    "phone": {
      "phone_type": "OTHER",
      "phone_number": {
        "country_code": "country_code2",
        "national_number": "national_number6",
        "extension_number": "extension_number8"
      }
    },
    "birth_date": "birth_date8"
  },
  "bancontact": {
    "name": "name0",
    "country_code": "country_code0",
    "experience_context": {
      "brand_name": "brand_name2",
      "locale": "locale6",
      "shipping_preference": "NO_SHIPPING",
      "return_url": "return_url4",
      "cancel_url": "cancel_url6"
    },
    "attributes": {
      "key1": "val1",
      "key2": "val2"
    }
  },
  "blik": {
    "name": "name2",
    "country_code": "country_code2",
    "email": "email4",
    "experience_context": {
      "brand_name": "brand_name2",
      "locale": "locale6",
      "shipping_preference": "NO_SHIPPING",
      "return_url": "return_url4",
      "cancel_url": "cancel_url6"
    },
    "level_0": {
      "auth_code": "auth_code8"
    },
    "one_click": {
      "auth_code": "auth_code0",
      "consumer_reference": "consumer_reference2",
      "alias_label": "alias_label6",
      "alias_key": "alias_key4"
    }
  }
}
```

