# Setup-Tokens

Use the `/vault/setup-tokens` resource to create and retrieve temporary vault payment methods.

```ts

```

## Class Name

`SetupTokensController`

## Methods

* [Setup-Tokens Create](../../doc/controllers/setup-tokens.md#setup-tokens-create)
* [Setup-Tokens Get](../../doc/controllers/setup-tokens.md#setup-tokens-get)


# Setup-Tokens Create

Creates a Setup Token from the given payment source and adds it to the Vault of the associated customer.

```ts
async setupTokensCreate(
  payPalRequestId: string,
  body: SetupToken,
  requestOptions?: RequestOptions
): Promise<ApiResponse<MinimalSetupToken>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `payPalRequestId` | `string` | Header, Required | The server stores keys for 3 hours. |
| `body` | [`SetupToken`](../../doc/models/setup-token.md) | Body, Required | Setup Token creation with a instrument type optional financial instrument details and customer_id. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Requires scope

`HttpsUriPaypalComServicesVaultPaymentTokensRead`

## Response Type

[`MinimalSetupToken`](../../doc/models/minimal-setup-token.md)

## Example Usage

```ts
const payPalRequestId = 'PayPal-Request-Id6';

const body: SetupToken = {
  paymentSource: {
    card: {
      name: 'John Doe',
      number: '4111111111111111',
      expiry: '2027-02',
      billingAddress: {
        countryCode: 'US',
        addressLine1: '2211 N First Street',
        addressLine2: '17.3.160',
        adminArea2: 'San Jose',
        adminArea1: 'CA',
        postalCode: '95131',
      },
      experienceContext: {
        brandName: 'YourBrandName',
        locale: 'en-US',
        returnUrl: 'https://example.com/returnUrl',
        cancelUrl: 'https://example.com/cancelUrl',
      },
    },
  },
};

try {
  const newClient = await authorize();
  const setupTokensController = new SetupTokensController(newClient);
  // @ts-expect-error: unused variables
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { result, ...httpResponse } = await setupTokensController.setupTokensCreate(
  payPalRequestId,
  body
);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
  if (error instanceof ApiError) {
    // @ts-expect-error: unused variables
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

## Example Response *(as JSON)*

```json
{
  "id": "5C991763VB2781612",
  "customer": {
    "id": "customer_4029352050"
  },
  "status": "APPROVED",
  "payment_source": {
    "card": {
      "last_digits": "1111",
      "expiry": "2027-02",
      "name": "John Doe",
      "billing_address": {
        "address_line_1": "2211 N First Street",
        "address_line_2": "17.3.160",
        "admin_area_1": "CA",
        "admin_area_2": "San Jose",
        "postal_code": "95131",
        "country_code": "US"
      }
    }
  },
  "links": [
    {
      "rel": "self",
      "href": "https://api-m.paypal.com/v3/vault/setup-tokens/5C991763VB2781612",
      "method": "GET",
      "encType": "application/json"
    },
    {
      "rel": "confirm",
      "href": "https://api-m.paypal.com/v3/vault/payment-token",
      "method": "POST",
      "encType": "application/json"
    }
  ]
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 400 | Request is not well-formed, syntactically incorrect, or violates schema. | [`CustomError`](../../doc/models/custom-error.md) |
| 403 | Authorization failed due to insufficient permissions. | [`CustomError`](../../doc/models/custom-error.md) |
| 422 | The requested action could not be performed, semantically incorrect, or failed business validation. | [`CustomError`](../../doc/models/custom-error.md) |
| 500 | An internal server error has occurred. | [`CustomError`](../../doc/models/custom-error.md) |


# Setup-Tokens Get

Returns a readable representation of temporarily vaulted payment source associated with the setup token id.

```ts
async setupTokensGet(
  id: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<MinimalSetupToken>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `string` | Template, Required | A representation of a vault token. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Requires scope

`HttpsUriPaypalComServicesVaultPaymentTokensRead`

## Response Type

[`MinimalSetupToken`](../../doc/models/minimal-setup-token.md)

## Example Usage

```ts
const id = 'id0';

try {
  const newClient = await authorize();
  const setupTokensController = new SetupTokensController(newClient);
  // @ts-expect-error: unused variables
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { result, ...httpResponse } = await setupTokensController.setupTokensGet(id);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
  if (error instanceof ApiError) {
    // @ts-expect-error: unused variables
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 403 | Authorization failed due to insufficient permissions. | [`CustomError`](../../doc/models/custom-error.md) |
| 404 | The specified resource does not exist. | [`CustomError`](../../doc/models/custom-error.md) |
| 422 | The requested action could not be performed, semantically incorrect, or failed business validation. | [`CustomError`](../../doc/models/custom-error.md) |
| 500 | An internal server error has occurred. | [`CustomError`](../../doc/models/custom-error.md) |

