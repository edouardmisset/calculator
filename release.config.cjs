module.exports = {
  branches: [{ name: 'main' }],
  url: 'https://github.com/edouardmisset/calculator.git',
  plugins: [
    '@semantic-release/commit-analyzer',
    ['@semantic-release/release-notes-generator'],
    ["@semantic-release/npm", { "npmPublish": false }],
    [
      '@semantic-release/changelog',
      {
        changelogFile: 'docs/CHANGELOG.md',
      },
    ],
    [
      '@semantic-release/github',
      {
        githubUrl: 'https://github.com/edouardmisset/',
        assets: ["dist/**"],
      },
    ],
    "@semantic-release/git",
  ],
  extends: ['@semantic-release/github-config'],
}
