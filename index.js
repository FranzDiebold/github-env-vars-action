const core = require('@actions/core');

function slugify(str) {
    str = str.replace(/^\s+|\s+$/g, ''); // trim
    str = str.toLowerCase();

    str = str.replace(/[^a-z0-9 -]/g, '') // remove invalid chars
             .replace(/\s+/g, '-') // collapse whitespace and replace by -
             .replace(/-+/g, '-'); // collapse dashes

    return str;
}

// https://help.github.com/en/actions/automating-your-workflow-with-github-actions/using-environment-variables#default-environment-variables
try {
    splitted_github_repository = process.env.GITHUB_REPOSITORY.split('/'); // octocat/Hello-World
    process.env['GITHUB_REPO_OWNER'] = slugify(splitted_github_repository[0]);
    process.env['GITHUB_REPO_NAME'] = slugify(splitted_github_repository[1]);
    splitted_github_ref = process.env.GITHUB_REF.split('/'); // refs/heads/feature-branch-1
    process.env['GITHUB_BRANCH_NAME'] = slugify(splitted_github_ref[2]);
} catch (error) {
    core.setFailed(error.message);
}
