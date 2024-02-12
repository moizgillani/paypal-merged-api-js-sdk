
# DUPLICATEINVOICEIDERRORRESPONSE

## Structure

`DUPLICATEINVOICEIDERRORRESPONSE`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `issue` | [`DuplicateInvoiceId2IssueEnum \| undefined`](../../doc/models/duplicate-invoice-id-2-issue-enum.md) | Optional | - |
| `description` | [`DuplicateInvoiceId2DescriptionEnum \| undefined`](../../doc/models/duplicate-invoice-id-2-description-enum.md) | Optional | - |

## Example (as JSON)

```json
{
  "issue": "DUPLICATE_INVOICE_ID",
  "description": "Duplicate Invoice ID detected. To avoid a potential duplicate transaction your account setting requires that Invoice Id be unique for each transaction."
}
```

