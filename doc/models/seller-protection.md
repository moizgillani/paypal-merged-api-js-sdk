
# Seller Protection

The level of protection offered as defined by [PayPal Seller Protection for Merchants](https://www.paypal.com/us/webapps/mpp/security/seller-protection).

## Structure

`SellerProtection`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `status` | [`SellerProtectionStatusEnum \| undefined`](../../doc/models/seller-protection-status-enum.md) | Optional | Indicates whether the transaction is eligible for seller protection. For information, see [PayPal Seller Protection for Merchants](https://www.paypal.com/us/webapps/mpp/security/seller-protection). |
| `disputeCategories` | [`DisputeCategoryEnum[] \| undefined`](../../doc/models/dispute-category-enum.md) | Optional | An array of conditions that are covered for the transaction. |

## Example (as JSON)

```json
{
  "status": "ELIGIBLE",
  "dispute_categories": [
    "ITEM_NOT_RECEIVED",
    "UNAUTHORIZED_TRANSACTION"
  ]
}
```

