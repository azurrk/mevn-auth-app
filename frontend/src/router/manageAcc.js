import ManageSec from '../views/ManageAccount/ManageSec.vue'
import ManageDevices from '../views/ManageAccount/ManageDevices.vue'
import ManageWebauthn from '../views/ManageAccount/ManageWebauthn.vue'
import ManageDetails from '../views/ManageAccount/ManageDetails.vue'
import AddPhoneNumber from '../views/ManageAccount/AddPhoneNumber.vue'

const routes = [
    {
        path: '/manage/accountsecurity',
        name: 'manage-sec',
        component: ManageSec,
        meta: {
            transition: 'push'
        }
    },
    {
        path: '/manage/accountsecurity/devices',
        name: 'manage-devices',
        component: ManageDevices,
        meta: {
            transition: 'slide'
        }
    },
    {
        path: '/manage/accountsecurity/webauthn',
        name: 'manage-webauthn',
        component: ManageWebauthn,
        meta: {
            transition: 'push'
        }
    },
    {
        path: '/manage/accountdetails',
        name: 'manage-accdetails',
        component: ManageDetails,
        meta: {
            transition: 'push'
        }
    },
    {
        path: '/manage/accountdetails/phonenumbers/add',
        name: 'manage-addphone',
        component: AddPhoneNumber,
    },
]

export default routes