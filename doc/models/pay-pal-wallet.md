
# Pay Pal Wallet

A resource that identifies a PayPal Wallet is used for payment.

## Structure

`PayPalWallet`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `vaultId` | `string \| undefined` | Optional | The PayPal-generated ID for the payment_source stored within the Vault.<br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `255`, *Pattern*: `^[0-9a-zA-Z_-]+$` |
| `emailAddress` | `string \| undefined` | Optional | The email address of the PayPal account holder.<br>**Constraints**: *Minimum Length*: `3`, *Maximum Length*: `254`, *Pattern*: `(?:[a-zA-Z0-9!#$%&'*+/=?^_`{\|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{\|}~-]+)*\|(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]\|\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?\.)+[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?\|\[(?:(?:(2(5[0-5]\|[0-4][0-9])\|1[0-9][0-9]\|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]\|[0-4][0-9])\|1[0-9][0-9]\|[1-9]?[0-9])\|[a-zA-Z0-9-]*[a-zA-Z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]\|\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])` |
| `name` | [`PartyName \| undefined`](../../doc/models/party-name.md) | Optional | The name of the PayPal account holder. Supports only the `given_name` and `surname` properties. |
| `phone` | [`PhoneWithType \| undefined`](../../doc/models/phone-with-type.md) | Optional | The phone number of the customer. Available only when you enable the **Contact Telephone Number** option in the <a href="https://www.paypal.com/cgi-bin/customerprofileweb?cmd=_profile-website-payments">**Profile & Settings**</a> for the merchant's PayPal account. The `phone.phone_number` supports only `national_number`. |
| `birthDate` | `string \| undefined` | Optional | The birth date of the PayPal account holder in `YYYY-MM-DD` format.<br>**Constraints**: *Minimum Length*: `10`, *Maximum Length*: `10`, *Pattern*: `^[0-9]{4}-(0[1-9]\|1[0-2])-(0[1-9]\|[1-2][0-9]\|3[0-1])$` |
| `taxInfo` | [`TaxInformation \| undefined`](../../doc/models/tax-information.md) | Optional | The tax information of the PayPal account holder. Required only for Brazilian PayPal account holder's. Both `tax_id` and `tax_id_type` are required. |
| `address` | [`PortableInternationalPostalAddress \| undefined`](../../doc/models/portable-international-postal-address.md) | Optional | The address of the payer. Supports only the `address_line_1`, `address_line_2`, `admin_area_1`, `admin_area_2`, `postal_code`, and `country_code` properties. Also referred to as the billing address of the customer. |
| `attributes` | [`PayPalWalletAttributes \| undefined`](../../doc/models/pay-pal-wallet-attributes.md) | Optional | Additional attributes associated with the use of this wallet. |
| `experienceContext` | [`PayPalWalletExperienceContext \| undefined`](../../doc/models/pay-pal-wallet-experience-context.md) | Optional | Customizes the payer experience during the approval process for payment with PayPal.<blockquote><strong>Note:</strong> Partners and Marketplaces might configure <code>brand_name</code> and <code>shipping_preference</code> during partner account setup, which overrides the request values.</blockquote> |
| `billingAgreementId` | `string \| undefined` | Optional | The PayPal billing agreement ID. References an approved recurring payment for goods or services.<br>**Constraints**: *Minimum Length*: `2`, *Maximum Length*: `128`, *Pattern*: `^[a-zA-Z0-9-]+$` |

## Example (as JSON)

```json
{
  "email_address": "customer@example.com",
  "name": {
    "given_name": "John",
    "surname": "Doe",
    "prefix": "prefix8",
    "middle_name": "middle_name0",
    "suffix": "suffix0"
  },
  "vault_id": "vault_id8",
  "phone": {
    "phone_type": "OTHER",
    "phone_number": {
      "country_code": "country_code2",
      "national_number": "national_number6",
      "extension_number": "extension_number8"
    }
  },
  "birth_date": "birth_date4"
}
```

