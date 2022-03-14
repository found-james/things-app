const React = require('react');
const Default = require('../Default');

class Index extends React.Component {
    render () {
        const { products } = this.props;
        return (
            <Default>
                <div>
                        {
                            products.map(product => (
                                <article>
                                    <a href={`/products/${product._id}`}>
                                        <h2>
                                            {product.name}
                                        </h2>
                                    </a>
                                </article>
                            ))
                        }

                    <a href='/products/new'><button>create new product</button></a>


                                        <a href='/user/logout'>
                        <button>logout</button>
                    </a>
                </div>
            </Default>
        )
    }
}

module.exports = Index;

