var gitrev = require('git-rev-sync');

var config = {
  s3: [
    {
      aws: {
        region: 'us-east-1',
        bucket: 'particles-enhanced-snapshots.us-east-1'
      },
      prefix: gitrev.branch(),
      clean: true,
      validate: true,
      create: true
    },
    {
      aws: {
        region: 'us-west-2',
        bucket: 'particles-enhanced-snapshots.us-west-2'
      },
      prefix: gitrev.branch(),
      clean: true,
      validate: true,
      create: true
    },
    {
      aws: {
        region: 'us-west-1',
        bucket: 'particles-enhanced-snapshots.us-west-1'
      },
      prefix: gitrev.branch(),
      clean: true,
      validate: true,
      create: true
    },
    {
      aws: {
        region: 'eu-west-1',
        bucket: 'particles-enhanced-snapshots.eu-west-1'
      },
      prefix: gitrev.branch(),
      clean: true,
      validate: true,
      create: true
    },
    {
      aws: {
        region: 'eu-central-1',
        bucket: 'particles-enhanced-snapshots.eu-central-1'
      },
      prefix: gitrev.branch(),
      clean: true,
      validate: true,
      create: true
    },
    {
      aws: {
        region: 'ap-southeast-1',
        bucket: 'particles-enhanced-snapshots.ap-southeast-1'
      },
      prefix: gitrev.branch(),
      clean: true,
      validate: true,
      create: true
    },
    {
      aws: {
        region: 'ap-southeast-2',
        bucket: 'particles-enhanced-snapshots.ap-southeast-2'
      },
      prefix: gitrev.branch(),
      clean: true,
      validate: true,
      create: true
    },
    {
      aws: {
        region: 'ap-northeast-1',
        bucket: 'particles-enhanced-snapshots.ap-northeast-1'
      },
      clean: true,
      prefix: gitrev.branch(),
      validate: true,
      create: true
    },
    {
      aws: {
        region: 'sa-east-1',
        bucket: 'particles-enhanced-snapshots.sa-east-1'
      },
      clean: true,
      prefix: gitrev.branch(),
      validate: true,
      create: true
    }
  ],
  dist: 'dist'
};

module.exports = config;
