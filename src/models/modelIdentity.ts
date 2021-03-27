import { ENV_VAR } from '../config/constants.config';

/**
 * Model for outgoing request to merchant api
 */

const baseUrl = ENV_VAR.TOKEN_IDENTITY_HOST;

const modelOutgoingIdentity = {
  parameters: {
    ID: 'id',
  },

  BASE_URL: baseUrl,
};

export { modelOutgoingIdentity };
