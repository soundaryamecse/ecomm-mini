import React, { useEffect } from 'react';
import { fetchAllProducts } from '../Redux/Products/action';
import { connect } from 'react-redux'

const Products = ({getAllProducts, product}) => {
    useEffect(()=>{
        getAllProducts();
    }, [])

    console.log("product", product)

    return(
        <>
            {product.map((item, index) => 
                <div key={index}>
                    <img src={item.image} alt={item.id}/>
                </div>
            )}
        </>
    )
}

const mapStateToProps = (state) => ({
    product: state.product.productData
})

const mapDispatchToProps = (payload) => (dispatch) => ({
    getAllProducts: () => dispatch(fetchAllProducts()),
})

export default connect(mapStateToProps, mapDispatchToProps) (Products);