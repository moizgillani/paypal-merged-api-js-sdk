
# Platform Fee

The platform or partner fee, commission, or brokerage fee that is associated with the transaction. Not a separate or isolated transaction leg from the external perspective. The platform fee is limited in scope and is always associated with the original payment for the purchase unit.

## Structure

`PlatformFee`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `amount` | [`Money`](../../doc/models/money.md) | Required | The fee for this transaction. |
| `payee` | [`MerchantBase \| undefined`](../../doc/models/merchant-base.md) | Optional | The recipient of the fee for this transaction. If you omit this value, the default is the API caller. |

## Example (as JSON)

```json
{
  "amount": {
    "currency_code": "USD",
    "value": "100.00"
  },
  "payee": {
    "email_address": "email_address4",
    "merchant_id": "merchant_id6"
  }
}
```

