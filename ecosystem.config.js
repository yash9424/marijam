module.exports = {
  apps: [{
    name: 'marijam',
    script: 'pnpm',
    args: 'dev',
    cwd: '/var/www/marijam',
    instances: 1,
    autorestart: true,
    watch: false,
    max_memory_restart: '1G',
    env: {
      NODE_ENV: 'development',
      PORT: 3111
    }
  }]
}