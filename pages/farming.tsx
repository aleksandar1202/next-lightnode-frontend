import { useState } from 'react'
import type { NextPage } from 'next'
import { ClientLayout } from 'layouts/client'

const FarmingPage: NextPage = () => {
  const [text, setText] = useState('');

  return (<ClientLayout>
    <div id="farming" className="">
      Farming
    </div>
  </ClientLayout>)
}

export default FarmingPage
