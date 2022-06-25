import { Schema } from 'mongoose';

export interface ITermsAndConditions {
  value: string[];
}

export const TermsAndConditionsSchema = new Schema({
  value: [String],
});
