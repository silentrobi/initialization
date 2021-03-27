/**
 * Model for tb_neighborhood table
 */
import { ENV_VAR } from '../config/constants.config';

const DB_SCHEMA = ENV_VAR.SCHEMA_NAME_ONBOARDING;

const modelNeighborhood = {
  TABLE_NEIGHBORHOOD: `${DB_SCHEMA}.tb_neighborhood`,
  TABLE_NEIGHBORHOOD_WITHOUT_SCHEMA: 'tb_neighborhood',

  columns: {
    ID: 'id',
    CITYSUBDIVISION_ID: 'citysubdivision_id',
    NAME: 'name',
    POSTAL_CODE: 'postal_code',
  },
};

export { modelNeighborhood };
