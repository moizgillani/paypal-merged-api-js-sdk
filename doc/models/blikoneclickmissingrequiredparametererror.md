
# BLIKONECLICKMISSINGREQUIREDPARAMETERERROR

## Structure

`BLIKONECLICKMISSINGREQUIREDPARAMETERERROR`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `issue` | [`BlikOneClickMissingRequiredParameter1IssueEnum \| undefined`](../../doc/models/blik-one-click-missing-required-parameter-1-issue-enum.md) | Optional | - |
| `description` | [`BlikOneClickFirstTransactionParamsEnum \| undefined`](../../doc/models/blik-one-click-first-transaction-params-enum.md) | Optional | - |

## Example (as JSON)

```json
{
  "issue": "BLIK_ONE_CLICK_MISSING_REQUIRED_PARAMETER",
  "description": "Blik's one_click flow requires one_click.auth_code and one_click.alias_label parameters for the buyer's first transaction. For all subsequent transactions,only the one_click.alias_key parameter is required."
}
```

