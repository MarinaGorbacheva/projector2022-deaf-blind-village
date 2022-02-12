import { FC, useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';
import { HeaderNav, LinkButton, List, ListItem, StyledLink } from './Header.elements';

type Props = {
    onClose: () => void;
    handleClick: () => void;
    user: null | false | string;
    logOut: () => void;
    location: string;
    admin: boolean | null;
    lang: string;
};

export const Nav: FC<Props> = ({
    onClose,
    handleClick,
    user,
    logOut,
    location,
    admin,
    lang,
}: Props) => {
    const { toggleTheme, theme } = useContext(ThemeContext);

    const scrollWidthOffset = (el: any) => {
        const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
        const yOffset = -80;
        window.scrollTo({ top: yCoordinate + yOffset, behavior: 'smooth' });
    };

    return (
        <HeaderNav>
            <List>
                <ListItem>
                    <StyledLink to="/#deposits" onClick={onClose} scroll={(el: any) => scrollWidthOffset(el)}>
                        что такое «деревня»
                    </StyledLink>
                </ListItem>
                <ListItem>
                    <StyledLink to="/#lottery" onClick={onClose} scroll={(el: any) => scrollWidthOffset(el)}>
                        кто такие слепоглухие
                    </StyledLink>
                </ListItem>
                <ListItem>
                    <StyledLink to="/#" onClick={onClose} scroll={(el: any) => scrollWidthOffset(el)}>
                        о проекте
                    </StyledLink>
                </ListItem>

                <ListItem>
                    <StyledLink to="/#" onClick={onClose} scroll={(el: any) => scrollWidthOffset(el)}>
                        цель
                    </StyledLink>
                </ListItem>
                <ListItem>
                    <StyledLink to="/#" onClick={onClose} scroll={(el: any) => scrollWidthOffset(el)}>
                        дашборд
                    </StyledLink>
                </ListItem>
                <ListItem>
                    <StyledLink to="/#" onClick={onClose} scroll={(el: any) => scrollWidthOffset(el)}>
                        карта
                    </StyledLink>
                </ListItem>
                <ListItem>
                    <StyledLink to="/#" onClick={onClose} scroll={(el: any) => scrollWidthOffset(el)}>
                        общий анализ карты
                    </StyledLink>
                </ListItem>
                <ListItem>
                    <StyledLink to="/#" onClick={onClose} scroll={(el: any) => scrollWidthOffset(el)}>
                        графики - динамику/тренды
                    </StyledLink>
                </ListItem>
                <ListItem>
                    <StyledLink to="/#" onClick={onClose} scroll={(el: any) => scrollWidthOffset(el)}>
                        заключение
                    </StyledLink>
                </ListItem>
                <ListItem>
                    <StyledLink to="/#" onClick={onClose} scroll={(el: any) => scrollWidthOffset(el)}>
                        как помочь
                    </StyledLink>
                </ListItem>

                <ListItem mob>
                    <LinkButton mob onClick={toggleTheme}>{theme === "dark" ? "Светлая тема" : "Темная тема"}</LinkButton>
                </ListItem>
                <ListItem mob>
                    <LinkButton mob>{lang.toUpperCase()}</LinkButton>
                </ListItem>
                <ListItem mob>
                    <LinkButton mob onClick={handleClick}>{user ? 'headerButton.personalArea' : "Войти"}</LinkButton>
                </ListItem>
            </List>
        </HeaderNav>
    );
};
