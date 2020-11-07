import Vue from 'vue'
import VueI18n from 'vue-i18n'
import LangFile from '../modules/irrigation/lang'
import LangFile2 from '../modules/common_config/lang'

Vue.use(VueI18n)

const langen = Object.assign(LangFile.en, LangFile2.en)
const langbn = Object.assign(LangFile.bn, LangFile2.bn)

const messages = { en: langen, bn: langbn }

const i18n = new VueI18n({
  locale: 'en',
  fallbackLocale: 'bn',
  messages // set locale messages
})

export default i18n
