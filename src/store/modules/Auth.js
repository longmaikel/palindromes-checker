const state = {
    credentials: {
        user: 'root',
        password: 'secret'
    },
    logged: false
};

const getters = {
    credentials: state => state.credentials
};

const actions = {
    login: ({commit}, {user, password}) => {
        return new Promise((resolve, reject) => {
            const correctCredentials = getters.credentials;
            if (user === correctCredentials.user && password === correctCredentials.password) {
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