
# MISSINGPREVIOUSREFERENCEERRORRESPONSE

## Structure

`MISSINGPREVIOUSREFERENCEERRORRESPONSE`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `issue` | [`MissingPreviousReference3IssueEnum \| undefined`](../../doc/models/missing-previous-reference-3-issue-enum.md) | Optional | - |
| `description` | [`MissingPreviousReference3DescriptionEnum \| undefined`](../../doc/models/missing-previous-reference-3-description-enum.md) | Optional | - |

## Example (as JSON)

```json
{
  "issue": "MISSING_PREVIOUS_REFERENCE",
  "description": "For Merchant initiated network token transactions, either the payment_source.card.stored_credential.previous_network_transaction_reference or payment_source.card.stored_credential.previous_transaction_reference must be included in the request."
}
```

