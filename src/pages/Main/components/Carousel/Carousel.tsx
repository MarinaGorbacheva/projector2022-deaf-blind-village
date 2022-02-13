import { FC } from 'react';
import * as S from './S.elements';
import bg from '../../../../assets/img/deathBanner.png';
import pc from '../../../../assets/v2/images/banner/1.png';
import { Container } from '../../../../components/UI/Container';


export const Carousel: FC = () => {
    return (
        // <S.SliderContainer>
        <S.SlideItemWrap>
            <S.SlideItem bg={bg}>
            </S.SlideItem>
        </S.SlideItemWrap>
        // </S.SliderContainer>

        // <Container>
        //     Деревня слепоглухих
        // </Container>
    );
};
