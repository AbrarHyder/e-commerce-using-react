import React from 'react'

export const Product = () => {

    const[page,setPage] = React.useState(1)
    return (
        <>
        <h1> Product list using JSON Server </h1>

        <div className="Product"> 
        <div>
        
        <h4> id: 1</h4>
        <h4> title: Bloodworth</h4>
        <h4> gender: female</h4>
        <h4> price: 3978</h4>
        <h4>category: saree</h4>
        <img src="https://picsum.photos/200"/>
        <button> Delete </button>
        </div>

        <div>
        
        <h4> id: 2</h4>
        <h4> title: Tomik</h4>
        <h4> gender: female</h4>
        <h4> price: 2198</h4>
        <h4>category: jacket</h4>
        <img src="https://picsum.photos/200"/>
        <button> Delete </button>
        </div>

        <div>
        <h4> id: 3</h4>
        <h4> title: Pauley</h4>
        <h4> gender: male</h4>
        <h4> price: 933</h4>
        <h4>category: jacket</h4>
        <img src="https://picsum.photos/200"/>
        <button> Delete </button>
        </div>

        <div>
        <h4> id: 4</h4>
        <h4> title: Edgerley</h4>
        <h4> gender: female</h4>
        <h4> price: 4198</h4>
        <h4>category: shirt</h4>
        <img src="https://picsum.photos/200"/>
        <button> Delete </button>
        </div>

        <div>
        <h4> id: 5</h4>
        <h4> title: Featherstonhaugh</h4>
        <h4> gender: female</h4>
        <h4> price: 3498</h4>
        <h4>category: shirt</h4>
        <img src="https://picsum.photos/200"/>
        <button> Delete </button>
        </div>

        <div>
        <h4> id: 6</h4>
        <h4> title: Busek</h4>
        <h4> gender: female</h4>
        <h4> price: 2198</h4>
        <h4>category: jacket</h4>
        <img src="https://picsum.photos/200"/>
        <button> Delete </button>
        </div>

        <div>
        <h4> id: 7</h4>
        <h4> title: Myrie</h4>
        <h4> gender: male</h4>
        <h4> price: 2198</h4>
        <h4>category: shirt</h4>
        <img src="https://picsum.photos/200"/>
        <button> Delete </button>
        </div>

        <div>
        <h4> id: 8</h4>
        <h4> title: Doxey</h4>
        <h4> gender: male</h4>
        <h4> price: 1298</h4>
        <h4>category: trouser</h4>
        <img src="https://picsum.photos/200"/>
        <button> Delete </button>
        </div>

        <div>
        <h4> id: 9</h4>
        <h4> title: Markel</h4>
        <h4> gender: male</h4>
        <h4> price: 2198</h4>
        <h4>category: jacket</h4>
        <img src="https://picsum.photos/200"/>
        <button> Delete </button>
        </div>

        <div>
        <h4> id: 10</h4>
        <h4> title: Ivons</h4>
        <h4> gender: male</h4>
        <h4> price: 218</h4>
        <h4>category: jacket</h4>
        <img src="https://picsum.photos/200"/>
        <button> Delete </button>
        </div>

        </div>

        <button onClick = {() => setPage(page-1)}>  Previous </button>
        <button onClick = {() => setPage(page+1)}> Next </button>
        
        
        </>
        
       
       
    )
}