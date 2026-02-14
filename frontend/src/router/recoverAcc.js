import ResetOptionsView from '../views/Reset/ResetOptionsView'
import ResetPwOptionsView from '../views/Reset/ResetPwOptionsView'
import ResetPw from '../views/Reset/ResetPw'

const routes = [
    {
        path: '/recoveraccount',
        name: 'reset-options',
        component: ResetOptionsView
      },
      {
        path: '/passwordrecover/resetoptions',
        name: 'pw-reset-options',
        component: ResetPwOptionsView
      },
      {
        path: '/recoveraccount/update/password',
        name: 'pw-reset',
        component: ResetPw
      },
]

export default routes