
# Multi Currency Order 1

## Structure

`MultiCurrencyOrder1`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `issue` | [`MultiCurrencyOrder1IssueEnum \| undefined`](../../doc/models/multi-currency-order-1-issue-enum.md) | Optional | - |
| `description` | [`MultiCurrencyOrder1DescriptionEnum \| undefined`](../../doc/models/multi-currency-order-1-description-enum.md) | Optional | - |

## Example (as JSON)

```json
{
  "issue": "MULTI_CURRENCY_ORDER",
  "description": "Multiple differing values of currency_code are not supported. Entire Order request must have the same currency_code."
}
```

