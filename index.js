// Franz Diebold

const core = require('@actions/core');

/**
 * Slugify a given string.
 * @param {string} inputString
 * @return {string} The slugified string.
 */
function slugify(inputString) {
  return inputString
      .toLowerCase()
      .replace(/[^a-z0-9 -]/g, ' ') // remove invalid chars
      .replace(/^\s+|\s+$/g, '') // trim
      .replace(/\s+/g, '-') // collapse whitespace and replace by -
      .replace(/-+/g, '-'); // collapse dashes
}

/**
 * Get the repository owner from the repository string.
 * @param {string} repository
 * @return {string} The owner of the repository.
 */
function getRepositoryOwner(repository) {
  return repository ? repository.split('/')[0] : null;
}

/**
 * Get the repository name from the repository string.
 * @param {string} repository
 * @return {string} The name of the repository.
 */
function getRepositoryName(repository) {
  return repository ? repository.split('/')[1] : null;
}

/**
 * Get the ref name from the ref string.
 * @param {string} ref
 * @return {string} The ref name.
 */
function getRefName(ref) {
  return ref ? ref.split('/').slice(2).join('/') : null;
}

/**
 * Get the short SHA from the full SHA.
 * @param {string} fullSha
 * @return {string} The short SHA.
 */
function getShaShort(fullSha) {
  return fullSha ? fullSha.substring(0, 8) : null;
}

// https://help.github.com/en/actions/automating-your-workflow-with-github-actions/using-environment-variables#default-environment-variables
try {
  // i.e. FranzDiebold/github-env-vars-action
  repository = process.env.GITHUB_REPOSITORY;

  if (repository) {
    core.exportVariable('GITHUB_REPOSITORY_SLUG', slugify(repository));
    core.info(`Set GITHUB_REPOSITORY_SLUG=` +
              `${process.env.GITHUB_REPOSITORY_SLUG}`);
  } else {
    core.warning('Environment variable "GITHUB_REPOSITORY" not set. ' +
                 'Cannot set "GITHUB_REPOSITORY_SLUG".');
  }

  repositoryOwner = getRepositoryOwner(repository);
  if (repositoryOwner) {
    core.exportVariable('GITHUB_REPOSITORY_OWNER', repositoryOwner);
    core.info(`Set GITHUB_REPOSITORY_OWNER=` +
              `${process.env.GITHUB_REPOSITORY_OWNER}`);

    core.exportVariable('GITHUB_REPOSITORY_OWNER_SLUG',
        slugify(repositoryOwner));
    core.info(`Set GITHUB_REPOSITORY_OWNER_SLUG=` +
              `${process.env.GITHUB_REPOSITORY_OWNER_SLUG}`);
  } else {
    core.warning('Environment variable "GITHUB_REPOSITORY" not set. ' +
                 'Cannot set "GITHUB_REPOSITORY_OWNER" and ' +
                 '"GITHUB_REPOSITORY_OWNER_SLUG".');
  }

  repositoryName = getRepositoryName(repository);
  if (repositoryName) {
    core.exportVariable('GITHUB_REPOSITORY_NAME', repositoryName);
    core.info(`Set GITHUB_REPOSITORY_NAME=` +
              `${process.env.GITHUB_REPOSITORY_NAME}`);

    core.exportVariable('GITHUB_REPOSITORY_NAME_SLUG',
        slugify(repositoryName));
    core.info(`Set GITHUB_REPOSITORY_NAME_SLUG=` +
              `${process.env.GITHUB_REPOSITORY_NAME_SLUG}`);
  } else {
    core.warning('Environment variable "GITHUB_REPOSITORY" not set. ' +
                 'Cannot set "GITHUB_REPOSITORY_NAME" and ' +
                 '"GITHUB_REPOSITORY_NAME_SLUG".');
  }

  // i.e. refs/heads/feat/feature-branch-1
  ref = process.env.GITHUB_REF;

  if (ref) {
    core.exportVariable('GITHUB_REF_SLUG', slufigy(ref));
    core.info(`Set GITHUB_REF_SLUG=${process.env.GITHUB_REF_SLUG}`);
  } else {
    core.warning('Environment variable "GITHUB_REF" not set. ' +
                 'Cannot set "GITHUB_REF_SLUG".');
  }

  refName = getRefName(ref);
  if (refName) {
    core.exportVariable('GITHUB_REF_NAME', refName);
    core.info(`Set GITHUB_REF_NAME=${process.env.GITHUB_REF_NAME}`);

    core.exportVariable('GITHUB_REF_NAME_SLUG', slufigy(refName));
    core.info(`Set GITHUB_REF_NAME_SLUG=${process.env.GITHUB_REF_NAME_SLUG}`);
  } else {
    core.warning('Environment variable "GITHUB_REF" not set. ' +
                 'Cannot set "GITHUB_REF_NAME" and ' +
                 '"GITHUB_REF_NAME_SLUG".');
  }

  // i.e. ffac537e6cbbf934b08745a378932722df287a53
  shaShort = getShaShort(process.env.GITHUB_SHA);
  if (shaShort) {
    core.exportVariable('GITHUB_SHA_SHORT', shaShort);
    core.info(`Set GITHUB_SHA_SHORT=${process.env.GITHUB_SHA_SHORT}`);
  } else {
    core.warning('Environment variable "GITHUB_SHA" not set. ' +
                 'Cannot set "GITHUB_SHA_SHORT".');
  }
} catch (error) {
  core.setFailed(error.message);
}

module.exports = {
  slugify,
  getRepositoryOwner,
  getRepositoryName,
  getRefName,
  getShaShort,
};
