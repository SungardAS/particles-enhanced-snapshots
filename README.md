# particles-enhanced-snapshots

[![logo](https://raw.githubusercontent.com/SungardAS/condensation/master/docs/images/condensation_logo.png)](https://github.com/SungardAS/condensation)

[![NPM](https://nodei.co/npm/particles-enhanced-snapshots.png)](https://nodei.co/npm/particles-enhanced-snapshots/)

[![Gitter](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/SungardAS/condensation?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge)
[![Dependency
Status](https://david-dm.org/SungardAS/particles-enhanced-snapshots.svg?branch=master)](https://david-dm.org/SungardAS/particles-enhanced-snapshots?branch=master)


## Summary

[Condensation](https://github.com/SungardAS/condensation) particles that create a CloudFormation project for
[Enhanced Snapshots](https://github.com/SungardAS/snapdirector).

Condensation allows templates and assets to be deployed together,
to any S3 bucket.  The template will always reference the assets that it
was deployed with.

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
have been deployed to thie following AWS regions.

The `Simple Stack` uses the default VPC and has minimal input parameters.  While `KeyName` is the only paramerter that must be changed from it's default value, it is recommended that `SourceCIDR` be changed from 0.0.0.0/0 to a more restrictive range.

The `VPC Stack` adds the ability to configure the VPC and Subnet that the instance will be launched in.  Both are required to be set for the stack to run.

|region|Simple Stack|VPC Stack|
|------|------------|---------|
|us-east-1|[![Launch Stack](https://s3.amazonaws.com/cloudformation-examples/cloudformation-launch-stack.png)](https://console.aws.amazon.com/cloudformation/home?region=us-east-1#/stacks/new?stackName=enhanced-snapshots&templateURL=http://particles-enhanced-snapshots.us-east-1.s3.amazonaws.com/enhanced-mktplace/particles/cftemplates/sungardas_enhanced_snapshots_default_vpc.template.json)|[![Launch Stack](https://s3.amazonaws.com/cloudformation-examples/cloudformation-launch-stack.png)](https://console.aws.amazon.com/cloudformation/home?region=us-east-1#/stacks/new?stackName=enhanced-snapshots&templateURL=http://particles-enhanced-snapshots.us-east-1.s3.amazonaws.com/enhanced-mktplace/particles/cftemplates/sungardas_enhanced_snapshots_with_vpc.template.json)|
|us-west-1|[![Launch Stack](https://s3.amazonaws.com/cloudformation-examples/cloudformation-launch-stack.png)](https://console.aws.amazon.com/cloudformation/home?region=us-west-1#/stacks/new?stackName=enhanced-snapshots&templateURL=http://particles-enhanced-snapshots.us-west-1.s3.amazonaws.com/enhanced-mktplace/particles/cftemplates/sungardas_enhanced_snapshots_default_vpc.template.json)|[![Launch Stack](https://s3.amazonaws.com/cloudformation-examples/cloudformation-launch-stack.png)](https://console.aws.amazon.com/cloudformation/home?region=us-west-1#/stacks/new?stackName=enhanced-snapshots&templateURL=http://particles-enhanced-snapshots.us-west-1.s3.amazonaws.com/enhanced-mktplace/particles/cftemplates/sungardas_enhanced_snapshots_with_vpc.template.json)|
|us-west-2|[![Launch Stack](https://s3.amazonaws.com/cloudformation-examples/cloudformation-launch-stack.png)](https://console.aws.amazon.com/cloudformation/home?region=us-west-2#/stacks/new?stackName=enhanced-snapshots&templateURL=http://particles-enhanced-snapshots.us-west-2.s3.amazonaws.com/enhanced-mktplace/particles/cftemplates/sungardas_enhanced_snapshots_default_vpc.template.json)|[![Launch Stack](https://s3.amazonaws.com/cloudformation-examples/cloudformation-launch-stack.png)](https://console.aws.amazon.com/cloudformation/home?region=us-west-2#/stacks/new?stackName=enhanced-snapshots&templateURL=http://particles-enhanced-snapshots.us-west-2.s3.amazonaws.com/enhanced-mktplace/particles/cftemplates/sungardas_enhanced_snapshots_with_vpc.template.json)|
|eu-west-1|[![Launch Stack](https://s3.amazonaws.com/cloudformation-examples/cloudformation-launch-stack.png)](https://console.aws.amazon.com/cloudformation/home?region=eu-west-1#/stacks/new?stackName=enhanced-snapshots&templateURL=http://particles-enhanced-snapshots.eu-west-1.s3.amazonaws.com/enhanced-mktplace/particles/cftemplates/sungardas_enhanced_snapshots_default_vpc.template.json)|[![Launch Stack](https://s3.amazonaws.com/cloudformation-examples/cloudformation-launch-stack.png)](https://console.aws.amazon.com/cloudformation/home?region=eu-west-1#/stacks/new?stackName=enhanced-snapshots&templateURL=http://particles-enhanced-snapshots.eu-west-1.s3.amazonaws.com/enhanced-mktplace/particles/cftemplates/sungardas_enhanced_snapshots_with_vpc.template.json)|
|sa-east-1|[![Launch Stack](https://s3.amazonaws.com/cloudformation-examples/cloudformation-launch-stack.png)](https://console.aws.amazon.com/cloudformation/home?region=sa-east-1#/stacks/new?stackName=enhanced-snapshots&templateURL=http://particles-enhanced-snapshots.sa-east-1.s3.amazonaws.com/enhanced-mktplace/particles/cftemplates/sungardas_enhanced_snapshots_default_vpc.template.json)|[![Launch Stack](https://s3.amazonaws.com/cloudformation-examples/cloudformation-launch-stack.png)](https://console.aws.amazon.com/cloudformation/home?region=sa-east-1#/stacks/new?stackName=enhanced-snapshots&templateURL=http://particles-enhanced-snapshots.sa-east-1.s3.amazonaws.com/enhanced-mktplace/particles/cftemplates/sungardas_enhanced_snapshots_with_vpc.template.json)|
|eu-central-1|[![Launch Stack](https://s3.amazonaws.com/cloudformation-examples/cloudformation-launch-stack.png)](https://console.aws.amazon.com/cloudformation/home?region=eu-central-1#/stacks/new?stackName=enhanced-snapshots&templateURL=http://particles-enhanced-snapshots.eu-central-1.s3.amazonaws.com/enhanced-mktplace/particles/cftemplates/sungardas_enhanced_snapshots_default_vpc.template.json)|[![Launch Stack](https://s3.amazonaws.com/cloudformation-examples/cloudformation-launch-stack.png)](https://console.aws.amazon.com/cloudformation/home?region=eu-central-1#/stacks/new?stackName=enhanced-snapshots&templateURL=http://particles-enhanced-snapshots.eu-central-1.s3.amazonaws.com/enhanced-mktplace/particles/cftemplates/sungardas_enhanced_snapshots_with_vpc.template.json)|
|ap-southeast-1|[![Launch Stack](https://s3.amazonaws.com/cloudformation-examples/cloudformation-launch-stack.png)](https://console.aws.amazon.com/cloudformation/home?region=ap-southeast-1#/stacks/new?stackName=enhanced-snapshots&templateURL=http://particles-enhanced-snapshots.ap-southeast-1.s3.amazonaws.com/enhanced-mktplace/particles/cftemplates/sungardas_enhanced_snapshots_default_vpc.template.json)|[![Launch Stack](https://s3.amazonaws.com/cloudformation-examples/cloudformation-launch-stack.png)](https://console.aws.amazon.com/cloudformation/home?region=ap-southeast-1#/stacks/new?stackName=enhanced-snapshots&templateURL=http://particles-enhanced-snapshots.ap-southeast-1.s3.amazonaws.com/enhanced-mktplace/particles/cftemplates/sungardas_enhanced_snapshots_with_vpc.template.json)|
|ap-southeast-2|[![Launch Stack](https://s3.amazonaws.com/cloudformation-examples/cloudformation-launch-stack.png)](https://console.aws.amazon.com/cloudformation/home?region=ap-southeast-2#/stacks/new?stackName=enhanced-snapshots&templateURL=http://particles-enhanced-snapshots.ap-southeast-2.s3.amazonaws.com/enhanced-mktplace/particles/cftemplates/sungardas_enhanced_snapshots_default_vpc.template.json)|[![Launch Stack](https://s3.amazonaws.com/cloudformation-examples/cloudformation-launch-stack.png)](https://console.aws.amazon.com/cloudformation/home?region=ap-southeast-2#/stacks/new?stackName=enhanced-snapshots&templateURL=http://particles-enhanced-snapshots.ap-southeast-2.s3.amazonaws.com/enhanced-mktplace/particles/cftemplates/sungardas_enhanced_snapshots_with_vpc.template.json)|
|ap-northeast-1|[![Launch Stack](https://s3.amazonaws.com/cloudformation-examples/cloudformation-launch-stack.png)](https://console.aws.amazon.com/cloudformation/home?region=ap-northeast-1#/stacks/new?stackName=enhanced-snapshots&templateURL=http://particles-enhanced-snapshots.ap-northeast-1.s3.amazonaws.com/enhanced-mktplace/particles/cftemplates/sungardas_enhanced_snapshots_default_vpc.template.json)|[![Launch Stack](https://s3.amazonaws.com/cloudformation-examples/cloudformation-launch-stack.png)](https://console.aws.amazon.com/cloudformation/home?region=ap-northeast-1#/stacks/new?stackName=enhanced-snapshots&templateURL=http://particles-enhanced-snapshots.ap-northeast-1.s3.amazonaws.com/enhanced-mktplace/particles/cftemplates/sungardas_enhanced_snapshots_with_vpc.template.json)|
