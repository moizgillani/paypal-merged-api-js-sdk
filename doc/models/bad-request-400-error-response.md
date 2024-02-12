
# Bad Request 400 Error Response

## Structure

`BadRequest400ErrorResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `issues` | [`Badrequest400errorresponseissuesItems[] \| undefined`](../../doc/models/containers/badrequest-400-errorresponseissues-items.md) | Optional | - |

## Example (as JSON)

```json
{
  "issues": [
    {
      "issue": "INVALID_PARAMETER_VALUE",
      "description": "The value of a field is invalid."
    }
  ]
}
```

