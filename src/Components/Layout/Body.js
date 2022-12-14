import React from "react";
import Productos from "../Products/Productos";


function Body() {
    console.log(Productos)
    return (
        <>

            {/* <div className="product-big-title-area">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="product-bit-title text-center">
                                <h2>Shop</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}


            <div className="single-product-area " style={{backgroundColor:'#f5f5f5'}}>
                <div className="zigzag-bottom"></div>
                <div className="container"  style={{backgroundColor:'#f5f5f5'}}>
                    <div className="row " style={{backgroundColor:'#f5f5f5'}}>

                       <Productos/>
                </div>
                    <div className="row"  style={{backgroundColor:'#f5f5f5'}}>
                        <div className="col-md-12">
                            <div className="product-pagination text-center">
                                <nav>
                                    <ul className="pagination">
                                        <li>
                                            <a href="#" aria-label="Previous">
                                                <span aria-hidden="true">&laquo;</span>
                                            </a>
                                        </li>
                                        <li><a href="#">1</a></li>
                                        <li><a href="#">2</a></li>
                                        <li><a href="#">3</a></li>
                                        <li><a href="#">4</a></li>
                                        <li><a href="#">5</a></li>
                                        <li>
                                            <a href="#" aria-label="Next">
                                                <span aria-hidden="true">&raquo;</span>
                                            </a>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </div>







        </>
    )

}

export default Body;