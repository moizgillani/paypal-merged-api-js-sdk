
# Payment Source Details

The payment source used to fund the payment.

## Structure

`PaymentSourceDetails`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `card` | [`CardResponse \| undefined`](../../doc/models/card-response.md) | Optional | The payment card to use to fund a payment. Card can be a credit or debit card. |
| `paypal` | [`PayPalWalletResponse \| undefined`](../../doc/models/pay-pal-wallet-response.md) | Optional | The PayPal Wallet response. |
| `bancontact` | [`BancontactPaymentObject \| undefined`](../../doc/models/bancontact-payment-object.md) | Optional | Information used to pay Bancontact. |
| `blik` | [`BLIKPaymentObject \| undefined`](../../doc/models/blik-payment-object.md) | Optional | Information used to pay using BLIK. |
| `eps` | [`AnEpsPaymentObject \| undefined`](../../doc/models/an-eps-payment-object.md) | Optional | Information used to pay using eps. |
| `giropay` | [`AGiropayPaymentObject \| undefined`](../../doc/models/a-giropay-payment-object.md) | Optional | Information needed to pay using giropay. |
| `ideal` | [`TheIDEALPaymentObject \| undefined`](../../doc/models/the-ideal-payment-object.md) | Optional | Information used to pay using iDEAL. |
| `mybank` | [`MyBankPaymentObject \| undefined`](../../doc/models/my-bank-payment-object.md) | Optional | Information used to pay using MyBank. |
| `p24` | [`P24PaymentObject \| undefined`](../../doc/models/p24-payment-object.md) | Optional | Information used to pay using P24(Przelewy24). |
| `sofort` | [`SofortPaymentObject \| undefined`](../../doc/models/sofort-payment-object.md) | Optional | Information used to pay using Sofort. |
| `trustly` | [`TrustlyPaymentObject \| undefined`](../../doc/models/trustly-payment-object.md) | Optional | Information needed to pay using Trustly. |
| `venmo` | [`VenmoWalletResponseObject \| undefined`](../../doc/models/venmo-wallet-response-object.md) | Optional | Venmo wallet response. |

## Example (as JSON)

```json
{
  "card": {
    "name": "name6",
    "last_digits": "last_digits0",
    "brand": "CETELEM",
    "available_networks": [
      "DELTA"
    ],
    "type": "CREDIT"
  },
  "paypal": {
    "email_address": "email_address0",
    "account_id": "account_id4",
    "name": {
      "prefix": "prefix8",
      "given_name": "given_name2",
      "surname": "surname8",
      "middle_name": "middle_name0",
      "suffix": "suffix0"
    },
    "phone_type": "MOBILE",
    "phone_number": {
      "national_number": "national_number6"
    }
  },
  "bancontact": {
    "name": "name0",
    "country_code": "country_code0",
    "bic": "bic2",
    "iban_last_chars": "iban_last_chars8",
    "card_last_digits": "card_last_digits4"
  },
  "blik": {
    "name": "name2",
    "country_code": "country_code2",
    "email": "email4",
    "one_click": {
      "consumer_reference": "consumer_reference2"
    }
  },
  "eps": {
    "name": "name6",
    "country_code": "country_code6",
    "bic": "bic8"
  }
}
```

