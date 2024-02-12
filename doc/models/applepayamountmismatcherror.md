
# APPLEPAYAMOUNTMISMATCHERROR

## Structure

`APPLEPAYAMOUNTMISMATCHERROR`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `issue` | [`ApplePayAmountMismatch1IssueEnum \| undefined`](../../doc/models/apple-pay-amount-mismatch-1-issue-enum.md) | Optional | - |
| `description` | [`ApplePayAmountMismatch1DescriptionEnum \| undefined`](../../doc/models/apple-pay-amount-mismatch-1-description-enum.md) | Optional | - |

## Example (as JSON)

```json
{
  "issue": "APPLE_PAY_AMOUNT_MISMATCH",
  "description": "The 'amount' specified in the Order should match the amount that was viewed and authorized by the payer/buyer on Apple Pay. If the amount has changed, please redirect the buyer to authorize the order again via Apple Pay."
}
```

