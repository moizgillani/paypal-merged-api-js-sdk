
# Orders Track Create 422

## Structure

`OrdersTrackCreate422`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `issues` | [`OrdersTrackCreate422IssuesItems[] \| undefined`](../../doc/models/containers/orders-track-create-422-issues-items.md) | Optional | - |

## Example (as JSON)

```json
{
  "issues": [
    {
      "issue": "CAPTURE_STATUS_NOT_VALID",
      "description": "Invalid capture status. Tracker information can only be added to captures in `COMPLETED` state."
    }
  ]
}
```

