import { createStore } from "vuex";
import Counter from "./counter";

const store = createStore({});

// tslint:disable-next-line:no-unused-expression
new Counter({ store, name: "counter" });

export default store;
