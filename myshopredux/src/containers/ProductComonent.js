// import React from 'react'
// import { useSelector } from 'react-redux'
// import { Link } from 'react-router-dom'


// const ProductComonent = () => {
//   const products = useSelector((state) => state.allProd.Products)
//   // const { id, title } = products[0]

//   const renderList = products.map((product) => {
//     const { id, title, image, price, category } = product;
//     return (
//       <div className='four wide column' >
//       <Link to={`/ProductListing/${id}`}>
//         <div className='ui link cards'>
//           <div className='card ui segment green'>
//             <div className='image'>
//               <img src={image} alt={title} />
//             </div>
//             <div className="content">
//               <div className="header">{title}</div>
//               <div className="meta price">$ {price}</div>
//               <div className="meta">{category}</div>

//             </div>
//           </div>
//         </div>
//      </Link>
//       </div>
//     );
//   });
//   return (
//     <>
//       {renderList}
//     </>
//   )
// }

// export default ProductComonent











import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const ProductComponent = () => {
  const products = useSelector((state) => state.allProd.Products);

  const renderList = products.map((product) => {
    const { id, title, image, price, category } = product;
    return (
      <div className="four wide column" key={id}>
        <Link to={`/ProductListing/${id}`}>
          <div className="ui link card">
            <div className="image">
              <img src={image} alt={title} />
            </div>
            <div className="content">
              <div className="header">{title}</div>
              <div className="meta price">$ {price}</div>
              <div className="meta">{category}</div>
            </div>
          </div>
        </Link>
      </div>
    );
  });

  return (
    <div className="ui grid container">
      {renderList}
    </div>
  );
};

export default ProductComponent;
