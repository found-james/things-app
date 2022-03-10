const React = require('react');

class Default extends React.Component { 
    render(){
        
        return (
            <html lang="en">
                <head>
                    <meta charSet='UTF-8'/>
                    <meta httpEquiv="X-UA-Compatible" content="IE=edge"/>
                    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                    <title> store </title>
                    <link
                        rel='stylesheet'
                        href="https://fonts.googleapis.com/css?family=Roboto:300,300italic,700,700italic"
                    />
                    <link
                        rel="stylesheet"
                        href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.css"
                    />
                    <link
                        rel="stylesheet"
                        href="https://cdnjs.cloudflare.com/ajax/libs/milligram/1.4.1/milligram.css"
                    />
                    <link 
                        rel="stylesheet" 
                        href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/css/bootstrap.min.css" 
                        integrity="sha384-zCbKRCUGaJDkqS1kPbPd7TveP5iyJE0EjAuZQTgFLD2ylzuqKfdKlfG/eSrtxUkn" 
                        crossOrigin="anonymous"
                    />
                    <link 
                        rel="stylesheet" 
                        href="/css/app.css" 
                    />

                {/* Jquery */}
                    <script
                    defer
                    src="https://code.jquery.com/jquery-3.6.0.min.js"
                    integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4="
                    crossOrigin="anonymous"
                    ></script>
                    {/* OUR CSS AND JS */}
                    {/* <script src="/app.js" defer></script> */}
                </head>
                <body>
                    <header>
                        <h1> store </h1>
                    </header>
                    <main>
                        {this.props.children}
                    </main>
                    <footer>
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
                        <h5>
                            Velit laoreet id donec ultrices tincidunt.   
                        </h5>
                        <h5>
                            Nunc vel risus commodo viverra maecenas accumsan.  
                        </h5>
                        <h5>
                            Habitant morbi tristique senectus et netus et.
                        </h5>
                        <span>
                            <input placeholder="email here"></input>
                            <button>submit</button>
                        </span>
                        </div>
                    </footer>
                </body>
            </html>
        )
    }
}

module.exports = Default;