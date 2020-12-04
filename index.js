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

// https://docs.github.com/en/free-pro-team@latest/actions/reference/environment-variables#default-environment-variables

try {
  // i.e. FranzDiebold/github-env-vars-action
  repository = process.env.GITHUB_REPOSITORY;

  if (repository) {
    core.exportVariable('CI_REPOSITORY_SLUG', slugify(repository));
    core.info(`Set CI_REPOSITORY_SLUG=` +
              `${process.env.CI_REPOSITORY_SLUG}`);
  } else {
    core.warning('Environment variable "GITHUB_REPOSITORY" not set. ' +
                 'Cannot set "CI_REPOSITORY_SLUG".');
  }

  repositoryOwner = getRepositoryOwner(repository);
  if (repositoryOwner) {
    core.exportVariable('CI_REPOSITORY_OWNER', repositoryOwner);
    core.info(`Set CI_REPOSITORY_OWNER=` +
              `${process.env.CI_REPOSITORY_OWNER}`);

    core.exportVariable('CI_REPOSITORY_OWNER_SLUG',
        slugify(repositoryOwner));
    core.info(`Set CI_REPOSITORY_OWNER_SLUG=` +
              `${process.env.CI_REPOSITORY_OWNER_SLUG}`);
  } else {
    core.warning('Environment variable "GITHUB_REPOSITORY" not set. ' +
                 'Cannot set "CI_REPOSITORY_OWNER" and ' +
                 '"CI_REPOSITORY_OWNER_SLUG".');
  }

  repositoryName = getRepositoryName(repository);
  if (repositoryName) {
    core.exportVariable('CI_REPOSITORY_NAME', repositoryName);
    core.info(`Set CI_REPOSITORY_NAME=` +
              `${process.env.CI_REPOSITORY_NAME}`);

    core.exportVariable('CI_REPOSITORY_NAME_SLUG',
        slugify(repositoryName));
    core.info(`Set CI_REPOSITORY_NAME_SLUG=` +
              `${process.env.CI_REPOSITORY_NAME_SLUG}`);
  } else {
    core.warning('Environment variable "GITHUB_REPOSITORY" not set. ' +
                 'Cannot set "CI_REPOSITORY_NAME" and ' +
                 '"CI_REPOSITORY_NAME_SLUG".');
  }

  core.exportVariable('CI_REPOSITORY', repository);
  core.info(`Set CI_REPOSITORY=${process.env.CI_REPOSITORY}`);

  // i.e. refs/heads/feat/feature-branch-1
  ref = process.env.GITHUB_REF;

  if (ref) {
    core.exportVariable('CI_REF_SLUG', slugify(ref));
    core.info(`Set CI_REF_SLUG=${process.env.CI_REF_SLUG}`);
  } else {
    core.warning('Environment variable "GITHUB_REF" not set. ' +
                 'Cannot set "CI_REF_SLUG".');
  }

  refName = getRefName(ref);
  if (refName) {
    core.exportVariable('CI_REF_NAME', refName);
    core.info(`Set CI_REF_NAME=${process.env.CI_REF_NAME}`);

    core.exportVariable('CI_REF_NAME_SLUG', slugify(refName));
    core.info(`Set CI_REF_NAME_SLUG=${process.env.CI_REF_NAME_SLUG}`);
  } else {
    core.warning('Environment variable "GITHUB_REF" not set. ' +
                 'Cannot set "CI_REF_NAME" and ' +
                 '"CI_REF_NAME_SLUG".');
  }

  core.exportVariable('CI_REF', ref);
  core.info(`Set CI_REF=${process.env.CI_REF}`);

  headRef = process.env.GITHUB_HEAD_REF;

  branchName = headRef || refName;
  if (branchName) {
    core.exportVariable('CI_ACTION_REF_NAME', branchName);
    core.info(`Set CI_ACTION_REF_NAME=${process.env.CI_ACTION_REF_NAME}`);

    core.exportVariable('CI_ACTION_REF_NAME_SLUG', slugify(branchName));
    core.info('Set CI_ACTION_REF_NAME_SLUG=' +
              `${process.env.CI_ACTION_REF_NAME_SLUG}`);
  } else {
    core.warning('Environment variables "GITHUB_REF" and ' +
                 '"GITHUB_HEAD_REF" not set. ' +
                 'Cannot set "CI_ACTION_REF_NAME" and ' +
                 '"CI_ACTION_REF_NAME_SLUG".');
  }

  if (headRef) {
    core.exportVariable('CI_HEAD_REF_SLUG', slugify(headRef));
    core.info(`Set CI_HEAD_REF_SLUG=${process.env.CI_HEAD_REF_SLUG}`);
  } else {
    core.warning('Environment variable "GITHUB_HEAD_REF" not set. ' +
                 'Cannot set "CI_HEAD_REF_SLUG".');
  }

  core.exportVariable('CI_HEAD_REF', headRef);
  core.info(`Set CI_HEAD_REF=${process.env.CI_HEAD_REF}`);

  baseRef = process.env.GITHUB_BASE_REF;
  if (baseRef) {
    core.exportVariable('CI_BASE_REF_SLUG', slugify(baseRef));
    core.info(`Set CI_BASE_REF_SLUG=${process.env.CI_BASE_REF_SLUG}`);
  } else {
    core.warning('Environment variable "GITHUB_BASE_REF" not set. ' +
                 'Cannot set "CI_BASE_REF_SLUG".');
  }

  core.exportVariable('CI_BASE_REF', baseRef);
  core.info(`Set CI_BASE_REF=${process.env.CI_BASE_REF}`);

  // i.e. ffac537e6cbbf934b08745a378932722df287a53
  sha = process.env.GITHUB_SHA;
  if (sha) {
    core.exportVariable('CI_SHA_SHORT', getShaShort(sha));
    core.info(`Set CI_SHA_SHORT=${process.env.CI_SHA_SHORT}`);
  } else {
    core.warning('Environment variable "GITHUB_SHA" not set. ' +
                 'Cannot set "CI_SHA_SHORT".');
  }

  core.exportVariable('CI_SHA', sha);
  core.info(`Set CI_SHA=${process.env.CI_SHA}`);

  actor = process.env.GITHUB_ACTOR;
  core.exportVariable('CI_ACTOR', actor);
  core.info(`Set CI_ACTOR=${process.env.CI_ACTOR}`);

  eventName = process.env.GITHUB_EVENT_NAME;
  core.exportVariable('CI_EVENT_NAME', eventName);
  core.info(`Set CI_EVENT_NAME=${process.env.CI_EVENT_NAME}`);

  runId = process.env.GITHUB_RUN_ID;
  core.exportVariable('CI_RUN_ID', runId);
  core.info(`Set CI_RUN_ID=${process.env.CI_RUN_ID}`);

  runNumber = process.env.GITHUB_RUN_NUMBER;
  core.exportVariable('CI_RUN_NUMBER', runNumber);
  core.info(`Set CI_RUN_NUMBER=${process.env.CI_RUN_NUMBER}`);

  workflow = process.env.GITHUB_WORKFLOW;
  core.exportVariable('CI_WORKFLOW', workflow);
  core.info(`Set CI_WORKFLOW=${process.env.CI_WORKFLOW}`);

  action = process.env.GITHUB_ACTION;
  core.exportVariable('CI_ACTION', action);
  core.info(`Set CI_ACTION=${process.env.CI_ACTION}`);
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
