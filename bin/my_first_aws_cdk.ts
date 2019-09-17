#!/usr/bin/env node
import cdk = require('@aws-cdk/core');
import { MyFirstAwsCdkStack } from '../lib/my_first_aws_cdk-stack';

const app = new cdk.App();
new MyFirstAwsCdkStack(app, 'MyFirstAwsCdkStack');