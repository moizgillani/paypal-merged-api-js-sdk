
# GOOGLEPAYGATEWAYMERCHANTIDMISMATCHERROR

## Structure

`GOOGLEPAYGATEWAYMERCHANTIDMISMATCHERROR`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `issue` | [`GooglePayGatewayMerchantIdMismatch1IssueEnum \| undefined`](../../doc/models/google-pay-gateway-merchant-id-mismatch-1-issue-enum.md) | Optional | - |
| `description` | [`InvalidGooglePayMerchantIdMismatchEnum \| undefined`](../../doc/models/invalid-google-pay-merchant-id-mismatch-enum.md) | Optional | - |

## Example (as JSON)

```json
{
  "issue": "GOOGLE_PAY_GATEWAY_MERCHANT_ID_MISMATCH",
  "description": "The gateway merchant ID in Google Pay token is not valid. This could be because the gateway merchant Id that was authorized by payer/buyer on Google Pay does not match with the API caller of the order."
}
```

