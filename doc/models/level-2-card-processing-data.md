
# Level 2 Card Processing Data

The level 2 card processing data collections. If your merchant account has been configured for Level 2 processing this field will be passed to the processor on your behalf. Please contact your PayPal Technical Account Manager to define level 2 data for your business.

## Structure

`Level2CardProcessingData`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `invoiceId` | `string \| undefined` | Optional | Use this field to pass a purchase identification value of up to 12 ASCII characters for AIB and 17 ASCII characters for all other processors.<br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `17`, *Pattern*: `^[\w‘\-.,":;\!?]*$` |
| `taxTotal` | [`Money \| undefined`](../../doc/models/money.md) | Optional | Use this field to break down the amount of tax included in the total purchase amount. The value provided here will not add to the total purchase amount. The value can't be negative, and in most cases, it must be greater than zero in order to qualify for lower interchange rates.<br>Value, by country, is:<br><br>    UK. A county.<br>    US. A state.<br>    Canada. A province.<br>    Japan. A prefecture.<br>    Switzerland. A kanton. |

## Example (as JSON)

```json
{
  "invoice_id": "invoice_id8",
  "tax_total": {
    "currency_code": "currency_code4",
    "value": "value0"
  }
}
```

