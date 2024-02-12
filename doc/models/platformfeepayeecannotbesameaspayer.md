
# PLATFORMFEEPAYEECANNOTBESAMEASPAYER

## Structure

`PLATFORMFEEPAYEECANNOTBESAMEASPAYER`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `issue` | [`PlatformFeePayeeCannotBeSameAsPayerIssueEnum \| undefined`](../../doc/models/platform-fee-payee-cannot-be-same-as-payer-issue-enum.md) | Optional | - |
| `description` | [`PayerCannotPayThemselvesErrorEnum \| undefined`](../../doc/models/payer-cannot-pay-themselves-error-enum.md) | Optional | - |

## Example (as JSON)

```json
{
  "issue": "PLATFORM_FEE_PAYEE_CANNOT_BE_SAME_AS_PAYER",
  "description": "The payer cannot pay themselves. The recipient account of the platform fees must be different from the payer account."
}
```

