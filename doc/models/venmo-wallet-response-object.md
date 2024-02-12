
# Venmo Wallet Response Object

Venmo wallet response.

## Structure

`VenmoWalletResponseObject`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `emailAddress` | `string \| undefined` | Optional | The email address of the payer.<br>**Constraints**: *Minimum Length*: `3`, *Maximum Length*: `254`, *Pattern*: `(?:[a-zA-Z0-9!#$%&'*+/=?^_`{\|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{\|}~-]+)*\|(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]\|\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?\.)+[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?\|\[(?:(?:(2(5[0-5]\|[0-4][0-9])\|1[0-9][0-9]\|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]\|[0-4][0-9])\|1[0-9][0-9]\|[1-9]?[0-9])\|[a-zA-Z0-9-]*[a-zA-Z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]\|\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])` |
| `accountId` | `string \| undefined` | Optional | This is an immutable system-generated id for a user's Venmo account.<br>**Constraints**: *Minimum Length*: `13`, *Maximum Length*: `13`, *Pattern*: `^[2-9A-HJ-NP-Z]{13}$` |
| `userName` | `string \| undefined` | Optional | The Venmo user name chosen by the user, also know as a Venmo handle.<br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `50`, *Pattern*: `^[-a-zA-Z0-9_]*$` |
| `name` | [`PartyName \| undefined`](../../doc/models/party-name.md) | Optional | The name associated with the Venmo account. Supports only the `given_name` and `surname` properties. |
| `phoneNumber` | [`CanonicalInternationalPhoneNumber \| undefined`](../../doc/models/canonical-international-phone-number.md) | Optional | The phone number associated with the Venmo account, in its canonical international [E.164 numbering plan format](https://www.itu.int/rec/T-REC-E.164/en). Supports only the `national_number` property. |
| `address` | [`PortableInternationalPostalAddress \| undefined`](../../doc/models/portable-international-postal-address.md) | Optional | The address of the payer. Supports only the `address_line_1`, `address_line_2`, `admin_area_1`, `admin_area_2`, `postal_code`, and `country_code` properties. Also referred to as the billing address of the customer. |
| `attributes` | [`VenmoWalletAttributesResponse \| undefined`](../../doc/models/venmo-wallet-attributes-response.md) | Optional | Additional attributes associated with the use of a Venmo Wallet. |

## Example (as JSON)

```json
{
  "email_address": "email_address8",
  "account_id": "account_id2",
  "user_name": "user_name6",
  "name": {
    "prefix": "prefix8",
    "given_name": "given_name2",
    "surname": "surname8",
    "middle_name": "middle_name0",
    "suffix": "suffix0"
  },
  "phone_number": {
    "national_number": "national_number6"
  }
}
```

