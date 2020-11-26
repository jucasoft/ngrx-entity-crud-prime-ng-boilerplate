var PROXY_CONFIG = {
	"/api/v1/*": {
		"target": "http://localhost:3000",
		"secure": false,
		"logLevel": "debug",
		"changeOrigin": true,
		// "bypass": function (req, res, proxyOptions) {
		// 	var debugValues = "";
		// 	req.headers["X-Custom-Header"] = debugValues;
		// }http://localhost:18182/kube-RS/service/v1/filter 403 (Forbidden)
	}
};

module.exports = PROXY_CONFIG;
