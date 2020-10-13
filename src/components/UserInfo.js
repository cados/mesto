export default class UserInfo {
  constructor(selectors) {
    this._name = document.querySelector(selectors.name);
    this._prof = document.querySelector(selectors.prof);
  }

  getUserInfo() {
    return {
      name: this._name.textContent,
      prof: this._prof.textContent,
    };
  }

  setUserInfo(userData) {
    this._name.textContent = userData.name;
    this._prof.textContent = userData.prof;
  }
}
