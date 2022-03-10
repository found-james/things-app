const React = require('react');
const DefaultAdmin = require('./defaultAdmin');

class New extends React.Component {
    render () {
        return (
            <DefaultAdmin>
                <section id="add-new-product">
                    <form>
                        <div className="form-group">
                            <label>
                                product:  <input type="text" 
                                                 className="form-control" 
                                                 placeholder="product name"/>
                            </label>
                        </div>
                        <div className="form-group">
                            <label>
                                retail price: <input type="text" 
                                                     className="form-control" 
                                                     placeholder="cost inclduing currency"/>
                            </label>
                        </div>
                        <div class="form-group">
                            <label>
                                size: <input type="text" 
                                             className="form-control" 
                                             placeholder="XS, small, medium, large, XL"/>
                            </label>
                        </div>
                        <div class="form-group">
                            <label>
                                grouping: <input type="text" 
                                                 className="form-control" 
                                                 placeholder="outerwear, top, bottom, footwear, accessories"/>
                            </label>
                        </div>
                        <div class="form-group">
                            <label>
                                sex: <input type="text" 
                                                 className="form-control" 
                                                 placeholder="male female"/>
                            </label>
                        </div>
                            <label>
                                image: <input type="text" 
                                              className="form-control" 
                                              placeholder="insert url here"/>
                            </label>

                        <button type="submit" class="btn btn-primary">Submit</button>
                    </form>
                </section>
            </DefaultAdmin>
        )
    }

}

module.exports = New;