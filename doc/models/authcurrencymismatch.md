
# AUTHCURRENCYMISMATCH

## Structure

`AUTHCURRENCYMISMATCH`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `issue` | [`AuthCurrencyMismatchIssueEnum \| undefined`](../../doc/models/auth-currency-mismatch-issue-enum.md) | Optional | - |
| `description` | [`AuthCurrencyMismatchDescriptionEnum \| undefined`](../../doc/models/auth-currency-mismatch-description-enum.md) | Optional | - |

## Example (as JSON)

```json
{
  "issue": "AUTH_CURRENCY_MISMATCH",
  "description": "The currency specified during reauthorization should be the same as the currency specified in the original authorization. Please check the currency of the authorization for which you are trying to reauthorize and try again."
}
```

