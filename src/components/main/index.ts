import * as Vue from 'vue';
export default Vue.extend({
    data () {
        return {
            message: 'Hello World',
        };
    },
    template: `
        <div> {{ message }} </div>
    `
});