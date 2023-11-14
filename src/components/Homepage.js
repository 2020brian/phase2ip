import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";



    return (
        <div >
            <div>
                <form>
                    <input type="text" placeholder="search..." value= {search} onChange={handleChange}/>
                </form>

            </div>
            <div className="home">
            {filtered.map((phone) => (
                <div className='phones' key={phone.id}>
                    <img src={phone.img} alt={phone.name} />
                    <h3>Brand: {phone.brand}</h3>
                    <h4>Name: {phone.name}</h4>
                    <p>Price: {phone.price}USD</p>
                    <button onClick={() => handleClick(phone.id)}>View More Details</button>
                </div>
            ))}
            </div>
        </div>
    );
}

export default Homepage;
