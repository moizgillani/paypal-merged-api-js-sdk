/**
 * Merged ApiLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { lazy, object, optional, Schema } from '../schema';
import {
  ConfirmApplicationContext,
  confirmApplicationContextSchema,
} from './confirmApplicationContext';
import {
  PaymentSourceDefinition,
  paymentSourceDefinitionSchema,
} from './paymentSourceDefinition';
import {
  ProcessingInstructionEnum,
  processingInstructionEnumSchema,
} from './processingInstructionEnum';

/** Payer confirms the intent to pay for the Order using the provided payment source. */
export interface ConfirmOrderRequest {
  /** The payment source definition. */
  paymentSource: PaymentSourceDefinition;
  /** The instruction to process an order. */
  processingInstruction?: ProcessingInstructionEnum;
  /** Customizes the payer confirmation experience. */
  applicationContext?: ConfirmApplicationContext;
}

export const confirmOrderRequestSchema: Schema<ConfirmOrderRequest> = object({
  paymentSource: ['payment_source', lazy(() => paymentSourceDefinitionSchema)],
  processingInstruction: [
    'processing_instruction',
    optional(processingInstructionEnumSchema),
  ],
  applicationContext: [
    'application_context',
    optional(lazy(() => confirmApplicationContextSchema)),
  ],
});
