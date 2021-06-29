class Auth {
    constructor(){
        this.authenticated = false;
        const found = localStorage.getItem('found');
        const email = localStorage.getItem('email');
        const password = localStorage.getItem('password');
        this.found = found;
        console.log('found local storage', found);
        console.log('found auth', this.found);
    }

    login(cb) {
        if (this.found == "True") {
            this.authenticated = true;
            cb();
        }
        else {
            this.authenticated = false;
            cb();
        }

    }
    logout(cb) {
        this.authenticated = false;
        cb();
    }

    isAuthenticated() {
        return this.authenticated;
    }
}

export default new Auth