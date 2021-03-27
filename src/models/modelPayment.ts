/**
 * Model for tb_payment table
 */
import { ENV_VAR } from '../config/constants.config';

const DB_SCHEMA = ENV_VAR.SCHEMA_NAME_ONBOARDING;

const modelPayment = {
  TABLE_PAYMENT: `${DB_SCHEMA}.tb_payment`,
  TABLE_PAYMENT_WITHOUT_SCHEMA: 'tb_payment',

  columns: {
    ID: 'id',
    MERCHANT_ID: 'merchant_id',
    PAYMENT_ID: 'payment_id',
    CREATED_AT: 'created_at',
  },
};

export { modelPayment };
