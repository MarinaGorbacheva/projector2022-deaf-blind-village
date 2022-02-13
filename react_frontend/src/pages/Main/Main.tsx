import { FC, useState } from 'react';
import styled from 'styled-components';
import { Footer } from '../../components/Footer/Footer';
import { Header } from '../../components/Header/Header';
import { Page } from '../../components/UI/Page';
import { Banner } from './components/Banner/Banner';
import { HowToHelp } from './components/HowToHelp';
import { DbVillageIs } from './components/DbVillageIs';
import { DeathBlindIs } from './components/DeathBlindIs';
import { ProblemIs } from './components/ProblemIs';
import { Materials } from './components/Materials';

import { Map } from './components/Map';
// import { Container } from '../../../components/UI/Container';

export const Main: FC = () => {

    return (
        <div>
            <Header />
            <MainPage id="banner">
                <Banner />
                <DbVillageIs />
                <DeathBlindIs />
                <ProblemIs />
                <Materials />


                <Map />
                <HowToHelp />

                <Footer />
            </MainPage>
        </div>
    );
};

const Title = styled.h1`

`;

const MainPage = styled(Page)`
  position: relative;
  padding-top: 0px;
  margin-top: 94px;
  height:100%;
  @media (max-width: 767px) {
    margin-top: 87px;
  }
  @media (max-width: 576px) {
    margin-top: 0px;
  }
`;

export const FixedBlock = styled.div`
  width: 100%;
  height: 5px;
  max-width: 1280px;
  margin-left: auto;
  z-index: 99999;
  display: flex;
  flex-direction: column;
  margin-right: auto;
  right: 0;
  left: 0;
  position: fixed;
  top: 630px;

  & > div {
    position: relative;
  }
`;
