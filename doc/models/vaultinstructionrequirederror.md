
# VAULTINSTRUCTIONREQUIREDERROR

## Structure

`VAULTINSTRUCTIONREQUIREDERROR`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `issue` | [`VaultInstructionRequired1IssueEnum \| undefined`](../../doc/models/vault-instruction-required-1-issue-enum.md) | Optional | - |
| `description` | [`VaultInstructionRequired1DescriptionEnum \| undefined`](../../doc/models/vault-instruction-required-1-description-enum.md) | Optional | - |

## Example (as JSON)

```json
{
  "issue": "VAULT_INSTRUCTION_REQUIRED",
  "description": "Vault instruction is required. Please use `vault.store_in_vault` to provide vault instruction."
}
```

