import LocalStore from "./LocalStore"

class Authenticate {
    isAuthenticated() {
        const tokenData = LocalStore.getToken();
        return tokenData && tokenData.token ? true : false;
    }

    logoutUser() {
        LocalStore.removeToken();
    }
}
export default Authenticate = new Authenticate()