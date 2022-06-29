import React from 'react'
import Armani from "../assets/img/armani.jpg"
import Nike from "../assets/img/nike.jpg"
import Adidas from "../assets/img/adidas.jpg"
import Puma from "../assets/img/puma.jpg"
import Tommy from "../assets/img/tommy.jpg"

//child
export default function Shoes(props) {

    return (
            <div className="container">
                <div className="child">
                    <h3>Armani</h3>
                    <img className="image" src={Armani} alt=""/>
                    <ul>
                        <li>Brand Shoe:<strong>{props.brandName}</strong></li>
                        <li>Brand Price:<strong>{props.brandSize}</strong></li>
                        <li>Brand Size:<strong>{props.brandPrice}</strong></li>
                    </ul>
                </div>

                <div className="child">
                    <h3>Nike</h3>
                    <img className="image" src={Nike} alt=""/>
                    <ul>
                        <li>Brand Shoe:<strong>{props.brandName1}</strong></li>
                        <li>Brand Price:<strong>{props.brandSize1}</strong></li>
                        <li>Brand Size:<strong>{props.brandPrice1}</strong></li>
                    </ul>
                </div>

                <div className="child">
                    <h3>Adidas</h3>
                    <img className="image" src={Adidas} alt=""/>
                    <ul>
                        <li>Brand Shoe:<strong>{props.brandName2}</strong></li>
                        <li>Brand Price:<strong>{props.brandSize2}</strong></li>
                        <li>Brand Size:<strong>{props.brandPrice2}</strong></li>
                    </ul>
                </div>

                <div className="child">
                    <h3>Puma</h3>
                    <img className="image" src={Puma} alt=""/>
                    <ul>
                        <li>Brand Shoe:<strong>{props.brandName3}</strong></li>
                        <li>Brand Price:<strong>{props.brandSize3}</strong></li>
                        <li>Brand Size:<strong>{props.brandPrice3}</strong></li>
                    </ul>
                </div>

                <div className="child">
                    <h3>Tommy</h3>
                    <img className="image" src={Tommy} alt=""/>
                    <ul>
                        <li>Brand Shoe:<strong>{props.brandName4}</strong></li>
                        <li>Brand Price:<strong>{props.brandSize4}</strong></li>
                        <li>Brand Size:<strong>{props.brandPrice4}</strong></li>
                    </ul>
                </div>
                
            </div>
    )
}