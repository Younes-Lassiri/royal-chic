import React from 'react';
import './Collection.css'
import { Link } from 'react-router-dom';
import FourSec from '../FourSec/FourSec';
import { useSelector } from 'react-redux';
import FiveSec from '../FiveSec/FiveSec';

export default function Collection() {
    const data = useSelector((state) => state.products)

  return (
    <div className="container-fluid con">
      <div className="row headingOne">
        <div className="col-12">
          <div className="all">
            <h6 className='con-title'>NEW ITEMS</h6>
            <h1 className="con-description">Some of the <span style={{ fontStyle: 'italic' }}>jewels</span> from our<br />new summer casual wear collection</h1>
          </div>
        </div>
      </div>
      <div className="row">
        {data.map((product, index) => (
          <div className="col-12 col-sm-6 col-md-4 col-lg-3 carde" key={index} title={product.name}>
            <img src={product.thumbnail} alt="" />
            <div className="price">${product.price}</div>
            <div className="name"><Link to={`/product/${product.id}`}>{product.name}</Link></div>
            {product.new && <div className='new'>NEW</div>}
            {product.promo && (
              <>
                <div className='promo'>-{product.promoValue}%</div>
                <div className='oldPrice'>${product.oldPrice}</div>
              </>
            )}
            {product.sold && <div className='sold'>SOLD</div>}
          </div>
        ))}
      </div>
      <FourSec/>
    </div>
  );
}
