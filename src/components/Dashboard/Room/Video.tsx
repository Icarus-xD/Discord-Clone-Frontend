import { FC,useEffect, useRef } from 'react';
import { styled } from '@mui/system';

interface Props {
  stream: MediaStream | null;
  isLocalStream: boolean;
}

const Container = styled('div')({
  height: '50%',
  width: '50%',
  backgroundColor: '#000',
  borderRadius: '8px',
}); 

const VideoElement = styled('video')({
  width: '100%',
  height: '100%',
});

const Video: FC<Props> = ({ stream, isLocalStream }) => {

  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const video = videoRef.current as HTMLVideoElement;

    video.srcObject = stream;
    video.onloadedmetadata = () => {
      video.play();
    };
  }, [stream]);

  return (
    <Container>
      <VideoElement ref={videoRef} autoPlay muted={isLocalStream} />
    </Container>
  );
};

export default Video;