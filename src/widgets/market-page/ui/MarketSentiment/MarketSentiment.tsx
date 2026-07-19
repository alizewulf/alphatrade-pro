import Container from '@/shared/ui/container'
import React from 'react'

function MarketSentiment():React.JSX.Element {
  return (
    <Container className='w-full h-42.5'>
        <span className='font-semibold text-xs leading-3 tracking-[0.6px] text-[#DAE2FD] uppercase'>market sentiment</span>
    </Container>
  )
}

export default MarketSentiment