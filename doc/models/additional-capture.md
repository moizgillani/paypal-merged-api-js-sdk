
# Additional Capture

A captured payment.

## Structure

`AdditionalCapture`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `status` | [`CaptureStatus1Enum \| undefined`](../../doc/models/capture-status-1-enum.md) | Optional | The status of the captured payment. |
| `statusDetails` | [`CaptureStatusDetailsPayments \| undefined`](../../doc/models/capture-status-details-payments.md) | Optional | The details of the captured payment status. |
| `id` | `string \| undefined` | Optional | The PayPal-generated ID for the captured payment. |
| `amount` | [`Money \| undefined`](../../doc/models/money.md) | Optional | The amount for this captured payment. |
| `invoiceId` | `string \| undefined` | Optional | The API caller-provided external invoice number for this order. Appears in both the payer's transaction history and the emails that the payer receives. |
| `customId` | `string \| undefined` | Optional | The API caller-provided external ID. Used to reconcile API caller-initiated transactions with PayPal transactions. Appears in transaction and settlement reports.<br>**Constraints**: *Maximum Length*: `127` |
| `networkTransactionReference` | [`NetworkTransactionReferencePayments \| undefined`](../../doc/models/network-transaction-reference-payments.md) | Optional | Reference values used by the card network to identify a transaction. |
| `sellerProtection` | [`SellerProtectionPayments \| undefined`](../../doc/models/seller-protection-payments.md) | Optional | - |
| `finalCapture` | `boolean \| undefined` | Optional | Indicates whether you can make additional captures against the authorized payment. Set to `true` if you do not intend to capture additional payments against the authorization. Set to `false` if you intend to capture additional payments against the authorization.<br>**Default**: `false` |
| `sellerReceivableBreakdown` | [`SellerReceivableBreakdown \| undefined`](../../doc/models/seller-receivable-breakdown.md) | Optional | - |
| `disbursementMode` | [`DisbursementModeEnum \| undefined`](../../doc/models/disbursement-mode-enum.md) | Optional | The funds that are held on behalf of the merchant.<br>**Default**: `DisbursementModeEnum.INSTANT`<br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `16`, *Pattern*: `^[A-Z_]+$` |
| `links` | [`LinkDescriptionPayments[] \| undefined`](../../doc/models/link-description-payments.md) | Optional | An array of related [HATEOAS links](/docs/api/reference/api-responses/#hateoas-links). |
| `processorResponse` | [`ProcessorResponsePayments \| undefined`](../../doc/models/processor-response-payments.md) | Optional | An object that provides additional processor information for a direct credit card transaction. |
| `createTime` | `string \| undefined` | Optional | The date and time when the transaction occurred, in [Internet date and time format](https://tools.ietf.org/html/rfc3339#section-5.6).<br>**Constraints**: *Minimum Length*: `20`, *Maximum Length*: `64`, *Pattern*: `^[0-9]{4}-(0[1-9]\|1[0-2])-(0[1-9]\|[1-2][0-9]\|3[0-1])[T,t]([0-1][0-9]\|2[0-3]):[0-5][0-9]:([0-5][0-9]\|60)([.][0-9]+)?([Zz]\|[+-][0-9]{2}:[0-9]{2})$` |
| `updateTime` | `string \| undefined` | Optional | The date and time when the transaction was last updated, in [Internet date and time format](https://tools.ietf.org/html/rfc3339#section-5.6).<br>**Constraints**: *Minimum Length*: `20`, *Maximum Length*: `64`, *Pattern*: `^[0-9]{4}-(0[1-9]\|1[0-2])-(0[1-9]\|[1-2][0-9]\|3[0-1])[T,t]([0-1][0-9]\|2[0-3]):[0-5][0-9]:([0-5][0-9]\|60)([.][0-9]+)?([Zz]\|[+-][0-9]{2}:[0-9]{2})$` |
| `supplementaryData` | [`SupplementaryDataPayments \| undefined`](../../doc/models/supplementary-data-payments.md) | Optional | An object that provides supplementary/additional data related to a payment transaction. |
| `payee` | [`SupplementaryDataPayments \| undefined`](../../doc/models/supplementary-data-payments.md) | Optional | The details associated with the merchant for this transaction. |

## Example (as JSON)

```json
{
  "final_capture": false,
  "disbursement_mode": "INSTANT",
  "status": "PARTIALLY_REFUNDED",
  "status_details": {
    "reason": "CHARGEBACK"
  },
  "id": "id2",
  "amount": {
    "currency_code": "currency_code6",
    "value": "value0"
  },
  "invoice_id": "invoice_id2"
}
```

