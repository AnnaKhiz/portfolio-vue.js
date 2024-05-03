import i18next from 'i18next'
import I18NextVue from "i18next-vue";
import { en }from '@/translate/en';
import { uk } from '@/translate/uk';
import { ru } from '@/translate/ru';


i18next
  .init({
    debug: true,
    fallbackLng: 'en',
    lng: 'en',
    resources: {
      uk: {
        translation: { uk }
      },
      en: {
        translation: { en }
        },
      ru: {
        translation: { ru }
        },
      
    }
  });

export default function (app) {
  app.use(I18NextVue, { i18next })
  return app
}


