# :octocat: :rocket: GitHub Environment Variables Action

[![GitHub Action: View on Marketplace](https://img.shields.io/badge/GitHub%20Action-View_on_Marketplace-28a745?logo=github)](https://github.com/marketplace/actions/github-environment-variables-action)
[![Demo: available](https://img.shields.io/badge/Demo-available-orange)](.github/workflows/demo.yml)
[![Version: v1.3.0](https://img.shields.io/badge/Version-v1.3.0-brightgreen)](https://github.com/FranzDiebold/github-env-vars-action/releases/tag/v1.3.0)
[![Lint and Test](https://github.com/FranzDiebold/github-env-vars-action/workflows/Lint%20and%20Test/badge.svg)](https://github.com/FranzDiebold/github-env-vars-action/actions?query=workflow%3A%22Lint+and+Test%22)
[![license: MIT](https://img.shields.io/badge/license-MIT-brightgreen.svg)](./LICENSE)

A [GitHub Action](https://github.com/features/actions) to expose useful environment variables.

### Environment Variables exposed by **this Action**

| Environment Variable Name      | Description                                                                                                                                                    | Example value                         |
|--------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------|
| `GITHUB_REPOSITORY_SLUG`       | The slug of the owner and repository name (i.e. slug of `FranzDiebold/github-env-vars-action`).                                                                | `franzdiebold-github-env-vars-action` |
| `GITHUB_REPOSITORY_OWNER`      | The owner of the repository.                                                                                                                                   | `FranzDiebold`                        |
| `GITHUB_REPOSITORY_OWNER_SLUG` | The slug of the owner of the repository.                                                                                                                       | `franzdiebold`                        |
| `GITHUB_REPOSITORY_NAME`       | The name of the repository.                                                                                                                                    | `github-env-vars-action`              |
| `GITHUB_REPOSITORY_NAME_SLUG`  | The slug of the name of the repository.                                                                                                                        | `github-env-vars-action`              |
| `GITHUB_REF_SLUG`              | The slug of the branch or tag *ref* that triggered the workflow (i.e. slug of `refs/heads/feat/feature-branch-1`). <br>If neither a branch or tag is available for the event type, the variable will not exist.                                                                   | `refs-heads-feat-feature-branch-1`    |
| `GITHUB_BRANCH_NAME`           | The branch *name* that triggered the workflow. For pull requests it is the *head* branch name.                                                                 | `feat/feature-branch-1`               |
| `GITHUB_BRANCH_NAME_SLUG`      | The slug of the branch *name* that triggered the workflow. For pull requests it is the slug of the *head* branch name.                                         | `feat-feature-branch-1`               |
| `GITHUB_REF_NAME`              | The branch or tag *name* that triggered the workflow. <br>If neither a branch or tag is available for the event type, the variable will not exist.             | `feat/feature-branch-1`               |
| `GITHUB_REF_NAME_SLUG`         | The slug of the branch or tag *name* that triggered the workflow. <br>If neither a branch or tag is available for the event type, the variable will not exist. | `feat-feature-branch-1`               |
| `GITHUB_HEAD_REF_SLUG`         | The slug of the head branch *name*. <br>Only set for event type *pull request* or forked repositories.                                                         | `feat-feature-branch-1`               |
| `GITHUB_BASE_REF_SLUG`         | The slug of the base branch *name*. <br>Only set for event type *pull request* or forked repositories.                                                         | `main`                                |
| `GITHUB_SHA_SHORT`             | The shortened commit SHA (8 characters) that triggered the workflow.                                                                                           | `ffac537e`                            |

> The [slugified](https://en.wikipedia.org/wiki/Clean_URL#Slug) values are designed to be used in a URL.

### Default Environment Variables exposed by GitHub

For a full list of default environment variables exposed by GitHub see [https://docs.github.com/en/free-pro-team@latest/actions/reference/environment-variables#default-environment-variables](https://docs.github.com/en/free-pro-team@latest/actions/reference/environment-variables#default-environment-variables).

| Environment Variable Name | Description                                                                                                                                     | Example value                              |
|---------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------|--------------------------------------------|
| `GITHUB_ACTOR`            | The name of the person or app that initiated the workflow.                                                                                      | `octocat`                                  |
| `GITHUB_REPOSITORY`       | The owner and repository name.                                                                                                                  | `FranzDiebold/github-env-vars-action`      |
| `GITHUB_SHA`              | The commit SHA that triggered the workflow.                                                                                                     | `ffac537e6cbbf934b08745a378932722df287a53` |
| `GITHUB_REF`              | The branch or tag ref that triggered the workflow. <br>If neither a branch or tag is available for the event type, the variable will not exist. | `refs/heads/feat/feature-branch-1`         |
| `GITHUB_HEAD_REF`         | Only set for forked repositories / pull request. The branch of the head repository / the head branch name.                                      | `feat/feature-branch-1`                    |
| `GITHUB_BASE_REF`         | Only set for forked repositories / pull request. The branch of the base repository / the base branch name.                                      | `main`                                     |

## :rocket: Example usage

```yaml
steps:
  - uses: FranzDiebold/github-env-vars-action@v1.3.0
  - name: Print environment variables
    run: |
      echo "GITHUB_REPOSITORY_SLUG=$GITHUB_REPOSITORY_SLUG"
      echo "GITHUB_REPOSITORY_OWNER=$GITHUB_REPOSITORY_OWNER"
      echo "GITHUB_REPOSITORY_OWNER_SLUG=$GITHUB_REPOSITORY_OWNER_SLUG"
      echo "GITHUB_REPOSITORY_NAME=$GITHUB_REPOSITORY_NAME"
      echo "GITHUB_REPOSITORY_NAME_SLUG=$GITHUB_REPOSITORY_NAME_SLUG"
      echo "GITHUB_REF_SLUG=$GITHUB_REF_SLUG"
      echo "GITHUB_BRANCH_NAME=$GITHUB_BRANCH_NAME"
      echo "GITHUB_BRANCH_NAME_SLUG=$GITHUB_BRANCH_NAME_SLUG"
      echo "GITHUB_REF_NAME=$GITHUB_REF_NAME"
      echo "GITHUB_REF_NAME_SLUG=$GITHUB_REF_NAME_SLUG"
      echo "GITHUB_HEAD_REF_SLUG=$GITHUB_HEAD_REF_SLUG"
      echo "GITHUB_BASE_REF_SLUG=$GITHUB_BASE_REF_SLUG"
      echo "GITHUB_SHA_SHORT=$GITHUB_SHA_SHORT"
```

### Demo

A demo for all Operating systems (Linux, macOS and Windows) is also available in the [demo workflows file of this repository](.github/workflows/demo.yml)!
