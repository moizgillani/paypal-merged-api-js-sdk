
# INVALIDGOOGLEPAYTOKEN

## Structure

`INVALIDGOOGLEPAYTOKEN`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `issue` | [`InvalidGooglePayTokenIssueEnum \| undefined`](../../doc/models/invalid-google-pay-token-issue-enum.md) | Optional | - |
| `description` | [`InvalidGooglePayTokenDescriptionEnum \| undefined`](../../doc/models/invalid-google-pay-token-description-enum.md) | Optional | - |

## Example (as JSON)

```json
{
  "issue": "INVALID_GOOGLE_PAY_TOKEN",
  "description": "The google pay token is invalid. PayPal was not able to decrypt the googlepay token or PayPal was not able to find the necessary data in the token after decryption."
}
```

