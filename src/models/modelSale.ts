/**
 * Model for tb_sale table
 */
import { ENV_VAR } from '../config/constants.config';

const DB_SCHEMA = ENV_VAR.SCHEMA_NAME_ONBOARDING;

const modelSale = {
  TABLE_SALES: `${DB_SCHEMA}.tb_sale`,
  TABLE_SALES_WITHOUT_SCHEMA: 'tb_sale',

  columns: {
    ID: 'id',
    RELATED_ID: 'related_id',
    SELLER_EMAIL: 'seller_email',
    TYPE: 'type',
    DATE: 'date',
  },

  types: {
    TERMINAL_SALE: 0,
    APPLICATION_SALE: 1,
  },
};

export { modelSale };
