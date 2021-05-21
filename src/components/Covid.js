import React, { useEffect, useState } from 'react'
import './Covid.css'


const Covid = () => {
    const [data, setData] = useState([]);
    const getCovidData = async () => {
        try {
            const res = await fetch('https://api.covid19india.org/data.json')
            // console.log(res)
            const actualData = await res.json();
            console.log(actualData.statewise[0]);
            setData(actualData.statewise[0])



        } catch (err) {
            console.log(err)

        }

    }



    useEffect(() => {
        getCovidData();

    }, []);
    return (

        <div>
            <nav className="nav1">
                <h2 className="heading"> CORONA CASES IN INDIA <span className="badge bg-danger">LIVE</span> </h2>
                <p className="para"> BE AT HOME BE SAFE </p>

            </nav>

            <div className="row">

                <div className="col-sm-6">
                    <div className="card ci" style={{ width: '100%' }}>

                        <div className="card-body">
                            <p className="card__name"> <span> OUR </span> COUNTRY</p>
                            <h2 className="card-title"> INDIA </h2>
                        </div>

                    </div>
                </div>

                <div class="col-sm-6">

                    <div className="card cr" style={{ width: '100%' }}>
                        <div className="card-body">
                            <h3 className="card-title"> <span> TOTAL</span> RECOVERED  </h3>
                            <p className="card__total">{data.recovered} </p>
                        </div>

                    </div>
                </div>
                <div class="col-sm-6">

                    <div className="card co" style={{ width: '100%' }}>
                        <div className="card-body">
                            <h3 className="card-title c"><span> TOTAL</span> CONFIRMED  </h3>
                            <p className="card__total">{data.confirmed} </p>
                        </div>

                    </div>
                </div>
                <div class="col-sm-6">

                    <div className="card d" style={{ width: '100%' }}>
                        <div className="card-body">
                            <h3 className="card-title"> <span> TOTAL</span> DEATH </h3>
                            <p className="card__total">{data.deaths} </p>

                        </div>

                    </div>
                </div>
                <div class="col-sm-6">

                    <div className="card a" style={{ width: '100%' }}>
                        <div className="card-body">
                            <h3 className="card-title"> <span><span> TOTAL</span></span> ACTIVE </h3>
                            <p className="card__total">{data.active} </p>
                        </div>

                    </div>
                </div>
                <div class="col-sm-6">

                    <div className="card u" style={{ width: '100%' }}>
                        <div className="card-body">
                            <h3 className="card-title"> <span> LAST</span> UPDATED </h3>
                            <p className="card__total">{data.lastupdatedtime} </p>
                        </div>

                    </div>
                </div>
                <div class="col-sm-6">


                </div>


            </div>
            <hr />
            <div className="footer">
                <div class="card-footer">
                <div class="alert alert-success" role="alert">
                        Source Code <a href="https://github.com/saurabh-singh-au13/" target=" " class="alert-link">GITHUB </a>.
                </div>
                    <small class="text-muted">Created by <span> Saurabh Kumar Singh</span> </small>
                    
                    
                </div>

            </div>


        </div>


    )
}

export default Covid;
