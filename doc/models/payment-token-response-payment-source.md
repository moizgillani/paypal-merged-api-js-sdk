
# Payment Token Response Payment Source

The vaulted payment method details.

## Structure

`PaymentTokenResponsePaymentSource`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `card` | [`CardResponsePaymentMethodTokens \| undefined`](../../doc/models/card-response-payment-method-tokens.md) | Optional | Full representation of a Card Payment Token. |
| `paypal` | [`PayPalWalletResponsePaymentMethodTokens \| undefined`](../../doc/models/pay-pal-wallet-response-payment-method-tokens.md) | Optional | Full representation of a PayPal Payment Token. |
| `venmo` | [`VenmoResponse \| undefined`](../../doc/models/venmo-response.md) | Optional | Full representation of a Venmo Payment Token. |
| `applePay` | [`ApplePayResponse \| undefined`](../../doc/models/apple-pay-response.md) | Optional | A resource representing a response for Apple Pay. |
| `bank` | [`BankResponse \| undefined`](../../doc/models/bank-response.md) | Optional | Full representation of a Bank Payment Token. |

## Example (as JSON)

```json
{
  "card": {
    "name": "name6",
    "last_digits": "last_digits0",
    "brand": "CETELEM",
    "expiry": "expiry4",
    "billing_address": {
      "key1": "val1",
      "key2": "val2"
    }
  },
  "paypal": {
    "description": "description2",
    "shipping": {
      "name": {
        "prefix": "prefix8",
        "given_name": "given_name2",
        "surname": "surname8",
        "middle_name": "middle_name0",
        "suffix": "suffix0"
      },
      "type": "SHIPPING",
      "address": {
        "address_line_1": "address_line_16",
        "address_line_2": "address_line_26",
        "address_line_3": "address_line_32",
        "admin_area_4": "admin_area_40",
        "admin_area_3": "admin_area_38",
        "country_code": "country_code6"
      }
    },
    "permit_multiple_payment_tokens": false,
    "usage_type": "usage_type2",
    "customer_type": "customer_type6"
  },
  "venmo": {
    "description": "description6",
    "shipping": {
      "name": {
        "prefix": "prefix8",
        "given_name": "given_name2",
        "surname": "surname8",
        "middle_name": "middle_name0",
        "suffix": "suffix0"
      },
      "type": "SHIPPING",
      "address": {
        "address_line_1": "address_line_16",
        "address_line_2": "address_line_26",
        "address_line_3": "address_line_32",
        "admin_area_4": "admin_area_40",
        "admin_area_3": "admin_area_38",
        "country_code": "country_code6"
      }
    },
    "permit_multiple_payment_tokens": false,
    "usage_type": "usage_type6",
    "customer_type": "customer_type0"
  },
  "apple_pay": {
    "card": {
      "id": "id6",
      "name": "name6",
      "number": "number6",
      "expiry": "expiry4",
      "security_code": "security_code8"
    }
  },
  "bank": {
    "ach_debit": {
      "verification_status": "verification_status6"
    }
  }
}
```

