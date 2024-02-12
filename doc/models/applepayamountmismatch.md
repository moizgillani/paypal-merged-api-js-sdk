
# APPLEPAYAMOUNTMISMATCH

## Structure

`APPLEPAYAMOUNTMISMATCH`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `issue` | [`ApplePayAmountMismatchIssueEnum \| undefined`](../../doc/models/apple-pay-amount-mismatch-issue-enum.md) | Optional | - |
| `description` | [`ApplePayAmountMismatchDescriptionEnum \| undefined`](../../doc/models/apple-pay-amount-mismatch-description-enum.md) | Optional | - |

## Example (as JSON)

```json
{
  "issue": "APPLE_PAY_AMOUNT_MISMATCH",
  "description": "The 'amount' specified in the Order should match the amount that was viewed and authorized by the payer/buyer on Apple Pay. If the amount has changed, please redirect the buyer to authorize the order again via Apple Pay."
}
```

