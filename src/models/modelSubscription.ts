/**
 * Model for tb_subscription table
 */
import { ENV_VAR } from '../config/constants.config';

const DB_SCHEMA = ENV_VAR.SCHEMA_NAME_ONBOARDING;

const modelSubscription = {
  TABLE_SUBSCRIPTION: `${DB_SCHEMA}.tb_subscription`,
  TABLE_SUBSCRIPTION_WITHOUT_SCHEMA: 'tb_subscription',

  columns: {
    ID: 'id',
    SERIAL_NO: 'serial_no',
    ARCELIK_SERIAL_NO: 'arcelik_serial_no',
    EAN_CODE: 'ean_code',
    DURATION: 'duration',
    CREATED_BY: 'created_by',
    CREATED_AT: 'created_at',
    TERMINAL_ID: 'terminal_id',
  },
};

export { modelSubscription };
