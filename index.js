module.exports = options => {
  const normalizedAliases = Object.entries(options).map(([key, path]) => {
    const escapedKey = escapeRegExp(key);
    const isDir = key.endsWith('/');
    const formattedKey = isDir ? `${escapedKey}(.*)` : escapedKey;

    return {
      alias: formattedKey,
      regexp: new RegExp(`^(?:${formattedKey})$`),
      isDir,
      path,
    };
  });
  const aliases = normalizedAliases.map(({ alias }) => alias);
  const re = new RegExp(`^(?:${aliases.join('|')})$`);

  return {
    name: 'alias',
    setup(build) {
      // we do not register 'file' namespace here, because the root file won't be processed
      // https://github.com/evanw/esbuild/issues/791
      build.onResolve({ filter: re }, args => {
        const alias = normalizedAliases.find(({ regexp }) => regexp.test(args.path));
        const res = alias.isDir
          ? args.path.replace(alias.regexp, `${alias.path}/$1`)
          : alias.path;

        return {
          path: res,
        };
      });
    },
  };
};

function escapeRegExp(string) {
  // $& means the whole matched string
  return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}
