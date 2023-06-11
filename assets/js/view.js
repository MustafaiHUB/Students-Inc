class View {
    userImg = document.querySelector('.profile-img');
    profileName = document.querySelector('.profile-name h2');
    _addHandlerUserInfo(name) {
        this.profileName.textContent = name;
    }
}
export default new View();