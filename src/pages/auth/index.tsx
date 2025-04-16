import { IonRouterOutlet } from '@ionic/react'
import { IonPage } from '@ionic/react'
import React from 'react'
import { Redirect, Route } from 'react-router-dom'
import Login from './Login'
import LoginOtp from './LoginOtp'

const AuthIndex: React.FC = () => {
    return (
        <IonPage>
            <IonRouterOutlet>
                <Route path="/auth/login" component={Login} />
                <Route path="/auth/login-otp" component={LoginOtp} />
                <Route exact path="/auth" render={() => <Redirect to="/auth/login" />} />

            </IonRouterOutlet>
        </IonPage>
    )
}

export default AuthIndex