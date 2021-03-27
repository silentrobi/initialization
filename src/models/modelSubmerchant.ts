/**
 * Model for tb_submerchant table
 */
import { ENV_VAR } from '../config/constants.config';

const DB_SCHEMA = ENV_VAR.SCHEMA_NAME_ONBOARDING;

const modelSubmerchant = {
    TABLE_SUBMERCHANT: `${DB_SCHEMA}.tb_submerchant`,
    TABLE_SUBMERCHANT_WITHOUT_SCHEMA: 'tb_submerchant',

    columns: {
        ID: 'id',
        SUBMERCHANT_ID: 'submerchant_id',
        MERCHANT_ID: 'merchant_id',
        INVITE_STATUS: 'invite_status',
        STATUS: 'status',
        VALID_END: 'valid_end',
        INVITATION_COMPLETED_AT: 'invitation_completed_at',
        INVITATION_CANCELLED_AT: 'invitation_cancelled_at',
        INVITED_AT: 'invited_at',
        REINVITED_AT: 'reinvited_at',
        RESEND: 'resend'
    },
    defaults: {
        INVITE_STATUS: 1,   // 1: pending, 2: accepted, 3: rejected 
        INVITED_AT: 'now()',
        RESEND: false
    }
};

export { modelSubmerchant };