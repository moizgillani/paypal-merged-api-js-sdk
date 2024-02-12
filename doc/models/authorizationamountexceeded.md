
# AUTHORIZATIONAMOUNTEXCEEDED

## Structure

`AUTHORIZATIONAMOUNTEXCEEDED`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `issue` | [`AuthorizationAmountExceededIssueEnum \| undefined`](../../doc/models/authorization-amount-exceeded-issue-enum.md) | Optional | - |
| `description` | [`AuthorizationAmountExceededDescriptionEnum \| undefined`](../../doc/models/authorization-amount-exceeded-description-enum.md) | Optional | - |

## Example (as JSON)

```json
{
  "issue": "AUTHORIZATION_AMOUNT_EXCEEDED",
  "description": "Authorization amount specified exceeded allowable limit. Specify a different amount and try the request again. Alternately, contact Customer Support to increase your limits. Local regulations (e.g. in PSD2 countries) prohibit overages above the amount authorized by the payer."
}
```

