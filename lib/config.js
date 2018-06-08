/*
 * Create and export configuration variables
 *
 */

// Container for all environments
const environments = {};

// Development (default) environment
environments.development =  {
  'httpPort'    :  3333,
  'httpsPort'   :  3334,
  'envName'     : 'development',
  'hashingSecret' : 'thisIsASecret'
};

// Production environment
environments.production = {
  'httpPort'    :  5000,
  'httpsPort'   :  5001,
  'envName' : 'production',
  'hashingSecret' : 'thisIsAlsoASecret'
};

// Determine which environment was passed as a command-line argument
const currentEnvironment = typeof(process.env.NODE_ENV) == 'string' ? process.env.NODE_ENV.toLowerCase() : '';

// Check that the current environment is one of those defined above.
// default to development environment if not
const environmentToExport = typeof(environments[currentEnvironment]) == 'object' ? environments[currentEnvironment] : environments.development;

// Export the module
module.exports = environmentToExport;
