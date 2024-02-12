
# VAULTINSTRUCTIONDUPLICATEDERROR

## Structure

`VAULTINSTRUCTIONDUPLICATEDERROR`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `issue` | [`VaultInstructionDuplicated1IssueEnum \| undefined`](../../doc/models/vault-instruction-duplicated-1-issue-enum.md) | Optional | - |
| `description` | [`VaultInstructionDuplicated1DescriptionEnum \| undefined`](../../doc/models/vault-instruction-duplicated-1-description-enum.md) | Optional | - |

## Example (as JSON)

```json
{
  "issue": "VAULT_INSTRUCTION_DUPLICATED",
  "description": "Only one vault instruction is allowed. Please use `vault.store_in_vault` to provide vault instruction."
}
```

