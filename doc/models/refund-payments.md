
# Refund Payments

The refund information.

## Structure

`RefundPayments`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `status` | [`RefundStatus1Enum \| undefined`](../../doc/models/refund-status-1-enum.md) | Optional | The status of the refund. |
| `statusDetails` | [`RefundStatusDetailsPayments \| undefined`](../../doc/models/refund-status-details-payments.md) | Optional | The details of the refund status. |
| `id` | `string \| undefined` | Optional | The PayPal-generated ID for the refund. |
| `amount` | [`Money \| undefined`](../../doc/models/money.md) | Optional | The amount that the payee refunded to the payer. |
| `invoiceId` | `string \| undefined` | Optional | The API caller-provided external invoice number for this order. Appears in both the payer's transaction history and the emails that the payer receives. |
| `customId` | `string \| undefined` | Optional | The API caller-provided external ID. Used to reconcile API caller-initiated transactions with PayPal transactions. Appears in transaction and settlement reports.<br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `127`, *Pattern*: `^[A-Za-z0-9-_.,]*$` |
| `acquirerReferenceNumber` | `string \| undefined` | Optional | Reference ID issued for the card transaction. This ID can be used to track the transaction across processors, card brands and issuing banks.<br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `36`, *Pattern*: `^[a-zA-Z0-9]+$` |
| `noteToPayer` | `string \| undefined` | Optional | The reason for the refund. Appears in both the payer's transaction history and the emails that the payer receives. |
| `sellerPayableBreakdown` | [`MerchantPayableBreakdown \| undefined`](../../doc/models/merchant-payable-breakdown.md) | Optional | The breakdown of the refund. |
| `payer` | [`MerchantBase \| undefined`](../../doc/models/merchant-base.md) | Optional | The details associated with the merchant for this transaction. |
| `links` | [`LinkDescriptionPayments[] \| undefined`](../../doc/models/link-description-payments.md) | Optional | An array of related [HATEOAS links](/docs/api/reference/api-responses/#hateoas-links). |
| `createTime` | `string \| undefined` | Optional | The date and time when the transaction occurred, in [Internet date and time format](https://tools.ietf.org/html/rfc3339#section-5.6).<br>**Constraints**: *Minimum Length*: `20`, *Maximum Length*: `64`, *Pattern*: `^[0-9]{4}-(0[1-9]\|1[0-2])-(0[1-9]\|[1-2][0-9]\|3[0-1])[T,t]([0-1][0-9]\|2[0-3]):[0-5][0-9]:([0-5][0-9]\|60)([.][0-9]+)?([Zz]\|[+-][0-9]{2}:[0-9]{2})$` |
| `updateTime` | `string \| undefined` | Optional | The date and time when the transaction was last updated, in [Internet date and time format](https://tools.ietf.org/html/rfc3339#section-5.6).<br>**Constraints**: *Minimum Length*: `20`, *Maximum Length*: `64`, *Pattern*: `^[0-9]{4}-(0[1-9]\|1[0-2])-(0[1-9]\|[1-2][0-9]\|3[0-1])[T,t]([0-1][0-9]\|2[0-3]):[0-5][0-9]:([0-5][0-9]\|60)([.][0-9]+)?([Zz]\|[+-][0-9]{2}:[0-9]{2})$` |

## Example (as JSON)

```json
{
  "status": "PENDING",
  "status_details": {
    "reason": "ECHECK"
  },
  "id": "id0",
  "amount": {
    "currency_code": "currency_code6",
    "value": "value0"
  },
  "invoice_id": "invoice_id0"
}
```

