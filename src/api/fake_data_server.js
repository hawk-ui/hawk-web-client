const jsonServer = require('json-server')
const server = jsonServer.create()
const path = require('path')
const router = jsonServer.router(path.join(__dirname, 'db.json'))
const json_contents = require(path.join(__dirname, 'db.json'))
const middlewares = jsonServer.defaults()
const other_routers = {
  "/api/v1/cib_meta": "/cib_meta",
  "/api/v1/configuration/cluster_property": "/cluster_property",
  "/api/v1/configuration/rsc_defaults": "/rsc_defaults",
  "/api/v1/configuration/op_defaults": "/op_defaults",
  "/api/v1/configuration/resources": "/resources",
  "/api/v1/configuration/primitives": "/primitives?groupId=null",
  "/api/v1/configuration/primitives/:id": "/primitives/:id",
  "/api/v1/configuration/groups": "/groups?_embed=primitives",
  "/api/v1/configuration/groups/:id": "/groups/:id?_embed=primitives",
  "/api/v1/configuration/groups/:id/:primitiveId": "/primitives/:primitiveId",
  "/api/v1/configuration/masters": "/masters?_embed=primitives&_embed=groups",
  "/api/v1/configuration/masters/:id": "/masters/:id?_embed=primitives&_embed=groups",
  "/api/v1/configuration/clones": "/clones?_embed=groups&_embed=primitives",
  "/api/v1/configuration/clones/:id": "/clones/:id?_embed=groups&_embed=primitives",
  "/api/v1/configuration/bundles": "/bundles?_embed=primitives",
  "/api/v1/configuration/bundles/:id": "/bundles/:id?_embed=primitives",
  "/api/v1/configuration/bundles/:id/:primitiveId": "/primitives/:primitiveId",
  "/api/v1/configuration/nodes": "/nodes",
  "/api/v1/configuration/nodes/:id": "/nodes/:id",
  "/api/v1/configuration/constraints": "/constraints",
  "/api/v1/configuration/constraints/:id": "/constraints/:id",
  "/api/v1/status/summary": "/status_summary",
  "/api/v1/status/nodes": "/nodes_status",
  "/api/v1/status/nodes/:id": "/nodes_status/:id",
  "/api/v1/status/resources": "/resources_status",
  "/api/v1/status/resources/:id": "/resources_status/:id",
  "/api/v1/status/failures": "/failures",
  "/api/v1/status/failures/:node": "/failures?node=:node"
}

server.use(middlewares)
server.use(jsonServer.rewriter(other_routers))

server.use((req, res, next) => {
  _str_list = req.url.substring(1).split('/')
  if (_str_list.length == 5 && _str_list[3] === "resources" && _str_list[2] === "configuration") {
      var resId, resType
      resId = _str_list[4]
      for (var item in json_contents.resources) {
        var obj = json_contents.resources[item]
        if (obj.id === resId) {
          resType = obj.type
          req.url = "/api/v1/configuration/" + resType + "s/" + resId
          res.redirect(req.url)
          return
        }
      }
  }
  next()
})


server.use(router)
server.listen(3004, () => {
  console.log('JSON Server is running on 3004')
  console.log('Routes list:\n')
  for (var route in other_routers) {
    console.log(route)
    if (route === "/api/v1/configuration/resources") {
      console.log("/api/v1/configuration/resources/:id")
    }
  }
  console.log("\n")
})
