import './App.css';
import React from 'react';
import myWonderfulImage from "./img/imageInSrc.jpg"

function App() {

  return (
    <div>
      <div style={{ border: 'solid 3px black', maxWidth: '100vw',marginBottom:'2vw',marginRight:'10vw',marginLeft:'10vw'}}>
        <h1 className="title red">Wael Touati</h1>
        <br />
        <img className='img1' src={myWonderfulImage} alt ='myImage' />
        <br />
        <img className='img2' src="/img/imageInPublic.jpg" />
      </div>
      <video width={320} height={240} controls>
        <source className="video" src="myVideo.mp4" type="video/mp4" />
      </video>
    </div>
  );
}


export default App;
