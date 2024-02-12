
# Orders Authorize 403

## Structure

`OrdersAuthorize403`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `issues` | [`OrdersAuthorize403IssuesItems[] \| undefined`](../../doc/models/containers/orders-authorize-403-issues-items.md) | Optional | - |

## Example (as JSON)

```json
{
  "issues": [
    {
      "issue": "NOT_ELIGIBLE_FOR_TOKEN_PROCESSING",
      "description": "API caller is not enabled to process payments with the specified type of token. Please contact customer support to request permissions to process transactions with this type of token."
    },
    {
      "issue": "NOT_ELIGIBLE_FOR_TOKEN_PROCESSING",
      "description": "API caller is not enabled to process payments with the specified type of token. Please contact customer support to request permissions to process transactions with this type of token."
    }
  ]
}
```

