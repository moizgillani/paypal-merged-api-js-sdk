
# Pay Pal Wallet Response

The PayPal Wallet response.

## Structure

`PayPalWalletResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `emailAddress` | `string \| undefined` | Optional | The email address of the PayPal account holder.<br>**Constraints**: *Minimum Length*: `3`, *Maximum Length*: `254`, *Pattern*: `(?:[a-zA-Z0-9!#$%&'*+/=?^_`{\|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{\|}~-]+)*\|(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]\|\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?\.)+[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?\|\[(?:(?:(2(5[0-5]\|[0-4][0-9])\|1[0-9][0-9]\|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]\|[0-4][0-9])\|1[0-9][0-9]\|[1-9]?[0-9])\|[a-zA-Z0-9-]*[a-zA-Z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]\|\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])` |
| `accountId` | `string \| undefined` | Optional | The PayPal-assigned ID for the PayPal account holder.<br>**Constraints**: *Minimum Length*: `13`, *Maximum Length*: `13`, *Pattern*: `^[2-9A-HJ-NP-Z]{13}$` |
| `name` | [`PartyName \| undefined`](../../doc/models/party-name.md) | Optional | The name of the PayPal account holder. Supports only the `given_name` and `surname` properties. |
| `phoneType` | [`ContactTypeEnum \| undefined`](../../doc/models/contact-type-enum.md) | Optional | The phone type. |
| `phoneNumber` | [`CanonicalInternationalPhoneNumber \| undefined`](../../doc/models/canonical-international-phone-number.md) | Optional | The phone number, in its canonical international [E.164 numbering plan format](https://www.itu.int/rec/T-REC-E.164/en). Available only when you enable the **Contact Telephone Number** option in the <a href="https://www.paypal.com/cgi-bin/customerprofileweb?cmd=_profile-website-payments">**Profile & Settings**</a> for the merchant's PayPal account. Supports only the `national_number` property. |
| `birthDate` | `string \| undefined` | Optional | The birth date of the PayPal account holder in `YYYY-MM-DD` format.<br>**Constraints**: *Minimum Length*: `10`, *Maximum Length*: `10`, *Pattern*: `^[0-9]{4}-(0[1-9]\|1[0-2])-(0[1-9]\|[1-2][0-9]\|3[0-1])$` |
| `taxInfo` | [`TaxInformation \| undefined`](../../doc/models/tax-information.md) | Optional | The tax information of the PayPal account holder. Required only for Brazilian PayPal account holder's. Both `tax_id` and `tax_id_type` are required. |
| `address` | [`PortableInternationalPostalAddress \| undefined`](../../doc/models/portable-international-postal-address.md) | Optional | The address of the payer. Supports only the `address_line_1`, `address_line_2`, `admin_area_1`, `admin_area_2`, `postal_code`, and `country_code` properties. Also referred to as the billing address of the customer. |
| `attributes` | [`PayPalWalletAttributesResponse \| undefined`](../../doc/models/pay-pal-wallet-attributes-response.md) | Optional | Additional attributes associated with the use of a PayPal Wallet. |

## Example (as JSON)

```json
{
  "email_address": "customer@example.com",
  "account_id": "QYR5Z8XDVJNXQ",
  "name": {
    "given_name": "John",
    "surname": "Doe",
    "prefix": "prefix8",
    "middle_name": "middle_name0",
    "suffix": "suffix0"
  },
  "phone_type": "MOBILE",
  "phone_number": {
    "national_number": "national_number6"
  }
}
```

