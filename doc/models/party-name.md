
# Party Name

The name of the party.

## Structure

`PartyName`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `prefix` | `string \| undefined` | Optional | The prefix, or title, to the party's name.<br>**Constraints**: *Maximum Length*: `140` |
| `givenName` | `string \| undefined` | Optional | When the party is a person, the party's given, or first, name.<br>**Constraints**: *Maximum Length*: `140` |
| `surname` | `string \| undefined` | Optional | When the party is a person, the party's surname or family name. Also known as the last name. Required when the party is a person. Use also to store multiple surnames including the matronymic, or mother's, surname.<br>**Constraints**: *Maximum Length*: `140` |
| `middleName` | `string \| undefined` | Optional | When the party is a person, the party's middle name. Use also to store multiple middle names including the patronymic, or father's, middle name.<br>**Constraints**: *Maximum Length*: `140` |
| `suffix` | `string \| undefined` | Optional | The suffix for the party's name.<br>**Constraints**: *Maximum Length*: `140` |
| `alternateFullName` | `string \| undefined` | Optional | DEPRECATED. The party's alternate name. Can be a business name, nickname, or any other name that cannot be split into first, last name. Required when the party is a business.<br>**Constraints**: *Maximum Length*: `300` |
| `fullName` | `string \| undefined` | Optional | When the party is a person, the party's full name.<br>**Constraints**: *Maximum Length*: `300` |

## Example (as JSON)

```json
{
  "given_name": "John",
  "surname": "Doe",
  "prefix": "prefix6",
  "middle_name": "middle_name8",
  "suffix": "suffix2"
}
```

