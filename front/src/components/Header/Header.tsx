import React, { FC, useContext, useEffect, useRef, useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { ReactComponent as Ball } from '../../assets/svg/ball.svg';
import { ReactComponent as LightTheme } from '../../assets/svg/themeLight.svg';
import { ReactComponent as DarkTheme } from '../../assets/v2/svg/dark-theme.svg';
import { ReactComponent as GsLogo } from '../../assets/v2/svg/gs.svg';
import { ReactComponent as Logo } from '../../assets/v2/svg/logo.svg';
import { Container } from '../../components/UI/Container';
import { routers } from '../../constantes/routers';
import { ThemeContext } from '../../context/ThemeContext';
import useWindowSize from '../../hooks/useWindowSize';
import {
    AdminLink,
    Btn,
    ButtonsRev,
    HeaderInner,
    HeaderLogo,
    HeaderMenu,
    HeaderWrap,
    Languale,
    MenuBtn,
    SwitchTheme,
} from './Header.elements';
import { Nav } from './Nav';

type Props = {
    admPanel?: boolean;
};

export const Header: FC<Props> = ({ admPanel }: Props) => {
    const [header, setHeader] = useState(false);
    const [open, setOpen] = useState(false);
    const [notify, setNotify] = useState<boolean>(false);
    const screen = useWindowSize();
    const [none, setNone] = useState<boolean>(false);

    const themeContext = useContext(ThemeContext);
    const swithTheme = themeContext.toggleTheme;
    const theme = themeContext.theme;
    const admin = localStorage.getItem('admin') === 'true';
    const user = localStorage.getItem('token');
    const history = useHistory();
    const location = useLocation();

    function handleClick() {
        if (user === null) return;
        if (!user) {
            history.push('/login/0');
        } else {
            history.push(routers.deposits);
        }
    }

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

    useEffect(() => {
        if (open) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    }, [open]);

    function onClose() {
        setOpen(false);
    }

    const notifiesBlock = useRef();
    const lang = localStorage.getItem('i18nextLng') || 'ru';

    function onBall() {
        setNone(!none);
        setNotify(!notify);
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
                            <Nav
                                onClose={onClose}
                                handleClick={handleClick}
                                user={user}
                                logOut={() => { console.log(1); }}
                                location={location.pathname}
                                admin={admin}
                                lang={lang}
                            />
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
