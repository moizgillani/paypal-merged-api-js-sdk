
# Phone With Type

The phone information.

## Structure

`PhoneWithType`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `phoneType` | [`PhoneTypeEnum \| undefined`](../../doc/models/phone-type-enum.md) | Optional | The phone type. |
| `phoneNumber` | [`Phone`](../../doc/models/phone.md) | Required | The phone number, in its canonical international [E.164 numbering plan format](https://www.itu.int/rec/T-REC-E.164/en). Supports only the `national_number` property. |

## Example (as JSON)

```json
{
  "phone_type": "PAGER",
  "phone_number": {
    "country_code": "country_code2",
    "national_number": "national_number6",
    "extension_number": "extension_number8"
  }
}
```

