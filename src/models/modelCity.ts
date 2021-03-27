/**
 * Model for tb_city table
 */
import { ENV_VAR } from '../config/constants.config';

const DB_SCHEMA = ENV_VAR.SCHEMA_NAME_ONBOARDING;

const modelCity = {
  TABLE_CITY: `${DB_SCHEMA}.tb_city`,
  TABLE_CITY_WITHOUT_SCHEMA: 'tb_city',

  columns: {
    ID: 'id',
    COUNTRY_ID: 'country_id',
    NAME: 'name',
    CODE: 'code',
  },
};

export { modelCity };
