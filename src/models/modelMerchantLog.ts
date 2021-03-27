/**
 * Model for tb_merchant_log table
 */
import { ENV_VAR } from '../config/constants.config';

const DB_SCHEMA = ENV_VAR.SCHEMA_NAME_ONBOARDING;

const modelMerchantLog = {
  TABLE_MERCHANT_LOG: `${DB_SCHEMA}.tb_merchant_log`,
  TABLE_MERCHANT_LOG_WITHOUT_SCHEMA: 'tb_merchant_log',

  columns: {
    ID: 'id',
    TRANSACTION_ID: 'transaction_id',
    TYPE: 'type',
    MERCHANT_ID: 'merchant_id',
    TERMINAL_ID: 'terminal_id',
    MESSAGE: 'message',
    STATUS: 'status',
    CREATED_AT: 'created_at',
  },

  type: {
    REGISTRATION: 0,
    STORE: 1,
    PAYMENT: 2,
    MERCHANT_INFO: 3,
    BIND: 4,
    INTEGRATION: 5,
  },

  status: {
    SUCCESS: 0,
    FAIL: 1,
  },
};

export { modelMerchantLog };
