
# Seller Receivable Breakdown

The detailed breakdown of the capture activity. This is not available for transactions that are in pending state.

## Structure

`SellerReceivableBreakdown`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `grossAmount` | [`Money`](../../doc/models/money.md) | Required | The amount for this captured payment in the currency of the transaction. |
| `paypalFee` | [`Money \| undefined`](../../doc/models/money.md) | Optional | The applicable fee for this captured payment in the currency of the transaction. |
| `paypalFeeInReceivableCurrency` | [`Money \| undefined`](../../doc/models/money.md) | Optional | The applicable fee for this captured payment in the receivable currency. Returned only in cases the fee is charged in the receivable currency. Example 'CNY'. |
| `netAmount` | [`Money \| undefined`](../../doc/models/money.md) | Optional | The net amount that the payee receives for this captured payment in their PayPal account. The net amount is computed as <code>gross_amount</code> minus the <code>paypal_fee</code> minus the <code>platform_fees</code>. |
| `receivableAmount` | [`Money \| undefined`](../../doc/models/money.md) | Optional | The net amount that is credited to the payee's PayPal account. Returned only when the currency of the captured payment is different from the currency of the PayPal account where the payee wants to credit the funds. The amount is computed as <code>net_amount</code> times <code>exchange_rate</code>. |
| `exchangeRate` | [`ExchangeRate \| undefined`](../../doc/models/exchange-rate.md) | Optional | The exchange rate that determines the amount that is credited to the payee's PayPal account. Returned when the currency of the captured payment is different from the currency of the PayPal account where the payee wants to credit the funds. |
| `platformFees` | [`PlatformFee[] \| undefined`](../../doc/models/platform-fee.md) | Optional | An array of various fees, commissions, tips, or donations. This field is only applicable to merchants that been enabled for PayPal Commerce Platform for Marketplaces and Platforms capability.<br>**Constraints**: *Minimum Items*: `0`, *Maximum Items*: `1` |

## Example (as JSON)

```json
{
  "gross_amount": {
    "currency_code": "USD",
    "value": "100.00"
  },
  "paypal_fee": {
    "currency_code": "currency_code4",
    "value": "value2"
  },
  "paypal_fee_in_receivable_currency": {
    "currency_code": "currency_code2",
    "value": "value8"
  },
  "net_amount": {
    "currency_code": "currency_code6",
    "value": "value2"
  },
  "receivable_amount": {
    "currency_code": "currency_code2",
    "value": "value8"
  },
  "exchange_rate": {
    "source_currency": "source_currency4",
    "target_currency": "target_currency6",
    "value": "value6"
  }
}
```

