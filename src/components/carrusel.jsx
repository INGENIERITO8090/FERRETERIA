import React from 'react'

export default function carrusel() {
  return (

    <div> 
      <div className='row'> 
        <div className='col'  > 
          < div className='row' > 
            <div className='col-5'> 
             <h2 style={{boxShadow:"0 5px 7px rgba(0,0,0,.1)", fontSize:430+"%" , textAlign:"start",color:"rgb(52, 61, 139)", fontfamily: 'sant-serrif Bungee Spice' }}>Despachos &nbsp;  &nbsp;  de &nbsp;  herramientas &nbsp;  &nbsp;    y  &nbsp;   materiales de construccion</h2>
           
              
                </div> 
                <div className='col'>
                <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
                    <div class="carousel-indicators">
                      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    </div>
                                        <div class="carousel-inner"   >
                                          <div class="carousel-item active">
                                          <img src="https://img.interempresas.net/FotosArtProductos/P164118.jpg" className='rounded mx-auto d-block'  alt="" style={{  width:90+"%", height:90+"%"        }} />
                                            <div class="carousel-caption d-none d-md-block">
                                              <h5>First slide label</h5>
                                              <p>Some representative placeholder content for the first slide.</p>
                                            </div>
                                          </div>
                                          <div class="carousel-item">
                                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzDEYuavFlhzy8bnARwnKbhQqdj4ZJCo5-nQ&usqp=CAU" alt="" className='rounded mx-auto d-block' style={{height:80+"%" ,width:90+"%"}}/>
                                            <div class="carousel-caption d-none d-md-block">
                                              <h5>Second slide label</h5>
                                              <p>Some representative placeholder content for the second slide.</p>
                                            </div>
                                          </div>
                                          <div class="carousel-item">
                                          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzDEYuavFlhzy8bnARwnKbhQqdj4ZJCo5-nQ&usqp=CAU" alt="" className='rounded mx-auto d-block'  style={{height:80+"%" ,width:90+"%"}} />
                                            <div class="carousel-caption d-none d-md-block">
                                              <h5>Third slide label</h5>
                                              <p>Some representative placeholder content for the third slide.</p>
                                            </div>
                                          </div>
                                        </div>
                                                        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                                                          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                                          <span class="visually-hidden">Previous</span>
                                                        </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                  <span class="carousel-control-next-icon" aria-hidden="true"></span>
                  <span class="visually-hidden">Next</span>
                </button>
              </div>
              </div>


            <div className='row'>
            <div className='col'> <h1> &nbsp; </h1></div>
            </div>

        </div>
        <div className='row' >  
                      <div className='col' >
      
                
                  
                </div>



          </div>
        </div>
      </div> 
    </div>
    
  )
}
