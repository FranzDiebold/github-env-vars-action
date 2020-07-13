// Franz Diebold

const core = require('@actions/core');

function slugify(inputString) {
    return inputString.replace(/^\s+|\s+$/g, '') // trim
                      .toLowerCase()
                      .replace(/[^a-z0-9 -]/g, '') // remove invalid chars
                      .replace(/\s+/g, '-') // collapse whitespace and replace by -
                      .replace(/-+/g, '-'); // collapse dashes
}

// https://help.github.com/en/actions/automating-your-workflow-with-github-actions/using-environment-variables#default-environment-variables
try {
    splitted_github_repository = process.env.GITHUB_REPOSITORY.split('/'); // FranzDiebold/github-env-vars-action

    core.exportVariable('GITHUB_REPOSITORY_OWNER', slugify(splitted_github_repository[0]));
    core.info(`Set GITHUB_REPOSITORY_OWNER=${process.env.GITHUB_REPOSITORY_OWNER}`);

    core.exportVariable('GITHUB_REPOSITORY_NAME', slugify(splitted_github_repository[1]));
    core.info(`Set GITHUB_REPOSITORY_NAME=${process.env.GITHUB_REPOSITORY_NAME}`);

    splitted_github_ref = process.env.GITHUB_REF.split('/'); // refs/heads/feature-branch-1
    core.exportVariable('GITHUB_REF_NAME', slugify(splitted_github_ref[2]));
    core.info(`Set GITHUB_REF_NAME=${process.env.GITHUB_REF_NAME}`);

    github_sha = process.env.GITHUB_SHA; // ffac537e6cbbf934b08745a378932722df287a53
    core.exportVariable('GITHUB_SHA_SHORT', github_sha.substring(0, 8));
    core.info(`Set GITHUB_SHA_SHORT=${process.env.GITHUB_SHA_SHORT}`);
} catch (error) {
    core.setFailed(error.message);
}
