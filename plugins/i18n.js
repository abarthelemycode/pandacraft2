import Vue from 'vue'
import VueI18n from 'vue-i18n'

Vue.use(VueI18n)

export default ({ app }) => {
  // Mettre l'instance `i18n` dans `app`
  // De cette manière nous pouvons l'utiliser comme middleware et `asyncData` / `fetch` pour les pages
  app.i18n = new VueI18n({
    /* `VueI18n` options... */
  })
}
