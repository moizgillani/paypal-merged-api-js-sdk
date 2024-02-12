
# VAULTINSTRUCTIONREQUIREDERRORRESPONSE

## Structure

`VAULTINSTRUCTIONREQUIREDERRORRESPONSE`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `issue` | [`VaultInstructionRequired3IssueEnum \| undefined`](../../doc/models/vault-instruction-required-3-issue-enum.md) | Optional | - |
| `description` | [`VaultInstructionRequired3DescriptionEnum \| undefined`](../../doc/models/vault-instruction-required-3-description-enum.md) | Optional | - |

## Example (as JSON)

```json
{
  "issue": "VAULT_INSTRUCTION_REQUIRED",
  "description": "Vault instruction is required. Please use `vault.store_in_vault` to provide vault instruction."
}
```

