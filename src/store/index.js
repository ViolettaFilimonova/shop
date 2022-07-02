import { createStore } from 'vuex'
import axios from "axios";

const store = createStore({
    state () {
        return{
            products:[],
            cart:[]
        }
    },
    mutations: {
        addInState(state,dataProducts){
            state.products = dataProducts
        }
    },
    getters:{
        productsPrint(state){
            return state.products
        },
        cartPrint(state){
            return state.cart
        }
    },
    actions:{
        getProducts({commit}){
            return axios.get('http://localhost:3000/product')
                .then(dataProducts => {
                    commit('addInState', dataProducts.data)
                    return dataProducts
                })
        }
    }
})

export default store