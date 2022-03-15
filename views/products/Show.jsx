const React = require('react');
const Default = require('../Default');

class Show extends React.Component {
    render () {
        const { product } = this.props;
        return (
            <Default>
                <div>
                    <article>
                        <h2>
                            {product.name} <br/>    
                        </h2>
                        <img src={product.img}></img> <br/><br/>
                        <a href={`/products/${ product._id }/edit`}>
                                <button>edit</button>                           
                            </a>
                        <br/><br/>
                        <form action={ `/products/${ product._id }?_method=DELETE`} method='POST'>
                            <button type="submit">Delete</button>
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