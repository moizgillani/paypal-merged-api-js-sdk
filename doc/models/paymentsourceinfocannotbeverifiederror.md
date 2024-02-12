
# PAYMENTSOURCEINFOCANNOTBEVERIFIEDERROR

## Structure

`PAYMENTSOURCEINFOCANNOTBEVERIFIEDERROR`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `issue` | [`PaymentSourceInfoCannotBeVerified1IssueEnum \| undefined`](../../doc/models/payment-source-info-cannot-be-verified-1-issue-enum.md) | Optional | - |
| `description` | [`UnverifiedPaymentSourceAndAddressCombinationEnum \| undefined`](../../doc/models/unverified-payment-source-and-address-combination-enum.md) | Optional | - |

## Example (as JSON)

```json
{
  "issue": "PAYMENT_SOURCE_INFO_CANNOT_BE_VERIFIED",
  "description": "The combination of the payment_source name, billing address, shipping name and shipping address could not be verified. Please correct this information and try again by creating a new order."
}
```

