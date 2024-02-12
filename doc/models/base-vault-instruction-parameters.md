
# Base Vault Instruction Parameters

Base vaulting specification. The object can be extended for specific use cases within each payment_source that supports vaulting.

## Structure

`BaseVaultInstructionParameters`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `storeInVault` | `string` | Required, Constant | Defines how and when the payment source gets vaulted.<br>**Default**: `'ON_SUCCESS'` |

## Example (as JSON)

```json
{
  "store_in_vault": "ON_SUCCESS"
}
```

