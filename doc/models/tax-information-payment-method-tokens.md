
# Tax Information Payment Method Tokens

The tax ID of the customer. The customer is also known as the payer. Both `tax_id` and `tax_id_type` are required.

## Structure

`TaxInformationPaymentMethodTokens`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `taxId` | `string` | Required | The customer's tax ID value.<br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `14`, *Pattern*: `([a-zA-Z0-9])` |
| `taxIdType` | [`TaxIdTypeEnum`](../../doc/models/tax-id-type-enum.md) | Required | The customer's tax ID type.<br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `14`, *Pattern*: `^[A-Z0-9_]+$` |

## Example (as JSON)

```json
{
  "tax_id": "tax_id4",
  "tax_id_type": "BR_CPF"
}
```

