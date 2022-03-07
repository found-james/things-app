const React = require('react');
const Default = require('./Default.jsx');

class Index extends React.Component {
    render() {
        return(
            <Default>
                <section id="main-carousel" className="carousel-item active">
                    <div id="index-carousel" className="container">
                        <h1>Slide one</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
                           tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
                           quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                           Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                           Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </p>
                    </div>
                </section>
                <section id="wide-sec-one">
                    <div>
                    </div>
                    <div>
                    </div>
                </section>
                <section id="wide-sec-two">
                    <div>
                        <h2>Nec feugiat</h2>
                        <p>
                            Tellus id interdum velit laoreet id. 
                            Diam maecenas ultricies mi eget mauris. 
                            Eget est lorem ipsum dolor sit amet. 
                            Placerat orci nulla pellentesque dignissim enim sit amet.
                        </p>
                    </div>
                    <div>
                    </div>
                </section>
                <section id="wide-sec-three">
                    <div>
                        <h2>Pharetra pharetra</h2>
                        <p>
                            Velit laoreet id donec ultrices tincidunt. 
                            Nunc vel risus commodo viverra maecenas accumsan. 
                            Habitant morbi tristique senectus et netus et. 
                            Diam vel quam elementum pulvinar.
                        </p>
                    </div>
                    <div>
                        <h2>Vel habitant</h2>
                        <p>
                            Et malesuada fames ac turpis egestas. 
                            Elementum integer enim neque volutpat ac tincidunt. 
                            Quam quisque id diam vel quam elementum pulvinar etiam. 
                            Non tellus orci ac auctor augue. 
                            Tellus in hac habitasse platea dictumst vestibulum rhoncus est.
                        </p>
                    </div>
                    <div>
                        <h2>Turpis massa</h2>
                        <p>
                            Velit laoreet id donec ultrices tincidunt. 
                            Nunc vel risus commodo viverra maecenas accumsan. 
                            Habitant morbi tristique senectus et netus et. 
                            Diam vel quam elementum pulvinar. 
                        </p>
                    </div>
                </section>
            </Default>
        )
    }
}
module.exports = Index;
