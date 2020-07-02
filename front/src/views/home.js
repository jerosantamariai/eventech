import React from 'react';
import Navbar from '../components/navbar';
import Footer from './footer';

const Home = props => {
    return (
        <>
            <div className="homestainer">

                {/* banner */}
                <div id="banner">
                    <div id="carouselExampleCaptions" className="carousel slide " data-ride="carousel" >
                        <ol className="carousel-indicators ">
                            <li data-target="#carouselExampleCaptions" data-slide-to="0" className="active"></li>
                            <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
                            <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
                        </ol>
                        <div className="carousel-inner" id="carrusel-home" role="listbox">
                            <div className="carousel-item active ">
                                <img
                                    src="https://betronicmusic.com/wp-content/uploads/2018/05/Don-Diablo.jpg"
                                    className="d-block w-100"
                                    alt="..." />
                                <div className="carousel-caption d-none d-md-block">
                                    <h2>Conciertos</h2>
                                </div>
                            </div>
                            <div className="carousel-item ">
                                <img
                                    src="https://tellado.es/wp-content/uploads/2017/06/fans.jpeg"
                                    className="d-block w-100"
                                    alt="..." />
                                <div className="carousel-caption d-none d-md-block">
                                    <h2>Fiestas masivas</h2>
                                </div>
                            </div>
                            <div className="carousel-item justify-content-center">
                                <img src="https://farodeportivo.s3-sa-east-1.amazonaws.com/wp-content/uploads/2020/05/17193538/la-Roja-en-Eliminatorias.jpg"
                                    className="d-block w-100" alt="..." />
                                <div className="carousel-caption d-none d-md-block">
                                    <h2>Eventos deportivos</h2>
                                </div>
                            </div>
                        </div>
                        <a className="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="sr-only">Previous</span>
                        </a>
                        <a className="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="sr-only">Next</span>
                        </a>
                    </div>
                </div>

                {/* Page Content */}
                <div className="row">
                    <div className="col-md-1"></div>
                    <div className="col-md-6 col-xs-6 mr-2 mt-5 mb-5">
                        <h1>What We Do</h1>
                        <hr />
                        <p className=" text-justify" id="p-Home">Lorem ipsum dolor sit amet, consectetur adipisicing elit. A deserunt neque tempore recusandae animi soluta quasi? Asperiores rem dolore eaque vel, porro, soluta unde debitis aliquam laboriosam. Repellat explicabo, maiores!</p>
                        <p className=" text-justify" id="p-Home">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis optio neque consectetur consequatur magni in nisi, natus beatae quidem quam odit commodi ducimus totam eum, alias, adipisci nesciunt voluptate. Voluptatum.</p>
                        <a className="btn btn-primary btn-lg" href="#">Call to Action &raquo;</a>
                    </div>
                    <div className="col-md-4 col-xs-4 ml-5 mt-5 mb-5">
                        <h1 >Contact</h1>
                        <hr />
                        <address>
                            <p className="ml-3" id="p-Home"><strong>Javiera Izquierdo Martino</strong></p>
                            <p className="ml-3" title="Phone" id="p-Home">Phone: (+56) 99 345 8208</p>
                            <p className="ml-3" title="Email" id="p-Home">Email:<a href="mailto:javieraizquierdo7@gmail.com">  javieraizquierdo7@gmail.com</a></p>
                            <br />
                            <p className="ml-3" id="p-Home"><strong>Jerónimo Santa María Illanes</strong></p>
                            <p className="ml-3" title="Phone2" id="p-Home">Phone: (+56) 99 345 8208</p>
                            <p className="ml-3" title="Email2" id="p-Home">Email:<a href="mailto:jerosantamariai@gmail.com">  jerosantamariai@gmail.com</a></p>
                            <br />
                        </address>
                    </div>
                </div>
                {/* /.row */}

                <div className="row">
                    <div className="col-md-1"></div>
                    <div className="col-md-10 col-xs-5 mr-2 mt-5 mb-5">
                        <h1>Projects</h1>
                        <hr />
                        <div className="card-group">
                            <div class="col-md-4 mb-5">
                                <div class="card h-100">
                                    <img class="card-img-top" src="http://placehold.it/300x200" alt="" />
                                    <div class="card-body">
                                        <h4 class="card-title">Project 3</h4>
                                        <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente esse necessitatibus neque sequi doloribus.</p>
                                    </div>
                                    <div class="card-footer">
                                        <a href="#" class="btn btn-primary">Find Out More!</a>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-4 mb-5">
                                <div class="card h-100">
                                    <img class="card-img-top" src="http://placehold.it/300x200" alt="" />
                                    <div class="card-body">
                                        <h4 class="card-title">Project 4</h4>
                                        <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente esse necessitatibus neque sequi doloribus.</p>
                                    </div>
                                    <div class="card-footer">
                                        <a href="#" class="btn btn-primary">Find Out More!</a>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-4 mb-5">
                                <div class="card h-100">
                                    <img class="card-img-top" src="http://placehold.it/300x200" alt="" />
                                    <div class="card-body">
                                        <h4 class="card-title">Project 5</h4>
                                        <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente esse necessitatibus neque sequi doloribus.</p>
                                    </div>
                                    <div class="card-footer">
                                        <a href="#" class="btn btn-primary">Find Out More!</a>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-4 mb-5">
                                <div class="card h-100">
                                    <img class="card-img-top" src="http://placehold.it/300x200" alt="" />
                                    <div class="card-body">
                                        <h4 class="card-title">Project 6</h4>
                                        <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente esse necessitatibus neque sequi doloribus.</p>
                                    </div>
                                    <div class="card-footer">
                                        <a href="#" class="btn btn-primary">Find Out More!</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

                <Footer />
            </div>

        </>
    )
}

export default Home;  