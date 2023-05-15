const config = {
  branches: ['main'],
  plugins: [
    '@semantic-release/commit-analyzer',
    '@semantic-release/release-notes-generator',
    ['@semantic-release/npm', {
        'npmPlublish': false
    }],
    ['@semantic-release/git', {
      'assets': ['package.json'],
      'message': 'chore(release): ${nextRelease.version} [skip ci]\n\n${nextRelease.notes}'
    }],
    ['@semantic-release/exec', {
      'prepareCmd': 'echo "VERSION=${nextRelease.version}" >> $GITHUB_ENV'
    }]
  ]
};

module.exports = config;