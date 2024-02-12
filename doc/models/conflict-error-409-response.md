
# Conflict Error 409 Response

## Structure

`ConflictError409Response`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `issues` | [`Conflicterror409responseissuesItems[] \| undefined`](../../doc/models/containers/conflicterror-409-responseissues-items.md) | Optional | - |

## Example (as JSON)

```json
{
  "issues": [
    {
      "issue": "PREVIOUS_REQUEST_IN_PROGRESS",
      "description": "A previous request on this resource is currently in progress. Please wait for sometime and try again. It is best to space out the initial and the subsequent request(s) to avoid receiving this error."
    }
  ]
}
```

