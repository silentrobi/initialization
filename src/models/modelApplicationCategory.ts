/**
 * Model for tb_applicationcategory table
 */
import { ENV_VAR } from '../config/constants.config';

const DB_SCHEMA = ENV_VAR.SCHEMA_NAME_ONBOARDING;

const modelApplicationCategory = {
  TABLE_APPLICATION_CATEGORY: `${DB_SCHEMA}.tb_applicationcategory`,
  TABLE_APPLICATION_CATEGORY_WITHOUT_SCHEMA: 'tb_applicationcategory',

  columns: {
    ID: 'id',
    NAME: 'name',
    KEY: 'key',
  },
};

export { modelApplicationCategory };
