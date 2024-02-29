/**
 * Merged ApiLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { array, object, optional, Schema } from '../schema';
import {
  DisputeCategoryEnum,
  disputeCategoryEnumSchema,
} from './disputeCategoryEnum';
import {
  SellerProtectionStatusEnum,
  sellerProtectionStatusEnumSchema,
} from './sellerProtectionStatusEnum';

/** The level of protection offered as defined by [PayPal Seller Protection for Merchants](https://www.paypal.com/us/webapps/mpp/security/seller-protection). */
export interface SellerProtection {
  /** Indicates whether the transaction is eligible for seller protection. For information, see [PayPal Seller Protection for Merchants](https://www.paypal.com/us/webapps/mpp/security/seller-protection). */
  status?: SellerProtectionStatusEnum;
  /** An array of conditions that are covered for the transaction. */
  disputeCategories?: DisputeCategoryEnum[];
}

export const sellerProtectionSchema: Schema<SellerProtection> = object({
  status: ['status', optional(sellerProtectionStatusEnumSchema)],
  disputeCategories: [
    'dispute_categories',
    optional(array(disputeCategoryEnumSchema)),
  ],
});
