/**
 * Model for tb_combo table
 */
import { ENV_VAR } from '../config/constants.config';

const DB_SCHEMA = ENV_VAR.SCHEMA_NAME_ONBOARDING;

const modelCombo_v01 = {
  TABLE_COMBO: `${DB_SCHEMA}.tb_combo`,
  TABLE_COMBO_WITHOUT_SCHEMA: 'tb_combo',

  columns: {
    TABLE_NAME: 'table_name',
    FIELD_NAME: 'field_name', // related table
    ORDER_ID: 'order_id', // primary key of table_key table
    COMBO_DESC: 'combo_desc', // related param key
    COMBO_KEY: 'combo_key',
  },

  field_names: {
    TABLE_KEY: 'table_key',
    PARAM_KEY: 'param_key',
    PARAM_LEVEL: 'param_level',
  },
};
const modelCombo = {
  TABLE_COMBO: `${DB_SCHEMA}.tb_combo`,
  TABLE_COMBO_WITHOUT_SCHEMA: 'tb_combo',

  columns: {
    TABLE_NAME: 'table_name',
    FIELD_NAME: 'field_name', // related table
    ORDER_ID: 'order_id', // primary key of table_key table
    COMBO_DESC: 'combo_desc', // related param key
  },

  field_names: {
    PARAM_KEY: 'param_key',
  },
};

export { modelCombo };
