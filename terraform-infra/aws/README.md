# aws

This repository represents our AWS infrastructure.

### Installation

First install and configure AWS CLI globally:

https://aws.amazon.com/cli/

#### Configuration

By default, Terraform will use the credentials stored in `~/.aws`. To override on-the-fly, export the following env vars: `AWS_ACCESS_KEY_ID` and `AWS_SECRET_ACCESS_KEY`.

### Development

`.gitignore` additions:
```shell
#  Local .terraform directories
**/.terraform/*

# .tfstate files
*.tfstate
*.tfstate.*

# .tfvars files
*.tfvars
```

We currently develop within two different directories to correspond to our two AWS accounts: `root` and `govcloud`.

Within in each directory, to download necessary plugins and otherwise initialize Terraform for this directory, run `terraform init`.

#### Variables
Variables (of type "string", "list", or "map") may be added via the `default` attribute, using the `-var` option, the `-var-file` option, `*.tfvars` files, an env var format matching `TF_VAR_<variable_name>`, or via prompt (if no value can be determined).

#### Lifecycles
When `create_before_destroy` is set to `true` on a resource, it needs to be similarly set on all resource depedencies.

#### User Data
May be set directly in file using heredoc syntax, or installed using a shell script file.
```terraform
user_data = <<-EOF
            #!/bin/bash
            echo "Hello, world" > index.html
            nohup busybox httpd -f -p "${var.server_port}" &
            EOF
```

#### Checking/Validating 🔍

After adding/modifying files, run `terraform fmt` (`make fmt`). 😎👍

View the dependency graph by running `terraform graph` (`make graph`). [GraphViz it!](http://dreampuf.github.io/GraphvizOnline)

Check the plan: `terraform plan` (`make plan`).

#### Provisioning

`make`
- Runs `terraform fmt` followed by `terraform apply`.

Target specific outputs after provisioning: `terraform output <name>`

#### Tearing Down 💣

`terraform destroy` (`make destroy`)

#### State Storage

After creating the Terraform state bucket, we added a terraform.tf file in order to modify the Terraform backend configuration:

For example, in `govcloud`:

```terraform
terraform {
  backend "s3" {
    bucket  = "hippo-service-terraform-state"
    encrypt = true
    key     = "terraform.tfstate"
    region  = "us-gov-west-1"
  }

  required_version = "~> 0.11"
}
```

Rerun `terraform init` and approve the copy of existing state to the new backend.

#### Moving Terraform Modules

Use the `cmd/tf-mv` script.

---

### AWS
- https://www.expeditedssl.com/aws-in-plain-english
- https://docs.aws.amazon.com/IAM/latest/UserGuide/best-practices.html
- https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_managed-vs-inline.html

- http://lloydholman.co.uk/in-the-wild-aws-iam-naming-conventions/

- https://aws.amazon.com/blogs/apn/terraform-beyond-the-basics-with-aws/
- https://www.restcomm.com/multi-account-aws-terraform-setup-encrypted-remote-state-s3-backend/

- https://www.airpair.com/aws/posts/building-a-scalable-web-app-on-amazon-web-services-p1

#### IAM

##### Add a User

1. Create a new user:
```terraform
resource "aws_iam_user" "jocelyndunn" {
  name = "jocelyndunn"
}
```

2. Create a new login profile:
```terraform
resource "aws_iam_user_login_profile" "jocelyndunn" {
  user                    = "${aws_iam_user.jocelyndunn.name}"
  password_length         = 40
  password_reset_required = true
  pgp_key                 = "${var.pgp_key}"
}
```

NOTE: Update output for retrieving temporary password.

3. Add user to a group membership:
```terraform
resource "aws_iam_group_membership" "login_group_memberships" {
  name = "login-group-memberships"

  group = "${aws_iam_group.login.name}"

  users = [
    "${aws_iam_user.jocelyndunn.name}",
  ]
}
```

---

## Temorary Notes

terraform state mv 'module.exercise.aws_s3_bucket.h3po' 'aws_s3_bucket.h3po'

https://www.terraform.io/docs/commands/state/rm.html

https://www.terraform.io/docs/commands/refresh.html

https://github.com/terraform-aws-modules

## AWS CLI

### Cognito Sign Up

```shell
aws cognito-idp sign-up \
--region <COGNITO_REGION> \
--client-id <COGNITO_APP_CLIENT_ID> \
--username <USERNAME> \
--password <PASSWORD>
```

### Cognito Admin Confirm Sign Up

```shell
aws cognito-idp admin-confirm-sign-up \
--region <COGNITO_REGION> \
--user-pool-id <COGNITO_APP_CLIENT_ID> \
--username <USERNAME>
```

### S3 Transfer

```shell
aws s3 sync s3://h3po-data-lake .
```
