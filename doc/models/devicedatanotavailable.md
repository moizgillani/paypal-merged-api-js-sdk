
# DEVICEDATANOTAVAILABLE

## Structure

`DEVICEDATANOTAVAILABLE`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `issue` | [`DeviceDataNotAvailableIssueEnum \| undefined`](../../doc/models/device-data-not-available-issue-enum.md) | Optional | - |
| `description` | [`DeviceDataNotAvailableDescriptionEnum \| undefined`](../../doc/models/device-data-not-available-description-enum.md) | Optional | - |

## Example (as JSON)

```json
{
  "issue": "DEVICE_DATA_NOT_AVAILABLE",
  "description": "Device Data is not available for processing this order. The PayPal-Client-Metadata-Id header value sent during `Create Order` api call is either missing or incorrect or there was an error in collecting required data. Please verify if appropriate value for PayPal-Client-Metadata-Id header is being sent during 'Create Order' api call. Please note this error only applies to payment_source.pay_upon_invoice at the moment."
}
```

