import React, { Fragment } from "react";
import { Card, Button, ButtonGroup } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

// import './rumah.css'

const Rumah = (props) => {
    return (
        // 
        <div className="col-4 mt-4">
            {
                props.data.gallery[0] ?
                    <div className="img-thumb">
                        <img src={props.data.gallery[0].image} alt="dummy" width="200px" />
                    </div>
                    :
                    <div>
                        <p className="text-warning">Tidak ada gambar</p>
                    </div>

            }

            <div className="content">
                <h4 className="title" onClick={() => props.goDetail(props.data.id)}>{props.data.nama}</h4>
                {/* <p className="desc">{props.data.alamat}</p>
                <p className="desc">{props.data.keterangan}</p> */}
                <p className="desc btn btn-sm btn-warning" onClick={() => props.goDetail(props.data.id)}>{props.data.category.nama}</p>



                {/* 
                <button className="update" onClick={() => props.update(props.data)}>Update</button>
                <button className="button" onClick={() => props.remove(props.data.id)}>Remove</button> */}
            </div>
        </div>
    );
};

export default Rumah;