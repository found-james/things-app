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
                        href="/css/styles.css" 
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
                    </footer>
                </body>
            </html>
        )
    }
}

module.exports = Default;