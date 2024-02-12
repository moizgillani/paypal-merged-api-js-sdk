
# Card Experience Context

Customizes the payer experience during the 3DS Approval for payment.

## Structure

`CardExperienceContext`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `returnUrl` | `string \| undefined` | Optional | The URL where the customer will be redirected upon successfully completing the 3DS challenge. |
| `cancelUrl` | `string \| undefined` | Optional | The URL where the customer will be redirected upon cancelling the 3DS challenge. |

## Example (as JSON)

```json
{
  "return_url": "return_url2",
  "cancel_url": "cancel_url0"
}
```

