
# VAULTINSTRUCTIONDUPLICATED

## Structure

`VAULTINSTRUCTIONDUPLICATED`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `issue` | [`VaultInstructionDuplicatedIssueEnum \| undefined`](../../doc/models/vault-instruction-duplicated-issue-enum.md) | Optional | - |
| `description` | [`VaultInstructionDuplicatedDescriptionEnum \| undefined`](../../doc/models/vault-instruction-duplicated-description-enum.md) | Optional | - |

## Example (as JSON)

```json
{
  "issue": "VAULT_INSTRUCTION_DUPLICATED",
  "description": "Only one vault instruction is allowed. Please use `vault.store_in_vault` to provide vault instruction."
}
```

