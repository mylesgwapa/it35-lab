import { 
  IonAvatar,
  IonButton,
  IonButtons,
  IonContent, 
  IonHeader, 
  IonIcon, 
  IonInput, 
  IonInputPasswordToggle, 
  IonItem, 
  IonLabel, 
  IonMenuButton, 
  IonPage, 
  IonTitle, 
  IonToolbar,
  useIonRouter
} from '@ionic/react';
import { logoIonic } from 'ionicons/icons';

const Login: React.FC = () => {
  const navigation = useIonRouter();

  const doLogin = () => {
    navigation.push('/it35-lab/app','forward','replace');
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot='start'>
            <IonMenuButton></IonMenuButton>
          </IonButtons>
          <IonTitle>Login</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100%',
            padding: '20px'
          }}
        >
        
          <IonItem style={{ marginBottom: '20px', padding: '0' }}>
            <IonAvatar 
              aria-hidden="true" 
              style={{ 
                width: '120px', 
                height: '120px', 
                borderRadius: '50%',  
                overflow: 'hidden',   
                border: 'none'        
              }}
            >
              <img
                alt="User Avatar"
                src="https://scontent.fmnl25-5.fna.fbcdn.net/v/t39.30808-6/475234841_614656854583956_3344141762035701787_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=a5f93a&_nc_ohc=PwM1jRXwDQwQ7kNvgE_PjJi&_nc_oc=AdjM4DkhER_G4sJySu1BnAzfdZ28klTrw2YnCUgHr8lGSQSmWA4F4H5XaVUNJGH19hY&_nc_zt=23&_nc_ht=scontent.fmnl25-5.fna&_nc_gid=AVH0z9yEX1asga0U1o0Sh0q&oh=00_AYEQY0KFaQYl3frCMrBjalBIHgOYJk8_KcFoxhdxEP9C6w&oe=67D07E59"
                style={{ width: '100%', height: '100%' }} 
              />
            </IonAvatar>
          </IonItem>

        
          <IonItem style={{ width: '100%', maxWidth: '400px', marginBottom: '20px' }}>
            <IonInput label="Username" placeholder="Enter username" style={{ width: '100%' }} />
          </IonItem>

       
          <IonItem style={{ width: '100%', maxWidth: '400px', marginBottom: '20px' }}>
            <IonInput
              type="password"
              label="Password"
              value="NeverGonnaGiveYouUp"
              style={{ width: '100%' }}
            >
              <IonInputPasswordToggle slot="end"></IonInputPasswordToggle>
            </IonInput>
          </IonItem>

       
          <IonButton onClick={() => doLogin()} expand="full" style={{ maxWidth: '400px' }}>
            Login
          </IonButton>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Login;
