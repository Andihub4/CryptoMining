import React from 'react';
class Home extends React.Component{
  render() {
  return (
    //home
    <div>
      <span style={{backgroundColor: 'rgb(6, 13, 20)'}}>
            <span style={{ color: 'white', borderColor :'black', marginLeft: '10px', borderRadius: '10px', backgroundColor: 'rgb(6, 13, 31)', borderColor: 'green',paddingLeft: '20px'}} >100</span>
      <span style={{ color: 'green',
      borderColor :'black', marginLeft: '85px', borderRadius: '10px',paddingLeft: '20px',borderColor: 'green',backgroundColor: 'rgb(6, 13, 31)'
      }} >$100.0</span>
      
      
      <span style={{ color: 'red', borderColor :'black', marginLeft: '100px', borderRadius: '17px'}} data-bs-toggle="offcanvas" data-bs-target="#offcanvasResponsive" aria-controls="offcanvasResponsive">👤</span> </span>





<div class="alert alert-info d-none d-lg-block">Resize your browser to show the responsive offcanvas toggle.</div>

<div style={{backgroundColor: 'rgb(6, 13, 31)'}} class="offcanvas-lg offcanvas-end" tabindex="-1" id="offcanvasResponsive" aria-labelledby="offcanvasResponsiveLabel">
  <div style={{backgroundColor: 'rgb(6, 13, 31)'}} class="offcanvas-header">
    <h5 style={{backgroundColor: 'rgb(6, 13, 31)'}} class="offcanvas-title" id="offcanvasResponsiveLabel">Responsive offcanvas</h5>
    <button type="button" class="btn-close" data-bs-dismiss="offcanvas" data-bs-target="#offcanvasResponsive" aria-label="Close"></button>
  </div>
  <div class="offcanvas-body">
    <p style={{backgroundColor: 'rgb(6, 13, 31)'}} class="mb-0">
       
    <li><a class="dropdown-item" href="#">Profile</a></li>
    <li><a class="dropdown-item" href="#">Withdraw</a></li>
        <li><a class="dropdown-item" href="#">A2A</a></li>
    <li><a class="dropdown-item" href="#">Settings</a></li>
        <li><a class="dropdown-item" href="#">about</a></li>
            <li><a class="dropdown-item" href="#">help</a></li>
  
    
    </p>
  </div>
</div>











      
<hr style = {{color:"white"}}></hr>
          
       <button style={{borderRadius: '16px', marginLeft: '160px'}}><img src="images.png" style={{width: '20px'}}></img></button>
       
       <p>.</p>
       <p>.</p>
       
       <a style={{borderRadius: '16px', marginLeft: '150px'}} href="#" class="btn btn-danger">Start</a>
       <p>.</p>
       <p>.</p>
      
    
      
       
       
      
       
       
       
       <div style={{ backgroundColor: 'rgb(6, 13, 20)',paddingTop: '20px'}} class="card">
  <div style = {{backgroundColor: 'rgb(6, 13, 20)'}} class="card-header">
    Mining History
  </div>
  <div class="card-body">
    
    <h5 style={{backgroundColor: 'rgb(6, 13, 31)'}} class="card-title">Special title treatment</h5>
    <p style={{backgroundColor : 'rgb(6, 13, 31)'}} class="card-text">With supporting text below as a natural lead-in to additional content.</p>
    
  </div>
</div>   
      </div>
      

  

  
 
  
      
     



    
    
    
  );
}}
export default Home;