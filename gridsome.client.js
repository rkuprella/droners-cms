import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCheck, faClock, faEnvelope, faMobile, faMapMarkerAlt, faPhone, faShoppingCart, faCircle, faBars, faStar } from '@fortawesome/free-solid-svg-icons'
import { faFacebookF, faTwitter, faYoutube, faInstagram } from '@fortawesome/free-brands-svg-icons'

library.add(faCheck, faClock, faEnvelope, faMobile, faMapMarkerAlt, faPhone, faFacebookF, faTwitter, faYoutube, faInstagram, faShoppingCart, faCircle, faBars, faStar)

export default function (Vue) {
  Vue.component('font-awesome', FontAwesomeIcon)
}

/*
<font-awesome :icon="['fa', 'check']" size="3x"/>
<font-awesome :icon="['fa', 'clock']" size="3x"/>
<font-awesome :icon="['fa', 'envelope']" size="3x"/>
<font-awesome :icon="['fa', 'mobile']" size="3x"/>
<font-awesome :icon="['fa', 'map-marker-alt']" size="3x"/>
<font-awesome :icon="['fa', 'phone']" size="3x"/>
<font-awesome :icon="['fa', 'building']" size="3x"/>
<font-awesome :icon="['fab', 'facebook-f']" size="3x"/>
<font-awesome :icon="['fab', 'twitter']" size="3x"/>
<font-awesome :icon="['fab', 'youtube']" size="3x"/>
<font-awesome :icon="['fab', 'instagram']" size="3x"/>
*/