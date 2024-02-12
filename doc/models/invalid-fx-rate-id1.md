
# Invalid FX Rate ID1

## Structure

`InvalidFXRateID1`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `issue` | [`InvalidFxRateId1IssueEnum \| undefined`](../../doc/models/invalid-fx-rate-id-1-issue-enum.md) | Optional | - |
| `description` | [`InvalidFxRateId1DescriptionEnum \| undefined`](../../doc/models/invalid-fx-rate-id-1-description-enum.md) | Optional | - |

## Example (as JSON)

```json
{
  "issue": "INVALID_FX_RATE_ID",
  "description": "The specific FX Rate ID is not valid. This could be either because we are not able to look up the FX Rate based on this ID or it could be because the ID belongs to another API Caller."
}
```

