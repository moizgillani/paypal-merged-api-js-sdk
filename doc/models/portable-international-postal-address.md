
# Portable International Postal Address

The portable international postal address. Maps to [AddressValidationMetadata](https://github.com/googlei18n/libaddressinput/wiki/AddressValidationMetadata) and HTML 5.1 [Autofilling form controls: the autocomplete attribute](https://www.w3.org/TR/html51/sec-forms.html#autofilling-form-controls-the-autocomplete-attribute).

## Structure

`PortableInternationalPostalAddress`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `addressLine1` | `string \| undefined` | Optional | The first line of the address. For example, number or street. For example, `173 Drury Lane`. Required for data entry and compliance and risk checks. Must contain the full address.<br>**Constraints**: *Maximum Length*: `300` |
| `addressLine2` | `string \| undefined` | Optional | The second line of the address. For example, suite or apartment number.<br>**Constraints**: *Maximum Length*: `300` |
| `addressLine3` | `string \| undefined` | Optional | The third line of the address, if needed. For example, a street complement for Brazil, direction text, such as `next to Walmart`, or a landmark in an Indian address.<br>**Constraints**: *Maximum Length*: `100` |
| `adminArea4` | `string \| undefined` | Optional | The neighborhood, ward, or district. Smaller than `admin_area_level_3` or `sub_locality`. Value is: The postal sorting code for Guernsey and many French territories, such as French Guiana. The fine-grained administrative levels in China.<br>**Constraints**: *Maximum Length*: `100` |
| `adminArea3` | `string \| undefined` | Optional | A sub-locality, suburb, neighborhood, or district. Smaller than `admin_area_level_2`. Value is: Brazil. Suburb, bairro, or neighborhood. India. Sub-locality or district. Street name information is not always available but a sub-locality or district can be a very small area.<br>**Constraints**: *Maximum Length*: `100` |
| `adminArea2` | `string \| undefined` | Optional | A city, town, or village. Smaller than `admin_area_level_1`.<br>**Constraints**: *Maximum Length*: `120` |
| `adminArea1` | `string \| undefined` | Optional | The highest level sub-division in a country, which is usually a province, state, or ISO-3166-2 subdivision. Format for postal delivery. For example, `CA` and not `California`. Value, by country, is: UK. A county. US. A state. Canada. A province. Japan. A prefecture. Switzerland. A kanton.<br>**Constraints**: *Maximum Length*: `300` |
| `postalCode` | `string \| undefined` | Optional | The postal code, which is the zip code or equivalent. Typically required for countries with a postal code or an equivalent. See [postal code](https://en.wikipedia.org/wiki/Postal_code).<br>**Constraints**: *Maximum Length*: `60` |
| `countryCode` | `string` | Required | The [two-character ISO-3166-1 country code](/docs/integration/direct/rest/country-codes/) of the bank.<br>**Constraints**: *Minimum Length*: `2`, *Maximum Length*: `2`, *Pattern*: `^([A-Z]{2}\|C2)$` |
| `addressDetails` | [`NonPortableAdditionalAddressDetails \| undefined`](../../doc/models/non-portable-additional-address-details.md) | Optional | The non-portable additional address details that are sometimes needed for compliance, risk, or other scenarios where fine-grain address information might be needed. Not portable with common third party and open source. Redundant with core fields.<br/>For example, `address_portable.address_line_1` is usually a combination of `address_details.street_number`, `street_name`, and `street_type`. |

## Example (as JSON)

```json
{
  "address_line_1": "2211 N First Street",
  "address_line_2": "Building 17",
  "admin_area_2": "San Jose",
  "admin_area_1": "CA",
  "postal_code": "95131",
  "country_code": "US",
  "address_line_3": "address_line_32",
  "admin_area_4": "admin_area_40",
  "admin_area_3": "admin_area_38"
}
```

