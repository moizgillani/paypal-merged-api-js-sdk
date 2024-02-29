/**
 * Merged ApiLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, stringEnum } from '../schema';

/**
 * Enum for DeviceDataNotAvailableDescriptionEnum
 */
export enum DeviceDataNotAvailableDescriptionEnum {
  EnumDeviceDataIsNotAvailableForProcessingThisOrderThePayPalClientMetadataIdHeaderValueSentDuringCreateOrderApiCallIsEitherMissingOrIncorrectOrThereWasAnErrorInCollectingRequiredDataPleaseVerifyIfAppropriateValueForPayPalClientMetadataIdHeaderIsBeingSentDuringCreateOrderApiCallPleaseNoteThisErrorOnlyAppliesToPaymentSourcepayUponInvoiceAtTheMoment = 'Device Data is not available for processing this order. The PayPal-Client-Metadata-Id header value sent during `Create Order` api call is either missing or incorrect or there was an error in collecting required data. Please verify if appropriate value for PayPal-Client-Metadata-Id header is being sent during \'Create Order\' api call. Please note this error only applies to payment_source.pay_upon_invoice at the moment.',
}

/**
 * Schema for DeviceDataNotAvailableDescriptionEnum
 */
export const deviceDataNotAvailableDescriptionEnumSchema: Schema<DeviceDataNotAvailableDescriptionEnum> = stringEnum(DeviceDataNotAvailableDescriptionEnum);
