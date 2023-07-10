import { useEffect } from 'react';
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

const modelsVideo = [
  {
    video: 'img/10.mp4',
  },
  {
    video: 'img/11.mp4',
  },
  {
    video: 'img/17.mp4',
  },
];

export function CardModels() {
  useEffect(() => {
    function handleClick(event: MouseEvent) {
      const videoId = (event.target as HTMLElement).id;
      const video = document.getElementById(videoId) as HTMLMediaElement | null;

      if (video !== null && video.paused) {
        video.play();
        video.classList.add('playing');
      } else {
        video?.pause();
        video?.classList.remove('playing');
      }
    }

    const videoElements = document.querySelectorAll('video');
    videoElements.forEach((video) => {
      video.addEventListener('click', handleClick);
    });

    return () => {
      videoElements.forEach((video) => {
        video.removeEventListener('click', handleClick);
      });
    };
  }, []);

  return (
    <section aria-label="card dos modelos de expositores">
      {modelsPhoto.map((photo, index) => (
        <CardSession key={index} aria-label="card dos modelos de expositores">
          <img src={photo.photo} alt="Modelos de expositores" />
        </CardSession>
      ))}
      {modelsVideo.map((video, index) => (
        <CardSession key={index} aria-label="card dos modelos de expositores">
          <video id={`video-${index}`} src={video.video} muted></video>
        </CardSession>
      ))}
    </section>
  );
}
