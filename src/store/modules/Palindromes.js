import data from "@/store/palidromes.json";

const state = {
    palindrome: {
        value: '',
        isPalidrome: null
    },
    history: data

};

const getters = {
    history: state => state.history
};

const actions = {
    checkPalindrome: ({commit}, text) => {
        const reverseText = text.split('').reverse().join('');
        const item = {
            value: text,
            isPalindrome: text === reverseText
        }
        commit('SAVE_ITEM', item);
        return new Promise((resolve, reject) => {
                item.isPalindrome && resolve(`${text} is palidrome.`);
                reject(`${text} is not palidrome.`);
        });

    }
};

const mutations = {
    SAVE_ITEM(state, palindrome){
        state.history.unshift(palindrome)
    }
};

export default {
    state,
    getters,
    actions,
    mutations
}