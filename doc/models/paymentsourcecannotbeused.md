
# PAYMENTSOURCECANNOTBEUSED

## Structure

`PAYMENTSOURCECANNOTBEUSED`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `issue` | [`PaymentSourceCannotBeUsedIssueEnum \| undefined`](../../doc/models/payment-source-cannot-be-used-issue-enum.md) | Optional | - |
| `description` | [`PaymentSourceCannotBeUsedDescriptionEnum \| undefined`](../../doc/models/payment-source-cannot-be-used-description-enum.md) | Optional | - |

## Example (as JSON)

```json
{
  "issue": "PAYMENT_SOURCE_CANNOT_BE_USED",
  "description": "The provided payment source cannot be used to pay for the order. Please try again with a different payment source by creating a new order."
}
```

