
# VAULTINSTRUCTIONREQUIREDRESULT

## Structure

`VAULTINSTRUCTIONREQUIREDRESULT`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `issue` | [`VaultInstructionRequired2IssueEnum \| undefined`](../../doc/models/vault-instruction-required-2-issue-enum.md) | Optional | - |
| `description` | [`VaultInstructionRequired2DescriptionEnum \| undefined`](../../doc/models/vault-instruction-required-2-description-enum.md) | Optional | - |

## Example (as JSON)

```json
{
  "issue": "VAULT_INSTRUCTION_REQUIRED",
  "description": "Vault instruction is required. Please use `vault.store_in_vault` to provide vault instruction."
}
```

