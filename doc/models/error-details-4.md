
# Error Details 4

The error details. Required for client-side `4XX` errors.

## Structure

`ErrorDetails4`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `field` | `string \| undefined` | Optional | The field that caused the error. If this field is in the body, set this value to the field's JSON pointer value. Required for client-side errors. |
| `value` | `string \| undefined` | Optional | The value of the field that caused the error. |
| `location` | `string \| undefined` | Optional | The location of the field that caused the error. Value is `body`, `path`, or `query`.<br>**Default**: `'body'` |
| `issue` | `string` | Required, Constant | The unique, fine-grained application-level error code.<br>**Default**: `'INVALID_RESOURCE_ID'` |
| `description` | [`InvalidResourceIdDescriptionEnum \| undefined`](../../doc/models/invalid-resource-id-description-enum.md) | Optional | The human-readable description for an issue. The description can change over the lifetime of an API, so clients must not depend on this value. |

## Example (as JSON)

```json
{
  "location": "body",
  "issue": "INVALID_RESOURCE_ID",
  "field": "field2",
  "value": "value0",
  "description": "Specified resource ID does not exist. Please check the resource ID and try again."
}
```

