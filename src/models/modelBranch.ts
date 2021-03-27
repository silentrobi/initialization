/**
 * Model for tb_branch table
 */
import { ENV_VAR } from '../config/constants.config';

const DB_SCHEMA = ENV_VAR.SCHEMA_NAME_ONBOARDING;

const modelBranch = {
    TABLE_BRANCH: `${DB_SCHEMA}.tb_branch`,
    TABLE_BRANCH_WITHOUT_SCHEMA: 'tb_branch',

    columns: {
        ID: 'id',
        NAME: 'name',
        MERCHANT_ID: 'merchant_id',
        COUNTRY: 'country',
        CITY: 'city',
        DISTRICT: 'city_subdivision',
        NEIGHBORHOOD: 'region',
        POSTAL_ZONE: 'postal_zone',
        ADDRESS: 'address',
        STATUS: 'status',
        CREATED_BY: 'created_by',
        CREATED_AT: 'created_at',
        UPDATED_BY: 'updated_by',
        UPDATED_AT: 'updated_at',
    },
};

export { modelBranch };