/**
 * Model for tb_country table
 */
import { ENV_VAR } from '../config/constants.config';

const DB_SCHEMA = ENV_VAR.SCHEMA_NAME_ONBOARDING;

const modelCountry = {
  TABLE_COUNTRY: `${DB_SCHEMA}.tb_country`,
  TABLE_COUNTRY_WITHOUT_SCHEMA: 'tb_country',

  columns: {
    ID: 'id',
    NAME: 'name',
  },
};

export { modelCountry };
