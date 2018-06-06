import Vue from 'vue';
import VueAxios from 'vue-axios';
import Http from 'axios';
Vue.use(VueAxios, Http);
class Ajax {
    constructor() {
        this.http = Http;
    }
    get(url, pars) {
        return new Promise((resolve, reject) => {
            this.http
                .get(url, { params: pars })
                .then(res => {
                    resolve(res.data);
                })
                .catch(res => {
                    reject(res.data);
                });
        });
    }
    post(url, pars) {
        return new Promise((resolve, reject) => {
            this.http
                .post(url, { params: pars })
                .then(res => {
                    resolve(res.data);
                })
                .catch(res => {
                    reject(res.data);
                });
        });
    }
}

const http = new Ajax();

export default http;
