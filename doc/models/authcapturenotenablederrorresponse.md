
# AUTHCAPTURENOTENABLEDERRORRESPONSE

## Structure

`AUTHCAPTURENOTENABLEDERRORRESPONSE`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `issue` | [`AuthCaptureNotEnabled2IssueEnum \| undefined`](../../doc/models/auth-capture-not-enabled-2-issue-enum.md) | Optional | - |
| `description` | [`AuthCaptureNotEnabled2DescriptionEnum \| undefined`](../../doc/models/auth-capture-not-enabled-2-description-enum.md) | Optional | - |

## Example (as JSON)

```json
{
  "issue": "AUTH_CAPTURE_NOT_ENABLED",
  "description": "Authorization and Capture feature is not enabled for the merchant. Make sure that the recipient of the funds is a verified business account."
}
```

