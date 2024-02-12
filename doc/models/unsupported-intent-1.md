
# Unsupported Intent 1

## Structure

`UnsupportedIntent1`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `issue` | [`UnsupportedIntent1IssueEnum \| undefined`](../../doc/models/unsupported-intent-1-issue-enum.md) | Optional | - |
| `description` | [`UnsupportedIntent1DescriptionEnum \| undefined`](../../doc/models/unsupported-intent-1-description-enum.md) | Optional | - |

## Example (as JSON)

```json
{
  "issue": "UNSUPPORTED_INTENT",
  "description": "`intent=AUTHORIZE` is not supported for multiple purchase units. Only `intent=CAPTURE` is supported."
}
```

