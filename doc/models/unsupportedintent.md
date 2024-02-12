
# UNSUPPORTEDINTENT

## Structure

`UNSUPPORTEDINTENT`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `issue` | [`UnsupportedIntentIssueEnum \| undefined`](../../doc/models/unsupported-intent-issue-enum.md) | Optional | - |
| `description` | [`UnsupportedIntentDescriptionEnum \| undefined`](../../doc/models/unsupported-intent-description-enum.md) | Optional | - |

## Example (as JSON)

```json
{
  "issue": "UNSUPPORTED_INTENT",
  "description": "`intent=AUTHORIZE` is not supported for multiple purchase units. Only `intent=CAPTURE` is supported."
}
```

