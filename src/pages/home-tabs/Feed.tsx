import { 
  IonButtons,
  IonContent, 
  IonHeader, 
  IonMenuButton, 
  IonPage, 
  IonTitle, 
  IonToolbar,
  IonList,
  IonItem,
  IonLabel,
  IonAvatar
} from '@ionic/react';

const Feed: React.FC = () => {
 
  const newsArticles = [
    { 
      title: 'Breaking News: New Tech Release', 
      content: 'The latest tech gadget is out now. Get yours today!',
      image: 'https://webusupload.apowersoft.info/apowercom/wp-content/uploads/2018/07/ibooks-iphone.jpg' 
    },
    { 
      title: 'Sports Update: Local Team Wins', 
      content: 'Our local team has won the championship. Congratulations!',
      image: 'https://www.wideanglesoftware.com/touchcopy/images/TC2/transfer-ibooks-to-your-computer.jpg' 
    },
    { 
      title: 'Weather Forecast: Sunny Days Ahead', 
      content: 'The weather will be sunny for the next week. Great for outdoor activities.',
      image: 'https://cms-tc.pbskids.org/parents/_generic600Wide/look-at-the-weather.jpg' 
    },
    { 
      title: 'Health Tips: Stay Active', 
      content: 'Experts recommend 30 minutes of exercise daily for good health.',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNO8Da6FZDhAo87LlAFhuCofEx2NxwZ9rrcA&s' 
    },
  ];

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot='start'>
            <IonMenuButton></IonMenuButton>
          </IonButtons>
          <IonTitle>Feed</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonList>
          {newsArticles.map((article, index) => (
            <IonItem key={index}>
          
              <IonAvatar slot="start">
                <img alt={article.title} src={article.image} />
              </IonAvatar>
              
              <IonLabel>
                <h2>{article.title}</h2>
                <p>{article.content}</p>
              </IonLabel>
            </IonItem>
          ))}
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Feed;
