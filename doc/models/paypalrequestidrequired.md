
# PAYPALREQUESTIDREQUIRED

## Structure

`PAYPALREQUESTIDREQUIRED`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `issue` | [`PaypalRequestIdRequiredIssueEnum \| undefined`](../../doc/models/paypal-request-id-required-issue-enum.md) | Optional | - |
| `description` | [`PaypalRequestIdRequiredDescriptionEnum \| undefined`](../../doc/models/paypal-request-id-required-description-enum.md) | Optional | - |

## Example (as JSON)

```json
{
  "issue": "PAYPAL_REQUEST_ID_REQUIRED",
  "description": "A PayPal-Request-Id is required if you are trying to process payment for an Order. Please specify a PayPal-Request-Id or Create the Order without a 'payment_source' specified."
}
```

