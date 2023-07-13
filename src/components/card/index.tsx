import { CardSession } from './style';

const modelsPhoto = [
  {
    photo: 'img/1.jpeg',
  },
  {
    photo: 'img/2.jpeg',
  },
  {
    photo: 'img/3.jpeg',
  },
  {
    photo: 'img/4.jpeg',
  },
  {
    photo: 'img/9.jpeg',
  },
  {
    photo: 'img/15.jpeg',
  },
  {
    photo: 'img/18.jpeg',
  },
  {
    photo: 'img/19.jpeg',
  },
  {
    photo: 'img/20.jpeg',
  },
];

export function CardModels() {

  return (
    <section aria-label="card dos modelos de expositores">
      {modelsPhoto.map((photo, index) => (
        <CardSession key={index} aria-label="card dos modelos de expositores">
          <img src={photo.photo} alt="Modelos de expositores" />
        </CardSession>
      ))}
    </section>
  );
}
