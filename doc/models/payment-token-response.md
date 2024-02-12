
# Payment Token Response

Full representation of a saved payment token.

## Structure

`PaymentTokenResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `string \| undefined` | Optional | The PayPal-generated ID for the vault token.<br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `36`, *Pattern*: `^[0-9a-zA-Z_-]+$` |
| `customer` | [`CustomerRequest \| undefined`](../../doc/models/customer-request.md) | Optional | Customer in merchant's or partner's system of records. |
| `paymentSource` | [`PaymentTokenResponsePaymentSource \| undefined`](../../doc/models/payment-token-response-payment-source.md) | Optional | The vaulted payment method details. |
| `links` | [`LinkDescriptionPaymentMethodTokens[] \| undefined`](../../doc/models/link-description-payment-method-tokens.md) | Optional | An array of related [HATEOAS links](/api/rest/responses/#hateoas).<br>**Constraints**: *Minimum Items*: `1`, *Maximum Items*: `32` |

## Example (as JSON)

```json
{
  "id": "id0",
  "customer": {
    "id": "id0"
  },
  "payment_source": {
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
  },
  "links": [
    {
      "href": "href6",
      "rel": "rel0",
      "method": "HEAD"
    },
    {
      "href": "href6",
      "rel": "rel0",
      "method": "HEAD"
    }
  ]
}
```

