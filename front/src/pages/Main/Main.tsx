import React, { FC, useContext, useEffect, useState } from 'react';
import styled from 'styled-components';
import { Footer } from '../../components/Footer/Footer';
import { Header } from '../../components/Header/Header';
import { Page } from '../../components/UI/Page';
import { Prize } from '../../types/drawResult';
import { Banner } from './components/Banner/Banner';
import { Tariffs } from './components/Tariffs/Tariffs';
import { DrawHistory } from './components/DrawHistory/DrawHistory';
import { Map } from './components/Map';

export const Main: FC = () => {
    const [clock, setClock] = useState<number | null>(null);
    const [showModal, setShowModal] = useState(false);
    const [showModalCongrats, setShowModalCongrats] = useState(false);
    const [showTimer, setShowTimer] = useState(true);
    const [drawResult, setDrawResult] = useState<any | null>(null);

    const [result, setResult] = useState<Prize | null>(null);
    const [winName, setWinName] = useState<string | null>(null);


    useEffect(() => {
        setShowModal(false);
        setDrawResult(null);
    }, []);

    const winnerResult = (res: Prize) => {
        setResult(res);
    };

    const closeTimer = (e: React.MouseEvent) => {
        e.stopPropagation();
        setShowTimer(false);
    };




    const onOpenModal = () => {
        setShowModal(true);
        setDrawResult(null);
    };


    return (
        <div>
            <Header />
            <MainPage id="banner">
                <Banner />
                <Tariffs />
                <Map />
                <Tariffs />
                {/* <DrawHistory onOpenModal={onOpenModal} clock={clock} /> */}
                <Footer />
            </MainPage>
        </div>
    );
};

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
