import { useState } from 'react'
import type { NextPage } from 'next'
import { ClientLayout } from 'layouts/client'

const DocsAndGuidesPage: NextPage = () => {
  const [text, setText] = useState('');

  return (<ClientLayout>
    <div id="docs-guides" className="">
      Docs & Guide
    </div>
  </ClientLayout>)
}

export default DocsAndGuidesPage
