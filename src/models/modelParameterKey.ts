/**
 * Model for tb_parameter_key table
 */
import { ENV_VAR } from '../config/constants.config';

const DB_SCHEMA = ENV_VAR.SCHEMA_NAME_ONBOARDING;

const modelParameterKey = {
  TABLE_PARAMETER_KEY: `${DB_SCHEMA}.tb_parameter_key`,
  TABLE_PARAMETER_KEY_WITHOUT_SCHEMA: 'tb_parameter_key',

  columns: {
    ID: 'id',
    RELATED_TABLE: 'related_table',
    RELATED_FIELD: 'related_field',
    KEY: 'key',
    DESCRIPTION: 'description',
    SOURCE: 'source',
  },
};

export { modelParameterKey };
