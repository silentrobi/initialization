import * as dotenv from 'dotenv';

dotenv.config();

let schemaName = process.env.SCHEMA_NAME_ONBOARDING;


const ENV_VAR = {
  VERSION: process.env.npm_package_version,
  PORT: process.env.PORT,
  OPENSHIFT_PG_uri: process.env.OPENSHIFT_PG_uri,
  OPENSHIFT_PG_password: process.env.OPENSHIFT_PG_password,
  OPENSHIFT_PG_username: process.env.OPENSHIFT_PG_username,
  OPENSHIFT_PG_database_name: process.env.OPENSHIFT_PG_database_name,
  SCHEMA_NAME_ONBOARDING: schemaName,
  SSL_VALUE: process.env.SSL_VALUE,
  TOKEN_IDENTITY_HOST: process.env.TOKEN_IDENTITY_HOST,
  TOKEN_IDENTITY_CLIENT_ID: process.env.TOKEN_IDENTITY_CLIENT_ID,
  TOKEN_IDENTITY_CLIENT_SECRET: process.env.TOKEN_IDENTITY_CLIENT_SECRET,
  NODE_ENV: process.env.NODE_ENV
};

export { ENV_VAR };
