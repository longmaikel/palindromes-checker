import data from "@/store/palidromes.json";

const state = {
    palidrome: {
        value: '',
        isPalidrome: null
    },
    history: data

};

const getters = {
    history: state => state.history
};

const actions = {};

const mutations = {};

export default {
    state,
    getters,
    actions,
    mutations
}