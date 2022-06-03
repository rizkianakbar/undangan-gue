import React from 'react';
import WeddingHero from '@/components/wedding-hero';
import WeddingDate from '@/components/wedding-date';
import WeddingLocation from '@/components/wedding-location';
import WeddingGallery from '@/components/wedding-gallery';
import WeddingJourney from '@/components/wedding-journey';
import WeddingConfirm from '@/components/wedding-confirm';
import WeddingMessages from '@/components/wedding-message';
import WeddingClosing from '@/components/wedding-closing';
import ButtonUnmute from '@/components/button-unmute';
import { PageSection } from '@/components/layout/pages';
import { Container } from '@/components/layout/container';
import type { NextPage } from 'next';

import Aos from 'aos';
import TimeAgo from 'javascript-time-ago';

import en from 'javascript-time-ago/locale/en.json';
import ru from 'javascript-time-ago/locale/ru.json';

import 'aos/dist/aos.css';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

TimeAgo.addDefaultLocale(en);
TimeAgo.addLocale(ru);

const Home: NextPage = () => {
  React.useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <>
      <PageSection>
        <Container>
          <WeddingHero />
          <WeddingDate />
          <WeddingLocation />
          <WeddingGallery />
          <WeddingJourney />
          <WeddingConfirm />
          <WeddingMessages />
          <WeddingClosing />
          <ButtonUnmute />
        </Container>
      </PageSection>
    </>
  );
};

export default Home;
