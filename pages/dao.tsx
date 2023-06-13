import { useState } from 'react'
import type { NextPage } from 'next'
import { ClientLayout } from 'layouts/client'

const DAOPage: NextPage = () => {
  const [text, setText] = useState('');

  return (<ClientLayout>
    <div id="dao" className="">
      DAO
    </div>
  </ClientLayout>)
}

export default DAOPage
