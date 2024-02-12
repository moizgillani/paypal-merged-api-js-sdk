
# Pay Pal Wallet Attributes Response

Additional attributes associated with the use of a PayPal Wallet.

## Structure

`PayPalWalletAttributesResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `vault` | [`SavedPaymentSourceResponse \| undefined`](../../doc/models/saved-payment-source-response.md) | Optional | The details about a saved payment source. |
| `cobrandedCards` | [`CobrandedCardObject[] \| undefined`](../../doc/models/cobranded-card-object.md) | Optional | An array of merchant cobranded cards used by buyer to complete an order. This array will be present if a merchant has onboarded their cobranded card with PayPal and provided corresponding label(s).<br>**Constraints**: *Minimum Items*: `0`, *Maximum Items*: `25` |

## Example (as JSON)

```json
{
  "vault": {
    "id": "id6",
    "status": "APPROVED",
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
    "links": [
      {
        "href": "href6",
        "rel": "rel0",
        "method": "HEAD"
      }
    ]
  },
  "cobranded_cards": [
    {
      "labels": [
        "labels4",
        "labels3"
      ],
      "payee": {
        "email_address": "email_address4",
        "merchant_id": "merchant_id6"
      },
      "amount": {
        "currency_code": "currency_code6",
        "value": "value0"
      }
    },
    {
      "labels": [
        "labels4",
        "labels3"
      ],
      "payee": {
        "email_address": "email_address4",
        "merchant_id": "merchant_id6"
      },
      "amount": {
        "currency_code": "currency_code6",
        "value": "value0"
      }
    }
  ]
}
```

