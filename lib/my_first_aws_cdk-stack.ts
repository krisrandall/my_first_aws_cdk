
import cdk = require('@aws-cdk/core');
import { Cluster } from "@aws-cdk/aws-eks";
import { AccountRootPrincipal, Role } from '@aws-cdk/aws-iam';

export class MyFirstAwsCdkStack extends cdk.Stack {
  constructor(scope: cdk.App, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const cluster = new Cluster(this, "cluster", {
      clusterName: "cluster",
      // defaultCapacity: 0, // Explicitly creating nodes below instead
      outputMastersRoleArn: true
    });

    const adminRole = new Role(this, "AdminRole", {
      assumedBy: new AccountRootPrincipal()
    });

    console.log(adminRole);

    cluster.awsAuth.addMastersRole(adminRole);

  }
}
