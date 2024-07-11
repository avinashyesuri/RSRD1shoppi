import React from 'react'
import {useSelector} from 'react-redux'
const ProductComonent = () => {
    const product = useSelector((state) => state.allProd.product)
    const {id,title} = product[0]
  return (
    <div className='four column wide'>
        <div className='ui link cards'>
          <div className='image'></div>
            <div className="content">
                <div className="header">{title}</div>
            </div>
     </div>
    </div>
  )
}

export default ProductComonent