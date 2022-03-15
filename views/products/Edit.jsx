const React = require('react');
const Default = require('../default');
class Edit extends React.Component {
    render () {
        const { product } = this.props;
        return (
            <Default>

                <section id="add-new-product">
                    <a href='/products'>
                        <button>back to main</button>
                    </a>
                    
                    <form action={`/products/${product._id}?_method=PUT`} method="POST">
                        <h2>Edit</h2>    
                        <div className="form-group">
                            <label>
                                name: <input name="name"
                                              type="text" 
                                              className="form-control" 
                                              placeholder="product name"
                                              defaultValue={product.name}/>
                            </label>
                        </div>
                        <div className="form-group">
                            <label>
                                retail price: <input name="price"
                                                     type="text" 
                                                     className="form-control" 
                                                     placeholder="cost inclduing currency"
                                                     defaultValue={product.price}/>
                            </label>
                        </div>
                        <div className="form-group">
                            <label>
                                size: <input name="size"
                                             type="text" 
                                             className="form-control" 
                                             placeholder="XS, small, medium, large, XL"
                                             defaultValue={product.price}/>
                            </label>
                        </div>
                        <div className="form-group">
                            <label>
                                description: <input name="description"
                                                    type="text" 
                                                    className="form-control" 
                                                    placeholder="sell me this product"
                                                    defaultValue={product.description}/>
                            </label>
                        </div>
                        <div className="form-group">
                            <label>
                                grouping: <input name="grouping"
                                                 type="text" 
                                                 className="form-control" 
                                                 placeholder="outerwear, top, bottom, footwear, accessories"
                                                 defaultValue={product.grouping}/>
                            </label>
                        </div>
                        <div className="form-group">
                            <label>
                                sex: <input name="sex"
                                            type="text" 
                                            className="form-control" 
                                            placeholder="male female"
                                            defaultValue={product.sex}/>
                            </label>
                        </div>
                        <div>
                            <label>
                                image: <input name="img"
                                              type="text" 
                                              className="form-control" 
                                              placeholder="insert url here"
                                              defaultValue={product.img}/>
                            </label>
                        </div>
                        <div className="form-group">
                            <label>
                                alt: <input name="alt"
                                            type="text" 
                                            className="form-control" 
                                            placeholder="description of image"
                                            defaultValue={product.alt}/>
                            </label>
                        </div>
                        <button type="submit">Submit</button>
                    </form>
                            
                </section>
            </Default>
        )
    }

}

module.exports = Edit;