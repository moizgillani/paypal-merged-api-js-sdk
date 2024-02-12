
# Token

The tokenized payment source to fund a payment.

## Structure

`Token`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `string` | Required | The PayPal-generated ID for the token.<br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `255`, *Pattern*: `^[0-9a-zA-Z_-]+$` |
| `type` | `string` | Required, Constant | The tokenization method that generated the ID.<br>**Default**: `'BILLING_AGREEMENT'` |

## Example (as JSON)

```json
{
  "id": "id6",
  "type": "BILLING_AGREEMENT"
}
```

