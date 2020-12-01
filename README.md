# :octocat: :rocket: GitHub Environment Variables Action

[![GitHub Action: View on Marketplace](https://img.shields.io/badge/GitHub%20Action-View_on_Marketplace-28a745?logo=github)](https://github.com/marketplace/actions/github-environment-variables-action)
[![Demo: available](https://img.shields.io/badge/Demo-available-orange)](.github/workflows/demo.yml)
[![Version: v2.0.0](https://img.shields.io/badge/Version-v2.0.0-brightgreen)](https://github.com/FranzDiebold/github-env-vars-action/releases/tag/v2.0.0)
[![Lint and Test](https://github.com/FranzDiebold/github-env-vars-action/workflows/Lint%20and%20Test/badge.svg)](https://github.com/FranzDiebold/github-env-vars-action/actions?query=workflow%3A%22Lint+and+Test%22)
[![license: MIT](https://img.shields.io/badge/license-MIT-brightgreen.svg)](./LICENSE)

A [GitHub Action](https://github.com/features/actions) to expose useful environment variables.

### Environment Variables exposed by **this Action**

| Environment Variable Name      | Description                                                                                                                                                    | Example value                          |
|--------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------|
| `CI_REPOSITORY_SLUG`       | The slug of the owner and repository name (i.e. slug of `FranzDiebold/github-env-vars-action`).                                                                | `franzdiebold-github-env-vars-action`      |
| `CI_REPOSITORY_OWNER`      | The owner of the repository.                                                                                                                                   | `FranzDiebold`                             |
| `CI_REPOSITORY_OWNER_SLUG` | The slug of the owner of the repository.                                                                                                                       | `franzdiebold`                             |
| `CI_REPOSITORY_NAME`       | The name of the repository.                                                                                                                                    | `github-env-vars-action`                   |
| `CI_REPOSITORY_NAME_SLUG`  | The slug of the name of the repository.                                                                                                                        | `github-env-vars-action`                   |
| `CI_REPOSITORY`            | The owner and repository name. Copy of `GITHUB_REPOSITORY` - for reasons of completeness.                                                                      | `FranzDiebold/github-env-vars-action`      |
| `CI_REF_SLUG`              | The slug of the branch or tag *ref* that triggered the workflow (i.e. slug of `refs/heads/feat/feature-branch-1`). <br>If neither a branch or tag is available for the event type, the variable will not exist. | `refs-heads-feat-feature-branch-1` |
| `CI_ACTION_REF_NAME`       | The branch or tag *name* that triggered the workflow. For pull requests it is the *head* branch name.                                                          | `feat/feature-branch-1`                    |
| `CI_ACTION_REF_NAME_SLUG`  | The slug of the branch or tag *name* that triggered the workflow. For pull requests it is the slug of the *head* branch name.                                  | `feat-feature-branch-1`                    |
| `CI_REF_NAME`              | The branch or tag *name* that triggered the workflow. <br>If neither a branch or tag is available for the event type, the variable will not exist.             | `feat/feature-branch-1`                    |
| `CI_REF_NAME_SLUG`         | The slug of the branch or tag *name* that triggered the workflow. <br>If neither a branch or tag is available for the event type, the variable will not exist. | `feat-feature-branch-1`                    |
| `CI_REF`                   | The branch or tag ref that triggered the workflow. <br>If neither a branch or tag is available for the event type, the variable will not exist. Copy of `GITHUB_REF` - for reasons of completeness. | `refs/heads/feat/feature-branch-1` |
| `CI_HEAD_REF_SLUG`         | The slug of the head branch *name*. <br>Only set for event type *pull request* or forked repositories.                                                         | `feat-feature-branch-1`                    |
| `CI_HEAD_REF`              | Only set for forked repositories / pull request. The branch of the head repository / the head branch name. Copy of `GITHUB_HEAD_REF` - for reasons of completeness. | `feat/feature-branch-1`               |
| `CI_BASE_REF_SLUG`         | The slug of the base branch *name*. <br>Only set for event type *pull request* or forked repositories.                                                         | `main`                                     |
| `CI_BASE_REF`              | Only set for forked repositories / pull request. The branch of the base repository / the base branch name. Copy of `GITHUB_BASE_REF` - for reasons of completeness. | `main`                                |
| `CI_SHA_SHORT`             | The shortened commit SHA (8 characters) that triggered the workflow.                                                                                           | `ffac537e`                                 |
| `CI_SHA`                   | The commit SHA that triggered the workflow. Copy of `GITHUB_SHA` - for reasons of completeness.                                                                | `ffac537e6cbbf934b08745a378932722df287a53` |
| `CI_ACTOR`                 | The name of the person or app that initiated the workflow. Copy of `GITHUB_ACTOR` - for reasons of completeness.                                               | `octocat`                                  |

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
  - uses: FranzDiebold/github-env-vars-action@v2
  - name: Print environment variables
    run: |
      echo "CI_REPOSITORY_SLUG=$CI_REPOSITORY_SLUG"
      echo "CI_REPOSITORY_OWNER=$CI_REPOSITORY_OWNER"
      echo "CI_REPOSITORY_OWNER_SLUG=$CI_REPOSITORY_OWNER_SLUG"
      echo "CI_REPOSITORY_NAME=$CI_REPOSITORY_NAME"
      echo "CI_REPOSITORY_NAME_SLUG=$CI_REPOSITORY_NAME_SLUG"
      echo "CI_REPOSITORY=$CI_REPOSITORY"
      echo "CI_REF_SLUG=$CI_REF_SLUG"
      echo "CI_ACTION_REF_NAME=$CI_ACTION_REF_NAME"
      echo "CI_ACTION_REF_NAME_SLUG=$CI_ACTION_REF_NAME_SLUG"
      echo "CI_REF_NAME=$CI_REF_NAME"
      echo "CI_REF_NAME_SLUG=$CI_REF_NAME_SLUG"
      echo "CI_REF=$CI_REF"
      echo "CI_HEAD_REF_SLUG=$CI_HEAD_REF_SLUG"
      echo "CI_HEAD_REF=$CI_HEAD_REF"
      echo "CI_BASE_REF_SLUG=$CI_BASE_REF_SLUG"
      echo "CI_BASE_REF=$CI_BASE_REF"
      echo "CI_SHA_SHORT=$CI_SHA_SHORT"
      echo "CI_SHA=$CI_SHA"
      echo "CI_ACTOR=$CI_ACTOR"
```

### Demo

A demo for all Operating systems (Linux, macOS and Windows) is also available in the [demo workflows file of this repository](.github/workflows/demo.yml)!
