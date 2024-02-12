
# Error Details 2

The error details. Required for client-side `4XX` errors.

## Structure

`ErrorDetails2`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `field` | `string \| undefined` | Optional | The field that caused the error. If this field is in the body, set this value to the field's JSON pointer value. Required for client-side errors. |
| `value` | `string \| undefined` | Optional | The value of the field that caused the error. |
| `location` | `string \| undefined` | Optional | The location of the field that caused the error. Value is `body`, `path`, or `query`.<br>**Default**: `'body'` |
| `issue` | `string` | Required, Constant | The unique, fine-grained application-level error code.<br>**Default**: `'INVALID_ACCOUNT_STATUS'` |
| `description` | [`InvalidAccountStatusDescriptionEnum \| undefined`](../../doc/models/invalid-account-status-description-enum.md) | Optional | The human-readable description for an issue. The description can change over the lifetime of an API, so clients must not depend on this value. |

## Example (as JSON)

```json
{
  "location": "body",
  "issue": "INVALID_ACCOUNT_STATUS",
  "field": "field0",
  "value": "value8",
  "description": "Account validations failed for the user."
}
```

