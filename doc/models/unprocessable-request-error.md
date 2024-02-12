
# Unprocessable Request Error

## Structure

`UnprocessableRequestError`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `issues` | [`UnprocessableErrorIssue[] \| undefined`](../../doc/models/containers/unprocessable-error-issue.md) | Optional | - |

## Example (as JSON)

```json
{
  "issues": [
    {
      "issue": "AMOUNT_MISMATCH",
      "description": "Should equal item_total + tax_total + shipping + handling + insurance - shipping_discount - discount."
    },
    {
      "issue": "AMOUNT_MISMATCH",
      "description": "Should equal item_total + tax_total + shipping + handling + insurance - shipping_discount - discount."
    }
  ]
}
```

