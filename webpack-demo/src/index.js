import "./style.css"

function getComponent() {
  return import(/* webpackChunkName:"lodash" */"lodash").then(({ default: _ }) => {
    var element = document.createElement("div");
    element.innerHTML = _.join(["alwyn", "zhou"], "-");
    return element;
  });
}

getComponent().then(element => {
  document.body.appendChild(element);
});
