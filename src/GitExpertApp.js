import React, { useState } from 'react';

import AddCategory from './components/AddCategory'
import GifGrid from './components/GifGrid';

const GitExpertApp = () => {
    //const categories = ['Kimetsu no Yaiba', 'One Punch', 'Dragon Ball'];

    const [categories, setCategories] = useState(['Kimetsu no Yaiba']);

    // const handleAdd = () => {
    //     setCategories(cats => [...categories, 'HunterXHunter'])
    // }

    return (
        <>
            <h1>GitExpertApp</h1>
            <AddCategory  setCategories={setCategories}/>
            <hr />

            <ol>
                {
                    categories.map((c, i) =>  <GifGrid key={c} category={c} />)
                }
            </ol>
        </>
    )
}

export default GitExpertApp