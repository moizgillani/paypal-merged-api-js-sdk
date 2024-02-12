
# Authorizations Void 422

## Structure

`AuthorizationsVoid422`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `issues` | [`Authorizationsvoid422issuesItems[] \| undefined`](../../doc/models/containers/authorizationsvoid-422-issues-items.md) | Optional | - |

## Example (as JSON)

```json
{
  "issues": [
    {
      "issue": "PREVIOUSLY_CAPTURED",
      "description": "Authorization has been previously captured and hence cannot be voided."
    },
    {
      "issue": "PREVIOUSLY_CAPTURED",
      "description": "Authorization has been previously captured and hence cannot be voided."
    },
    {
      "issue": "PREVIOUSLY_CAPTURED",
      "description": "Authorization has been previously captured and hence cannot be voided."
    }
  ]
}
```

