import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


      
   

    return(
        <form onSubmit={handleSubmit}>
        <label>
          Email:
          <input type="text" value={getEmail} onChange={(e) => setEmail(e.target.value)} />
        </label>
        <br />
        <label>
          Password:
          <input type="password" value={getPassword} onChange={(e) => setPassword(e.target.value)} />
        </label>
        <br />
        <button type="submit">Login</button>
        <h4>Register Here<Link to="/registration">Register</Link></h4>
      </form>
    )
}
export default Login;
