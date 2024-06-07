import React, { useState } from 'react'
import Product from '../Product'

const ProductList = () => {
    const [categoriaTab, setCategoriaTab] = useState('Hamburguer');
  return (
    <section className='my-12 max-w-screen-xl mx-auto px-3'>
        {/* MENU DE CATEGORIA */}
        <div className='flex items-center justify-center space-x-6'>
            <p className='active-menu-tab bg-primary'>Hamburguer</p>
            <p className='menu-tab'>Brasileira</p>
            <p className='menu-tab'>Japonesa</p>
        </div>
        {/* LISTA DE PRODUTOS */}
        <div className=''>
            <Product/>
        </div>
    </section>
  )
}

export default ProductList