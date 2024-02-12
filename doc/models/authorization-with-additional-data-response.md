
# Authorization With Additional Data Response

## Structure

`AuthorizationWithAdditionalDataResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `processorResponse` | [`ProcessorResponse \| undefined`](../../doc/models/processor-response.md) | Optional | The processor response for card transactions. |

## Example (as JSON)

```json
{
  "processor_response": {
    "avs_code": "3",
    "cvv_code": "3",
    "response_code": "PCNR",
    "payment_advice_code": "03"
  }
}
```

