
import i18n from 'i18next'
import { initReactI18next } from "react-i18next"
import * as enResources from './locales/en/translation.json'
import * as esResources from './locales/es//translation.json'

i18n
.use(initReactI18next)
.init({
    lng: 'en',
    resources: {
        en:{translation: enResources},
        es: {
            translation: esResources
         },
    },
    fallbacklng :'en',
   
})


export default i18n;


