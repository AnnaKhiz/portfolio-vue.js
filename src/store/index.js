import { createStore } from "vuex";
import { translateModule } from "./translateModule"

export default createStore({

  modules: {
    translate: translateModule
  }
})