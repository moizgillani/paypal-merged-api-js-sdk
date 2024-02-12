
# PAYMENTSOURCEINFOCANNOTBEVERIFIED

## Structure

`PAYMENTSOURCEINFOCANNOTBEVERIFIED`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `issue` | [`PaymentSourceInfoCannotBeVerifiedIssueEnum \| undefined`](../../doc/models/payment-source-info-cannot-be-verified-issue-enum.md) | Optional | - |
| `description` | [`PaymentSourceInfoCannotBeVerifiedDescriptionEnum \| undefined`](../../doc/models/payment-source-info-cannot-be-verified-description-enum.md) | Optional | - |

## Example (as JSON)

```json
{
  "issue": "PAYMENT_SOURCE_INFO_CANNOT_BE_VERIFIED",
  "description": "The combination of the payment_source name, billing address, shipping name and shipping address could not be verified. Please correct this information and try again by creating a new order."
}
```

