// Compiled using marko@4.9.2 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_componentType = "/marko-demo$1.0.0/src/pages/home/template.marko",
    components_helpers = require("marko/src/components/helpers"),
    marko_renderer = components_helpers.r,
    marko_defineComponent = components_helpers.c,
    __browser_json = require.resolve("./browser.json"),
    marko_helpers = require("marko/src/runtime/html/helpers"),
    marko_loadTag = marko_helpers.t,
    lasso_page_tag = marko_loadTag(require("@lasso/marko-taglib/taglib/config-tag")),
    lasso_head_tag = marko_loadTag(require("@lasso/marko-taglib/taglib/head-tag")),
    component_globals_tag = marko_loadTag(require("marko/src/components/taglib/component-globals-tag")),
    marko_escapeXml = marko_helpers.x,
    marko_forEach = marko_helpers.f,
    marko_styleAttr = marko_helpers.sa,
    marko_loadTemplate = require("marko/src/runtime/helper-loadTemplate"),
    app_hello_template = marko_loadTemplate(require.resolve("../../components/app-hello/template.marko")),
    app_hello_tag = marko_loadTag(app_hello_template),
    complex_data_tag = marko_loadTag(require("../../components/complex-data/renderer")),
    lasso_body_tag = marko_loadTag(require("@lasso/marko-taglib/taglib/body-tag")),
    init_components_tag = marko_loadTag(require("marko/src/components/taglib/init-components-tag")),
    await_reorderer_tag = marko_loadTag(require("marko/src/taglibs/async/await-reorderer-tag"));

function render(input, out, __component, component, state) {
  var data = input;

  lasso_page_tag({
      packagePath: __browser_json,
      dirname: __dirname,
      filename: __filename
    }, out);

  out.w("<!DOCTYPE html><html lang=\"en\"><head><meta charset=\"UTF-8\"><title>Marko Demo</title>");

  lasso_head_tag({}, out, __component, "4");

  lasso_head_tag({}, out, __component, "5");

  out.w("</head><body>");

  component_globals_tag({}, out);

  out.w("<h1>Marko Demo</h1> Hello " +
    marko_escapeXml(data.name) +
    "!! ");

  if (data.colors) {
    out.w("<ul>");

    marko_forEach(data.colors, function(color) {
      out.w("<li" +
        marko_styleAttr({
          color: color
        }) +
        ">" +
        marko_escapeXml(color) +
        "</li>");
    });

    out.w("</ul>");
  } else {
    out.w("<div>There are no colors!!</div>");
  }

  app_hello_tag({
      name: "Srini"
    }, out, __component, "11");

  complex_data_tag({
      name: "Complex Data"
    }, out, __component, "12");

  lasso_body_tag({}, out, __component, "13");

  lasso_body_tag({}, out, __component, "14");

  init_components_tag({}, out);

  await_reorderer_tag({}, out, __component, "15");

  out.w("</body></html>");
}

marko_template._ = marko_renderer(render, {
    ___implicit: true,
    ___type: marko_componentType
  });

marko_template.Component = marko_defineComponent({}, marko_template._);

marko_template.meta = {
    id: "/marko-demo$1.0.0/src/pages/home/template.marko",
    tags: [
      "@lasso/marko-taglib/taglib/config-tag",
      "@lasso/marko-taglib/taglib/head-tag",
      "marko/src/components/taglib/component-globals-tag",
      "../../components/app-hello/template.marko",
      "../../components/complex-data/renderer",
      "@lasso/marko-taglib/taglib/body-tag",
      "marko/src/components/taglib/init-components-tag",
      "marko/src/taglibs/async/await-reorderer-tag"
    ]
  };
