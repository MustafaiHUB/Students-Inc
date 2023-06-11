import 'core-js/stable';
import 'regenerator-runtime/runtime';
import * as model from './model';
import view from './view';

// Get the user's name & email address.
const handleUserInfo = async function () {
    try {
        const user = await model.getUserInfo();

        const { name, email } = user;
        view._addHandlerUserInfo(name);
    } catch (err) {
        alert(err.message);
    }
}
handleUserInfo();