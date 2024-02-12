
# Auhorization Status Details

The details of the authorized payment status.

## Structure

`AuhorizationStatusDetails`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `reason` | [`AuthorizationStatusReasonEnum \| undefined`](../../doc/models/authorization-status-reason-enum.md) | Optional | The reason why the authorized status is `PENDING`.<br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `24`, *Pattern*: `^[A-Z_]+$` |

## Example (as JSON)

```json
{
  "reason": "PENDING_REVIEW"
}
```

