import React, { useState } from 'react'

const ProduitsForm = () => {
    
    const [formData, setFormData] = useState({ title_produit: '', Description_produit: '',Prix_produit:'',Stock_produit:'',Pourcentage_produit:'',Image_produit:'' })
    const { title_produit, Description_produit,Prix_produit,Stock_produit,Pourcentage_produit,Image_produit } = formData
    
    const onChange = (e) => {
        setFormData((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value
        }))
    }


    const [showDev, setShowDev] = useState(false);

    const handleClick = () => {
        setShowDev(!showDev);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("clicked")

    }

    return (
        <>
            <form onSubmit={(e) => handleSubmit(e)}>
                <button class="btn bg-danger px-3 text-blod Button_ajoute" onClick={handleClick}>Ajouter</button>

                {showDev &&
                    <div className='position-absolute fixed-top w-25 p-3 bg-white border border-dark mx-auto my-5 rounded-2'>
                        <form action="/product/add" method="post">
                            <div className='w-100 d-flex flex-row-reverse'>
                                <button onClick={handleClick}>
                                    x
                                </button>
                            </div>
                            <div class="form-group">
                                <label for="exampleInputEmail1"> title_produit</label>
                                <input type="text"  name="title_produit"  value={title_produit} onChange={(e) => setFormData(e.target.value)}class="form-control rounded-3" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="title_produit" />
                            </div>
                            <div class="form-group">
                                <label for="exampleInputEmail1">Description_produit</label>
                                <input type="text" name="Description_produit" value={Description_produit} onChange={(e) => setFormData(e.target.value)}  class="form-control rounded-3" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Description_produit" />
                            </div>
                            <div class="form-group">
                            <label for="exampleInputEmail1">Prix_produit</label>
                                <input type="number"   name="Prix_produit" value={Prix_produit} onChange={(e) => setFormData(e.target.value)} class="form-control rounded-3" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Prix_produit" />
                            </div>
                            <div class="form-group">
                            <label for="exampleInputEmail1">Stock_produit</label>
                                <input type="number"name="Stock_produit" value={Stock_produit} onChange={(e) => setFormData(e.target.value)} class="form-control rounded-3" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Stock_produit" />
                            </div>
                            <div class="form-group">
                            <label for="exampleInputEmail1">Pourcentage_produit</label>
                                <input type="number"  name="Pourcentage_produit" value={Pourcentage_produit} onChange={(e) => setFormData(e.target.value)}  class="form-control rounded-3" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Pourcentage_produit" />
                            </div>
                            <div class="form-group">
                            <label for="exampleInputEmail1">Image_produit</label>
                                <input type="file"  name="Image_produit" value={Image_produit} onChange={(e) => setFormData(e.target.value)}  class="form-control rounded-3" id="exampleInputEmail1" aria-describedby="emailHelp" />
                            </div>
                            <button class="btn bg-dark px-3 text-white my-1 Button_ajoute" onClick={handleClick}>Ajouter</button>
                            <button class="btn bg-dark px-3 text-white my-1 mx-2 Button_ajoute" onClick={handleClick}>Cancel</button>

                        </form>

                    </div>
                }
            </form>
        </>
    )


}

export default ProduitsForm