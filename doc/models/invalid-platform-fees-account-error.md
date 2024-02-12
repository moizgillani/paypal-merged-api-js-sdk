
# Invalid Platform Fees Account Error

## Structure

`InvalidPlatformFeesAccountError`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `issue` | [`InvalidPlatformFeesAccount1IssueEnum \| undefined`](../../doc/models/invalid-platform-fees-account-1-issue-enum.md) | Optional | - |
| `description` | [`InvalidPlatformFeesAccount1DescriptionEnum \| undefined`](../../doc/models/invalid-platform-fees-account-1-description-enum.md) | Optional | - |

## Example (as JSON)

```json
{
  "issue": "INVALID_PLATFORM_FEES_ACCOUNT",
  "description": "The specified platform_fees payee account is either invalid or account setup is incomplete.Please work with your PayPal Account Manager to enable this option for your account."
}
```

