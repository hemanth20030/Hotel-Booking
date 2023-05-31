import React from 'react'
import fs from 'fs';


function page() {
   
  return (
    <div dangerouslySetInnerHTML={{ __html: require('../../../public/payement.html').default }} />
  )
}

export default page
