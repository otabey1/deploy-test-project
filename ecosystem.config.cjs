module.exports = {
  apps : [{
    script: 'api.js',
  }, {
    script: 'worker.js'
  }],

  deploy : {
    production : {
      user : 'ubunut',
      host : ['142.93.45.140', ],
      ref  : 'origin/master',
      repo : 'git@github.com:otabey1/deploy-test-project.git',
      path : '/project/deploy-test-project',
      'pre-deploy-local': '',
      'post-deploy' : 'source ~/.nvm/nvm.sh && npm install && npm run build && pm2 reload ecosystem.config.js --env production',
      'pre-setup': ''
    }
  }
};
