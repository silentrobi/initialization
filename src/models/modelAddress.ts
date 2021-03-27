/**
 * Model for tb_address table
 */
import { ENV_VAR } from '../config/constants.config';

const DB_SCHEMA = ENV_VAR.SCHEMA_NAME_ONBOARDING;

const modelAddress = {
    TABLE_ADDRESS: `${DB_SCHEMA}.tb_address`,
    TABLE_ADDRESS_WITHOUT_SCHEMA: 'tb_address',

    columns: {
        ID: 'id',
        CITY: 'city',
        Country: 'country',
        NEIGHBORHOOD: 'region',
        DISTRICT: 'city_subdivision',
        POSTAL_ZONE: 'postal_zone',
        ADDRESS_TYPE: 'address_type', // fatura, shipping, normal
        CREATED_AT: 'created_at',
        UPDATED_AT: 'updated_at',
        BUILDING_NO: 'building_no',
        APARTMENT_NO: 'apartment_no',
        STREET: 'street'
    },
};

export { modelAddress };
