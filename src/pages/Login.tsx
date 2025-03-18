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
  IonAlert,
  useIonRouter
} from '@ionic/react';
import { useState } from 'react';
import { eyeOff, eye, person, mail, lockClosed } from 'ionicons/icons';

const Auth: React.FC = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);  const [showAlert, setShowAlert] = useState({ show: false, message: '' });
  const navigation = useIonRouter();

  const handleAuth = () => {
    if (isLogin) {
      const storedUser = localStorage.getItem(username);
      if (storedUser && JSON.parse(storedUser).password === password) {
        setShowAlert({ show: true, message: 'Login Successful!' });
        setTimeout(() => {
          navigation.push('/it35-lab/app', 'forward', 'replace');
        }, 1000);
      } else {
        setShowAlert({ show: true, message: 'Invalid credentials!' });
      }
    } else {
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
      setIsLogin(true);
    }
  };

  const toggleAuthMode = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsLogin(!isLogin);
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot='start'>
            <IonMenuButton></IonMenuButton>
          </IonButtons>
           <IonTitle>{isLogin ? 'Login' : 'Sign Up'}</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100%', padding: '5vh 0', backgroundColor: '#f0f0f0' }}>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', backgroundColor: 'white', padding: '30px', borderRadius: '20px', boxShadow: '0 0 10px rgba(0,0,0,0.1)', width: '100%', maxWidth: '500px' }}>
            <IonAvatar style={{ marginBottom: '20px' }}>
              <img alt="User Avatar" src="https://tse2.mm.bing.net/th?id=OIP.VQ-jXFhDVUT3LNGGqh5qgwHaHa&pid=Api&P=0&h=220" style={{ width: '120px', height: '60px', borderRadius: '60%' }} />
            </IonAvatar>
            <h1 style={{ marginBottom: '20px', color: '#ff6219' }}>StoreSync</h1>
            <h5 style={{ marginBottom: '20px', color: '#393f81' }}>{isLogin ? 'Sign into your account' : 'Create your account'}</h5>

            <IonItem style={{ width: '100%', marginBottom: '20px' }}>
              <IonIcon icon={person} slot="start" />
              <IonLabel position="stacked">Username</IonLabel>
              <IonInput value={username} onIonChange={e => setUsername(e.detail.value!)} placeholder="Enter your username" />
            </IonItem>

            {!isLogin && (
              <IonItem style={{ width: '100%', marginBottom: '20px' }}>
                <IonIcon icon={mail} slot="start" />
                <IonLabel position="stacked">Email</IonLabel>
                <IonInput value={email} onIonChange={e => setEmail(e.detail.value!)} placeholder="Enter your email" />
              </IonItem>
            )}

            <IonItem style={{ width: '100%', marginBottom: '20px' }}>
              <IonIcon icon={lockClosed} slot="start" />
              <IonLabel position="stacked">Password</IonLabel>
              <IonInput type={showPassword ? 'text' : 'password'} value={password} onIonChange={e => setPassword(e.detail.value!)} placeholder="Enter your password" />
              <IonIcon icon={showPassword ? eyeOff : eye} slot="end" onClick={() => setShowPassword(!showPassword)} />
            </IonItem>

            {!isLogin && (
              <IonItem style={{ width: '100%', marginBottom: '20px' }}>
                <IonIcon icon={lockClosed} slot="start" />
                <IonLabel position="stacked">Confirm Password</IonLabel>
                <IonInput type={showPassword ? 'text' : 'password'} value={confirmPassword} onIonChange={e => setConfirmPassword(e.detail.value!)} placeholder="Confirm your password" />
                <IonIcon icon={showPassword ? eyeOff : eye} slot="end" onClick={() => setShowPassword(!showPassword)} />
              </IonItem>
            )}

            <IonButton onClick={handleAuth} expand="full" style={{ marginBottom: '10px' }}>
              {isLogin ? 'Login' : 'Sign Up'}
            </IonButton>

            <p style={{ marginTop: '20px', color: '#393f81' }}>
              {isLogin ? "Don't have an account? " : "Already have an account? "}
              <a href="#" style={{ color: '#393f81' }} onClick={toggleAuthMode}>
                {isLogin ? 'Register here' : 'Login here'}
              </a>
            </p>

            <IonAlert
              isOpen={showAlert.show}
              onDidDismiss={() => setShowAlert({ show: false, message: '' })}
              header={isLogin ? 'Login Status' : 'Registration Status'}
              message={showAlert.message}
              buttons={['OK']}
            />
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Auth;
