
# INSTRUMENTDECLINEDERROR

## Structure

`INSTRUMENTDECLINEDERROR`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `issue` | [`InstrumentDeclined1IssueEnum \| undefined`](../../doc/models/instrument-declined-1-issue-enum.md) | Optional | - |
| `description` | [`InstrumentDeclined1DescriptionEnum \| undefined`](../../doc/models/instrument-declined-1-description-enum.md) | Optional | - |

## Example (as JSON)

```json
{
  "issue": "INSTRUMENT_DECLINED",
  "description": "The instrument presented  was either declined by the processor or bank, or it can't be used for this payment."
}
```

