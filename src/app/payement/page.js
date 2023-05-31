import React from 'react'
import fs from 'fs';
import file from '/Users/M.Hemanth/my-project/aundefinedirbnb/public/payement.html'

function page() {
   
  return (
    <div dangerouslySetInnerHTML={{ __html: require('/Users/M.Hemanth/my-project/aundefinedirbnb/public/payement.html').default }} />
  )
}

export default page
