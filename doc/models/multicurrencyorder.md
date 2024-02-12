
# MULTICURRENCYORDER

## Structure

`MULTICURRENCYORDER`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `issue` | [`MultiCurrencyOrderIssueEnum \| undefined`](../../doc/models/multi-currency-order-issue-enum.md) | Optional | - |
| `description` | [`MultiCurrencyOrderDescriptionEnum \| undefined`](../../doc/models/multi-currency-order-description-enum.md) | Optional | - |

## Example (as JSON)

```json
{
  "issue": "MULTI_CURRENCY_ORDER",
  "description": "Multiple differing values of currency_code are not supported. Entire Order request must have the same currency_code."
}
```

