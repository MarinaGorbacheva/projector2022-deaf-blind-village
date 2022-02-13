import { FC, useEffect, useState } from 'react';
import { Container } from '../../components/UI/Container';
import useWindowSize from '../../hooks/useWindowSize';
import {
    Btn,
    HeaderInner,
    HeaderMenu,
    HeaderWrap,
    MenuBtn,
} from './Header.elements';
import { Nav } from './Nav';

type Props = {
    admPanel?: boolean;
};

export const Header: FC<Props> = ({ admPanel }: Props) => {
    const [header, setHeader] = useState(false);
    const [open, setOpen] = useState(false);
    const screen = useWindowSize();

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setHeader(true);
            } else {
                setHeader(false);
            }
        };
        handleScroll();

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    function onClose() {
        setOpen(false);
    }

    function handleNeedHelpClick() {
        window.open('https://so-edinenie.org/slepogluhimpredstavitelyam');
    }

    function handleWantHelpClick() {
        window.open('https://www.deafblindacademy.ru/donate');
    }

    return (
        <>
            <HeaderWrap header={header}>
                <Container style={{ position: 'relative' }}>
                    <HeaderInner>
                        <HeaderMenu open={open}>
                            <Nav onClose={onClose} />
                        </HeaderMenu>
                        <Btn yellow mr20 onClick={handleWantHelpClick}>
                            Xочу помочь
                        </Btn>
                        <Btn onClick={handleNeedHelpClick}>
                            Мне нужна помощь
                        </Btn>

                        <MenuBtn open={open} onClick={() => setOpen(!open)}>
                        </MenuBtn>
                    </HeaderInner>
                </Container>
            </HeaderWrap>
        </>
    );
};
