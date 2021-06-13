import React, { Fragment } from "react";
import { Card, Button, ButtonGroup } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

// import './rumah.css'

const Detail = (props) => {
    return (

        // 
        <div className="col-8 mt-4 mb-4">

            {/* {
                props.data.gallery[0] ?
                    <div className="img-thumb">
                        <img src={props.data.gallery[0].image} alt="dummy" width="200px" />
                    </div>
                    :
                    <div>
                        <p className="text-warning">Tidak ada gambar</p>
                    </div>

            } */}
            <div className="content">
                <h4 className="desc">{props.data.nama}</h4>
                <p className="desc">{props.data.alamat}</p>
                <p className="desc">{props.data.keterangan}</p>
                <p className="desc text-dark" >{props.data.category.nama}</p>

            </div>
        </div>
    );
};

export default Detail;