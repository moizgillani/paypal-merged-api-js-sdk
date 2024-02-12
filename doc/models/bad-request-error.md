
# Bad Request Error

## Structure

`BadRequestError`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `issues` | [`BadRequestIssue[] \| undefined`](../../doc/models/containers/bad-request-issue.md) | Optional | - |

## Example (as JSON)

```json
{
  "issues": [
    {
      "issue": "INVALID_ARRAY_MAX_ITEMS",
      "description": "The number of items in an array parameter is too large."
    }
  ]
}
```

