import React from 'react';
import { PageSection } from '@/components/layout/pages';
import { Container } from '@/components/layout/container';
import type { NextPage } from 'next';
import Image from 'next/image';

const Home: NextPage = () => {
  return (
    <>
      <PageSection>
        <Container className=" ">
          <div className="section1">
            <div className="text-center text-white text-xl pt-32 font-formal">
              <p className="mb-4 text-lg">The Wedding Of</p>
              <p className="font-gaya text-5xl mb-4">
                Vinni <span className="text-white">&</span> Rifqi
              </p>
              <p className="text-lg mt-[100%]">Minggu, 29 Mei 2022</p>
            </div>
          </div>
          <div className="section1">asd</div>
        </Container>
      </PageSection>
    </>
  );
};

export default Home;
