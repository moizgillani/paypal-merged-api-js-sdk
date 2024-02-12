
# MERCHANTINITIATEDSECURITYCODEERRORRESPONSE

## Structure

`MERCHANTINITIATEDSECURITYCODEERRORRESPONSE`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `issue` | [`MerchantInitiatedWithSecurityCode2IssueEnum \| undefined`](../../doc/models/merchant-initiated-with-security-code-2-issue-enum.md) | Optional | - |
| `description` | [`MerchantInitiatedWithSecurityCode2DescriptionEnum \| undefined`](../../doc/models/merchant-initiated-with-security-code-2-description-enum.md) | Optional | - |

## Example (as JSON)

```json
{
  "issue": "MERCHANT_INITIATED_WITH_SECURITY_CODE",
  "description": "`stored_payment_source.payment_initiator` = `MERCHANT` is not supported if `payment_source.card.security_code` is present in the order. `security_code` can be present in the order only when customer is the payment initiator. It is semantically incorrect to perform a merchant initiated payment with `security_code` is the order."
}
```

