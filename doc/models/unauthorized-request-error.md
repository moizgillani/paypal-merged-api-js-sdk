
# Unauthorized Request Error

## Structure

`UnauthorizedRequestError`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `issues` | [`UnauthorizedErrorIssue[] \| undefined`](../../doc/models/containers/unauthorized-error-issue.md) | Optional | - |

## Example (as JSON)

```json
{
  "issues": [
    {
      "issue": "INVALID_ACCOUNT_STATUS",
      "description": "Account validations failed for the user."
    },
    {
      "issue": "INVALID_ACCOUNT_STATUS",
      "description": "Account validations failed for the user."
    },
    {
      "issue": "INVALID_ACCOUNT_STATUS",
      "description": "Account validations failed for the user."
    }
  ]
}
```

