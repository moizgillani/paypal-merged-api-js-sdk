
# Authorization Base

## Structure

`AuthorizationBase`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `string \| undefined` | Optional | The PayPal-generated ID for the authorized payment. |
| `amount` | [`Money \| undefined`](../../doc/models/money.md) | Optional | The amount for this authorized payment. |
| `invoiceId` | `string \| undefined` | Optional | The API caller-provided external invoice number for this order. Appears in both the payer's transaction history and the emails that the payer receives. |
| `customId` | `string \| undefined` | Optional | The API caller-provided external ID. Used to reconcile API caller-initiated transactions with PayPal transactions. Appears in transaction and settlement reports.<br>**Constraints**: *Maximum Length*: `127` |
| `networkTransactionReference` | [`NetworkTransactionReference \| undefined`](../../doc/models/network-transaction-reference.md) | Optional | Reference values used by the card network to identify a transaction. |
| `sellerProtection` | [`SellerProtection \| undefined`](../../doc/models/seller-protection.md) | Optional | - |
| `expirationTime` | `string \| undefined` | Optional | The date and time when the authorized payment expires, in [Internet date and time format](https://tools.ietf.org/html/rfc3339#section-5.6).<br>**Constraints**: *Minimum Length*: `20`, *Maximum Length*: `64`, *Pattern*: `^[0-9]{4}-(0[1-9]\|1[0-2])-(0[1-9]\|[1-2][0-9]\|3[0-1])[T,t]([0-1][0-9]\|2[0-3]):[0-5][0-9]:([0-5][0-9]\|60)([.][0-9]+)?([Zz]\|[+-][0-9]{2}:[0-9]{2})$` |
| `links` | [`LinkDescription[] \| undefined`](../../doc/models/link-description.md) | Optional | An array of related [HATEOAS links](/docs/api/reference/api-responses/#hateoas-links). |

## Example (as JSON)

```json
{
  "id": "id6",
  "amount": {
    "currency_code": "currency_code6",
    "value": "value0"
  },
  "invoice_id": "invoice_id6",
  "custom_id": "custom_id4",
  "network_transaction_reference": {
    "id": "id8",
    "date": "date6",
    "network": "SWITCH",
    "acquirer_reference_number": "acquirer_reference_number0"
  }
}
```

