var PROXY_CONFIG = {
	"/api/v1/*": {
		"target": "http://localhost:3000",
		"secure": false,
		"logLevel": "debug",
		"changeOrigin": true
	},
	"/graphql": {
		"target": "http://localhost:3000",
		"secure": false,
		"logLevel": "debug",
		"changeOrigin": true
	}
};

module.exports = PROXY_CONFIG;
