
# Error Details 14

The error details. Required for client-side `4XX` errors.

## Structure

`ErrorDetails14`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `field` | `string \| undefined` | Optional | The field that caused the error. If this field is in the body, set this value to the field's JSON pointer value. Required for client-side errors. |
| `value` | `string \| undefined` | Optional | The value of the field that caused the error. |
| `location` | `string \| undefined` | Optional | The location of the field that caused the error. Value is `body`, `path`, or `query`.<br>**Default**: `'body'` |
| `issue` | `string` | Required, Constant | The unique, fine-grained application-level error code.<br>**Default**: `'PERMISSION_DENIED'` |
| `description` | [`PermissionDenied3Description1Enum \| undefined`](../../doc/models/permission-denied-3-description-1-enum.md) | Optional | The human-readable description for an issue. The description can change over the lifetime of an API, so clients must not depend on this value. |

## Example (as JSON)

```json
{
  "location": "body",
  "issue": "PERMISSION_DENIED",
  "field": "field4",
  "value": "value4",
  "description": "You do not have permission to access or perform operations on this resource."
}
```

