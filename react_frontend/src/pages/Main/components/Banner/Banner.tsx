import { FC } from 'react';
import { H2 } from '../../../../components/UI/Heading';
import { Container } from '../../../../components/UI/Container';
import { Carousel } from '../Carousel/Carousel';
import * as S from './S.elements';

export const Banner: FC = () => {

    return (
        <>
            <Carousel />
            {/* <S.DescWrap>
                <Container>
                    <H2 mb>Деревня слепоглухих</H2>
                    <S.Desc>
                        Деревня слепоглухих - текст текст текст текст текст текст текст!
                    </S.Desc>
                </Container>
            </S.DescWrap> */}
        </>
    );
};
