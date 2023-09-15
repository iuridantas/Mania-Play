import { CardSession } from './style';

const modelPhotos = [
  'img/1.jpeg',
  'img/2.jpeg',
  'img/3.jpeg',
  'img/4.jpeg',
  'img/9.jpeg',
  'img/15.jpeg',
  'img/18.jpeg',
  'img/19.jpeg',
  'img/20.jpeg',
];

export function CardModels() {
  return (
    <section aria-label="card dos modelos de expositores">
      {modelPhotos.map((modelPhoto, index) => (
        <CardSession
          key={index}
          role="figure"
          aria-label={`Modelo de expositor ${index + 1}`}
        >
          <img src={modelPhoto} alt={`Modelo de expositor ${index + 1}`} />
        </CardSession>
      ))}
    </section>
  );
}
