
# Net Amount Breakdown Item

The net amount. Returned when the currency of the refund is different from the currency of the PayPal account where the merchant holds their funds.

## Structure

`NetAmountBreakdownItem`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `payableAmount` | [`Money \| undefined`](../../doc/models/money.md) | Optional | The net amount debited from the merchant's PayPal account. |
| `convertedAmount` | [`Money \| undefined`](../../doc/models/money.md) | Optional | The converted payable amount. |
| `exchangeRate` | [`ExchangeRate \| undefined`](../../doc/models/exchange-rate.md) | Optional | The exchange rate that determines the amount that was debited from the merchant's PayPal account. |

## Example (as JSON)

```json
{
  "payable_amount": {
    "currency_code": "currency_code8",
    "value": "value4"
  },
  "converted_amount": {
    "currency_code": "currency_code0",
    "value": "value6"
  },
  "exchange_rate": {
    "source_currency": "source_currency4",
    "target_currency": "target_currency6",
    "value": "value6"
  }
}
```

