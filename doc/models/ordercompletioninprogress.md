
# ORDERCOMPLETIONINPROGRESS

## Structure

`ORDERCOMPLETIONINPROGRESS`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `issue` | [`OrderCompletionInProgressIssueEnum \| undefined`](../../doc/models/order-completion-in-progress-issue-enum.md) | Optional | - |
| `description` | [`OrderCompletionInProgressDescriptionEnum \| undefined`](../../doc/models/order-completion-in-progress-description-enum.md) | Optional | - |

## Example (as JSON)

```json
{
  "issue": "ORDER_COMPLETION_IN_PROGRESS",
  "description": "The order was created with processing_instruction of ORDER_COMPLETE_ON_PAYMENT_APPROVAL. The customer has approved the payment and PayPal is still in the process of capturing the order on your behalf as instructed. Please try your request again."
}
```

