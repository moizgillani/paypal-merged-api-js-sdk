
# Confirm Order Request

Payer confirms the intent to pay for the Order using the provided payment source.

## Structure

`ConfirmOrderRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `paymentSource` | [`PaymentSourceDefinition`](../../doc/models/payment-source-definition.md) | Required | The payment source definition. |
| `processingInstruction` | [`ProcessingInstructionEnum \| undefined`](../../doc/models/processing-instruction-enum.md) | Optional | The instruction to process an order.<br>**Default**: `ProcessingInstructionEnum.NOINSTRUCTION`<br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `36`, *Pattern*: `^[0-9A-Z_]+$` |
| `applicationContext` | [`ConfirmApplicationContext \| undefined`](../../doc/models/confirm-application-context.md) | Optional | Customizes the payer confirmation experience. |

## Example (as JSON)

```json
{
  "payment_source": {
    "card": {
      "id": "id6",
      "name": "name6",
      "number": "number6",
      "expiry": "expiry4",
      "security_code": "security_code8"
    },
    "token": {
      "id": "id6",
      "type": "type4"
    },
    "paypal": {
      "vault_id": "vault_id0",
      "email_address": "email_address0",
      "name": {
        "prefix": "prefix8",
        "given_name": "given_name2",
        "surname": "surname8",
        "middle_name": "middle_name0",
        "suffix": "suffix0"
      },
      "phone": {
        "phone_type": "OTHER",
        "phone_number": {
          "country_code": "country_code2",
          "national_number": "national_number6",
          "extension_number": "extension_number8"
        }
      },
      "birth_date": "birth_date8"
    },
    "bancontact": {
      "name": "name0",
      "country_code": "country_code0",
      "experience_context": {
        "brand_name": "brand_name2",
        "locale": "locale6",
        "shipping_preference": "NO_SHIPPING",
        "return_url": "return_url4",
        "cancel_url": "cancel_url6"
      },
      "attributes": {
        "key1": "val1",
        "key2": "val2"
      }
    },
    "blik": {
      "name": "name2",
      "country_code": "country_code2",
      "email": "email4",
      "experience_context": {
        "brand_name": "brand_name2",
        "locale": "locale6",
        "shipping_preference": "NO_SHIPPING",
        "return_url": "return_url4",
        "cancel_url": "cancel_url6"
      },
      "level_0": {
        "auth_code": "auth_code8"
      },
      "one_click": {
        "auth_code": "auth_code0",
        "consumer_reference": "consumer_reference2",
        "alias_label": "alias_label6",
        "alias_key": "alias_key4"
      }
    }
  },
  "processing_instruction": "NO_INSTRUCTION",
  "application_context": {
    "brand_name": "brand_name8",
    "locale": "locale2",
    "return_url": "return_url0",
    "cancel_url": "cancel_url2",
    "stored_payment_source": {
      "payment_initiator": "CUSTOMER",
      "payment_type": "RECURRING",
      "usage": "FIRST",
      "previous_network_transaction_reference": {
        "id": "id6",
        "date": "date2",
        "network": "SWITCH",
        "acquirer_reference_number": "acquirer_reference_number8"
      }
    }
  }
}
```

