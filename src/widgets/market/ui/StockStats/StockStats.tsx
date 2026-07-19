import Container from '@/shared/ui/container'
import React from 'react'

interface Object {
  title:string,
  value: string | number
}

interface Props {
  object: Object[]
}

function StockStats({object}:Props):React.JSX.Element {
  return (
    <>
      {object.map(data => (
        <Container className='w-full gap-2 p-4.5! max-h-20!'>
          <span className="font-semibold text-xs leading-3 text-paragraph">{data.title}</span>
          <span className="font-semibold text-xl leading-7 text-[#DAE2FD]">{data.value}</span>
        </Container>
      ))}
    </>
  )
}

export default StockStats