import logo from './logo.svg';
import './App.css';
import { Navbar, Container, Nav, Card, Button, Modal } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component, Fragment } from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Rumah from './Rumah';
import Detail from './Detail';





class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      rumah: [],
      rumah1: [],
      detail: false,
    }
  }



  getPostApi = () => {
    axios.get(`http://127.0.0.1:8000/api/rumah`)
      .then((result) => {
        // console.log(result.data);
        this.setState({
          rumah: result.data
        })
        console.log(this.state.rumah);
        console.log(this.state.rumah);


      })
  }

  mati = () => {
    this.setState({
      detail: false
    })
  }

  handleDetail = (id) => {
    axios.get(`http://127.0.0.1:8000/api/rumah/${id}`)
      .then((result) => {
        // console.log(result.data);
        this.setState({
          rumah1: result.data,
          detail: true
        })
        console.log(this.state.rumah1);
        // alert(
        //   ` nama rumah : ${this.state.rumah1.data.nama} 
        //     alamat rumah : ${this.state.rumah1.data.alamat}
        //     keterangan : ${this.state.rumah1.data.keterangan}
        //   `
        // )





      })

  }








  //Get Data All
  componentDidMount() {
    // fetch('https://jsonplaceholder.typicode.com/posts')
    // .then(response => response.json())
    // .then(json => {
    //     this.setState({
    //         post:json
    //     })
    // })


    this.getPostApi();
    // console.log(this.state.rumah);
  }



  render() {

    return (
      <div className="App">
        <Navbar bg="light" expand="lg">
          <Container>
            <Navbar.Brand href="#home">AppRumah</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                {/* <Nav.Link href="#home">Rumah Sewa</Nav.Link>
              <Nav.Link href="#home">Rumah diJual</Nav.Link> */}
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>



        <h3 className="text-primary mt-4"> Daftar Rumah</h3>

        {
          this.state.detail ?
            <div className="container mt-5">
              <div className="row justify-content-center">
                <div className="col-8">
                  <h5>Detail Rumah</h5>
                  <h6 onClick={() => this.mati()}>Nama : {this.state.rumah1.data.nama}</h6>
                  <div className="row">
                    <div className="col ">
                      {
                        this.state.rumah1.data.gallery
                          ?
                          this.state.rumah1.data.gallery.map(gallery => {
                            return <img src={gallery.image} alt="dummy" width="200px" height="200px" className="mr-3" />
                          })
                          :
                          'no image'
                      }

                    </div>

                  </div>


                  <p onClick={() => this.mati()}>Alamat : {this.state.rumah1.data.alamat}</p>
                  <p onClick={() => this.mati()}>Keterangan : {this.state.rumah1.data.keterangan}</p>
                  <p onClick={() => this.mati()} className=" text-lg mr-3">Category : <span className="text-danger"> {this.state.rumah1.data.category.nama}</span></p>
                  <p onClick={() => this.mati()} className="text-center btn btn-danger">Close</p>

                </div>


              </div>





            </div>
            :
            ''

        }
        <div className="container">



          <div className="row">
            {/* <div className="col-4"> */}
            {
              this.state.rumah.data && this.state.rumah.data.map(rumah => {
                return <Rumah key={rumah.id} data={rumah} goDetail={this.handleDetail} />
              })
            }
            {/* </div> */}




          </div>
        </div>


      </div >
    );
  }
}

export default App;
