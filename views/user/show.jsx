const React = require('react');
const Default = require('./default.jsx');

class Gallery extends React.Component {
    render() {
        return (
        <Default>
            <section className="gallery-subheader">
                
            </section>
            <section className="product-description">
                <article className="product-img">
                </article>
                <article className="description-txt">
                    <div>
                        <h2>Velit dignissim </h2>
                        <h4>Ultrices neque ornare aenean</h4>
                    </div>
                    <div>
                        <span>
                        </span>
                        <span>
                        </span>
                        <span>
                        </span>
                        <span>
                        </span>
                    </div>
                    <div>
                        <button> Button</button>
                        <button> Button 2 </button>
                    </div>
                    <div>
                        <p>
                            Elementum pulvinar etiam non quam lacus suspendisse faucibus. 
                            Massa sapien faucibus et molestie ac feugiat. 
                            Nam libero justo laoreet sit amet cursus sit amet dictum. 
                        </p>
                        <ul>
                            <li>Viverra nam libero justo</li>
                            <li>Sed odio morbi quis</li>
                            <li>Bibendum at varius</li>
                        </ul>
                    </div>
                </article>
            </section>
            <section className="read-post-comments">   
                <article>
                </article>
                <article>
                </article>
            </section>
            <section className="suggested-for-you">
            </section>
        </Default>
        )
    }
}

module.exports = Gallery;