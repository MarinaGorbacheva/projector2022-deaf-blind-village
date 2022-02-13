import moment from 'moment';
import React, { useContext, useEffect, useState } from 'react';
import styled from 'styled-components/macro';
import { H2 } from '../../../../components/UI/Heading';
import { Page } from '../../../../components/UI/Page';
import { Container } from '../../../../components/UI/Container';
import { Collection, RootOperations } from '../../../../types/operations';
import useWindowSize from '../../../../hooks/useWindowSize';

export const Operations = () => {
    const [notifyList, setNotifyList] = useState<Collection[]>([]);
    const [num, setNum] = useState(0);
    const [showLess, setShowLess] = useState<boolean>(false);
    const [maxItems, setMaxItems] = useState(4);
    const screen = useWindowSize();



    return (
        <>
            {notifyList.length > 0 ? (
                <>
                    <Container page>
                        <H2 mb>{'operation.last'}</H2>
                        <Description>{'operations2.desc'}</Description>
                    </Container>
                    <Container pNone>
                        <TableHead>

                        </TableHead>
                        <TableMapBlock>
                            {notifyList.map((itm, idx) => (
                                <TableMapItem key={idx}>
                                    <TableInnerItem>

                                    </TableInnerItem>
                                    <TableInnerItem>
                                        <span>

                                        </span>
                                    </TableInnerItem>
                                    <TableInnerItem>
                                        {(itm.amount / 100000).toLocaleString('ru-RU', { maximumFractionDigits: 5 })}
                                    </TableInnerItem>
                                </TableMapItem>
                            ))}
                        </TableMapBlock>
                    </Container>
                </>
            ) : (
                ''
            )}
        </>
    );
};

const Description = styled.h3`
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: ${({ theme }) => theme.operations.descClr};
  max-width: 367px;
  margin-bottom: 40px;

  @media only screen and (max-width: 767px) {
    margin-bottom: 10px;
    font-size: 12px;
    line-height: 18px;
    max-width: 280px;
    margin-bottom: 10px;
  }

  @media only screen and (min-width: 768px) and (max-width: 1024px) {
    margin-bottom: 20px;
  }
`;

const TableHead = styled.div<{ item?: boolean }>`
  width: 100%;
  height: 60px;
  background: ${({ theme }) => theme.operations2.background};
  border-top-right-radius: 4px;
  border-top-left-radius: 4px;
  display: flex;
  align-items: center;
  padding: 0px 0px 0px 40px;

  @media only screen and (max-width: 767px) {
    padding-left: 20px;
    border-radius: 0;
    height: 38px;
  }
`;

const TableHeadItem = styled.div`
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  color: ${({ theme }) => theme.operations.headClr};
  width: 100%;

  &:nth-child(1) {
    max-width: 330px;
  }

  &:nth-child(2) {
    max-width: 400px;
  }

  &:nth-child(3) {
    max-width: 100px;
  }

  @media only screen and (min-width: 481px) and (max-width: 849px) {
    &:nth-child(1) {
      max-width: 250px;
    }

    &:nth-child(2) {
      max-width: 303px;
    }
  }

  @media only screen and (min-width: 850px) and (max-width: 949px) {
    &:nth-child(1) {
      max-width: 250px;
    }

    &:nth-child(2) {
      max-width: 325px;
    }
  }

  @media only screen and (max-width: 767px) {
    font-weight: 500;
    font-size: 12px;
    line-height: 18px;

    &:nth-child(1) {
      max-width: 61px;
    }
  }

  @media only screen and (max-width: 359px) {
    &:nth-child(3) {
      max-width: 89px;
    }
  }

  @media only screen and (min-width: 360px) and (max-width: 434px) {
    &:nth-child(1) {
      max-width: 65px;
    }
  }

  @media only screen and (min-width: 435px) and (max-width: 767px) {
    &:nth-child(1) {
      max-width: 71px;
    }

    &:nth-child(3) {
      max-width: 114px;
    }
  }
`;

const TableMapItem = styled.div`
  width: 100%;
  min-height: 60px;
  display: flex;
  align-items: center;
  padding: 0px 0px 0px 40px;

  &:nth-child(2n) {
    background: ${({ theme }) => theme.operations2.ich2Background};
  }

  @media only screen and (max-width: 767px) {
    padding-left: 20px;
    padding-top: 10px;
    min-height: 38px;
    align-items: start;
  }
`;

const TableInnerItem = styled.div`
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: ${({ theme }) => theme.operations.headClr};
  width: 100%;

  &:nth-child(1) {
    max-width: 330px;
  }

  &:nth-child(2) {
    max-width: 400px;
  }

  &:nth-child(3) {
    max-width: 100px;
  }

  @media only screen and (min-width: 481px) and (max-width: 849px) {
    &:nth-child(1) {
      max-width: 250px;
    }

    &:nth-child(2) {
      max-width: 303px;
    }
  }

  @media only screen and (min-width: 850px) and (max-width: 949px) {
    &:nth-child(1) {
      max-width: 250px;
    }

    &:nth-child(2) {
      max-width: 325px;
    }
  }

  @media only screen and (max-width: 767px) {
    font-weight: 400;
    font-size: 12px;
    line-height: 18px;

    & > span {
      width: 120px;
      max-width: 120px;
      word-wrap: break-word;
    }

    &:nth-child(1) {
      max-width: 61px;
    }
  }

  @media only screen and (max-width: 359px) {
    &:nth-child(3) {
      max-width: 89px;
    }
  }

  @media only screen and (min-width: 360px) and (max-width: 434px) {
    &:nth-child(1) {
      max-width: 65px;
    }
  }

  @media only screen and (min-width: 435px) and (max-width: 767px) {
    &:nth-child(1) {
      max-width: 71px;
    }

    &:nth-child(3) {
      max-width: 114px;
    }
  }
`;

const TableMapBlock = styled.div`
  width: 100%;
  padding: 1px;
  padding-top: 0px;
  padding-bottom: 0px;
  background: ${({ theme }) => theme.operations.tableBg};
`;
