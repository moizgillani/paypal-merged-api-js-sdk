
# Payment Source Request

The payment method to vault with the instrument details.

## Structure

`PaymentSourceRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `card` | [`CardRequestPaymentMethodTokens \| undefined`](../../doc/models/card-request-payment-method-tokens.md) | Optional | A Resource representing a request to vault a Card. |
| `token` | [`TokenRequest \| undefined`](../../doc/models/token-request.md) | Optional | The Tokenized Payment Source representing a Request to Vault a Token. |

## Example (as JSON)

```json
{
  "card": {
    "id": "id6",
    "name": "name6",
    "number": "number6",
    "expiry": "expiry4",
    "security_code": "security_code8"
  },
  "token": {
    "id": "id6",
    "type": "type4",
    "attributes": {
      "key1": "val1",
      "key2": "val2"
    }
  }
}
```

