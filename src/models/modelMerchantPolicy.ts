/**
 * Model for tb_merchant_policy table
 */
import { ENV_VAR } from '../config/constants.config';

const DB_SCHEMA = ENV_VAR.SCHEMA_NAME_ONBOARDING;

const modelMerchantPolicy = {
  SCHEMA_NAME: DB_SCHEMA,
  TABLE_MERCHANT_POLICY: `${DB_SCHEMA}.tb_merchant_policy`,
  TABLE_MERCHANT_POLICY_WITHOUT_SCHEMA: 'tb_merchant_policy',

  columns: {
    MERCHANT_ID: 'merchant_id',
    DAILY_SMS_COUNT: 'daily_sms_count',
    LAST_SMS_DATE: 'last_sms_date',
  },
  defaults:{
    DAILY_SMS_COUNT: 0
  }
};

export { modelMerchantPolicy };
