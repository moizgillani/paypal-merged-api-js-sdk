
# PAYMENTSOURCEDECLINEDBYPROCESSOR

## Structure

`PAYMENTSOURCEDECLINEDBYPROCESSOR`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `issue` | [`PaymentSourceDeclinedByProcessorIssueEnum \| undefined`](../../doc/models/payment-source-declined-by-processor-issue-enum.md) | Optional | - |
| `description` | [`PaymentSourceDeclinedByProcessorDescriptionEnum \| undefined`](../../doc/models/payment-source-declined-by-processor-description-enum.md) | Optional | - |

## Example (as JSON)

```json
{
  "issue": "PAYMENT_SOURCE_DECLINED_BY_PROCESSOR",
  "description": "The provided payment source is declined by the processor. Please try again with a different payment source by creating a new order."
}
```

