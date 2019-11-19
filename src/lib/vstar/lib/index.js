import vstar from './star';
import Vue from 'vue';

const myStarPlugin = {
    install() {
        Vue.component('vstar',vstar)
    }
}

export default myStarPlugin