
# DUPLICATEINVOICEID

## Structure

`DUPLICATEINVOICEID`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `issue` | [`DuplicateInvoiceIdIssueEnum \| undefined`](../../doc/models/duplicate-invoice-id-issue-enum.md) | Optional | - |
| `description` | [`DuplicateInvoiceIdDescriptionEnum \| undefined`](../../doc/models/duplicate-invoice-id-description-enum.md) | Optional | - |

## Example (as JSON)

```json
{
  "issue": "DUPLICATE_INVOICE_ID",
  "description": "Duplicate Invoice ID detected. To avoid a potential duplicate transaction your account setting requires that Invoice Id be unique for each transaction."
}
```

