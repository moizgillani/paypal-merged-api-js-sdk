
# Error Details 15

The error details. Required for client-side `4XX` errors.

## Structure

`ErrorDetails15`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `field` | `string \| undefined` | Optional | The field that caused the error. If this field is in the body, set this value to the field's JSON pointer value. Required for client-side errors. |
| `value` | `string \| undefined` | Optional | The value of the field that caused the error. |
| `location` | `string \| undefined` | Optional | The location of the field that caused the error. Value is `body`, `path`, or `query`.<br>**Default**: `'body'` |
| `issue` | `string` | Required, Constant | The unique, fine-grained application-level error code.<br>**Default**: `'PREVIOUSLY_CAPTURED'` |
| `description` | [`AuthorizationsVoid422IssuesItemsAnyof0Description2Enum \| undefined`](../../doc/models/authorizations-void-422-issues-items-anyof-0-description-2-enum.md) | Optional | The human-readable description for an issue. The description can change over the lifetime of an API, so clients must not depend on this value. |

## Example (as JSON)

```json
{
  "location": "body",
  "issue": "PREVIOUSLY_CAPTURED",
  "field": "field4",
  "value": "value2",
  "description": "Authorization has been previously captured and hence cannot be voided."
}
```

