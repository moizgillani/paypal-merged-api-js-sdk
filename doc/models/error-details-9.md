
# Error Details 9

The error details. Required for client-side `4XX` errors.

## Structure

`ErrorDetails9`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `field` | `string \| undefined` | Optional | The field that caused the error. If this field is in the body, set this value to the field's JSON pointer value. Required for client-side errors. |
| `value` | `string \| undefined` | Optional | The value of the field that caused the error. |
| `location` | `string \| undefined` | Optional | The location of the field that caused the error. Value is `body`, `path`, or `query`.<br>**Default**: `'body'` |
| `issue` | `string` | Required, Constant | The unique, fine-grained application-level error code.<br>**Default**: `'NOT_ELIGIBLE_FOR_TOKEN_PROCESSING'` |
| `description` | [`NotEligibleForTokenProcessingDescription2Enum \| undefined`](../../doc/models/not-eligible-for-token-processing-description-2-enum.md) | Optional | The human-readable description for an issue. The description can change over the lifetime of an API, so clients must not depend on this value. |

## Example (as JSON)

```json
{
  "location": "body",
  "issue": "NOT_ELIGIBLE_FOR_TOKEN_PROCESSING",
  "field": "field8",
  "value": "value6",
  "description": "API caller is not enabled to process payments with the specified type of token. Please contact customer support to request permissions to process transactions with this type of token."
}
```

