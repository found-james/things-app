const React = require('react');
const Default = require('../Default');

class New extends React.Component {
    render () {
        return (
            <Default>
                <section id="add-new-product">
                <a href='/products'>
                            <button>back to main</button>
                        </a>
                    
                    <form action="/products/" method="POST">
                        <div className="form-group">
                            <label>
                                name: <input name="name"
                                              type="text" 
                                              className="form-control" 
                                              placeholder="product name"/>
                            </label>
                        </div>
                        <div className="form-group">
                            <label>
                                retail price: <input name="price"
                                                     type="text" 
                                                     className="form-control" 
                                                     placeholder="cost inclduing currency"/>
                            </label>
                        </div>
                        <div className="form-group">
                            <label>
                                size: <input name="size"
                                             type="text" 
                                             className="form-control" 
                                             placeholder="XS, small, medium, large, XL"/>
                            </label>
                        </div>
                        <div className="form-group">
                            <label>
                                description: <input name="description"
                                                    type="text" 
                                                    className="form-control" 
                                                    placeholder="outerwear, top, bottom, footwear, accessories"/>
                            </label>
                        </div>
                        <div className="form-group">
                            <label>
                                grouping: <input name="grouping"
                                                 type="text" 
                                                 className="form-control" 
                                                 placeholder="outerwear, top, bottom, footwear, accessories"/>
                            </label>
                        </div>
                        <div className="form-group">
                            <label>
                                sex: <input name="sex"
                                            type="text" 
                                            className="form-control" 
                                            placeholder="male female"/>
                            </label>
                        </div>
                        <div>
                            <label>
                                image: <input name="img"
                                              type="text" 
                                              className="form-control" 
                                              placeholder="insert url here"/>
                            </label>
                        </div>
                        <div className="form-group">
                            <label>
                                alt: <input name="alt"
                                            type="text" 
                                            className="form-control" 
                                            placeholder="description of image"/>
                            </label>
                        </div>
                        <button type="submit">Submit</button>
                    </form>
                </section>
            </Default>
        )
    }

}

module.exports = New;