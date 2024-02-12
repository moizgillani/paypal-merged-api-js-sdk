
# Merchant Payable Breakdown

The breakdown of the refund.

## Structure

`MerchantPayableBreakdown`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `grossAmount` | [`Money \| undefined`](../../doc/models/money.md) | Optional | The amount that the payee refunded to the payer. |
| `paypalFee` | [`Money \| undefined`](../../doc/models/money.md) | Optional | The PayPal fee that was refunded to the payer in the currency of the transaction. This fee might not match the PayPal fee that the payee paid when the payment was captured. |
| `paypalFeeInReceivableCurrency` | [`Money \| undefined`](../../doc/models/money.md) | Optional | The PayPal fee that was refunded to the payer in the receivable currency. Returned only in cases when the receivable currency is different from transaction currency. Example 'CNY'. |
| `netAmount` | [`Money \| undefined`](../../doc/models/money.md) | Optional | The net amount that the payee's account is debited in the transaction currency. The net amount is calculated as <code>gross_amount</code> minus <code>paypal_fee</code> minus <code>platform_fees</code>. |
| `netAmountInReceivableCurrency` | [`Money \| undefined`](../../doc/models/money.md) | Optional | The net amount that the payee's account is debited in the receivable currency. Returned only in cases when the receivable currency is different from transaction currency. Example 'CNY'. |
| `platformFees` | [`PlatformFee[] \| undefined`](../../doc/models/platform-fee.md) | Optional | An array of platform or partner fees, commissions, or brokerage fees for the refund.<br>**Constraints**: *Minimum Items*: `0`, *Maximum Items*: `1` |
| `netAmountBreakdown` | [`NetAmountBreakdownItem[] \| undefined`](../../doc/models/net-amount-breakdown-item.md) | Optional | An array of breakdown values for the net amount. Returned when the currency of the refund is different from the currency of the PayPal account where the payee holds their funds. |
| `totalRefundedAmount` | [`Money \| undefined`](../../doc/models/money.md) | Optional | The total amount refunded from the original capture to date. For example, if a payer makes a $100 purchase and was refunded $20 a week ago and was refunded $30 in this refund, the `gross_amount` is $30 for this refund and the `total_refunded_amount` is $50. |

## Example (as JSON)

```json
{
  "gross_amount": {
    "currency_code": "currency_code4",
    "value": "value0"
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
  "net_amount_in_receivable_currency": {
    "currency_code": "currency_code8",
    "value": "value4"
  }
}
```

