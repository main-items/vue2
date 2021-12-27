import Vue from 'vue'
import Vuex from 'vuex'

import { state, getters } from './variable'
import { mutations, actions } from './method'

Vue.use(Vuex)

const modulesFiles = require.context("./modules", true, /\.ts$/);
const modules: any = {};
modulesFiles.keys().forEach((key) => {
  const module = modulesFiles(key).default;
  const moduleKey = `${key.replace(/(\.\/|\.ts)/g, '')}`

  modules[module.name || moduleKey] = module;
  modules[module.name || moduleKey]['namespaced'] = true;
});

const store = new Vuex.Store({
  state, getters,
  mutations, actions,
  modules,
});

export default store
