
# ORDERNOTAPPROVED

## Structure

`ORDERNOTAPPROVED`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `issue` | [`OrderNotApprovedIssueEnum \| undefined`](../../doc/models/order-not-approved-issue-enum.md) | Optional | - |
| `description` | [`OrderNotApprovedDescriptionEnum \| undefined`](../../doc/models/order-not-approved-description-enum.md) | Optional | - |

## Example (as JSON)

```json
{
  "issue": "ORDER_NOT_APPROVED",
  "description": "Payer has not yet approved the Order for payment. Please redirect the payer to the 'rel':'approve' url returned as part of the HATEOAS links within the Create Order call."
}
```

