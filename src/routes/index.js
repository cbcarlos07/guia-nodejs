const routes = require('./routes')
const fnRoutes = app => {
    app.use('/', routes.initRoute)
    app.use('/', routes.calcRoute);
}

module.exports = fnRoutes