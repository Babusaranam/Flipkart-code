import React from 'react';
import { Link } from "react-router-dom";

function Flipkartplus(){
    return(
    <div className="plus">
        
            <h1 className=" text-capitalize"> haii welcome to flipkat plus membership.earn super coins and become plusmember </h1>
            <img src="https://cdn.thepassage.cc/1110x625/filters:format(webp):quality(90)/public/image/2019/05/03/flipkart.jpg " alt="flipkart image" width="100%"height="400px"></img>
            <br></br>
            <Link type="button " className="btn btn-danger" to="/Home">back to Home</Link>

        <div class="cerd">
      
        <div className="card-body">
          <h4 className="card-title">Card title</h4>
          <p className="card-text text-red">Some quick example text to build on the card title and make up the bulk of the card's content. </p>
          <a href="./Offers" class="btn btn-danger">check here for offers</a>
         
        </div>
        </div>
        </div>
      
      
    )
}
export default Flipkartplus;