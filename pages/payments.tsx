import { useState } from 'react'
import type { NextPage } from 'next'
import { ClientLayout } from 'layouts/client'

const PaymentsPage: NextPage = () => {
  const [text, setText] = useState('');

  return (<ClientLayout>
    <div id="payments" className="">
      Payments
    </div>
  </ClientLayout>)
}

export default PaymentsPage
