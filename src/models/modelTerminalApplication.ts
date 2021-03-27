/**
 * Model for tb_terminalapplication table
 */
import { ENV_VAR } from '../config/constants.config';

const DB_SCHEMA = ENV_VAR.SCHEMA_NAME_ONBOARDING;

const modelTerminalApplication_v01 = {
  TABLE_TERMINALAPPLICATION: `${DB_SCHEMA}.tb_terminalapplication`,
  TABLE_TERMINALAPPLICATION_WITHOUT_SCHEMA: 'tb_terminalapplication',

  columns: {
    ID: 'id',
    TERMINALID: 'terminal_id',
    APPLICATIONID: 'application_id',
    PARAMETERS: 'terminalapplication_parameters',
    STATUS: 'terminalapplication_status',
    PURCHASE_DATETIME: 'terminalapplication_purchase_date',
    ACTIVATION_DATETIME: 'terminalapplication_activation_date',
  },

  status: {
    PURCHASED: 0,
    ACTIVATED: 1,
  },

  extra: {
    TERMINALS: 'terminals',
  },
};

const modelTerminalApplication = {
  TABLE_TERMINALAPPLICATION: `${DB_SCHEMA}.tb_terminalapplication`,
  TABLE_TERMINALAPPLICATION_WITHOUT_SCHEMA: 'tb_terminalapplication',

  columns: {
    ID: 'id',
    TERMINALID: 'terminal_id',
    MERCHANTAPPLICATION_ID: 'merchantapplication_id',
    ACTIVATION_DATE: 'activation_date',
    ACTIVATION_STATUS: 'activation_status',
  },

  status: {
    PURCHASED: 0,
    ACTIVATED: 1,
  },

  extra: {
    TERMINALS: 'terminals',
  },
};

export { modelTerminalApplication };
