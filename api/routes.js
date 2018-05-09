const userController = require('./controller/userController');

module.exports = (app) => {
    app.route('/find/all/user').get(
        userController.findUsers
    )

    app.route('/new/user').post(
        userController.makeToken,
        userController.addUser
    )
}