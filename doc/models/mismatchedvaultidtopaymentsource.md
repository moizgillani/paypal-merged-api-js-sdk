
# MISMATCHEDVAULTIDTOPAYMENTSOURCE

## Structure

`MISMATCHEDVAULTIDTOPAYMENTSOURCE`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `issue` | [`MismatchedVaultIdToPaymentSourceIssueEnum \| undefined`](../../doc/models/mismatched-vault-id-to-payment-source-issue-enum.md) | Optional | - |
| `description` | [`MismatchedVaultIdToPaymentSourceDescriptionEnum \| undefined`](../../doc/models/mismatched-vault-id-to-payment-source-description-enum.md) | Optional | - |

## Example (as JSON)

```json
{
  "issue": "MISMATCHED_VAULT_ID_TO_PAYMENT_SOURCE",
  "description": "The vault_id does not match the payment_source provided. Please verify that the vault_id token used refers to the matching payment_source and try again. For example, a PayPal token cannot be passed in the vault_id field in the payment_source.card object."
}
```

