module.exports =
/******/ (function(modules, runtime) { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	__webpack_require__.ab = __dirname + "/";
/******/
/******/ 	// the startup function
/******/ 	function startup() {
/******/ 		// Load entry module and return exports
/******/ 		return __webpack_require__(622);
/******/ 	};
/******/
/******/ 	// run startup
/******/ 	return startup();
/******/ })
/************************************************************************/
/******/ ({

/***/ 622:
/***/ (function(module, __unusedexports, __webpack_require__) {

// Franz Diebold

const core = __webpack_require__(968);

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
    core.exportVariable('GITHUB_REF_SLUG', slugify(ref));
    core.info(`Set GITHUB_REF_SLUG=${process.env.GITHUB_REF_SLUG}`);
  } else {
    core.warning('Environment variable "GITHUB_REF" not set. ' +
                 'Cannot set "GITHUB_REF_SLUG".');
  }

  refName = getRefName(ref);
  if (refName) {
    core.exportVariable('GITHUB_REF_NAME', refName);
    core.info(`Set GITHUB_REF_NAME=${process.env.GITHUB_REF_NAME}`);

    core.exportVariable('GITHUB_REF_NAME_SLUG', slugify(refName));
    core.info(`Set GITHUB_REF_NAME_SLUG=${process.env.GITHUB_REF_NAME_SLUG}`);
  } else {
    core.warning('Environment variable "GITHUB_REF" not set. ' +
                 'Cannot set "GITHUB_REF_NAME" and ' +
                 '"GITHUB_REF_NAME_SLUG".');
  }

  headRef = process.env.GITHUB_HEAD_REF;

  branchName = headRef || refName;
  if (branchName) {
    core.exportVariable('GITHUB_BRANCH_NAME', branchName);
    core.info(`Set GITHUB_BRANCH_NAME=${process.env.GITHUB_BRANCH_NAME}`);

    core.exportVariable('GITHUB_BRANCH_NAME_SLUG', slugify(branchName));
    core.info('Set GITHUB_BRANCH_NAME_SLUG=' +
              `${process.env.GITHUB_BRANCH_NAME_SLUG}`);
  } else {
    core.warning('Environment variables "GITHUB_REF" and ' +
                 '"GITHUB_HEAD_REF" not set. ' +
                 'Cannot set "GITHUB_BRANCH_NAME" and ' +
                 '"GITHUB_BRANCH_NAME_SLUG".');
  }

  if (headRef) {
    core.exportVariable('GITHUB_HEAD_REF_SLUG', slugify(headRef));
    core.info(`Set GITHUB_HEAD_REF_SLUG=${process.env.GITHUB_HEAD_REF_SLUG}`);
  } else {
    core.warning('Environment variable "GITHUB_HEAD_REF" not set. ' +
                 'Cannot set "GITHUB_HEAD_REF_SLUG".');
  }

  baseRef = process.env.GITHUB_BASE_REF;
  if (baseRef) {
    core.exportVariable('GITHUB_BASE_REF_SLUG', slugify(baseRef));
    core.info(`Set GITHUB_BASE_REF_SLUG=${process.env.GITHUB_BASE_REF_SLUG}`);
  } else {
    core.warning('Environment variable "GITHUB_BASE_REF" not set. ' +
                 'Cannot set "GITHUB_BASE_REF_SLUG".');
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


/***/ }),

/***/ 968:
/***/ (function() {

eval("require")("@actions/core");


/***/ })

/******/ });