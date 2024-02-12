
# Error Details 3 Payments

The error details. Required for client-side `4XX` errors.

## Structure

`ErrorDetails3Payments`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `field` | `string \| undefined` | Optional | The field that caused the error. If this field is in the body, set this value to the field's JSON pointer value. Required for client-side errors. |
| `value` | `string \| undefined` | Optional | The value of the field that caused the error. |
| `location` | `string \| undefined` | Optional | The location of the field that caused the error. Value is `body`, `path`, or `query`.<br>**Default**: `'body'` |
| `issue` | `string` | Required, Constant | The unique, fine-grained application-level error code.<br>**Default**: `'INVALID_PARAMETER_VALUE'` |
| `description` | [`InvalidParameterValueDescription2Enum \| undefined`](../../doc/models/invalid-parameter-value-description-2-enum.md) | Optional | The human-readable description for an issue. The description can change over the lifetime of an API, so clients must not depend on this value. |

## Example (as JSON)

```json
{
  "location": "body",
  "issue": "INVALID_PARAMETER_VALUE",
  "field": "field4",
  "value": "value2",
  "description": "The value of a field is invalid."
}
```

