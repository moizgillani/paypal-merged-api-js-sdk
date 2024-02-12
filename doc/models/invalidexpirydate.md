
# INVALIDEXPIRYDATE

## Structure

`INVALIDEXPIRYDATE`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `issue` | [`InvalidExpiryDateIssueEnum \| undefined`](../../doc/models/invalid-expiry-date-issue-enum.md) | Optional | - |
| `description` | [`InvalidExpiryDateDescriptionEnum \| undefined`](../../doc/models/invalid-expiry-date-description-enum.md) | Optional | - |

## Example (as JSON)

```json
{
  "issue": "INVALID_EXPIRY_DATE",
  "description": "Expiry date is invalid. Expiry date should be a date in future and within the threshold for the payment source."
}
```

