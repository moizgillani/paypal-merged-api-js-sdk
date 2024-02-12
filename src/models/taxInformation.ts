/**
 * Paypal Merged APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { object, Schema, string } from '../schema';
import { TaxIdTypeEnum, taxIdTypeEnumSchema } from './taxIdTypeEnum';

/** The tax ID of the customer. The customer is also known as the payer. Both `tax_id` and `tax_id_type` are required. */
export interface TaxInformation {
  /** The customer's tax ID value. */
  taxId: string;
  /** The customer's tax ID type. */
  taxIdType: TaxIdTypeEnum;
}

export const taxInformationSchema: Schema<TaxInformation> = object({
  taxId: ['tax_id', string()],
  taxIdType: ['tax_id_type', taxIdTypeEnumSchema],
});
