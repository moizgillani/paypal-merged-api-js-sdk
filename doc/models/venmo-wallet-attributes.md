
# Venmo Wallet Attributes

Additional attributes associated with the use of this Venmo Wallet.

## Structure

`VenmoWalletAttributes`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `customer` | [`PayPalSCustomerDataRecords \| undefined`](../../doc/models/pay-pal-s-customer-data-records.md) | Optional | The details about a customer in PayPal's system of record. |
| `vault` | [`VaultedVenmoWalletCommonAttributes \| undefined`](../../doc/models/vaulted-venmo-wallet-common-attributes.md) | Optional | Attributes used to provide the instructions during vaulting of the Venmo Wallet. |

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
    "store_in_vault": "store_in_vault2",
    "description": "description6",
    "usage_pattern": "THRESHOLD_PREPAID",
    "usage_type": "MERCHANT",
    "customer_type": "CONSUMER",
    "permit_multiple_payment_tokens": false
  }
}
```

