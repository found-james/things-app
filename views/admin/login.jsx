const React = require('react');
const DefaultAdmin = require('./defaultAdmin');

class Login extends React.Component {

    render() {
        return (
            <DefaultAdmin>
                <section id="login">
                    <form>
                        <div className="form-group">
                            <label>
                                Email address: <input type="email" 
                                                      className="form-control"  
                                                      aria-describedby="emailHelp" 
                                                      placeholder="Enter email"/>
                            </label>
                        </div>
                        <div className="form-group">
                            <label>
                                Password: <input type="password" 
                                                 className="form-control" 
                                                 placeholder="Password"/>
                            </label>
                        </div>
                        {/* <div class="form-check">
                            <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
                            <label class="form-check-label" for="exampleCheck1">Check me out</label>
                        </div> */}
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
                </section>
            </DefaultAdmin>
        )
    }
}

module.exports = Login;