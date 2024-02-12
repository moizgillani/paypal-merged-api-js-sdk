
# ORDERCANNOTBESAVED

## Structure

`ORDERCANNOTBESAVED`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `issue` | [`OrderCannotBeSavedIssueEnum \| undefined`](../../doc/models/order-cannot-be-saved-issue-enum.md) | Optional | - |
| `description` | [`OrderCannotBeSavedDescriptionEnum \| undefined`](../../doc/models/order-cannot-be-saved-description-enum.md) | Optional | - |

## Example (as JSON)

```json
{
  "issue": "ORDER_CANNOT_BE_SAVED",
  "description": "The option to save an order is only available if the `intent` is AUTHORIZE and `processing_instruction` uses one of the `ORDER_SAVED` options. For example, `intent`=AUTHORIZE, `processing_instruction`=ORDER_SAVED_EXPLICITLY. Please change the intent and/or processing_instruction` and try again."
}
```

