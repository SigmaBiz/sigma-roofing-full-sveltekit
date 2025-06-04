export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["sigma-logo.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {start:"_app/immutable/entry/start.BvGKAQNF.js",app:"_app/immutable/entry/app.Bgjnmy6h.js",imports:["_app/immutable/entry/start.BvGKAQNF.js","_app/immutable/chunks/SWIgw_po.js","_app/immutable/chunks/lywDo29W.js","_app/immutable/chunks/Bh9cTnYZ.js","_app/immutable/entry/app.Bgjnmy6h.js","_app/immutable/chunks/lywDo29W.js","_app/immutable/chunks/B4KrYGE1.js","_app/immutable/chunks/CHeXQ_f2.js","_app/immutable/chunks/Bh9cTnYZ.js","_app/immutable/chunks/CGmsecmz.js","_app/immutable/chunks/BpMsfc0y.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('../output/server/nodes/0.js')),
			__memo(() => import('../output/server/nodes/1.js')),
			__memo(() => import('../output/server/nodes/2.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			}
		],
		prerendered_routes: new Set([]),
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
