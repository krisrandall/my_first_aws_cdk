#!/usr/bin/env node
import cdk = require('@aws-cdk/core');
import { MyFirstAwsCdkStack } from '../lib/my_first_aws_cdk-stack';

const env = {
    region: "ap-southeast-2"
};

const app = new cdk.App();
new MyFirstAwsCdkStack(app, 'MyFirstAwsCdkStack', { env });