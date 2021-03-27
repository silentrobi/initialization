/**
 * Model for tb_merchant table
 */
 import { ENV_VAR } from '../config/constants.config';
 
const DB_SCHEMA = ENV_VAR.SCHEMA_NAME_ONBOARDING;

const modelMerchant = {
  TABLE_MERCHANT: `${DB_SCHEMA}.tb_merchant`,
  TABLE_MERCHANT_WITHOUT_SCHEMA: 'tb_merchant',

  columns: {
    ID: 'id',
    COMPANY_TYPE: 'company_type',
    SECTOR: 'sector',
    TAXID: 'tax_id',
    COMPANY_NAME: 'company_name',
    TAX_SCHEME: 'tax_scheme',
    NACE: 'nace',
    COMPANY_REGISTRATION_NO: 'central_registration_no',

    MERCHANT_CITIZEN_ID: 'merchant_citizen_id',
    MERCHANT_NAME: 'merchant_name',
    MERCHANT_SURNAME: 'merchant_surname',

    AUTHORIZED_PERSON_NAME: 'authorized_person_name',
    AUTHORIZED_PERSON_SURNAME: 'authorized_person_surname',
    AUTHORIZED_PERSON_EMAIL: 'authorized_person_email',
    AUTHORIZED_PERSON_GSM: 'authorized_person_gsm',
    COUNTRY: 'country',
    CITY: 'city',
    DISTRICT: 'city_subdivision',
    NEIGHBORHOOD: 'region',
    POSTAL_ZONE: 'postal_zone',
    ADDRESS: 'address',
    BUILDING_NO: 'building_no',
    APARTMENT_NO: 'apartment_no',
    STREET: 'street',

    CREATED_BY: 'created_by',
    CREATED_AT: 'created_at',
    ISACTIVATEDONALLTERMINALS: 'is_activated_on_all_terminals',
    KVC_DONE: 'kvc_done',
  },
  defaults: {
    SECTOR: 4,
    KVC_DONE: false,
    ISACTIVATEDONALLTERMINALS: 0
  }
};

export { modelMerchant };
