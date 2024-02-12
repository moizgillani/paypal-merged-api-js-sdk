
# AUTHORIZATIONCURRENCYMISMATCH

## Structure

`AUTHORIZATIONCURRENCYMISMATCH`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `issue` | [`AuthorizationCurrencyMismatchIssueEnum \| undefined`](../../doc/models/authorization-currency-mismatch-issue-enum.md) | Optional | - |
| `description` | [`AuthorizationCurrencyMismatchDescriptionEnum \| undefined`](../../doc/models/authorization-currency-mismatch-description-enum.md) | Optional | - |

## Example (as JSON)

```json
{
  "issue": "AUTHORIZATION_CURRENCY_MISMATCH",
  "description": "The currency of the authorization should be same as that in which the Order was created and approved by the Payer. Please check the 'currency_code' and try again."
}
```

