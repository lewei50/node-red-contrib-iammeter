
const axios = require('axios');

module.exports = function (RED) {
    function Iammeter(config) {
        RED.nodes.createNode(this, config);
        const node = this;

        node.status({ fill: "gray", shape: "dot", text: "waiting..." });

        const timer = setInterval(getData, getInterval());

        getData();

        function getData() {
            axios.defaults.timeout = getInterval() - 1;
            axios.get(`http://${config.ip}/monitorjson`, { auth: { username: 'admin', password: 'admin' } })
                .then(response => {
                    var msg = { payload: response.data.Datas };
                    if (!msg.payload)
                        msg.payload = response.data.Data;
                    node.send(msg);
                    node.status({ fill: "green", shape: "dot", text: "connected" });
                })
                .catch(error => {
                    node.error(error);
                    node.status({ fill: "red", shape: "dot", text: "disconnected" });
                });
        }

        function getInterval() {
            let interval = config.interval;
            if (interval < 1) interval = 10;
            return interval * 1000;
        }
        node.on('close', function () {
            clearInterval(timer);
        });

    }
    RED.nodes.registerType("local-realtime", Iammeter);
}