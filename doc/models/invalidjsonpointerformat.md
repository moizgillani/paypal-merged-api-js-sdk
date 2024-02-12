
# INVALIDJSONPOINTERFORMAT

## Structure

`INVALIDJSONPOINTERFORMAT`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `issue` | [`InvalidJsonPointerFormatIssueEnum \| undefined`](../../doc/models/invalid-json-pointer-format-issue-enum.md) | Optional | - |
| `description` | [`InvalidJsonPointerFormatDescriptionEnum \| undefined`](../../doc/models/invalid-json-pointer-format-description-enum.md) | Optional | - |

## Example (as JSON)

```json
{
  "issue": "INVALID_JSON_POINTER_FORMAT",
  "description": "Path should be a valid JSON Pointer https://tools.ietf.org/html/rfc6901 that references a location within the request where the operation is performed."
}
```

