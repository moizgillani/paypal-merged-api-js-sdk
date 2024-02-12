
# Venmo Wallet Attributes Response

Additional attributes associated with the use of a Venmo Wallet.

## Structure

`VenmoWalletAttributesResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `vault` | [`SavedPaymentSourceResponse \| undefined`](../../doc/models/saved-payment-source-response.md) | Optional | The details about a saved payment source. |

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
  }
}
```

