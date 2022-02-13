import { FC } from 'react';
import { HeaderNav, List, ListItem, StyledLink } from './Header.elements';

type Props = {
    onClose: () => void;
};

export const Nav: FC<Props> = ({ onClose }: Props) => {

    const scrollWidthOffset = (el: any) => {
        const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
        const yOffset = -80;
        window.scrollTo({ top: yCoordinate + yOffset, behavior: 'smooth' });
    };

    return (
        <HeaderNav>
            <List>
                <ListItem>
                    <StyledLink to="/#DbVillageIs" onClick={onClose} scroll={(el: any) => scrollWidthOffset(el)}>
                        ЧТО ТАКОЕ «ДЕРЕВНЯ СЛЕПОГЛУХИХ»
                    </StyledLink>
                </ListItem>
                <ListItem>
                    <StyledLink to="/#DeathBlindIs" onClick={onClose} scroll={(el: any) => scrollWidthOffset(el)}>
                        КТО ТАКИЕ СЛЕПОГЛУХИЕ
                    </StyledLink>
                </ListItem>
                <ListItem>
                    <StyledLink to="/#ProblemIs" onClick={onClose} scroll={(el: any) => scrollWidthOffset(el)}>
                        ПРОБЛЕМА
                    </StyledLink>
                </ListItem>
                <ListItem>
                    <StyledLink to="/#Materials" onClick={onClose} scroll={(el: any) => scrollWidthOffset(el)}>
                        ДАННЫЕ
                    </StyledLink>
                </ListItem>
                <ListItem>
                    <StyledLink to="/#Map" onClick={onClose} scroll={(el: any) => scrollWidthOffset(el)}>
                        карта
                    </StyledLink>
                </ListItem>
                <ListItem>
                    <StyledLink to="/#" onClick={onClose} scroll={(el: any) => scrollWidthOffset(el)}>
                        дашборд
                    </StyledLink>
                </ListItem>
                <ListItem>
                    <StyledLink to="/#HowToHelp" onClick={onClose} scroll={(el: any) => scrollWidthOffset(el)}>
                        как помочь
                    </StyledLink>
                </ListItem>
            </List>
        </HeaderNav>
    );
};
