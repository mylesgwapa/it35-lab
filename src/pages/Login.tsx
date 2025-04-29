import {
  IonAlert,
  IonAvatar,
  IonButton,
  IonContent,
  IonInput,
  IonInputPasswordToggle,
  IonPage,
  IonToast,
  useIonRouter
} from '@ionic/react';
import { useState } from 'react';
import { supabase } from '../utils/supabaseClient';
import logsGif from './images/logs.gif'; // Avatar gif

const AlertBox: React.FC<{ message: string; isOpen: boolean; onClose: () => void }> = ({ message, isOpen, onClose }) => {
  return (
    <IonAlert
      isOpen={isOpen}
      onDidDismiss={onClose}
      header="Notification"
      message={message}
      buttons={['OK']}
    />
  );
};

const Login: React.FC = () => {
  const navigation = useIonRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [alertMessage, setAlertMessage] = useState('');
  const [showAlert, setShowAlert] = useState(false);
  const [showToast, setShowToast] = useState(false);

  const doLogin = async () => {
    const { error } = await supabase.auth.signInWithPassword({ email, password });

    if (error) {
      setAlertMessage(error.message);
      setShowAlert(true);
      return;
    }

    setShowToast(true);
    setTimeout(() => {
      navigation.push('/it35-lab/app', 'forward', 'replace');
    }, 300);
  };

  return (
    <IonPage>
      <IonContent
        className="ion-padding"
        style={{
          backgroundImage: `url("https://pa1.narvii.com/6808/6f5fedd7dffaed239b1262b33b576c8af764d409_hq.gif")`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          minHeight: '100vh'
        }}
      >
        <style>
          {`
            @keyframes glow {
              0% {
                box-shadow: 0 0 5px #00bcd4, 0 0 10px #00bcd4;
              }
              50% {
                box-shadow: 0 0 20px #00bcd4, 0 0 30px #00bcd4;
              }
              100% {
                box-shadow: 0 0 5px #00bcd4, 0 0 10px #00bcd4;
              }
            }
          `}
        </style>

        <div
          style={{
            maxWidth: '400px',
            margin: '10% auto',
            backgroundColor: 'rgba(255, 255, 255, 0.9)',
            padding: '20px',
            borderRadius: '15px',
            boxShadow: '0 4px 20px rgba(0,0,0,0.2)',
            textAlign: 'center'
          }}
        >
          <IonAvatar
            style={{
              margin: '0 auto',
              width: '150px',
              height: '150px',
              borderRadius: '50%',
              overflow: 'hidden',
              backgroundColor: '#fff',
              animation: 'glow 2s ease-in-out infinite',
              border: '4px solid #00bcd4'
            }}
          >
            <img
              src={logsGif}
              alt="Robot Logo"
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </IonAvatar>

          <h1 style={{ marginTop: '15px', color: '#333' }}>USER LOGIN</h1>

          <IonInput
            label="Email"
            labelPlacement="floating"
            fill="outline"
            type="email"
            placeholder="Enter Email"
            value={email}
            onIonChange={e => setEmail(e.detail.value!)}
          />
          <IonInput
            style={{ marginTop: '10px' }}
            fill="outline"
            type="password"
            placeholder="Password"
            value={password}
            onIonChange={e => setPassword(e.detail.value!)}
          >
            <IonInputPasswordToggle slot="end"></IonInputPasswordToggle>
          </IonInput>

          <IonButton onClick={doLogin} expand="block" shape="round" style={{ marginTop: '20px' }}>
            Login
          </IonButton>

          <IonButton
            routerLink="/it35-lab/register"
            expand="block"
            fill="clear"
            shape="round"
            style={{ marginTop: '10px' }}
          >
            Don't have an account? Register here
          </IonButton>
        </div>

        <AlertBox message={alertMessage} isOpen={showAlert} onClose={() => setShowAlert(false)} />

        <IonToast
          isOpen={showToast}
          onDidDismiss={() => setShowToast(false)}
          message="Login successful! Redirecting..."
          duration={1500}
          position="top"
          color="primary"
        />
      </IonContent>
    </IonPage>
  );
};

export default Login;
