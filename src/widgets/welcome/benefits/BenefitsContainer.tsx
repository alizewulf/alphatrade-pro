import BenefitsTitle from './BenefitsTitle'
import StatsListWrapper from './StatsListWrapper'

function BenefitsContainer() {
  return (
    <section className='bg-bgcolor px-8 flex flex-col gap-20 pt-24 font-inter'>
        <BenefitsTitle/>
        <StatsListWrapper/>
    </section>
  )
}

export default BenefitsContainer