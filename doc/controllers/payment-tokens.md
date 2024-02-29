# Payment-Tokens

Use the `/vault/payment-tokens` resource to create, retrieve, and delete a payment token that may optionally be associated with a customer.

```ts
const paymentTokensController = new PaymentTokensController(client);
```

## Class Name

`PaymentTokensController`

## Methods

* [Payment-Tokens Create](../../doc/controllers/payment-tokens.md#payment-tokens-create)
* [Customer Payment-Tokens Get](../../doc/controllers/payment-tokens.md#customer-payment-tokens-get)
* [Payment-Tokens Get](../../doc/controllers/payment-tokens.md#payment-tokens-get)
* [Payment-Tokens Delete](../../doc/controllers/payment-tokens.md#payment-tokens-delete)


# Payment-Tokens Create

Creates a Payment Token from the given payment source and adds it to the Vault of the associated customer.

```ts
async paymentTokensCreate(
  payPalRequestId: string,
  body: PaymentTokenRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<PaymentTokenResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `payPalRequestId` | `string` | Header, Required | The server stores keys for 3 hours. |
| `body` | [`PaymentTokenRequest`](../../doc/models/payment-token-request.md) | Body, Required | Payment Token creation with a financial instrument and an optional customer_id. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Requires scope

### Oauth2_PaymentMethodTokens

`https://uri.paypal.com/services/vault/payment-tokens/readwrite`

## Response Type

[`PaymentTokenResponse`](../../doc/models/payment-token-response.md)

## Example Usage

```ts
const payPalRequestId = 'PayPal-Request-Id6';

const body: PaymentTokenRequest = {
  paymentSource: {
    token: {
      id: '5C991763VB2781612',
      type: 'BILLING_AGREEMENT',
    },
  },
};

try {
  // @ts-expect-error: unused variables
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { result, ...httpResponse } = await paymentTokensController.paymentTokensCreate(
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
  "id": "8kk8451t",
  "customer": {
    "id": "customer_4029352050"
  },
  "payment_source": {
    "card": {
      "last_digits": "1111",
      "expiry": "2027-02",
      "brand": "VISA",
      "name": "John Doe",
      "billing_address": {
        "address_line_1": "2211 N First Street",
        "address_line_2": "17.3.160",
        "admin_area_2": "San Jose",
        "admin_area_1": "CA",
        "postal_code": "95131",
        "country_code": "US"
      }
    }
  },
  "links": [
    {
      "rel": "self",
      "href": "https://api-m.paypal.com/v3/vault/payment-tokens/8kk8451t",
      "method": "GET",
      "encType": "application/json"
    },
    {
      "rel": "delete",
      "href": "https://api-m.paypal.com/v3/vault/payment-tokens/8kk8451t",
      "method": "DELETE",
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
| 404 | Request contains reference to resources that do not exist. | [`CustomError`](../../doc/models/custom-error.md) |
| 422 | The requested action could not be performed, semantically incorrect, or failed business validation. | [`CustomError`](../../doc/models/custom-error.md) |
| 500 | An internal server error has occurred. | [`CustomError`](../../doc/models/custom-error.md) |


# Customer Payment-Tokens Get

Returns all payment tokens for a customer.

```ts
async customerPaymentTokensGet(
  customerId: string,
  pageSize?: number,
  page?: number,
  totalRequired?: boolean,
  requestOptions?: RequestOptions
): Promise<ApiResponse<VaultOfACustomer>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `customerId` | `string` | Query, Required | A unique identifier representing a specific customer in merchant's/partner's system or records. |
| `pageSize` | `number \| undefined` | Query, Optional | A non-negative, non-zero integer indicating the maximum number of results to return at one time. |
| `page` | `number \| undefined` | Query, Optional | A non-negative, non-zero integer representing the page of the results. |
| `totalRequired` | `boolean \| undefined` | Query, Optional | A boolean indicating total number of items (total_items) and pages (total_pages) are expected to be returned in the response. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Requires scope

### Oauth2_PaymentMethodTokens

`https://uri.paypal.com/services/vault/payment-tokens/readwrite`

## Response Type

[`VaultOfACustomer`](../../doc/models/vault-of-a-customer.md)

## Example Usage

```ts
const customerId = 'customer_id8';

const pageSize = 5;

const page = 1;

const totalRequired = false;

try {
  // @ts-expect-error: unused variables
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { result, ...httpResponse } = await paymentTokensController.customerPaymentTokensGet(
  customerId,
  pageSize,
  page,
  totalRequired
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
  "customer": {
    "id": "customer_4029352050"
  },
  "payment_tokens": [
    {
      "id": "8kk8451t",
      "customer": {
        "id": "customer_4029352050"
      },
      "payment_source": {
        "card": {
          "brand": "VISA",
          "last_digits": "1111",
          "expiry": "2027-02",
          "name": "John Doe",
          "billing_address": {
            "address_line_1": "2211 N First Street",
            "address_line_2": "17.3.160",
            "admin_area_2": "San Jose",
            "admin_area_1": "CA",
            "postal_code": "95131",
            "country_code": "US"
          }
        }
      },
      "links": [
        {
          "rel": "self",
          "href": "https://api-m.paypal.com/v3/vault/payment-tokens/8kk8451t",
          "method": "GET",
          "encType": "application/json"
        },
        {
          "rel": "delete",
          "href": "https://api-m.paypal.com/v3/vault/payment-tokens/8kk8451t",
          "method": "DELETE",
          "encType": "application/json"
        }
      ]
    },
    {
      "id": "fgh6561t",
      "customer": {
        "id": "customer_4029352050"
      },
      "payment_source": {
        "paypal": {
          "description": "Description for PayPal to be shown to PayPal payer",
          "email_address": "john.doe@example.com",
          "account_id": "VYYFH3WJ4JPJQ",
          "shipping": {
            "name": {
              "full_name": "John Doe"
            },
            "address": {
              "address_line_1": "2211 N First Street",
              "address_line_2": "17.3.160",
              "admin_area_2": "San Jose",
              "admin_area_1": "CA",
              "postal_code": "95131",
              "country_code": "US"
            }
          },
          "usage_pattern": "IMMEDIATE",
          "usage_type": "MERCHANT",
          "customer_type": "CONSUMER",
          "name": {
            "given_name": "John",
            "surname": "Doe"
          },
          "address": {
            "address_line_1": "2211 N First Street",
            "address_line_2": "17.3.160",
            "admin_area_2": "San Jose",
            "admin_area_1": "CA",
            "postal_code": "95131",
            "country_code": "US"
          }
        }
      },
      "links": [
        {
          "rel": "self",
          "href": "https://api-m.paypal.com/v3/vault/payment-tokens/fgh6561t",
          "method": "GET",
          "encType": "application/json"
        },
        {
          "rel": "delete",
          "href": "https://api-m.paypal.com/v3/vault/payment-tokens/fgh6561t",
          "method": "DELETE",
          "encType": "application/json"
        }
      ]
    },
    {
      "id": "hg654s1t",
      "customer": {
        "id": "customer_4029352050"
      },
      "payment_source": {
        "venmo": {
          "description": "Description for Venmo to be shown to Venmo payer",
          "shipping": {
            "name": {
              "full_name": "John Doe"
            },
            "address": {
              "address_line_1": "2211 N First Street",
              "address_line_2": "17.3.160",
              "admin_area_2": "San Jose",
              "admin_area_1": "CA",
              "postal_code": "95131",
              "country_code": "US"
            }
          },
          "usage_pattern": "IMMEDIATE",
          "usage_type": "MERCHANT",
          "customer_type": "CONSUMER",
          "email_address": "john.doe@example.com",
          "user_name": "johndoe",
          "name": {
            "given_name": "John",
            "surname": "Doe"
          },
          "account_id": "VYYFH3WJ4JPJQ",
          "address": {
            "address_line_1": "PayPal",
            "address_line_2": "2211 North 1st Street",
            "admin_area_1": "CA",
            "admin_area_2": "San Jose",
            "postal_code": "96112",
            "country_code": "US"
          }
        }
      },
      "links": [
        {
          "rel": "self",
          "href": "https://api-m.paypal.com/v3/vault/payment-tokens/hg654s1t",
          "method": "GET",
          "encType": "application/json"
        },
        {
          "rel": "delete",
          "href": "https://api-m.paypal.com/v3/vault/payment-tokens/hg654s1t",
          "method": "DELETE",
          "encType": "application/json"
        }
      ]
    }
  ],
  "links": [
    {
      "rel": "self",
      "href": "https://api-m.paypal.com/v3/vault/payment-tokens?customer_id=customer_4029352050&page=1&page_size=5&total_required=false",
      "method": "GET",
      "encType": "application/json"
    },
    {
      "rel": "first",
      "href": "https://api-m.paypal.com/v3/vault/payment-tokens?customer_id=customer_4029352050&page=1&page_size=5&total_required=false",
      "method": "GET",
      "encType": "application/json"
    },
    {
      "rel": "last",
      "href": "https://api-m.paypal.com/v3/vault/payment-tokens?customer_id=customer_4029352050&page=1&page_size=5&total_required=false",
      "method": "GET",
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
| 500 | An internal server error has occurred. | [`CustomError`](../../doc/models/custom-error.md) |


# Payment-Tokens Get

Returns a readable representation of vaulted payment source associated with the payment token id.

```ts
async paymentTokensGet(
  id: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<PaymentTokenResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `string` | Template, Required | A representation of a vault token. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Requires scope

### Oauth2_PaymentMethodTokens

`https://uri.paypal.com/services/vault/payment-tokens/readwrite`

## Response Type

[`PaymentTokenResponse`](../../doc/models/payment-token-response.md)

## Example Usage

```ts
const id = 'id0';

try {
  // @ts-expect-error: unused variables
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { result, ...httpResponse } = await paymentTokensController.paymentTokensGet(id);
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


# Payment-Tokens Delete

Delete the payment token associated with the payment token id.

```ts
async paymentTokensDelete(
  id: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<void>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `string` | Template, Required | A representation of a vault token. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Requires scope

### Oauth2_PaymentMethodTokens

`https://uri.paypal.com/services/vault/payment-tokens/readwrite`

## Response Type

`void`

## Example Usage

```ts
const id = 'id0';

try {
  // @ts-expect-error: unused variables
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { result, ...httpResponse } = await paymentTokensController.paymentTokensDelete(id);
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
| 400 | Request is not well-formed, syntactically incorrect, or violates schema. | [`CustomError`](../../doc/models/custom-error.md) |
| 403 | Authorization failed due to insufficient permissions. | [`CustomError`](../../doc/models/custom-error.md) |
| 500 | An internal server error has occurred. | [`CustomError`](../../doc/models/custom-error.md) |

