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
  'hashingSecret' : 'thisIsASecret',
  'maxChecks' : 5,
  'twilio' : {
    'accountSid' : 'ACc59c98ba72c8f79b9d49284e3b0d0163',
    'authToken'  : '4a4265b2bcb17f3e5ee0bfbf38917722',
    'fromPhone'  : '+15005550006'
  }
};

// Production environment
environments.production = {
  'httpPort'    :  5000,
  'httpsPort'   :  5001,
  'envName' : 'production',
  'hashingSecret' : 'thisIsAlsoASecret',
  'maxChecks' : 5,
  'twilio' : {
    'accountSid' : '',
    'authToken'  : '',
    'fromPhone'  : ''
  }
};

// Determine which environment was passed as a command-line argument
const currentEnvironment = typeof(process.env.NODE_ENV) == 'string' ? process.env.NODE_ENV.toLowerCase() : '';

// Check that the current environment is one of those defined above.
// default to development environment if not
const environmentToExport = typeof(environments[currentEnvironment]) == 'object' ? environments[currentEnvironment] : environments.development;

// Export the module
module.exports = environmentToExport;
