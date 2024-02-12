
# Token Request

The Tokenized Payment Source representing a Request to Vault a Token.

## Structure

`TokenRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `string` | Required | The PayPal-generated ID for the token.<br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `255`, *Pattern*: `^[0-9A-Z_-]+$` |
| `type` | `string` | Required, Constant | The tokenization method that generated the ID.<br>**Default**: `'BILLING_AGREEMENT'` |
| `attributes` | `unknown \| undefined` | Optional | The auxiliary details of the token. |

## Example (as JSON)

```json
{
  "id": "id0",
  "type": "BILLING_AGREEMENT",
  "attributes": {
    "key1": "val1",
    "key2": "val2"
  }
}
```

