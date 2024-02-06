import React from 'react'
import styled from 'styled-components'
import { Card, CardBody, Heading, Skeleton, Text } from '@mozartfinance/uikit'
import useI18n from 'hooks/useI18n'
import { useTotalValue } from '../../../state/hooks'
import CardValue from "./CardValue";

const StyledTotalValueLockedCard = styled(Card)`
  align-items: center;
  display: flex;
  flex: 1;
`

const TotalValueLockedCard = () => {
    const TranslateString = useI18n()
    const totalValue = useTotalValue()

    return (
        <StyledTotalValueLockedCard>
            <CardBody>
                <Heading size="lg" mb="24px" color="#FF0000" >
                    {TranslateString(762, 'Total Value Locked (TVL)')}
                </Heading>
                <CardValue value={totalValue.toNumber()} prefix="$" decimals={0} />
                <Text color="#FFFF00">{TranslateString(764, 'Across all Farms & Pools')}</Text>
            </CardBody>
        </StyledTotalValueLockedCard>
    )
}

export default TotalValueLockedCard