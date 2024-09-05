import React from 'react';
import Image from 'next/image';

const Product = async() => {
  const response =await fetch('http://localhost:1337/api/products?populate[Image][fields][0]=name&populate[url][fields][1]=url&pagination[pageSize]=10&pagination[page]=1&status=published&locale[0]=enhttp://localhost:1337/api/products?populate[image][fields][0]=name&populate[image][fields][1]=url&pagination[pageSize]=10&pagination[page]=1&status=published&locale[0]=en',{ cache:  'no-store' }) 
  const data = await response.json();
  if (data) console.log("heelo i am here",data);

  return (
    <div className="album py-5 bg-light">
      <div className="container">
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
          {data && data.data?.map((car, index) => (
            <div className="col" key={index}>
              <div className="card shadow-sm">
                <Image 
                  src={`http://localhost:1337${car.image.url}`} 
                  alt={car.jpg} 
                  width={420} 
                  height={250} 
                />
                <div className="card-body">
                  <p className="card-text"></p>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="btn-group">
                      <button type="button" className="btn btn-sm btn-outline-secondary">View</button>
                      <button type="button" className="btn btn-sm btn-outline-secondary">Edit</button>
                    </div>
                    <small className="text-muted">9 mins</small>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Product;
