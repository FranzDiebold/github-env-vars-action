const {
  slugify, getRepositoryOwner, getRepositoryName, getRefName, getShaShort,
} = require('./index');

test('slugifies text', () => {
  expect(slugify(' /abc+efg*123/test§xyz ')).toEqual('abc-efg-123-test-xyz');
});

test('slugifies ref name with dash', () => {
  expect(slugify('feat/feature-branch-1')).toEqual('feat-feature-branch-1');
});

test('slugifies empty text', () => {
  expect(slugify('')).toEqual('');
});

test('gets repository owner', () => {
  expect(getRepositoryOwner('FranzDiebold/github-env-vars-action'))
      .toEqual('FranzDiebold');
});

test('gets repository owner for empty repository', () => {
  expect(getRepositoryOwner(undefined)).toBeFalsy();
});

test('gets repository name from repository', () => {
  expect(getRepositoryName('FranzDiebold/github-env-vars-action'))
      .toEqual('github-env-vars-action');
});

test('gets repository name for empty repository', () => {
  expect(getRepositoryName(undefined)).toBeFalsy();
});

test('gets ref name from simple ref', () => {
  expect(getRefName('refs/heads/feature-branch-1'))
      .toEqual('feature-branch-1');
});

test('gets ref name from tag', () => {
  expect(getRefName('refs/tags/v1.3.7'))
      .toEqual('v1.3.7');
});

test('gets ref name from complex ref', () => {
  expect(getRefName('refs/heads/feat/feature-branch-1'))
      .toEqual('feat/feature-branch-1');
});

test('gets ref name for empty ref', () => {
  expect(getRefName(undefined)).toBeFalsy();
});

test('gets short SHA', () => {
  expect(getShaShort('ffac537e6cbbf934b08745a378932722df287a53'))
      .toEqual('ffac537e');
});

test('gets short SHA for empty SHA', () => {
  expect(getShaShort(undefined)).toBeFalsy();
});
