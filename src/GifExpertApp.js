import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { AddCategory } from './components/AddCategory';
import GifGrid from './components/GifGrid';

const GifExpertApp = props => {

    const [categories, setCategories] = useState(['Drift']);

    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={setCategories}></AddCategory>
            <hr></hr>
            <ol>
                {
                    categories.map(category => (<GifGrid
                        category={category}
                        key={category}>

                    </GifGrid>))
                }
            </ol>

        </>
    )
}

GifExpertApp.propTypes = {

}

export default GifExpertApp
