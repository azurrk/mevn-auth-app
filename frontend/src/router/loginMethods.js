import PasswordLogin from '../views/Login/PasswordLogin'
import WebauthnLogin from '../views/Login/WebauthnLogin'

const routes = [
    {
        path: '/login/withPassword',
        name: 'pw-login',
        component: PasswordLogin,
    },
    {
        path: '/login/withWebauthn',
        name: 'webauthn-login',
        component: WebauthnLogin,
    },
]

export default routes