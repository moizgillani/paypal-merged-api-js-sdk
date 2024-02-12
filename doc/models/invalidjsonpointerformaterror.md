
# INVALIDJSONPOINTERFORMATERROR

## Structure

`INVALIDJSONPOINTERFORMATERROR`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `issue` | [`InvalidJsonPointerFormat1IssueEnum \| undefined`](../../doc/models/invalid-json-pointer-format-1-issue-enum.md) | Optional | - |
| `description` | [`InvalidJsonPointerFormat1DescriptionEnum \| undefined`](../../doc/models/invalid-json-pointer-format-1-description-enum.md) | Optional | - |

## Example (as JSON)

```json
{
  "issue": "INVALID_JSON_POINTER_FORMAT",
  "description": "Path should be a valid [JSON Pointer](https://tools.ietf.org/html/rfc6901) that references a location within the request where the operation is performed."
}
```

