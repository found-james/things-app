const React = require('react');
const Default = require('../Default');

class New extends React.Component {
    render () {
        return (
            <Default>
                <form action="/products" method="POST">
                    <fieldset>
                      <legend>create new product</legend>
                      <label>
                        NAME:<input type="text" 
                                    name="name" 
                                    placeholder="ent" />
                      </label>
                      <label>
                        COLOR:<input type="text" name="color" placeholder="enter fruit name" />
                      </label>
            
                    </fieldset>
                    <button type="submit"> new </button>
                </form> 
            </Default>
        )
    }
}

module.exports = New;