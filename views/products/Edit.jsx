const React = require('react');
const Default = require('../default');

class Edit extends React.Component {
    render () {
        return (
            <Default>
                <form action={`/products/${product._id}?_method=PUT`} method="POST">
                    <fieldset>
                      <legend>edit product</legend>
                      <label>
                        NAME:<input type="text" 
                                    name="name" 
                                    placeholder="ent" />
                      </label>
                      <label>
                        COLOR:<input type="text" name="color" placeholder="enter fruit name" />
                      </label>
                    </fieldset>
                    <button type="submit">{`submit changes for ${product.name}`} </button>
                </form> 
            </Default>
        )
    }
}