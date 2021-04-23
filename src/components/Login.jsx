import React, {useState} from "react";

function Login(){

    const [isActive, setIsActive] = useState(false);

    function manageClick(){
        setIsActive(prevValue => {
            return true;
        })
    }

    return <div className="container"> 
            <div className="item">
            <img src={process.env.PUBLIC_URL + "/images/login_background_img.png"} alt="Text: Home is where the heart is"/>
            </div>
            <div className="item">
                <div>
                    <h1 className="login-title">Welcome Home!</h1>
                    <form onClick={manageClick}>
                        <div className="mb-3">
                            <input type="email" className="form-control email" id="exampleInputEmail1" placeholder="Email address" />
                        </div>
                        <div className="mb-3">
                            <input type="password" className="form-control password" id="exampleInputPassword1" placeholder="Password" />
                        </div>
                        <div className="button-container">
                            <button type="submit" className="btn btn-outline-light" value="Sign in">Sign in</button>
                        </div>
                    
                        <div className="devider">
                            <span className="devider-content">or</span>
                        </div>

                        <div className="button-container">
                            <button type="submit" className="btn btn-outline-light" value="Sign up">Sign up</button>
                        </div>
                        
                    </form>
                </div>
                
            </div>
    	    
        
            
    </div>
}

export default Login;