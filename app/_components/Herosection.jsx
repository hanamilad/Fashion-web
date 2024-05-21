


import Image from 'next/image'
import bg from '../../public/bg.png'

function Herosection() {
  return (
<section className="bg-gray-50 ">
<div className='relative'>
  <Image alt='bg for this website' className='w-full max-h-fit '  src={bg} width={1000} height={500} />
</div>

</section>
  )
}

export default Herosection