
# Payee FX Rate ID Expired 1

## Structure

`PayeeFXRateIDExpired1`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `issue` | [`PayeeFxRateIdExpired1IssueEnum \| undefined`](../../doc/models/payee-fx-rate-id-expired-1-issue-enum.md) | Optional | - |
| `description` | [`PayeeFxRateIdExpired1DescriptionEnum \| undefined`](../../doc/models/payee-fx-rate-id-expired-1-description-enum.md) | Optional | - |

## Example (as JSON)

```json
{
  "issue": "PAYEE_FX_RATE_ID_EXPIRED",
  "description": "The specified FX Rate ID has expired. Please specify a different FX Rate Id and try the request again. Alternately, remove the FX Rate ID to process the request using the default exchange rate."
}
```

