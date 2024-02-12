
# Order Request

The order request details.

## Structure

`OrderRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `intent` | [`PaymentIntentCheckoutEnum`](../../doc/models/payment-intent-checkout-enum.md) | Required | The intent to either capture payment immediately or authorize a payment for an order after order creation. |
| `payer` | [`Payer \| undefined`](../../doc/models/payer.md) | Optional | DEPRECATED. The customer is also known as the payer. The Payer object was intended to only be used with the `payment_source.paypal` object. In order to make this design more clear, the details in the `payer` object are now available under `payment_source.paypal`. Please use `payment_source.paypal`. |
| `purchaseUnits` | [`PurchaseUnitRequest[]`](../../doc/models/purchase-unit-request.md) | Required | An array of purchase units. Each purchase unit establishes a contract between a payer and the payee. Each purchase unit represents either a full or partial order that the payer intends to purchase from the payee.<br>**Constraints**: *Minimum Items*: `1`, *Maximum Items*: `10` |
| `paymentSource` | [`PaymentSourceDefinition \| undefined`](../../doc/models/payment-source-definition.md) | Optional | The payment source definition. |
| `applicationContext` | [`ApplicationContext \| undefined`](../../doc/models/application-context.md) | Optional | Customize the payer experience during the approval process for the payment with PayPal. |

## Example (as JSON)

```json
{
  "intent": "CAPTURE",
  "purchase_units": [
    {
      "reference_id": "d9f80740-38f0-11e8-b467-0ed5f89f718b",
      "amount": {
        "currency_code": "USD",
        "value": "100.00",
        "breakdown": {
          "item_total": {
            "currency_code": "currency_code0",
            "value": "value6"
          },
          "shipping": {
            "currency_code": "currency_code0",
            "value": "value6"
          },
          "handling": {
            "currency_code": "currency_code2",
            "value": "value8"
          },
          "tax_total": {
            "currency_code": "currency_code4",
            "value": "value0"
          },
          "insurance": {
            "currency_code": "currency_code2",
            "value": "value8"
          }
        }
      },
      "payee": {
        "email_address": "email_address4",
        "merchant_id": "merchant_id6"
      },
      "payment_instruction": {
        "platform_fees": [
          {
            "amount": {
              "currency_code": "currency_code6",
              "value": "value0"
            },
            "payee": {
              "email_address": "email_address4",
              "merchant_id": "merchant_id6"
            }
          },
          {
            "amount": {
              "currency_code": "currency_code6",
              "value": "value0"
            },
            "payee": {
              "email_address": "email_address4",
              "merchant_id": "merchant_id6"
            }
          },
          {
            "amount": {
              "currency_code": "currency_code6",
              "value": "value0"
            },
            "payee": {
              "email_address": "email_address4",
              "merchant_id": "merchant_id6"
            }
          }
        ],
        "disbursement_mode": "INSTANT",
        "payee_pricing_tier_id": "payee_pricing_tier_id2",
        "payee_receivable_fx_rate_id": "payee_receivable_fx_rate_id0"
      },
      "description": "description6",
      "custom_id": "custom_id4"
    }
  ],
  "payer": {
    "email_address": "email_address6",
    "payer_id": "payer_id6",
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
    "birth_date": "birth_date4"
  },
  "payment_source": {
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
  },
  "application_context": {
    "brand_name": "brand_name8",
    "locale": "locale2",
    "landing_page": "BILLING",
    "shipping_preference": "SET_PROVIDED_ADDRESS",
    "user_action": "CONTINUE"
  }
}
```

