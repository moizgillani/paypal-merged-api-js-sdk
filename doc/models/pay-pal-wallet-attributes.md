
# Pay Pal Wallet Attributes

Additional attributes associated with the use of this PayPal Wallet.

## Structure

`PayPalWalletAttributes`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `customer` | [`PayPalSCustomerDataRecords \| undefined`](../../doc/models/pay-pal-s-customer-data-records.md) | Optional | The details about a customer in PayPal's system of record. |
| `vault` | [`VaultedPayPalWalletCommonAttributes \| undefined`](../../doc/models/vaulted-pay-pal-wallet-common-attributes.md) | Optional | Attributes used to provide the instructions during vaulting of the PayPal Wallet. |

## Example (as JSON)

```json
{
  "customer": {
    "id": "id0",
    "email_address": "email_address2",
    "phone": {
      "phone_type": "OTHER",
      "phone_number": {
        "country_code": "country_code2",
        "national_number": "national_number6",
        "extension_number": "extension_number8"
      }
    }
  },
  "vault": {
    "store_in_vault": "ON_SUCCESS",
    "description": "description6",
    "usage_pattern": "THRESHOLD_PREPAID",
    "shipping": {
      "name": {
        "prefix": "prefix8",
        "given_name": "given_name2",
        "surname": "surname8",
        "middle_name": "middle_name0",
        "suffix": "suffix0"
      },
      "type": "SHIPPING",
      "options": [
        {
          "id": "id2",
          "label": "label2",
          "type": "SHIPPING",
          "amount": {
            "currency_code": "currency_code6",
            "value": "value0"
          },
          "selected": false
        },
        {
          "id": "id2",
          "label": "label2",
          "type": "SHIPPING",
          "amount": {
            "currency_code": "currency_code6",
            "value": "value0"
          },
          "selected": false
        },
        {
          "id": "id2",
          "label": "label2",
          "type": "SHIPPING",
          "amount": {
            "currency_code": "currency_code6",
            "value": "value0"
          },
          "selected": false
        }
      ],
      "address": {
        "address_line_1": "address_line_16",
        "address_line_2": "address_line_26",
        "address_line_3": "address_line_32",
        "admin_area_4": "admin_area_40",
        "admin_area_3": "admin_area_38",
        "country_code": "country_code6"
      }
    },
    "usage_type": "MERCHANT",
    "customer_type": "CONSUMER"
  }
}
```

