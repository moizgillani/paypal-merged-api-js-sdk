
# MERCHANTINITIATEDWITHAUTHENTICATIONRESULTS

## Structure

`MERCHANTINITIATEDWITHAUTHENTICATIONRESULTS`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `issue` | [`MerchantInitiatedAuthenticationResultsEnum \| undefined`](../../doc/models/merchant-initiated-authentication-results-enum.md) | Optional | - |
| `description` | [`MerchInitAuthResultsDescEnum \| undefined`](../../doc/models/merch-init-auth-results-desc-enum.md) | Optional | - |

## Example (as JSON)

```json
{
  "issue": "MERCHANT_INITIATED_WITH_AUTHENTICATION_RESULTS",
  "description": "`stored_payment_source.payment_initiator` = `MERCHANT` is not supported if 3D-Secure authentication results are present in the order. 3D-Secure authentication results can be present in the order only when customer is the payment initiator. It is semantically incorrect to perform a merchant initiated payment with 3D-Secure authentication results is the order."
}
```

