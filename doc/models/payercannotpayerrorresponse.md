
# PAYERCANNOTPAYERRORRESPONSE

## Structure

`PAYERCANNOTPAYERRORRESPONSE`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `issue` | [`PayerCannotPay2IssueEnum \| undefined`](../../doc/models/payer-cannot-pay-2-issue-enum.md) | Optional | - |
| `description` | [`PayerCannotPay2DescriptionEnum \| undefined`](../../doc/models/payer-cannot-pay-2-description-enum.md) | Optional | - |

## Example (as JSON)

```json
{
  "issue": "PAYER_CANNOT_PAY",
  "description": "Payer cannot pay for this transaction. Please contact the payer to find other ways to pay for this transaction."
}
```

