import React, { useEffect, useState } from "react";
import {
    IonContent,
    IonHeader,
    IonIcon,
    IonLabel,
    IonPage,
    IonRouterOutlet,
    IonTab,
    IonTabBar,
    IonTabButton,
    IonTabs,
    IonTitle,
    IonToolbar,
} from "@ionic/react";
import { Redirect, Route } from "react-router";

import { home, notifications, person, search } from "ionicons/icons";
import Dashboard from "./Dashboard";
import SearchLoads from "./SearchLoads";
import LoadDetails from "./LoadDetails";
import KycVerification from "./KycVerification";
import CreateNewLoad from "./CreateNewLoad";
import NewDashboard from "./NewDashboard";
import NewLoadDetails from "./NewLoadDetails";
import PlaceBid from "./Bids";
import LoadPage from "./Load";
import { useIonToast } from '@ionic/react';
import { useAuth } from "../../store/AuthContext";
import { useIonRouter } from "@ionic/react";
import Trips from "./Trips";
import TripDetails from "./TripDetails";
import { useHistory } from "react-router";
import Profile from "./Profile";
const Tabs: React.FC = () => {
    const history = useHistory<History>();
    const [present] = useIonToast();
    const router = useIonRouter();
    const presentToast = (position: 'top' | 'middle' | 'bottom') => {
        present({
            message: 'Coming Soon!',
            duration: 1500,
            position: position,
        });
    };

    const { user } = useAuth();
    // if (!user) {
    //     router.push('/auth/login');
    // }
    useEffect(() => {
    if (!user) {
        // router.push('/auth/login');
    }
}, [user, router]);
    return (
        <IonTabs>
            <IonRouterOutlet >
                <Route path="/app/dashboard" component={NewDashboard} />

                <Route path="/app/search-loads" component={SearchLoads} />
                <Route path="/app/load-details" component={NewLoadDetails} />
                <Route path="/app/load" component={LoadPage} />
                <Route path="/app/kyc-verification" component={KycVerification} />
                <Route path="/app/load-create" component={CreateNewLoad} />
                <Route path="/app/trips" component={Trips} />
                <Route path="/app/tripDetails" component={TripDetails} />
                <Route path="/app/place-bid/:loadId" component={PlaceBid} />
                <Route path="/app/profile" component={Profile} />    
                <Route exact path="/app">
                    <Redirect to="/app/dashboard" />
                </Route>
            </IonRouterOutlet>

            <IonTabBar slot="bottom">
                <IonTabButton tab="home" href="/app/dashboard">
                    <IonIcon icon={home} />
                    <IonLabel>Home</IonLabel>
                </IonTabButton>
                <IonTabButton tab="search" href="/app/search-loads">
                    <IonIcon icon={search} />
                    <IonLabel>Search</IonLabel>
                </IonTabButton>
                <IonTabButton tab="notifications" onClick={() => presentToast('middle')}>
                    <IonIcon icon={notifications} />
                    <IonLabel>Alerts</IonLabel>
                </IonTabButton>
                <IonTabButton tab="profile" onClick={() => history.push("/app/profile")}>
                    <IonIcon icon={person} />
                    <IonLabel>Profile</IonLabel>
                </IonTabButton>
            </IonTabBar>
        </IonTabs>
    );
};

export default Tabs;