import * as Vue from 'vue';

export default Vue.extend({
    data () : { [key: string]: any } {
        return {
            input: null,
            rows: [],
            filterChecked: 'undone'
        };
    },
    computed: {

        filterRows() : Array<todoList.Item> {
            return this.rows.filter((row: todoList.Item) => {
                return this.filterChecked === 'all' ||
                    (row.complete === (this.filterChecked === 'done'));
            });
        }

    },
    methods: {
        addItem (): void {
            if (! this.input) {
                return;
            }

            this.rows.push({
                text: this.input,
                complete: false,
            });
            this.input = '';
        },

        onComplate (idx: number): void {
            let item = <todoList.Item> this.filterRows[idx];
            this.rows.$set(idx, Object.assign({}, item, {complete: ! item.complete}));
        }
    },
    template: `
    <div>
        <div>
            <label> 麻煩事：</label>
            <input v-model="input" @keydown.enter.prevent="addItem"/>
            <button @click="addItem">Add</button>
        </div>
        <h4>
            <label> 待處理事件  </label>
        <h4>
        <p>
            <label>
                <input type="radio" v-model="filterChecked" value="undone"/>
                未完成
            </label>
            <label>
                <input type="radio" v-model="filterChecked" value="done" />
                已完成
            </label>
            <label>
                <input type="radio" v-model="filterChecked" value="all" />
                全部
            </label>
        </p>
        <ul class="list-panel">
            <li class="list-item" v-for="row in filterRows">
                <label> {{ row.text }} </label>
                <span class="material-icons" @click="onComplate($index)">{{ row.complete ? 'check_box_outline' : 'check_box_outline_blank'}}</span>
            </li>
        </ul>
    </div>`,
});