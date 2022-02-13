import { FC } from 'react';
import { Container } from '../../../../components/UI/Container';
import { H2 } from '../../../../components/UI/Heading';
import { Page } from '../../../../components/UI/Page';
import styled from 'styled-components';


export const Materials: FC = () => {

    return (
        <>
            <Page id="Materials" pBottom>
                <Container>
                    <H2>ДАННЫЕ</H2>
                </Container>
                <Container pNone page mtNone>
                    <PartnersItemTitle>
                        На начало 2022 года в базе фонда содержатся данные о 4372 человек с одновременными нарушениями слуха и зрения. Из них старше 18-ти лет — 3672 человека, старше 18-ти — 700 человек. У остальных 19-ти — возраст неизвестен.<br />
                        В ходе переписи респонденты заполняют подробную анкету: в данных есть статистика по количеству слепоглухих в регионах, степени нарушения слуха и зрения, возраста, трудоустроенности и множество другой информации. В рамках этого исследования мы выбрали наиболее интересные показатели и провели качественный анализ.

                    </PartnersItemTitle>
                </Container>
            </Page>
        </>
    );
};

const PartnersBlock = styled.div`
  width: 100%;
  min-height: 544px;
  background: ${({ theme }) => theme.main.blocksBackground};
  border-radius: 4px;
  padding: 1px;
  box-shadow: ${({ theme }) => theme.partnersProgramsBlock.boxShadow};
  @media (max-width: 767px) {
    min-height: 345px;
    margin-bottom: 20px;
  }
`;

const PartnersHeader = styled.header`
  width: 100%;
  height: 100px;
  padding-left: 270px;
  display: flex;
  align-items: center;
  @media (max-width: 767px) {
    padding-left: 25%;
    height: 38px;
  }
  @media (min-width: 768px) and (max-width: 1024px) {
    padding-left: 30%;
    height: 60px;
  }
`;

const PartnersHeaderItem = styled.div`
  width: 74px;
  color: ${({ theme }) => theme.main.bodyColor};
  opacity: ${({ theme }) => theme.depositsProgramsCards.descOpacity};
  line-height: 28px;
  font-size: 24px;
  font-weight: 700;
  margin-right: 217px;
  @media (max-width: 767px) {
    margin-right: 45px;
    font-weight: 700;
    font-size: 12px;
    width: 60px;
    line-height: 20px;
  }
  @media (min-width: 768px) and (max-width: 1024px) {
    width: 160px;
    margin-right: 0px;
    line-height: 24px;
    font-size: 18px;
  }
`;

const PartnersItem = styled.div`
  width: 100%;
  height: 60px;
  background: ${({ theme }) => theme.partnersProgramsBlock.background2ich};
  display: flex;
  align-items: center;
  padding-left: 20px;
  color: ${({ theme }) => theme.main.bodyColor};
  opacity: ${({ theme }) => theme.depositsProgramsCards.descOpacity};
  &:nth-child(2n) {
    background: ${({ theme }) => theme.partnersProgramsBlock.background};
  }
  @media (max-width: 767px) {
    height: 38px;
  } 
`;

const PartnersItemTitle = styled.div`
    font-style: normal;
    font-weight: normal;
    font-size: 33px;
    line-height: 40px;

    color: #FFFFFF;

  @media (max-width: 767px) {
    font-size: 12px;
    font-weight: 400;
    line-height: 18px;
    margin-right: 5%;
  }
  @media (min-width: 360px) and (max-width: 400px) {
    margin-right: 7%;
  }
  @media (min-width: 400px) and (max-width: 409px) {
    margin-right: 8%;
  }
  @media (min-width: 410px) and (max-width: 420px) {
    margin-right: 9%;
  }
  @media (min-width: 420px) and (max-width: 448px) {
    margin-right: 10%;
  }
  @media (min-width: 445px) and (max-width: 449px) {
    margin-right: 11%;
  }
  @media (min-width: 450px) and (max-width: 767px) {
    margin-right: 11%;
  }
  @media (min-width: 768px) and (max-width: 1024px) {
    font-weight: 14px;
    line-height: 20px;
    margin-right: 20%;
  } 
  @media (min-width: 850px) and (max-width: 999px) {
    margin-right: 21%;
  } 
  @media (min-width: 1000px) and (max-width: 1024px) {
    margin-right: 23%;
  }
  @media (min-width: 500px) and (max-width: 520px) {
    margin-right: 12%;
  }
  @media (min-width: 521px) and (max-width: 550px) {
    margin-right: 13%;
  }
  @media (min-width: 551px) and (max-width: 767px) {
    margin-right: 14%;
  }
  @media (min-width: 600px) and (max-width: 635px) {
    margin-right: 14%;
  }
  @media (min-width: 636px) and (max-width: 673px) {
    margin-right: 15%;
  }
  @media (min-width: 674px) and (max-width: 767px) {
    margin-right: 16%;
  }
  @media (min-width: 830px) and (max-width: 850px) {
    margin-right: 21%;
  }
  @media (min-width: 908px) and (max-width: 1000px) {
    margin-right: 22%;
  }
`;

const PartnersItemData = styled.div`
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;

  &:nth-child(2) {
    width: 285px;
  }

  &:nth-child(3) {
    width: 300px;
  }
  @media (max-width: 767px) {
    font-size: 12px;
    line-height: 18px;

    &:nth-child(2) {
      width: 60px;
    }
    &:nth-child(3) {
      width: 60px;
    }
    margin-right: 10%;
  }
  @media (max-width: 369px) {
    &:nth-child(2) {
      width: 36px;
    }
    margin-right: 15%;
    &:nth-child(3) {
      width: 36px;
    }
  }
  @media (max-width: 359px) {
    &:nth-child(3) {
      margin-right: 17%;
    }
  }
  @media (min-width: 370px) and (max-width: 449px) {
    margin-right: 11%;
  }
  @media (min-width: 370px) and (max-width: 374px) {
    margin-right: 9%;
  }
  @media (min-width: 375px) and (max-width: 379px) {
    margin-right: 9%;
    &:nth-child(2) {
      margin-right: 10%;
    }
  }
  @media (min-width: 380px) and (max-width: 389px) {
    &:nth-child(3) {
      margin-right: 9%;
    }
  }
  @media (min-width: 450px) and (max-width: 767px) {
    margin-right: 10%;
  }
  @media (min-width: 768px) and (max-width: 1024px) {
    font-size: 14px;
    line-height: 20px;
    margin-right: 9%;
    &:nth-child(2) {
      width: 100px;
    }
    &:nth-child(3) {
      width: 100px;
    }
  }
  @media (min-width: 850px) and (max-width: 999px) {
    margin-right: 8%;
  }
  @media (min-width: 1000px) and (max-width: 1024px) {
    margin-right: 6%;
    &:nth-child(3) {
      margin-right: 7%;
    }
  }
  @media (min-width: 500px) and (max-width: 520px) {
    &:nth-child(3) {
      width: 55px;
    }
  }
  @media (min-width: 521px) and (max-width: 550px) {
    &:nth-child(2) {
      width: 55px;
    }
    &:nth-child(3) {
      width: 50px;
    }
  }
  @media (min-width: 551px) and (max-width: 570px) {
    &:nth-child(2) {
      width: 53px;
    }
    &:nth-child(3) {
      width: 50px;
    }
  }
  @media (min-width: 571px) and (max-width: 634px) {
    &:nth-child(2) {
      width: 50px;
    }
    &:nth-child(3) {
      width: 49px;
    }
  }
  @media (min-width: 635px) and (max-width: 660px) {
    &:nth-child(2) {
      width: 47px;
    }
    &:nth-child(3) {
      width: 44px;
    }
  }
  @media (min-width: 661px) and (max-width: 673px) {
    &:nth-child(2) {
      width: 47px;
    }
    &:nth-child(3) {
      width: 40px;
    }
  }
  @media (min-width: 674px) and (max-width: 700px) {
    &:nth-child(2) {
      width: 40px;
    }
    &:nth-child(3) {
      width: 40px;
    }
  }
  @media (min-width: 701px) and (max-width: 767px) {
    &:nth-child(2) {
      width: 38px;
    }
    &:nth-child(3) {
      width: 35px;
    }
  }
  @media (min-width: 908px) and (max-width: 1000px) {
    &:nth-child(2) {
      width: 91px;
    }
  }
`;
