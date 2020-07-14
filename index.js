// Franz Diebold

const core = require('@actions/core');

function getShaShort(fullSha) {
    return fullSha ? fullSha.substring(0, 8) : null;
}

function getRepositoryOwner(repository) {
    return repository ? repository.split('/')[0] : null;
}

function getRepositoryName(repository) {
    return repository ? repository.split('/')[1] : null;
}

function getRefName(ref) {
    return ref ? ref.split('/').slice(2).join('/') : null;
}

// https://help.github.com/en/actions/automating-your-workflow-with-github-actions/using-environment-variables#default-environment-variables
try {
    repository = process.env.GITHUB_REPOSITORY; // FranzDiebold/github-env-vars-action

    repositoryOwner = getRepositoryOwner(repository);
    if (repositoryOwner) {
        core.exportVariable('GITHUB_REPOSITORY_OWNER', repositoryOwner);
        core.info(`Set GITHUB_REPOSITORY_OWNER=${process.env.GITHUB_REPOSITORY_OWNER}`);
    } else {
        core.warning('Environment variable "GITHUB_REPOSITORY" not set. Cannot set "GITHUB_REPOSITORY_OWNER".');
    }

    repositoryName = getRepositoryName(repository);
    if (repositoryName) {
        core.exportVariable('GITHUB_REPOSITORY_NAME', repositoryName);
        core.info(`Set GITHUB_REPOSITORY_NAME=${process.env.GITHUB_REPOSITORY_NAME}`);
    } else {
        core.warning('Environment variable "GITHUB_REPOSITORY" not set. Cannot set "GITHUB_REPOSITORY_NAME".');
    }

    refName = getRefName(process.env.GITHUB_REF); // refs/heads/feat/feature-branch-1
    if (refName) {
        core.exportVariable('GITHUB_REF_NAME', refName);
        core.info(`Set GITHUB_REF_NAME=${process.env.GITHUB_REF_NAME}`);
    } else {
        core.warning('Environment variable "GITHUB_REF" not set. Cannot set "GITHUB_REF_NAME".');
    }

    shaShort = getShaShort(process.env.GITHUB_SHA); // ffac537e6cbbf934b08745a378932722df287a53
    if (shaShort) {
        core.exportVariable('GITHUB_SHA_SHORT', shaShort);
        core.info(`Set GITHUB_SHA_SHORT=${process.env.GITHUB_SHA_SHORT}`);
    } else {
        core.warning('Environment variable "GITHUB_SHA" not set. Cannot set "GITHUB_SHA_SHORT".');
    }
} catch (error) {
    core.setFailed(error.message);
}
