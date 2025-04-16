import React from "react";
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
import ProductDetails from "./ProductDetails";

const Tabs: React.FC = () => {
    return (
        <IonTabs>
            <IonRouterOutlet>
                <Route path="/app/dashboard" component={Dashboard} />

                <Route path="/app/search-loads" component={SearchLoads} />
                <Route path="/app/load-details" component={LoadDetails} />
                <Route path="/app/kyc-verification" component={KycVerification} />
                <Route path="/app/product-details" component={ProductDetails} />

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
                <IonTabButton tab="notifications" href="/app/notifications">
                    <IonIcon icon={notifications} />
                    <IonLabel>Alerts</IonLabel>
                </IonTabButton>
                <IonTabButton tab="profile" href="/app/profile">
                    <IonIcon icon={person} />
                    <IonLabel>Profile</IonLabel>
                </IonTabButton>
            </IonTabBar>
        </IonTabs>
    );
};

export default Tabs;