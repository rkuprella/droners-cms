// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from '~/layouts/Default.vue'
import '~/assets/bulma.min.css'
import '~/assets/style.css'
import moment from 'moment'


export default function (Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.prototype.$moment = moment

  Vue.component('Layout', DefaultLayout)
}
