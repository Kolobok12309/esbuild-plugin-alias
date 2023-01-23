(() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __markAsModule = (target) => __defProp(target, "__esModule", {value: true});
  var __commonJS = (callback, module) => () => {
    if (!module) {
      module = {exports: {}};
      callback(module.exports, module);
    }
    return module.exports;
  };
  var __exportStar = (target, module, desc) => {
    if (module && typeof module === "object" || typeof module === "function") {
      for (let key of __getOwnPropNames(module))
        if (!__hasOwnProp.call(target, key) && key !== "default")
          __defProp(target, key, {get: () => module[key], enumerable: !(desc = __getOwnPropDesc(module, key)) || desc.enumerable});
    }
    return target;
  };
  var __toModule = (module) => {
    if (module && module.__esModule)
      return module;
    return __exportStar(__markAsModule(__defProp(module != null ? __create(__getProtoOf(module)) : {}, "default", {value: module, enumerable: true})), module);
  };

  // test/fixtures/settings.dev.js
  var require_settings_dev = __commonJS((exports, module) => {
    module.exports = {
      test: 1
    };
  });

  // test/fixtures/foo/bar/baz/foo.js
  var require_foo = __commonJS((exports, module) => {
    module.exports = {
      foo: "bar_baz"
    };
  });

  // test/fixtures/input.js
  var import_settings = __toModule(require_settings_dev());
  var import_foo = __toModule(require_foo());
  console.log(import_settings.default.test);
  console.log(import_foo.default.foo);
})();
