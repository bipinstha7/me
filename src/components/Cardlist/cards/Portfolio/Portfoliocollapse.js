import React from 'react';

import "./Portfoliocollapse.css";
import kodecamp from "../../../../assets/images/portfolio/kodecamp.JPG";
import smart_brain from "../../../../assets/images/portfolio/smart_brain.JPG";
import robofriends from "../../../../assets/images/portfolio/robofriends.JPG";
import burger from "../../../../assets/images/portfolio/burger.JPG";
import color_game from "../../../../assets/images/portfolio/color_game.JPG";



const Portfoliocollapse = () => {
  return (
    <div id="portfolioCollapse" className="collapse" data-parent="#accordion">
      <div className="card-background card text-white rounded-0">
        <div className="card-body p-5">
          <h1>My Portfolio</h1>
          <p>I'm a full stack web developer. I write javascript, node js and react. I am more concerned with backend development.</p>
        </div>
      </div>
      <div className="card-second-background card">
        <div className="card-body rounded-0 pt-5">
          <div className="what_have_i_build_header ">
            <h2>What have I build ?</h2>
            <p>Diving on a project is best practice to learn. </p>
            <hr/>
          </div> 
          <div className="imageFlex">
            <div className="imageFlex-Card">
              <div className="card text-center">
                <a href={kodecamp} data-toggle="modal" data-target="#kodecamp_modal">
                  <img className="campImage" src={kodecamp} alt="kodecamp"/>
                </a>
                <div className="card-body">
                  <h4 className="card-title"><a href="https://github.com/bipinstha7/kodecamp" target="_blank" rel="noopener noreferrer">KodeCamp</a></h4>
                  <p>Full Stack Web App with Node js, Express and MongoDB.</p>
                </div>
              </div>
            </div>
            <div className="imageFlex-Card">
              <div className="card text-center">
                <a href={smart_brain} data-toggle="modal" data-target="#smart_brain_modal">
                  <img className="campImage" src={smart_brain} alt="Face Recognition Brain"/>
                </a>
                <div className="card-body">
                  <h4 className="card-title"><a href="https://github.com/bipinstha7/face_recognition_brain" target="_blank" rel="noopener noreferrer">Face Recognition Brain</a></h4>
                  <p>Face Recognition App with Node JS, Express, React and Postgresql</p>
                  </div>
              </div>
            </div>
            <div className="imageFlex-Card">
              <div className="card text-center">
                <a href={robofriends} data-toggle="modal" data-target="#robofriends_modal">
                  <img className="campImage" src={robofriends} alt="Robofriends"/>
                </a>
                <div className="card-body">
                  <h4 className="card-title"><a href="https://bipinstha7.github.io/robofriends/" target="_blank" rel="noopener noreferrer">Robofriends</a></h4>
                  <p>React App with robohash and json api</p>
                </div>
              </div>
            </div>
            <div className="imageFlex-Card">
              <div className="card text-center">
                <a href={burger} data-toggle="modal" data-target="#burger_modal">
                  <img className="campImage" src={burger} alt="Burger"/>
                </a>
                <div className="card-body">
                  <h4 className="card-title"><a href="https://bipinstha7.github.io/Burger/" target="_blank" rel="noopener noreferrer">Burger</a></h4>
                  <p>Order burger with your favourite ingredients - React App</p>
                </div>
              </div>
            </div>
            <div className="imageFlex-Card">
              <div className="card text-center">
                <a href={color_game} data-toggle="modal" data-target="#color_game_modal">
                  <img className="campImage" src={color_game} alt="Color Game"/>
                </a>
                <div className="card-body">
                  <h4 className="card-title"><a href="https://bipinstha7.github.io/color-game/" target="_blank" rel="noopener noreferrer">Color Game</a></h4>
                  <p>Guess the color with Javascript App Color Game</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ===== imagemodal ====== */}

      <div className="modal fade " id="kodecamp_modal" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-lg" role="document">
          <img className="campImage_full" src={kodecamp} alt="KodeCamp"/>
        </div>
      </div>
      <div className="modal fade" id="smart_brain_modal" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-lg" role="document">
          <img className="campImage_full" src={smart_brain} alt="Smart Brain"/>
        </div>
      </div>
      <div className="modal fade" id="robofriends_modal" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-lg" role="document">
          <img className="campImage_full" src={robofriends} alt="Robofriends"/>
        </div>
      </div>
      <div className="modal fade" id="burger_modal" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-lg" role="document">
          <img className="campImage_full" src={burger} alt="Burger"/>
        </div>
      </div>
      <div className="modal fade" id="color_game_modal" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-lg" role="document">
          <img className="campImage_full" src={color_game} alt="Color Game"/>
        </div>
      </div>
    </div>
  );
}

export default Portfoliocollapse;