import minimist from 'minimist';

const args = minimist(process.argv.slice(2));

// get the options --env=xxx --user=yyy from the command line
export const config = {
  env: args.env,
  user: args.user,
};

export const credentials = {
  email: 'try',
  password: '12345'
}


// default to  http://skysports.com if env is absent
export const location = (config.env) ? config.env : "http://skysports.com"