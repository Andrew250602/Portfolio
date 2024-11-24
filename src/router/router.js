let homePage = require('../pages/home');
let projectPage = require('../pages/project')

const router = (app) => {
    app.use(homePage)
    app.use(projectPage)
}

module.exports = router