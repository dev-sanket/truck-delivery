import React, { useEffect, useState } from 'react'
import { IonPage, IonContent, IonGrid, IonRow, IonCol, IonCard, IonCardContent, IonButton, IonSpinner, IonRefresher, IonRefresherContent, RefresherEventDetail, useIonToast } from '@ionic/react'
import Header from '../../components/Header'
import "../../assets/styles/main.css";
import arrow from "../../assets/images/arrow.png";
import miniPickup from "../../assets/images/miniTruckBlack.png";
import userAvatar from "../../assets/images/user.png";
import { useParams } from 'react-router-dom';
import { postApiCall } from '../../utils/api/api';
import acceptedIcon from "../../assets/images/accepted-icon.png";
import { format } from 'date-fns';
interface BidsListArr {
    BidsID: string;
    LoadsID: string;
    UsersID: string;
    BidAmount: string;
    BidQuantity: string;
    DriverName: string;
    DriverContactNumber: string;
    VehicleNumber: string;
    Status: "Pending" | "Accepted" | "Rejected";
    BidDate: string;
    UserDetails: {
        UsersID: string;
        UserType: string;
        RoleID: string;
        AgentsID: string;
        UsersPassword: string;
        EmailAddress: string;
        FullName: string;
        FirstName: string;
        LastName: string;
        MobileNumber: string;
        AadharDocument: string;
        PanDocument: string;
        RCDocument: string;
        OTPNumber: string;
        lastLogin: string;
        IsEmailVerifed: string;
        EmailVerifyToken: string;
        IPAddress: string;
        joinDate: string;
        DateAdded: string;
        DateEdited: string;
        isDeleted: string;
        Status: string;
    }

}
interface LoadDetailsResponse {
    LoadsID: string;
    UsersID: string;
    FullName: string;
    LoadFrom: string;
    LoadTo: string;
    VehicleType: string;
    ProductWeight: string;
    TotalDistance: string;
    RatePerTon: string;
    ProductType: string;
    PaymentTerms: string;
    MobileNumber: string;
    IsBiddingClosed: string;
    LoadStatus: string;
    IntentStatus: string;
    Status: string;
    LoadCreated: string;
    BidsListArr: BidsListArr[];
}
const ViewBids: React.FC = () => {
    const { loadId } = useParams<{ loadId: string }>();
    const [loadDetails, setLoadDetails] = useState<LoadDetailsResponse>();
    const [isBidAccepted, setIsBidAccepted] = useState<boolean>(false);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [present] = useIonToast();

    const presentToast = (position: "top" | "middle" | "bottom", message: string, color: 'success' | 'danger' | 'warning' = "success") => {
        present({
            message,
            color,
            position,
            duration: 2000
        });
    }
    const handleAcceptBid = async (bidId: string) => {
        console.log('Bid accepted', bidId);
        try {
            setIsLoading(true);
            const response = await postApiCall({
                "LoadsID": loadId,
                "BidsID": bidId,
                "UsersID": loadDetails?.UsersID
            }, 'approveBid');
            if (response.status) {
                presentToast("top", "Bid accepted successfully!", "success");

            } else {
                presentToast("top", response?.message || "Something went wrong! Please try again.", "warning");
            }
        } catch (error) {
            console.log(error, "ERROR");
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        getLoadDetails();
    }, []);

    const getLoadDetails = async () => {
        try {
            setIsLoading(true);
            const response = await postApiCall({
                "LoadsID": loadId
            }, 'getLoadDetails');
            if (response.status) {
                setLoadDetails(response.data);
                setIsBidAccepted(response.data.BidsListArr.some((bid: BidsListArr) => bid.Status === "Accepted"));
            }
        } catch (error) {
            console.log(error, "ERROR");
        } finally {
            setIsLoading(false);
        }
    }


    const handleRefresh = async (event: CustomEvent<RefresherEventDetail>) => {
        await getLoadDetails();
        event.detail.complete();
    }
    return (
        <IonPage>
            <Header showBackButton={true} />
            <IonContent className="ion-padding">
                <IonRefresher slot="fixed" pullFactor={0.5} pullMin={100} pullMax={200} onIonRefresh={handleRefresh}>
                    <IonRefresherContent></IonRefresherContent>
                </IonRefresher>
                {isLoading ? (
                    <div style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        height: '50vh',
                        width: '100%'
                    }}>
                        <IonSpinner />
                    </div>
                ) : loadDetails ? (
                    <>
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
                                                    <IonCol size="9">
                                                        <div className="route-info">
                                                            <div className="route-point-bid">
                                                                <div className="info-label">From</div>
                                                                <div className="location-text">
                                                                    {loadDetails?.LoadFrom}
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
                                                                    {loadDetails?.LoadTo}
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </IonCol>
                                                    <IonCol size="3">
                                                        <div className="status-badge">
                                                            {
                                                                isBidAccepted && <img src={acceptedIcon} alt="accepted" style={{ width: 80, height: 70 }} />
                                                            }
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
                                                                <div className="material-type-bid">{format(new Date(loadDetails?.LoadCreated || ""), "dd MMM yyyy HH:mm a")}</div>
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

                                                                    <div className="carrier-name">{loadDetails?.VehicleType}</div>
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
                                                                <div className="material-type-bid">{loadDetails?.ProductType}</div>
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
                                                                <div className="material-type-bid">{loadDetails?.ProductWeight} TON</div>
                                                            </div>
                                                        </div>
                                                    </IonCol>
                                                </IonRow>
                                                <IonRow className="ion-padding-top">
                                                    <IonCol size="12">
                                                        <div className="material-info">
                                                            <div className="info-container">
                                                                <div className="info-label">Post Date</div>
                                                                <div className="info-label">Rate</div>
                                                            </div>
                                                            <div className="product-container-load">
                                                                <div className="material-type-bid">{format(new Date(loadDetails?.LoadCreated || ""), "dd MMM yyyy HH:mm a")}</div>
                                                                <div className="material-type-bid">₹{loadDetails?.RatePerTon}</div>
                                                            </div>
                                                        </div>
                                                    </IonCol>
                                                </IonRow>
                                            </IonGrid>
                                        </IonCardContent>
                                    </IonCard>
                                </IonCol>
                            </IonRow>
                            {loadDetails?.BidsListArr && loadDetails.BidsListArr.length > 0 ? (
                                <IonRow className="ion-padding-top">
                                    {
                                        loadDetails.BidsListArr.map((item, index) => (

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
                                                                            <div className="user-name">{item.UserDetails.FullName}</div>
                                                                            <div className="user-phone">+{item.UserDetails.MobileNumber}</div>
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
                                                                            <div className="user-info-item-value">₹{item.BidAmount}</div>
                                                                        </div>
                                                                        <div className="user-info-item">
                                                                            <div className="user-info-item-label">Bid Quantity</div>
                                                                            <div className="user-info-item-value">{item.BidQuantity} TON</div>
                                                                        </div>
                                                                        <div className="user-info-item">
                                                                            <div className="user-info-item-label">Bid Date</div>
                                                                            <div className="user-info-item-value">{item.BidDate}</div>
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
                                                                        {
                                                                            !isBidAccepted && (
                                                                                <IonButton
                                                                                    className="accept-button"
                                                                                    onClick={() => handleAcceptBid(item.BidsID)}
                                                                                >
                                                                                    Accept
                                                                                </IonButton>
                                                                            )
                                                                        }

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
                            ) : (
                                <IonRow className="ion-padding-top">
                                    <IonCol size="12">
                                        <div style={{
                                            display: 'flex',
                                            flexDirection: 'column',
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                            padding: '40px 20px',
                                            textAlign: 'center'
                                        }}>
                                            <div style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '10px', color: '#666' }}>
                                                No Bids Found
                                            </div>
                                            <div style={{ fontSize: '16px', color: '#999', marginBottom: '20px' }}>
                                                No one has placed a bid on this load yet.
                                            </div>
                                        </div>
                                    </IonCol>
                                </IonRow>
                            )}
                        </IonGrid>
                    </>
                ) : (
                    <div style={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                        height: '50vh',
                        width: '100%',
                        textAlign: 'center'
                    }}>
                        <div style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '10px', color: '#666' }}>
                            Load Not Found
                        </div>
                        <div style={{ fontSize: '16px', color: '#999', marginBottom: '20px' }}>
                            The requested load could not be found.
                        </div>
                    </div>
                )}
            </IonContent>
        </IonPage>
    )
}

export default ViewBids