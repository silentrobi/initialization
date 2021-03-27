/**
 * Model for tb_saved_card table
 */
import { ENV_VAR } from '../config/constants.config';

const DB_SCHEMA = ENV_VAR.SCHEMA_NAME_ONBOARDING;

const modelSavedCard = {
  TABLE_SAVED_CARD: `${DB_SCHEMA}.tb_saved_card`,
  TABLE_SAVED_CARD_WITHOUT_SCHEMA: 'tb_saved_card',

  columns: {
    ID: 'id',
    MERCHANT_ID: 'merchant_id',
    CARD_USER_KEY: 'card_user_key',
    CARD_TOKEN: 'card_token',
    CREATED_AT: 'created_at',
  },
};

export { modelSavedCard };
