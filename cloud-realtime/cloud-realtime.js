
const axios = require('axios');

module.exports = function (RED) {
    function Iammeter(config) {
        RED.nodes.createNode(this, config);
        const node = this;

        node.status({ fill: "gray", shape: "dot", text: "waiting..." });

        const timer = setInterval(getData, getInterval());

        getData();

        function getData() {
            axios.defaults.timeout = 20000;
            axios.get(`https://www.iammeter.com/api/v1/site/meterdata/${config.sn}`, { headers: { token: config.token } })
                .then(response => {
                    var rt = response.data;
                    if (rt.successful == false) {
                        node.status({ fill: "red", shape: "dot", text: rt.message });
                    } else {
                        var msg = { payload: rt.data.values };
                        if (msg.payload.length == 1)
                            msg.payload = rt.data.values[0];
                        node.send(msg);
                        node.status({ fill: "green", shape: "dot", text: "connected" });
                    }
                })
                .catch(error => {
                    node.error(error);
                    node.status({ fill: "red", shape: "dot", text: "disconnected" });
                });
        }

        function getInterval() {
            return 60 * 1000;
        }
        node.on('close', function () {
            clearInterval(timer);
        });

    }
    RED.nodes.registerType("cloud-realtime", Iammeter);
}