
# PAYEEACCOUNTINVALID

## Structure

`PAYEEACCOUNTINVALID`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `issue` | [`PayeeAccountInvalidIssueEnum \| undefined`](../../doc/models/payee-account-invalid-issue-enum.md) | Optional | - |
| `description` | [`PayeeAccountInvalidDescriptionEnum \| undefined`](../../doc/models/payee-account-invalid-description-enum.md) | Optional | - |

## Example (as JSON)

```json
{
  "issue": "PAYEE_ACCOUNT_INVALID",
  "description": "Payee account specified is invalid. Please check the `payee.email_address` or `payee.merchant_id` specified and try again. Ensure that either  `payee.merchant_id` or `payee.email_address` is specified."
}
```

