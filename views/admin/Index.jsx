const React = require('react');
const DefaultAdmin = require('./DefaultAdmin.jsx');

class Index extends React.Component{

    render() {
            const { products } = this.props ;
            console.log(this.props);
        return (
            <DefaultAdmin>
                <section id="gallery">
                    <article>
                        {
                            products.map((product) => {
                                <div 
                                     className="card" 
                                     style={{width: "18rem;"}}>
                                        <img 
                                             href={`/store/${product._id}`}
                                             src={`${product.img}`} 
                                             className="card-img-top" 
                                             alt={ `${product.alt}` }/>
                                    <div 
                                        className="card-body">
                                        <h5 
                                            className="card-title">
                                                { `${product.name}` }
                                        </h5>
                                        <p 
                                            className="card-text">

                                            { `${product.description}` }
                                        </p>
                                        <p className="card-text">

                                            { `${product.price}` }
                                        </p>
                                        <a href="#" className="btn btn-primary">Go somewhere</a>
                                    </div>
                                </div>
                            })
                        }
                    </article>
                </section>
            </DefaultAdmin>

        )
    }
}

module.exports = Index;