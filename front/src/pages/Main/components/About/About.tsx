import React, { FC } from 'react';
import { Container } from '../../../../globalStyles';
import { H1 } from '../../../../components/UI/MainStyled';
import { Page } from '../../../../components/UI/Page';
import { UpTitle } from '../../../../components/UI/UpTitle';
import img1 from '../../../../assets/img/1.png';
import img2 from '../../../../assets/img/2.png';
import img3 from '../../../../assets/img/3.png';
import * as Styled from './About.elements';

export const About: FC = () => {
    return (
        <Page id="about">
            <Container>
                <UpTitle>{('about.uptitle')}</UpTitle>
            </Container>
            <Container>
                <H1>{('about.H1')}</H1>
            </Container>

            <Container>
                <Styled.Text>
                    <span>{('about.brand')}</span> - {('about.desc')}
                </Styled.Text>
            </Container>

            <Styled.BlockContainer>
                <Styled.BlockItem>
                    <Styled.Img src={img1} alt="" />
                    <Styled.BlockInner>
                        <Styled.BlockTitle>
                            {('about.name2')} <Styled.Dot /> {('about.founder')}
                            <br /> {('about.crypto')} GLOBALSafe
                        </Styled.BlockTitle>
                        <Styled.BlockSubtitle>
                            {('about.investor')}
                            <br />
                            {('about.apostol')} CWD Global
                        </Styled.BlockSubtitle>
                    </Styled.BlockInner>
                </Styled.BlockItem>

                <Styled.BlockItem>
                    <Styled.Img src={img2} alt="" />
                    <Styled.BlockInner mod>
                        <Styled.BlockTitle>
                            {('about.name1')}
                            <Styled.Dot />
                            <br /> {('about.position1')}
                        </Styled.BlockTitle>
                        <Styled.BlockSubtitle>
                            {('about.self1')}
                            <br /> {('about.impement')}
                        </Styled.BlockSubtitle>
                    </Styled.BlockInner>
                </Styled.BlockItem>
            </Styled.BlockContainer>
        </Page>
    );
};
