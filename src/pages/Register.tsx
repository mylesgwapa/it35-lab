import { IonAvatar, IonButton, IonContent, IonHeader, IonIcon, IonInput, IonItem, IonLabel, IonPage, IonTitle, IonToolbar, IonAlert, useIonRouter } from '@ionic/react';
import { useState } from 'react';
import { eyeOff, eye, person, mail, lockClosed } from 'ionicons/icons';

const Register: React.FC = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showAlert, setShowAlert] = useState({ show: false, message: '' });
  const navigation = useIonRouter();

  const handleRegister = () => {
    if (!username || !email || !password || !confirmPassword) {
      setShowAlert({ show: true, message: 'Please fill in all fields!' });
      return;
    }
    if (password !== confirmPassword) {
      setShowAlert({ show: true, message: 'Passwords do not match!' });
      return;
    }
    localStorage.setItem(username, JSON.stringify({ username, email, password }));
    setShowAlert({ show: true, message: 'Registration Successful!' });
    setTimeout(() => {
      navigation.push('/login', 'forward', 'replace');  // Redirect to login after registration
    }, 1000);
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Register</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100%', padding: '5vh 0', backgroundColor: '#f0f0f0' }}>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', backgroundColor: 'white', padding: '30px', borderRadius: '20px', boxShadow: '0 0 10px rgba(0,0,0,0.1)', width: '100%', maxWidth: '500px' }}>
            <IonAvatar style={{ marginBottom: '20px' }}>
              <img alt="User Avatar" src="https://tse2.mm.bing.net/th?id=OIP.VQ-jXFhDVUT3LNGGqh5qgwHaHa&pid=Api&P=0&h=220" style={{ width: '120px', height: '60px', borderRadius: '60%' }} />
            </IonAvatar>
            <h1 style={{ marginBottom: '20px', color: '#ff6219' }}>StoreSync</h1>
            <h5 style={{ marginBottom: '20px', color: '#393f81' }}>Create your account</h5>

            <IonItem style={{ width: '100%', marginBottom: '20px' }}>
              <IonIcon icon={person} slot="start" />
              <IonLabel position="stacked">Username</IonLabel>
              <IonInput value={username} onIonChange={e => setUsername(e.detail.value!)} placeholder="Enter your username" />
            </IonItem>

            <IonItem style={{ width: '100%', marginBottom: '20px' }}>
              <IonIcon icon={mail} slot="start" />
              <IonLabel position="stacked">Email</IonLabel>
              <IonInput value={email} onIonChange={e => setEmail(e.detail.value!)} placeholder="Enter your email" />
            </IonItem>

            <IonItem style={{ width: '100%', marginBottom: '20px' }}>
              <IonIcon icon={lockClosed} slot="start" />
              <IonLabel position="stacked">Password</IonLabel>
              <IonInput type={showPassword ? 'text' : 'password'} value={password} onIonChange={e => setPassword(e.detail.value!)} placeholder="Enter your password" />
              <IonIcon icon={showPassword ? eyeOff : eye} slot="end" onClick={() => setShowPassword(!showPassword)} />
            </IonItem>

            <IonItem style={{ width: '100%', marginBottom: '20px' }}>
              <IonIcon icon={lockClosed} slot="start" />
              <IonLabel position="stacked">Confirm Password</IonLabel>
              <IonInput type={showPassword ? 'text' : 'password'} value={confirmPassword} onIonChange={e => setConfirmPassword(e.detail.value!)} placeholder="Confirm your password" />
              <IonIcon icon={showPassword ? eyeOff : eye} slot="end" onClick={() => setShowPassword(!showPassword)} />
            </IonItem>

            <IonButton onClick={handleRegister} expand="full" style={{ marginBottom: '10px' }}>
              Register
            </IonButton>

            <p style={{ marginTop: '20px', color: '#393f81' }}>
              Already have an account? <a href="/login" style={{ color: '#393f81' }}>Login here</a>
            </p>

            <IonAlert
              isOpen={showAlert.show}
              onDidDismiss={() => setShowAlert({ show: false, message: '' })}
              header="Registration Status"
              message={showAlert.message}
              buttons={['OK']}
            />
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Register;
