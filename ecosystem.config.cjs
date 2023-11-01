module.exports = {
  apps: [
    {
      name: 'NuxtAppName',
      port: '3000',
      exec_mode: 'cluster',
      instances: 'max',
      script: './.output/server/index.mjs'
    }],
  deploy : {
    production : {
      key: '',
      user : 'ubunut',
      host : ['142.93.45.140', ],
      ref  : 'origin/master',
      repo : 'git@github.com:otabey1/deploy-test-project.git',
      path : '/project/deploy-test-project',
      'pre-deploy-local': '',
      'post-deploy' : 'source ~/.nvm/nvm.sh && npm install && npm run build && pm2 reload ecosystem.config.js --env production',
      'pre-setup': '',
      'ssh_options': 'ForwardAgent=yes'
    }
  }
};
