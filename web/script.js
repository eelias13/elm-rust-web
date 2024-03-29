const { greet } = wasm_bindgen;

async function main() {
  await wasm_bindgen("./rust_bg.wasm");

  console.log(greet("javasript"));

  var app = Elm.Main.init({
    node: document.getElementById("elmDiv"),
  });

  app.ports.sendMessage.subscribe(function (message) {
    console.log(greet(message));
    app.ports.messageReceiver.send(message);
  });
}
