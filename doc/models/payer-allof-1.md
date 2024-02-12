
# Payer Allof 1

## Structure

`PayerAllof1`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `name` | [`PartyName \| undefined`](../../doc/models/party-name.md) | Optional | The name of the payer. Supports only the `given_name` and `surname` properties. |
| `phone` | [`PhoneWithType \| undefined`](../../doc/models/phone-with-type.md) | Optional | The phone number of the customer. Available only when you enable the **Contact Telephone Number** option in the <a href="https://www.paypal.com/cgi-bin/customerprofileweb?cmd=_profile-website-payments">**Profile & Settings**</a> for the merchant's PayPal account. The `phone.phone_number` supports only `national_number`. |
| `birthDate` | `string \| undefined` | Optional | The birth date of the payer in `YYYY-MM-DD` format.<br>**Constraints**: *Minimum Length*: `10`, *Maximum Length*: `10`, *Pattern*: `^[0-9]{4}-(0[1-9]\|1[0-2])-(0[1-9]\|[1-2][0-9]\|3[0-1])$` |
| `taxInfo` | [`TaxInformationPaymentMethodTokens \| undefined`](../../doc/models/tax-information-payment-method-tokens.md) | Optional | The tax information of the payer. Required only for Brazilian payer's. Both `tax_id` and `tax_id_type` are required. |
| `address` | [`PortablePostalAddressMediumGrained \| undefined`](../../doc/models/portable-postal-address-medium-grained.md) | Optional | The address of the payer. Supports only the `address_line_1`, `address_line_2`, `admin_area_1`, `admin_area_2`, `postal_code`, and `country_code` properties. Also referred to as the billing address of the customer. |

## Example (as JSON)

```json
{
  "name": {
    "prefix": "prefix8",
    "given_name": "given_name2",
    "surname": "surname8",
    "middle_name": "middle_name0",
    "suffix": "suffix0"
  },
  "phone": {
    "phone_type": "OTHER",
    "phone_number": {
      "country_code": "country_code2",
      "national_number": "national_number6",
      "extension_number": "extension_number8"
    }
  },
  "birth_date": "birth_date4",
  "tax_info": {
    "tax_id": "tax_id4",
    "tax_id_type": "BR_CPF"
  },
  "address": {
    "address_line_1": "address_line_16",
    "address_line_2": "address_line_26",
    "address_line_3": "address_line_32",
    "admin_area_4": "admin_area_40",
    "admin_area_3": "admin_area_38",
    "country_code": "country_code6"
  }
}
```

