import React from 'react'
import "./body.css"
import shoe from "../../assets/red-shoe.jpg";
import amazon from "../../assets/amazon.png"
import flipkart from "../../assets/flipkart.png"
function Body() {
    return (
        <>
            <section className="body">
                <div className="left-body">
                    <h1>
                        YOUR FEET<br />
                        DESERVE<br />
                        THE BEST
                    </h1>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Temporibus vel corrupti debitis reprehenderit? Non aut consequuntur sit doloremque voluptate odit.</p>

                    <div className="button">
                    <button>Shop Now</button>
                    <button>Catagory</button>
                    </div>

                    <span>Also available on*</span>

                    <div className="e-com">
                        <img src={amazon} alt="" />
                        <img src={flipkart} alt="" />
                    </div>
                </div>
                <div className="right-body">
                    <img src= {shoe} alt="red-shoe" />
                </div>
            </section>
        </>
    )
}

export default Body
