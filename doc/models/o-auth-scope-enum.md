
# O Auth Scope Enum

OAuth 2 scopes supported by the API

## Enumeration

`OAuthScopeEnum`

## Fields

| Name | Description |
|  --- | --- |
| `httpsUriPaypalComServicesPaymentsPayment` | Manage payments and checkout workflow. |
| `httpsUriPaypalComServicesPaymentsPaymentReferenceTransaction` | Permission to initiate reference transaction |
| `httpsUriPaypalComServicesPaymentsInitiatepayment` | Initiates payments and checkout workflows. |
| `httpsUriPaypalComServicesPaymentsOrdersClientSideIntegration` | Allows client-side integration on Create, Get, Patch, Authorize & Capture Order endpoints. |
| `httpsUriPaypalComServicesPaymentsPaymentAuthcapture` | Permission to do non-real time payments like capture on authorization |
| `httpsUriPaypalComServicesPaymentsRefund` | Permission to initiate a refund on a capture transaction |
| `httpsUriPaypalComServicesPaymentsNonReferencedCredit` | Permission to initiate non referenced credit |
| `httpsUriPaypalComServicesPaymentsRealtimepayment` | Permission to do any real time payment, with support for sale/authorize/order intents |
| `httpsUriPaypalComServicesPaymentsReversepayment` | Permission to do any reverse payment |
| `httpsUriPaypalComServicesVaultPaymentTokensReadwrite` | Manage payment instruments |
| `httpsUriPaypalComServicesVaultPaymentTokensRead` | Permission to only read from vault |
| `httpsUriPaypalComServicesVaultCustomersRead` | Permission to read customer information. |
| `httpsUriPaypalComServicesVaultCustomersReadwrite` | Permission to create/update customer information. |

