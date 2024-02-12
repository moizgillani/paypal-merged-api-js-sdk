
# PAYEEFXRATEIDEXPIREDERRORRESPONSE

## Structure

`PAYEEFXRATEIDEXPIREDERRORRESPONSE`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `issue` | [`PayeeFxRateIdExpired3IssueEnum \| undefined`](../../doc/models/payee-fx-rate-id-expired-3-issue-enum.md) | Optional | - |
| `description` | [`PayeeFxRateIdExpired3DescriptionEnum \| undefined`](../../doc/models/payee-fx-rate-id-expired-3-description-enum.md) | Optional | - |

## Example (as JSON)

```json
{
  "issue": "PAYEE_FX_RATE_ID_EXPIRED",
  "description": "The specified FX Rate ID has expired. Please specify a different FX Rate Id and try the request again. Alternately, remove the FX Rate ID to process the request using the default exchange rate."
}
```

