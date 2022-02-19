import { FC } from 'react';
import { Container } from '../UI/Container';
import styled from 'styled-components/macro';
import { ReactComponent as FooterLogo } from '../../assets/svg/whiteFooterLogo.svg';
import Group1 from '../../assets/img/Group1.png';
import Group5 from '../../assets/img/Group5.png';
import Gazeta from '../../assets/img/logo-novaya-gazeta.png';
import Teplitsa from '../../assets/img/teplitsa.png';
import { NavHashLink } from 'react-router-hash-link';

type FooterType = {
    other?: boolean;
};

export const Footer: FC<FooterType> = ({ other }: FooterType) => {
    const scrollWidthOffset = (el: any) => {
        const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
        const yOffset = -80;
        window.scrollTo({ top: yCoordinate + yOffset, behavior: 'smooth' });
    };

    return (
        <FooterBlock other={other}>
            <FooterContainer>
                <DescBlock>
                    <FooterDesc>
                        Хакатон Теплицы социальных технологий и Новой газеты
                    </FooterDesc>
                    <FooterDesc>
                        Ресурсный центр «Ясенева Поляна» / Академия «Со-единение»
                    </FooterDesc>
                    <FooterDesc>
                        11-13 февраля 2022
                    </FooterDesc>
                </DescBlock>
                <DescBlock>
                    <FooterDesc smallMg>
                        Координатор проекта и сотрудник фонда «Ясенева поляна» - Лера Душкина
                    </FooterDesc>
                    <FooterDesc smallMg>
                        Научный консультант - Алина Хохлова
                    </FooterDesc>
                    <FooterDesc smallMg>
                        Графический дизайнер - Александра Мороз
                    </FooterDesc>
                    <FooterDesc smallMg>
                        Frontend-разработчик - Алим Шогенов
                    </FooterDesc>
                    <FooterDesc smallMg>
                        Backend-разработчик - Марина Горбачева
                    </FooterDesc>
                </DescBlock>
            </FooterContainer>
            {/* <LoogoContainer>
                <img src={Group1} alt="fireSpot" />
                <img src={Group5} alt="fireSpot" />
                <img src={Gazeta} alt="fireSpot" />
                <img src={Teplitsa} alt="fireSpot" />
            </LoogoContainer> */}
        </FooterBlock >
    );
};

const LoogoContainer = styled(Container)`


`;

const FooterContainer = styled(Container)`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;

const DescBlock = styled.div`
    display: flex;
    flex-direction: column;
`;



const P = styled.p`
  color: #ffffff;
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 5px;
`;


const TargetLink = styled.a`
  & > svg > path {
    opacity: ${({ theme }) => theme.charts.chartOpacityBtn};
  }
`;

const FooterBlock = styled.footer<{ other?: boolean }>`
  width: 100%;
  min-height: 230px;
  max-height: 250px;
  background: #4e4147;
  padding-top: 40px;
  padding-bottom: 40px;
  margin-top: auto;
  margin-bottom: -20px;
  @media only screen and (min-width: 768px) and (max-width: 1024px) {
    padding-left: 20px;
    min-height: 188px;
    max-height: 188px;
  }
  @media only screen and (max-width: 767px) {
    min-height: 320px;
    max-height: 320px;

    .logo {
      display: none;
    }

    & > div {
      position: relative;
    }

    .tg {
      position: absolute;
      margin-left: auto;
      margin-right: auto;
      right: 0;
      left: 0;
      top: 155px;
    }
    .tg > svg {
      opacity: ${({ theme }) => theme.charts.chartOpacityBtn};
    }
  }
`;

const FooterHeader = styled.header`
  width: 100%;
  display: flex;
  position: relative;
  margin-bottom: 38px;

  @media only screen and (max-width: 767px) {
    margin: 0 auto;
    margin-bottom: 38px;
    max-width: 145px;
  }

  @media only screen and (min-width: 768px) and (max-width: 1024px) {
    margin-bottom: 20px;
  }
`;

const FooterLinks = styled.div`
  display: flex;
  position: absolute;
  right: 0;

  @media only screen and (max-width: 767px) {
    position: relative;
    flex-wrap: wrap;
    text-align: center;
    margin: 0 auto;
  }
`;

const FooterLink = styled(NavHashLink)`
  color: #fff;
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
  text-decoration: underline;
  margin-right: 38px;
  cursor: pointer;

  @media only screen and (max-width: 767px) {
    text-align: center;
    display: block;
    width: 145px;
    margin-bottom: 20px;
  }
`;

const FooterDesc = styled.h3<{ smallMg?: boolean }>`
  margin-bottom: ${({ smallMg }) => smallMg ? '10px' : '38px'};
  color: #fff;
  opacity: ${({ theme }) => theme.charts.chartOpacityBtn};
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  @media only screen and (min-width: 768) and (max-width: 1024px) {
    width: 170px;
    margin-bottom: 20px;
  }

  @media only screen and (max-width: 767px) {
    text-align: center;
    width: 170px;
    margin: 0 auto;
    margin-top: 20px;
  }
`;
