/**
 * Model for tb_citysubdivision table
 */
import { ENV_VAR } from '../config/constants.config';

const DB_SCHEMA = ENV_VAR.SCHEMA_NAME_ONBOARDING;

const modelCitysubdivision = {
  TABLE_CITYSUBDIVISION: `${DB_SCHEMA}.tb_citysubdivision`,
  TABLE_CITYSUBDIVISION_WITHOUT_SCHEMA: 'tb_citysubdivision',

  columns: {
    ID: 'id',
    CITY_ID: 'city_id',
    NAME: 'name',
  },
};

export { modelCitysubdivision };
