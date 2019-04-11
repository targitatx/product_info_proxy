module.exports = {
  apps: [{
    name: 'targitProxy',
    script: './server/server.js'
  }],
  deploy: {
    production: {
      user: 'ubuntu',
      host: 'ec2-3-16-128-154.us-east-2.compute.amazonaws.com',
      key: '~/.ssh/targit.pem',
      ref: 'origin/master',
      repo: 'https://github.com/targitatx/product_info_proxy.git',
      path: '/home/ubuntu/targitProxy',
      'post-deploy': 'npm install && pm2 startOrRestart ecosystem.config.js'
    }
  }
}