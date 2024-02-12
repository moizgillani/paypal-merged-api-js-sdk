
# PAYMENTSOURCEDECLINEDBYPROCESSORERROR

## Structure

`PAYMENTSOURCEDECLINEDBYPROCESSORERROR`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `issue` | [`PaymentSourceDeclinedByProcessor1IssueEnum \| undefined`](../../doc/models/payment-source-declined-by-processor-1-issue-enum.md) | Optional | - |
| `description` | [`PaymentSourceDeclinedByProcessor1DescriptionEnum \| undefined`](../../doc/models/payment-source-declined-by-processor-1-description-enum.md) | Optional | - |

## Example (as JSON)

```json
{
  "issue": "PAYMENT_SOURCE_DECLINED_BY_PROCESSOR",
  "description": "The provided payment source is declined by the processor. Please try again with a different payment source by creating a new order."
}
```

