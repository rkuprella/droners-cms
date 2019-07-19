// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from '~/layouts/Default.vue'
import '~/assets/style.css'
import moment from 'moment'
import * as VueGoogleMaps from 'vue2-google-maps'

export default function (Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.prototype.$moment = moment
  Vue.use(VueGoogleMaps, {
    load: {
      key: 'AIzaSyAP_X-DUtIyhgYAu-Aes4SeztgeQCdPdG4',
      libraries: 'places',
      region: 'de',
      language: 'de',
    }
  })

  head.htmlAttrs = { lang: "de" }

  head.link.push({
    rel: 'stylesheet',
    href: 'https://cdn.snipcart.com/themes/2.0/base/snipcart.min.css'
  });

  head.script.push({
    type: 'text/javascript',
    src: 'https://ajax.googleapis.com/ajax/libs/jquery/2.2.2/jquery.min.js',
    body: true,
  });

  head.script.push({
    type: 'text/javascript',
    src: 'https://cdn.snipcart.com/scripts/2.0/snipcart.js',
    body: true,
    id: 'snipcart',
    'data-api-key': 'NTMwZGU3NzAtOWY4MC00NmM2LTg5MmEtMjM3ZTMwMTFkYTk1NjM2OTUwMjU3Mzk0NTU2MTgz',
  });

  Vue.component('Layout', DefaultLayout)
}
