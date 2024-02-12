
# Capture Base Information

## Structure

`CaptureBaseInformation`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `string \| undefined` | Optional | The PayPal-generated ID for the captured payment. |
| `amount` | [`Money \| undefined`](../../doc/models/money.md) | Optional | The amount for this captured payment. |
| `invoiceId` | `string \| undefined` | Optional | The API caller-provided external invoice number for this order. Appears in both the payer's transaction history and the emails that the payer receives. |
| `customId` | `string \| undefined` | Optional | The API caller-provided external ID. Used to reconcile API caller-initiated transactions with PayPal transactions. Appears in transaction and settlement reports.<br>**Constraints**: *Maximum Length*: `127` |
| `networkTransactionReference` | [`NetworkTransactionReference \| undefined`](../../doc/models/network-transaction-reference.md) | Optional | Reference values used by the card network to identify a transaction. |
| `sellerProtection` | [`SellerProtection \| undefined`](../../doc/models/seller-protection.md) | Optional | - |
| `finalCapture` | `boolean \| undefined` | Optional | Indicates whether you can make additional captures against the authorized payment. Set to `true` if you do not intend to capture additional payments against the authorization. Set to `false` if you intend to capture additional payments against the authorization.<br>**Default**: `false` |
| `sellerReceivableBreakdown` | [`SellerReceivableBreakdown \| undefined`](../../doc/models/seller-receivable-breakdown.md) | Optional | - |
| `disbursementMode` | [`DisbursementModeEnum \| undefined`](../../doc/models/disbursement-mode-enum.md) | Optional | The funds that are held payee by the marketplace/platform. This field is only applicable to merchants that been enabled for PayPal Commerce Platform for Marketplaces and Platforms capability.<br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `16`, *Pattern*: `^[A-Z_]+$` |
| `links` | [`LinkDescription[] \| undefined`](../../doc/models/link-description.md) | Optional | An array of related [HATEOAS links](/docs/api/reference/api-responses/#hateoas-links). |
| `processorResponse` | [`ProcessorResponse \| undefined`](../../doc/models/processor-response.md) | Optional | An object that provides additional processor information for a direct credit card transaction. |

## Example (as JSON)

```json
{
  "id": "3C679366HH908993F",
  "final_capture": true,
  "amount": {
    "currency_code": "currency_code6",
    "value": "value0"
  },
  "invoice_id": "invoice_id4",
  "custom_id": "custom_id2",
  "network_transaction_reference": {
    "id": "id8",
    "date": "date6",
    "network": "SWITCH",
    "acquirer_reference_number": "acquirer_reference_number0"
  }
}
```

