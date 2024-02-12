
# Resource Not Found Error

## Structure

`ResourceNotFoundError`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `name` | [`ResourceNotFoundNameEnum \| undefined`](../../doc/models/resource-not-found-name-enum.md) | Optional | - |
| `message` | [`ResourceNotFoundMessageEnum \| undefined`](../../doc/models/resource-not-found-message-enum.md) | Optional | - |
| `issues` | [`ErrorDetails4[] \| undefined`](../../doc/models/error-details-4.md) | Optional | - |
| `debugId` | `string \| undefined` | Optional | The PayPal internal ID. Used for correlation purposes. |
| `informationLink` | `string \| undefined` | Optional | The information link, or URI, that shows detailed information about this error for the developer. |

## Example (as JSON)

```json
{
  "name": "RESOURCE_NOT_FOUND",
  "message": "The specified resource does not exist.",
  "issues": [
    {
      "field": "field2",
      "value": "value0",
      "location": "location2",
      "issue": "issue4",
      "description": "Specified resource ID does not exist. Please check the resource ID and try again."
    },
    {
      "field": "field2",
      "value": "value0",
      "location": "location2",
      "issue": "issue4",
      "description": "Specified resource ID does not exist. Please check the resource ID and try again."
    }
  ],
  "debug_id": "debug_id8",
  "information_link": "information_link2"
}
```

