

import * as Vue from 'vue';
import * as VueRouter from 'vue-router';
import MainPage from './components/main/index';
import TodoPage from './components/todolist/index';
// import appHtml from require('./app.html!text');
// import html  from 'text-load/app';
import * as appHtml from 'text-load/app.html';

Vue.use(VueRouter);

let router = new VueRouter();

let App: vuejs.VueStatic = Vue.extend({
    template: appHtml,
});
router.map({
    '/': {
        component: MainPage,
    },
    '/todolist': {
        component: TodoPage,
    }
})



router.start(App, document.querySelector('#app'));