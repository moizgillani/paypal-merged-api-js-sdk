
# Refund Base Information

## Structure

`RefundBaseInformation`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `string \| undefined` | Optional | The PayPal-generated ID for the refund. |
| `amount` | [`Money \| undefined`](../../doc/models/money.md) | Optional | The amount that the payee refunded to the payer. |
| `invoiceId` | `string \| undefined` | Optional | The API caller-provided external invoice number for this order. Appears in both the payer's transaction history and the emails that the payer receives. |
| `customId` | `string \| undefined` | Optional | The API caller-provided external ID. Used to reconcile API caller-initiated transactions with PayPal transactions. Appears in transaction and settlement reports.<br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `127`, *Pattern*: `^[A-Za-z0-9-_.,]*$` |
| `acquirerReferenceNumber` | `string \| undefined` | Optional | Reference ID issued for the card transaction. This ID can be used to track the transaction across processors, card brands and issuing banks.<br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `36`, *Pattern*: `^[a-zA-Z0-9]+$` |
| `noteToPayer` | `string \| undefined` | Optional | The reason for the refund. Appears in both the payer's transaction history and the emails that the payer receives. |
| `sellerPayableBreakdown` | [`MerchantPayableBreakdown \| undefined`](../../doc/models/merchant-payable-breakdown.md) | Optional | The breakdown of the refund. |
| `payer` | [`MerchantBase \| undefined`](../../doc/models/merchant-base.md) | Optional | The details associated with the merchant for this transaction. |
| `links` | [`LinkDescription[] \| undefined`](../../doc/models/link-description.md) | Optional | An array of related [HATEOAS links](/docs/api/reference/api-responses/#hateoas-links). |

## Example (as JSON)

```json
{
  "id": "id4",
  "amount": {
    "currency_code": "currency_code6",
    "value": "value0"
  },
  "invoice_id": "invoice_id4",
  "custom_id": "custom_id2",
  "acquirer_reference_number": "acquirer_reference_number6"
}
```

