import React from 'react'
import './product.css'
function Products() {
    const data = [
        {
            name: "Abstract 3D",
            Stock: "32 Stock",
            price: "$45.99",
            Total_sale: "20",
            img: './spare.jpeg'
        },
        {
            name: "Sarphens illustration",
            Stock: "32 Stock",
            price: "$45.99",
            Total_sale: "20",
            img: './spare.jpeg'

        },

    ]
    return (
        <div className='product-div'>
            <h3>Product Sell</h3>

            <table>
                <tr>
                    <th>Produt</th>

                    <th>Stock</th>
                    <th>Price</th>
                    <th>Total sale</th>
                </tr>
                
                {data.map((i, val) => {
                            return <tr>
                            <td style={{display:'flex',justifyContent:'flex-start', alignItems:'center'}}>
                                <img className='img' src={i.img} alt="" />

                                {i.name}
                            </td>
                            <td>{i.Stock}</td>
                            <td>{i.price}</td>
                            <td>{i.Total_sale}</td>
                        </tr>
                        })}
                
            </table>

            <div className="heading">
                {/* <div className="leftHeading">

                </div>
                <div className="rightHeading">

                    <h4>Stock</h4>
                    <h4>Price</h4>
                    <h4>Total sale</h4>
                </div> */}
            </div>
            {/* <div className="heading">
                <div className="contentLeftContaine">

                </div>
                <div className="contentRightContent">
                    <div className="leftContent name">
                        {data.map((i, val) => {
                            return <div className='nameContent' style={{ 'display': 'flex' }}>
                                <img src={i.img} alt="" />
                                <h4>{i.name}</h4>
                            </div>
                        })}

                    </div>

                    <div className="leftContent">
                        {data.map((i, val) => <h4>{i.Stock}</h4>)}

                    </div>
                    <div className="leftContent">
                        {data.map((i, val) => <h4>{i.price}</h4>)}

                    </div>
                    <div className="rightContent">

                        {data.map((i, val) => <h4>{i.Total_sale}</h4>)}

                    </div>
                </div>
            </div> */}





        </div>
    )
}

export default Products