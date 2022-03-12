const React = require('react');
const Default = require('../Default');

class Show extends React.Component {
    render () {
        return (
            <Default>
                <div>
                    <article>
                        <h2>
                            {product.name} <br/>    
                        </h2>
                        <form action={ `/products/${ product._id }?_method=DELETE`} method='POST'>
                            <a href={`/products/${ product._id }/edit`}>
                                <button>edit</button>                           
                            </a>
                        </form>

                        <a href='/products'>
                            <button>back to main</button>
                        </a>
                    </article>
                </div>
            </Default>
        )
    }
}

module.exports = Show;