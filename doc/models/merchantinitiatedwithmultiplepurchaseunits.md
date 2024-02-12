
# MERCHANTINITIATEDWITHMULTIPLEPURCHASEUNITS

## Structure

`MERCHANTINITIATEDWITHMULTIPLEPURCHASEUNITS`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `issue` | [`MerchantInitiatedMultiplePurchaseUnitsEnum \| undefined`](../../doc/models/merchant-initiated-multiple-purchase-units-enum.md) | Optional | - |
| `description` | [`MerchInitMultPurchUnitsDescEnum \| undefined`](../../doc/models/merch-init-mult-purch-units-desc-enum.md) | Optional | - |

## Example (as JSON)

```json
{
  "issue": "MERCHANT_INITIATED_WITH_MULTIPLE_PURCHASE_UNITS",
  "description": "`stored_payment_source.payment_initiator` = `MERCHANT` is not supported if more than one purchase_unit is present in the Order. Merchant initiated payments are not supported from orders with more than one purchase_unit. Please retry the request with multiple Order requests (one for each purchase_unit)."
}
```

