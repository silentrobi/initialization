import { ENV_VAR } from './src/config/constants.config';
const SnakeNamingStrategy = require("typeorm-naming-strategies").SnakeNamingStrategy

export = {
   "type": "postgres",
   "host": ENV_VAR.OPENSHIFT_PG_uri,
   "port": 5432,
   "username": ENV_VAR.OPENSHIFT_PG_username,
   "password": ENV_VAR.OPENSHIFT_PG_password,
   "database": ENV_VAR.OPENSHIFT_PG_database_name,
   "synchronize": false,
   "schema": ENV_VAR.SCHEMA_NAME_ONBOARDING,
   "logging": false,
   "namingStrategy": new SnakeNamingStrategy(),
   "entities": [
      "src/entity/**/*.ts"
   ],
   "migrations": [
      "src/migration/**/*.ts"
   ],
   "subscribers": [
      "src/subscriber/**/*.ts"
   ],
   "cli": {
      "entitiesDir": "src/entity",
      "migrationsDir": "src/migration",
      "subscribersDir": "src/subscriber"
   }
};