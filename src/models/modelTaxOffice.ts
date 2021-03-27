/**
 * Model for tb_tax_office table
 */
import { ENV_VAR } from '../config/constants.config';

const DB_SCHEMA = ENV_VAR.SCHEMA_NAME_ONBOARDING;

const modelTaxOffice = {
  TABLE_TAX_OFFICE: `${DB_SCHEMA}.tb_tax_office`,
  TABLE_TAX_OFFICE_WITHOUT_SCHEMA: 'tb_tax_office',

  columns: {
    ID: 'id',
    CITY_ID: 'city_id',
    CITY_SUBDIVISION: 'citysubdivision',
    NAME: 'name',
    CODE: 'code',
  },
};

export { modelTaxOffice };
