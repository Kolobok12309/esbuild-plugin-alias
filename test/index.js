const path = require('path');
const assert = require('assert');
const fs = require('fs');

const esbuild = require('esbuild');

const alias = require('..');

const resolvePath = x => path.resolve(__dirname, x);

describe('Main tests', () => {
  it('should work with strings', done => {
    const output = fs.readFileSync(resolvePath('fixtures/output.js'), 'utf-8');

    esbuild.build({
      entryPoints: [resolvePath('fixtures/input.js')],
      bundle: true,
      plugins: [
        alias({
          'settings.env': resolvePath('fixtures/settings.dev.js'),
          '@bar/baz/': resolvePath('fixtures/foo/bar/baz'),
        }),
      ],
      write: false,
    })
      .then(res => {
        done(assert.deepStrictEqual(res.outputFiles[0].text, output));
      })
      .catch(err => {
        done(err);
      });
  });
});
