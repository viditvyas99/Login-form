
import i18n from 'i18next'
import { initReactI18next } from "react-i18next"


i18n
.use(initReactI18next)
.init({
    lng: 'en',
    resources: {
        en: {
           translation: {

            "signinButton":"Sign In",
        "signin":{
            "title":"Sign in",
            "username":"Username",
            "password":"Password",
            "signinButton":"Sign In"
        },
        "user":{
            "field":"Field",
            "value":"Value",
            "logoutButton":"Logout"
        },
        "loading":"Signing  IN...",
        "error":"error"
    }
    
        },
        es: {
            translation: {
                "signin":{
                    "title":" Iniciar Sesion",
                    "username":"Nombre de usuario",
                    "password":"Contrasena",
                    "signinButton":" Iniciar Sesion"
                },
                "user":{
                    "field":"campo",
                    "value":"valor",
                    "logoutButton":"cerrar sesion"
                },
                "loading":" Iniciando Sesion  ...",
                "error":"error"
            }
         },
    },
    fallbacklng :'en',
   
})


export default i18n;


