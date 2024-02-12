
# GOOGLEPAYGATEWAYMERCHANTIDMISMATCH

## Structure

`GOOGLEPAYGATEWAYMERCHANTIDMISMATCH`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `issue` | [`GooglePayGatewayMerchantIdMismatchIssueEnum \| undefined`](../../doc/models/google-pay-gateway-merchant-id-mismatch-issue-enum.md) | Optional | - |
| `description` | [`InvalidGooglePayMerchantIdEnum \| undefined`](../../doc/models/invalid-google-pay-merchant-id-enum.md) | Optional | - |

## Example (as JSON)

```json
{
  "issue": "GOOGLE_PAY_GATEWAY_MERCHANT_ID_MISMATCH",
  "description": "The gateway merchant ID in Google Pay token is not valid. This could be because the gateway merchant Id that was authorized by payer/buyer on Google Pay does not match with the API caller of the order."
}
```

