# :octocat: :rocket: GitHub Environment Variables Action

A [GitHub Action](https://github.com/features/actions) to expose useful environment variables.

### Environment Variables exposed by **this Action**

| Environment Variable Name | Example value             |
|---------------------------|---------------------------|
| `GITHUB_REPOSITORY_OWNER` | `FranzDiebold`            |
| `GITHUB_REPOSITORY_NAME`  | `github-env-vars-action`  |
| `GITHUB_REF_NAME`         | `feature-branch-1`        |
| `GITHUB_SHA_SHORT`        | `ffac537e`                |


### Default Environment Variables exposed by GitHub

For a full list of default environment variables exposed by GitHub see [https://help.github.com/en/actions/configuring-and-managing-workflows/using-environment-variables#default-environment-variables](https://help.github.com/en/actions/configuring-and-managing-workflows/using-environment-variables#default-environment-variables).

| Environment Variable Name | Example value                                 |
|---------------------------|-----------------------------------------------|
| `GITHUB_ACTOR`            | `octocat`                                     |
| `GITHUB_REPOSITORY`       | `FranzDiebold/github-env-vars-action`         |
| `GITHUB_SHA`              | `ffac537e6cbbf934b08745a378932722df287a53`    |
| `GITHUB_REF`              | `refs/heads/feature-branch-1`                 |

## Example usage

```yaml
steps:
  - uses: franzdiebold@github-env-vars-action@master
  - name: Print environment variables
    run: |
      echo "GITHUB_REPOSITORY_OWNER=$GITHUB_REPOSITORY_OWNER"
      echo "GITHUB_REPOSITORY_NAME=$GITHUB_REPOSITORY_NAME"
      echo "GITHUB_REF_NAME=$GITHUB_REF_NAME"
      echo "GITHUB_SHA_SHORT=$GITHUB_SHA_SHORT"
```
