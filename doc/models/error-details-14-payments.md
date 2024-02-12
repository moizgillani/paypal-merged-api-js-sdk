
# Error Details 14 Payments

The error details. Required for client-side `4XX` errors.

## Structure

`ErrorDetails14Payments`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `field` | `string \| undefined` | Optional | The field that caused the error. If this field is in the body, set this value to the field's JSON pointer value. Required for client-side errors. |
| `value` | `string \| undefined` | Optional | The value of the field that caused the error. |
| `location` | `string \| undefined` | Optional | The location of the field that caused the error. Value is `body`, `path`, or `query`.<br>**Default**: `'body'` |
| `issue` | `string` | Required, Constant | The unique, fine-grained application-level error code.<br>**Default**: `'PREVIOUS_REQUEST_IN_PROGRESS'` |
| `description` | [`PreviousRequestInProgressDescription1Enum \| undefined`](../../doc/models/previous-request-in-progress-description-1-enum.md) | Optional | The human-readable description for an issue. The description can change over the lifetime of an API, so clients must not depend on this value. |

## Example (as JSON)

```json
{
  "location": "body",
  "issue": "PREVIOUS_REQUEST_IN_PROGRESS",
  "field": "field2",
  "value": "value0",
  "description": "A previous request on this resource is currently in progress. Please wait for sometime and try again. It is best to space out the initial and the subsequent request(s) to avoid receiving this error."
}
```

