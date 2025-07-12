import React from 'react'
import { IonPage, IonContent, IonGrid, IonRow, IonCol, IonCard, IonCardContent, IonButton } from '@ionic/react'
import Header from '../../components/Header'
import "../../assets/styles/main.css";
import arrow from "../../assets/images/arrow.png";
import miniPickup from "../../assets/images/miniTruckBlack.png";
import userAvatar from "../../assets/images/user.png";

const ViewBids: React.FC = () => {
    const handleAcceptBid = () => {
        console.log('Bid accepted');
        // Add your accept bid logic here
    };

    const handleRejectBid = () => {
        console.log('Bid rejected');
        // Add your reject bid logic here
    };

    return (
        <IonPage>
            <Header showBackButton={true} />
            <IonContent className="ion-padding">
                <IonGrid className="ion-no-padding">
                    <IonRow>
                        <IonCol size="12">
                            <div className="title">ViewBids</div>
                        </IonCol>
                    </IonRow>
                    <IonRow className="ion-no-margin">
                        <IonCol size="12">
                            <IonCard className="carrier-card ion-no-margin">
                                <IonCardContent className="ion-no-padding">
                                    <IonGrid className="ion-no-padding">
                                        <IonRow>
                                            <IonCol size="12">
                                                <div className="route-info">
                                                    <div className="route-point-bid">
                                                        <div className="info-label">From</div>
                                                        <div className="location-text">
                                                            KOLKATA
                                                        </div>
                                                    </div>
                                                    <div className="arrow">
                                                        <img
                                                            src={arrow}
                                                            alt="arrow"
                                                            style={{ width: 16, height: 16 }}
                                                        />
                                                    </div>
                                                    <div className="route-point-bid">
                                                        <div className="info-label">To</div>
                                                        <div className="location-text">
                                                            DELHI
                                                        </div>
                                                    </div>
                                                </div>
                                            </IonCol>
                                        </IonRow>
                                        <IonRow className="ion-padding-top">
                                            <IonCol size="12">
                                                <div className="material-info">
                                                    <div className="info-container">
                                                        <div className="info-label">Delivery By</div>
                                                    </div>
                                                    <div className="product-container-load">
                                                        <div className="material-type-bid">2025-07-12</div>
                                                    </div>
                                                </div>
                                            </IonCol>
                                        </IonRow>
                                        <IonRow className="ion-padding-top">
                                            <IonCol size="12">
                                                <div className="truck-info">
                                                    <div className="info-label">Truck Types</div>
                                                    <div>
                                                        <div
                                                            className="truck-container"
                                                            style={{ justifyContent: "unset" }}
                                                        >
                                                            <img
                                                                src={miniPickup}
                                                                alt="phone"
                                                                style={{ width: 31, height: 31 }}
                                                            />

                                                            <div className="carrier-name">Open Half/Full Body</div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </IonCol>
                                        </IonRow>
                                        <IonRow className="ion-padding-top">
                                            <IonCol size="12">
                                                <div className="material-info">
                                                    <div className="info-container">
                                                        <div className="info-label">Products</div>
                                                    </div>
                                                    <div className="product-container-load">
                                                        <div className="material-type-bid">Aesbestos sheet</div>
                                                    </div>
                                                </div>
                                            </IonCol>
                                        </IonRow>
                                        <IonRow className="ion-padding-top">
                                            <IonCol size="12">
                                                <div className="material-info">
                                                    <div className="info-container">
                                                        <div className="info-label">Payment Terms</div>
                                                        <div className="info-label">Total Ton</div>
                                                    </div>
                                                    <div className="product-container-load">
                                                        <div className="material-type-bid">Advance</div>
                                                        <div className="material-type-bid">10 TON</div>
                                                    </div>
                                                </div>
                                            </IonCol>
                                        </IonRow>
                                        <IonRow className="ion-padding-top">
                                            <IonCol size="12">
                                                <div className="material-info">
                                                    <div className="info-container">
                                                        <div className="info-label">Past Date</div>
                                                        <div className="info-label">Rate</div>
                                                    </div>
                                                    <div className="product-container-load">
                                                        <div className="material-type-bid">April 22 10:30PM</div>
                                                        <div className="material-type-bid">₹5,000</div>
                                                    </div>
                                                </div>
                                            </IonCol>
                                        </IonRow>
                                    </IonGrid>
                                </IonCardContent>
                            </IonCard>
                        </IonCol>
                    </IonRow>
                    <IonRow className="ion-padding-top">
                        {
                            [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((item, index) => (

                                <IonCol size="12" key={index}>
                                    <IonCard className="carrier-card ion-no-margin">
                                        <IonCardContent className="ion-no-padding">
                                            <IonGrid className="ion-no-padding">
                                                <IonRow>
                                                    <IonCol size="12">
                                                        {/* User Info with avatar */}
                                                        <div className="user-info-section">
                                                            <div className="user-avatar">
                                                                <img
                                                                    src={userAvatar}
                                                                    alt="User Avatar"
                                                                    style={{ width: 50, height: 50, borderRadius: '50%' }}
                                                                />
                                                            </div>
                                                            <div className="user-details">
                                                                <div className="user-name">John Doe</div>
                                                                <div className="user-phone">+91 98765 43210</div>
                                                            </div>
                                                        </div>
                                                    </IonCol>
                                                </IonRow>
                                                <IonRow className="ion-padding-top">
                                                    <IonCol size="12">
                                                        {/* Bid Info */}
                                                        <div className="user-info">
                                                            <div className="user-info-item">
                                                                <div className="user-info-item-label">Bid Amount</div>
                                                                <div className="user-info-item-value">₹5,000</div>
                                                            </div>
                                                            <div className="user-info-item">
                                                                <div className="user-info-item-label">Bid Quantity</div>
                                                                <div className="user-info-item-value">10 TON</div>
                                                            </div>
                                                            <div className="user-info-item">
                                                                <div className="user-info-item-label">Bid Date</div>
                                                                <div className="user-info-item-value">April 22 10:30PM</div>
                                                            </div>
                                                        </div>
                                                    </IonCol>
                                                </IonRow>
                                                <IonRow className="ion-padding-top">
                                                    <IonCol size="12">
                                                        {/* Action Buttons */}
                                                        <div className="bid-action-buttons">
                                                            {/* <IonButton
                                                        className="reject-button"
                                                        fill="outline"
                                                        onClick={handleRejectBid}
                                                    >
                                                        Reject
                                                    </IonButton> */}
                                                            <IonButton
                                                                className="accept-button"
                                                                onClick={handleAcceptBid}
                                                            >
                                                                Accept
                                                            </IonButton>
                                                        </div>
                                                    </IonCol>
                                                </IonRow>
                                            </IonGrid>
                                        </IonCardContent>
                                    </IonCard>
                                </IonCol>
                            ))
                        }
                    </IonRow>
                </IonGrid>
            </IonContent>
        </IonPage>
    )
}

export default ViewBids