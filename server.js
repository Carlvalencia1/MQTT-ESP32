const mqtt = require("mqtt");

const options = {
 
  username: "valencia",
  password: "1234",
};
const client = mqtt.connect("mqtt://3.214.253.242", options);

client.on("connect", () => {
  client.subscribe("multi.esp32", (err) => {
    if (!err) {
      client.publish("multi.esp32", "Hello mqtt");
    }
  });
});

client.on("message", (topic, message) => {
  // message is Buffer
  console.log(message.toString());
  client.end();
});