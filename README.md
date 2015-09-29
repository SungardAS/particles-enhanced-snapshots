# particles-enhanced-snapshots

[![logo](https://raw.githubusercontent.com/SungardAS/condensation/master/docs/images/condensation_logo.png)](https://github.com/SungardAS/condensation)

[![NPM](https://nodei.co/npm/particles-enhanced-snapshots.png)](https://nodei.co/npm/particles-enhanced-snapshots/)

[![Gitter](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/SungardAS/condensation?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge)
[![Dependency
Status](https://david-dm.org/SungardAS/condensation.svg?branch=master)](https://david-dm.org/SungardAS/particles-enhanced-snapshots?branch=master)


## Summary

[Condensation](https://github.com/SungardAS/condensation) particles that create a CloudFormation project for
[Enhanced Snapshots](https://github.com/SungardAS/snapdirector).

The use of condensation allows the template and the code to be deployed
to any S3 bucket.  The template will always reference the code that it
was deployed with.  The stack can be updated to add permissions or to
deploy new releases of Enhanced Snapshots.

## Use

### Quick Start

Use the `Launch Stack` links in the `Packaged Project` section of this
README.

### Build

Must have node.js 0.12 or later.

1. Clone the repository
2. Create a `local.js` file in `config` with buckets that you own
3. Add AWS credentials to your environment.  Either by IAM Profile,
   Envionment Variables or AWS Properties file.
4. Build:
    ```
        > git clone https://github.com/SungardAS/particles-enhanced-snapshots
        
        > cd particles-enhanced-snapshots
        
        > npm install
        
        > ./node_modules/.bin/gulp condensation:build
    ```
5. Deploy:
    ```
        > ./node_modules/.bin/gulp condensation:deploy
        
    ```



## Packaged Project

Using condensation the CloudFormation Template and Enhanced Snapshots assets
have been deployed to every S3 region lambda is available.

* us-east-1 [![Launch Stack](https://s3.amazonaws.com/cloudformation-examples/cloudformation-launch-stack.png)](https://console.aws.amazon.com/cloudformation/home?region=us-east-1#/stacks/new?stackName=enhanced-snapshots&templateURL=http://particles-enhanced-snapshots.us-east-1.s3.amazonaws.com/master/particles/cftemplates/lambda.template.json)

