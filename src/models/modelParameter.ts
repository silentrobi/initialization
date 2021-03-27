/**
 * Model for tb_parameter table
 */
import { ENV_VAR } from '../config/constants.config';

const DB_SCHEMA = ENV_VAR.SCHEMA_NAME_ONBOARDING;

const modelParameter_v01 = {
  TABLE_PARAMETER: `${DB_SCHEMA}.tb_parameter`,
  TABLE_PARAMETER_WITHOUT_SCHEMA: 'tb_parameter',

  columns: {
    ID: 'id',
    RELATED_TABLE: 'related_table', // related table
    RELATED_ID: 'related_id', // primary key of table_key table
    PARAM_KEY: 'param_key', // related param key
    PARAM_VALUE: 'param_value', // related param value
    PARAM_LEVEL: 'param_level', // related param level
    REC_DATE: 'rec_date', // rec date
    EXTRA: 'extra', // extra
  },

  param_keys: {
    MERCHANT: 'tb_merchant',
    TERMINAL: 'tb_terminal',
    TERMINAL_APPLICATION: 'tb_terminalapplication',
    MERCHANT_APPLICATION: 'tb_merchantaplication',
    LEVEL_TERMINAL_APPLICATION: 'terminal_application',
    PARAMETER: 'tb_parameter',
    PARAM_LEVEL: 'param_level',
  }
};

const modelParameter = {
  TABLE_PARAMETER: `${DB_SCHEMA}.tb_parameter`,
  TABLE_PARAMETER_WITHOUT_SCHEMA: 'tb_parameter',

  columns: {
    ID: 'id',
    RELATED_ID: 'related_id', // primary key of table_key table
    PARAM_KEY: 'param_key', // related param key
    PARAM_VALUE: 'param_value', // related param value
    REC_DATE: 'rec_date', // rec date
    IS_ACTIVE: 'is_active', // activation status
  },
  defaults:{
    REC_DATE: 'now()',
    IS_ACTIVE: true
  }
};

export { modelParameter };
