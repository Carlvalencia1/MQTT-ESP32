# MQTT ESP32

Use the package manager npm to install mqtt.

## Installation

Use the package manager [npm](https://www.npmjs.com/package/mqtt) to install mqtt.

```bash
npm i mqtt
```

## Usage

```javascript
const mqtt = require('mqtt');

// RabbitMQ connection options
const options = {
  username: "valencia",
  password: "1234",
};

// Connect to the MQTT broker (AWS instance in this case)
const client = mqtt.connect("mqtt://3.214.253.242", options);


```
## Run the program


```bash
node server.js
