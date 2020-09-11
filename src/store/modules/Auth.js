const state = {
    credentials: {
        user: 'root',
        password: 'secret'
    },
    logged: false
};

const getters = {
    user: state => state.credentials.user,
    password: state => state.credentials.password
};

const actions = {
    login: ({commit, getters}, {user, password}) => {
        return new Promise((resolve, reject) => {
            if (user === getters.user && password === getters.password) {
                commit('LOGIN', true);
                resolve(true);
            } else {
                commit('LOGIN', false);
                reject("Incorrect login or password.");
            }
        })
    }
};

const mutations = {
    LOGIN: (state, value) => {
        state.logged = value;
    }
};

export default {
    state,
    getters,
    actions,
    mutations
}