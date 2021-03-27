/**
 * Model for tb_terminal table
 */
import { ENV_VAR } from '../config/constants.config';

const DB_SCHEMA = ENV_VAR.SCHEMA_NAME_ONBOARDING;

const modelTerminal = {
  TABLE_TERMINAL: `${DB_SCHEMA}.tb_terminal`,
  TABLE_TERMINAL_WITHOUT_SCHEMA: 'tb_terminal',

  columns: {
    ID: 'id',
    MERCHANT_ID: 'merchant_id', // vkn
    FISCAL_ID: 'fiscal_id', //terminal_id (something like AX00000001)
    IMEI: 'imei', // text
    ICCID: 'iccid', // text
    BARCODE: 'barcode', // text
    MODEL: 'model', // type (default value is 400TR)
    PURCHASE_DATE: 'purchase_date',
    EXPIRATION_DATE: 'expiration_date',
  },
  defaults:{
    PURCHASE_DATE: 'now()',
    MODEL: '400TR'
  }
};

export { modelTerminal };
