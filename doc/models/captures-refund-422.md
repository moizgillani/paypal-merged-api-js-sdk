
# Captures Refund 422

## Structure

`CapturesRefund422`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `issues` | [`Capturesrefund422issuesItems[] \| undefined`](../../doc/models/containers/capturesrefund-422-issues-items.md) | Optional | - |

## Example (as JSON)

```json
{
  "issues": [
    {
      "issue": "CANNOT_BE_ZERO_OR_NEGATIVE",
      "description": "Must be greater than zero. If the currency supports decimals, only two decimal place precision is supported."
    },
    {
      "issue": "CANNOT_BE_ZERO_OR_NEGATIVE",
      "description": "Must be greater than zero. If the currency supports decimals, only two decimal place precision is supported."
    },
    {
      "issue": "CANNOT_BE_ZERO_OR_NEGATIVE",
      "description": "Must be greater than zero. If the currency supports decimals, only two decimal place precision is supported."
    }
  ]
}
```

