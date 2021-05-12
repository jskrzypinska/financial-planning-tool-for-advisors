import React from 'react'

const Mockup = () => {
    return (
    <div style = {{margin: "3rem 5rem"}}>
        <h2 className="client-name">Booo Bi &amp; Karlo Ko</h2>

    {/* module selection tabs */}
        <nav className="navbar">
            <div className="nav-tab">Setup</div>
            <div className="nav-tab active">Retirement</div>
            <div className="nav-tab">College</div>
            <div className="nav-tab">Debt Payoff</div>
            <div className="nav-tab">Social Security</div>
            <div className="nav-tab">Setup</div>
        </nav>
        {/* module contents */}
        <section className="flex-row">
             {/* plan variation toggles */}
            <div>
               
                <h3>Return</h3>
                
                <div className="variation-section">
                    <button className="variation-section-button">6%</button>
                    <button className="variation-section-button">7%</button>
                    <button className="variation-section-button">8%</button>
                </div>

                <h3>Income</h3>
                
                <div>
                    <button className="variation-section-button">70,000</button>
                    <button className="variation-section-button">80,000</button>
                    <button className="variation-section-button">90,000</button>
                </div>

                <h3>Age</h3>
                
                <div>
                    <button className="variation-section-button">55</button>
                    <button className="variation-section-button">60</button>
                    <button className="variation-section-button">65</button>
                </div>


            </div>
            {/* plan results */}
            <div>
                {/* top row of results */}
                <div className="top-row">

                    <div className="top-row-section">
                        <p>Savings at retirement</p>
                        <p>1,000</p>
                    </div>

                    <div className="top-row-section">
                        <p>Lasts Until</p>
                        <p>95</p>
                    </div>

                    <div className="top-row-section">
                        <p>Crypto Money?</p>
                        <p>No</p>
                    </div> 
                    
                </div>  

                 {/* Graph */}
                 <div style = {{width: '1000px', height: '500px', border: "2px solid black "}}>

                 </div>
                {/* Detalied results */}
                <div>
                    
                </div>

                {/* age probabilties */}

            </div>
        </section>
    </div>);
}

export default Mockup