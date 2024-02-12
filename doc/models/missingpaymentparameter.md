
# MISSINGPAYMENTPARAMETER

## Structure

`MISSINGPAYMENTPARAMETER`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `issue` | [`RequiredParamForCustInitiatedPaymentEnum \| undefined`](../../doc/models/required-param-for-cust-initiated-payment-enum.md) | Optional | - |
| `description` | [`ReqParamCustInitPayDescEnum \| undefined`](../../doc/models/req-param-cust-init-pay-desc-enum.md) | Optional | - |

## Example (as JSON)

```json
{
  "issue": "REQUIRED_PARAMETER_FOR_CUSTOMER_INITIATED_PAYMENT",
  "description": "This parameter is required when the customer is present. If the customer is not present, indicate so by sending payment_initiator=`MERCHANT`. For details, see <a href=\"https://developer.paypal.com/docs/api/orders/v2/#definition-card_stored_credential\">Stored Credential</a>."
}
```

