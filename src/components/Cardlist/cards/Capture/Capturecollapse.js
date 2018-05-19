import React from 'react';

import "./Capturecollapse.css";

import baby          from "../../../../assets/images/capture/baby.jpg";
import city          from "../../../../assets/images/capture/city.jpg";
import cup           from "../../../../assets/images/capture/cup.jpg";
import diyo          from "../../../../assets/images/capture/diyo.jpg";
import dog           from "../../../../assets/images/capture/dog.jpg";
import flag          from "../../../../assets/images/capture/flag.jpg";
import flower        from "../../../../assets/images/capture/flower.jpg";
import glass         from "../../../../assets/images/capture/glass.jpg";
import ground        from "../../../../assets/images/capture/ground.jpg";
import hukka         from "../../../../assets/images/capture/hukka.jpg";
import jamara        from "../../../../assets/images/capture/jamara.jpg";
import khaja         from "../../../../assets/images/capture/khaja.jpg";
import mountain      from "../../../../assets/images/capture/mountain.jpg";
import project       from "../../../../assets/images/capture/project.jpg";
import purple_flower from "../../../../assets/images/capture/purple_flower.jpg";
import road          from "../../../../assets/images/capture/road.jpg";
import royal         from "../../../../assets/images/capture/royal.jpg";
import sky           from "../../../../assets/images/capture/sky.jpg";
import stone         from "../../../../assets/images/capture/stone.jpg";
import sunset        from "../../../../assets/images/capture/sunset.jpg";
import temple        from "../../../../assets/images/capture/temple.jpg";
import tree_peak     from "../../../../assets/images/capture/tree_peak.jpg";
import tree          from "../../../../assets/images/capture/tree.jpg";
import woman         from "../../../../assets/images/capture/woman.jpg";

const Capturecollapse = () => {
  return (
    <div id="captureCollapse" className="collapse" data-parent="#accordion">
      <div className="card-background card text-white rounded-0">
        <div className="card-body py-4 px-5">
          <h1>Another Side of Me</h1>
          <p>Mobilography and Reading Articles are my area of interest besides coding.</p>
        </div>
      </div>
      <div className="card-second-background card rounded-0">
        <div className="card-body p-4">
          <div className="what_have_i_captured">
            <h2>What have I captured ?</h2>
            <p>I love the beauty of nature, sometimes I feel them sometimes I capture.</p>
            <hr/>
          </div>
          <div className="capturedImages pt-3">
            <a href={baby} data-toggle="modal" data-target="#baby_modal" data-slide-to="0">
              <img src={baby} alt="baby"/>
            </a>
            <a href={purple_flower} data-toggle="modal" data-target="#purple_flower_modal" data-slide-to="1">
              <img src={purple_flower} alt="purple_flower"/>
            </a>
            <a href={cup} data-toggle="modal" data-target="#cup_modal" data-slide-to="2">
              <img src={cup} alt="cup"/>
            </a>
            <a href={flag} data-toggle="modal" data-target="#flag_modal">
              <img src={flag} alt="flag"/>
            </a>
            <a href={ground} data-toggle="modal" data-target="#ground_modal">
              <img src={ground} alt="ground"/>
            </a>
            <a href={diyo} data-toggle="modal" data-target="#diyo_modal">
              <img src={diyo} alt="diyo"/>
            </a>
            <a href={dog} data-toggle="modal" data-target="#dog_modal">
              <img src={dog} alt="dog"/>
            </a>
            <a href={flower} data-toggle="modal" data-target="#flower_modal">
              <img src={flower} alt="flower"/>
            </a>
            <a href={road} data-toggle="modal" data-target="#road_modal">
              <img src={road} alt="road"/>
            </a>
            <a href={hukka} data-toggle="modal" data-target="#hukka_modal">
              <img src={hukka} alt="hukka"/>
            </a>
            <a href={sunset} data-toggle="modal" data-target="#sunset_modal">
              <img src={sunset} alt="sunset"/>
            </a>
            <a href={jamara} data-toggle="modal" data-target="#jamara_modal">
              <img src={jamara} alt="jamara"/>
            </a>
            <a href={city} data-toggle="modal" data-target="#city_modal">
              <img src={city} alt="city"/>
            </a>
            <a href={khaja} data-toggle="modal" data-target="#khaja_modal">
              <img src={khaja} alt="khaja"/>
            </a>
            <a href={sky} data-toggle="modal" data-target="#sky_modal">
              <img src={sky} alt="sky"/>
            </a>
            <a href={woman} data-toggle="modal" data-target="#woman_modal">
              <img src={woman} alt="woman"/>
            </a>
            <a href={project} data-toggle="modal" data-target="#project_modal">
              <img src={project} alt="project"/>
            </a>
            <a href={royal} data-toggle="modal" data-target="#royal_modal">
              <img src={royal} alt="royal"/>
            </a>
            <a href={stone} data-toggle="modal" data-target="#stone_modal">
              <img src={stone} alt="stone"/>
            </a>
            <a href={temple} data-toggle="modal" data-target="#temple_modal">
              <img src={temple} alt="temple"/>
            </a>
            <a href={tree_peak} data-toggle="modal" data-target="#tree_peak_modal">
              <img src={tree_peak} alt="tree_peak"/>
            </a>
            <a href={tree} data-toggle="modal" data-target="#tree_modal">
              <img src={tree} alt="tree"/>
            </a>
            <a href={glass} data-toggle="modal" data-target="#glass_modal">
              <img src={glass} alt="glass"/>
            </a>
            <a href={mountain} data-toggle="modal" data-target="#mountain_modal">
              <img src={mountain} alt="mountain"/>
            </a>
          </div>
        </div>
      </div>

      {/* === capturedImageModal === */}
<div className="fitToWindow">
      <div className="modal fade" id="baby_modal" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-lg" role="document">
          <img className="capturedImage_full" src={baby} alt="baby"/>
        </div>
      </div>
      <div className="modal fade" id="city_modal" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-lg" role="document">
          <img className="capturedImage_full" src={city} alt="city"/>
        </div>
      </div>
      <div className="modal fade" id="cup_modal" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-lg" role="document">
          <img className="capturedImage_full" src={cup} alt="cup"/>
        </div>
      </div>
      <div className="modal fade" id="diyo_modal" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-lg" role="document">
          <img className="capturedImage_full" src={diyo} alt="diyo"/>
        </div>
      </div>
      <div className="modal fade" id="dog_modal" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-lg" role="document">
          <img className="capturedImage_full" src={dog} alt="dog"/>
        </div>
      </div>
      <div className="modal fade" id="flag_modal" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-lg" role="document">
          <img className="capturedImage_full" src={flag} alt="flag"/>
        </div>
      </div>
      <div className="modal fade" id="flower_modal" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-lg" role="document">
          <img className="capturedImage_full" src={flower} alt="flower"/>
        </div>
      </div>
      <div className="modal fade" id="glass_modal" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-lg" role="document">
          <img className="capturedImage_full" src={glass} alt="glass"/>
        </div>
      </div>
      <div className="modal fade" id="ground_modal" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-lg" role="document">
          <img className="capturedImage_full" src={ground} alt="ground"/>
        </div>
      </div>
      <div className="modal fade" id="hukka_modal" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-lg" role="document">
          <img className="capturedImage_full" src={hukka} alt="hukka"/>
        </div>
      </div>
      <div className="modal fade" id="jamara_modal" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-lg" role="document">
          <img className="capturedImage_full" src={jamara} alt="jamara"/>
        </div>
      </div>
      <div className="modal fade" id="khaja_modal" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-lg" role="document">
          <img className="capturedImage_full" src={khaja} alt="khaja"/>
        </div>
      </div>
      <div className="modal fade" id="mountain_modal" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-lg" role="document">
          <img className="capturedImage_full" src={mountain} alt="mountain"/>
        </div>
      </div>
      <div className="modal fade" id="project_modal" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-lg" role="document">
          <img className="capturedImage_full" src={project} alt="project"/>
        </div>
      </div>
      <div className="modal fade" id="purple_flower_modal" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-lg" role="document">
          <img className="capturedImage_full" src={purple_flower} alt="purple_flower"/>
        </div>
      </div>
      <div className="modal fade" id="road_modal" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-lg" role="document">
          <img className="capturedImage_full" src={road} alt="road"/>
        </div>
      </div>
      <div className="modal fade" id="royal_modal" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-lg" role="document">
          <img className="capturedImage_full" src={royal} alt="royal"/>
        </div>
      </div>
      <div className="modal fade" id="sky_modal" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-lg" role="document">
          <img className="capturedImage_full" src={sky} alt="sky"/>
        </div>
      </div>
      <div className="modal fade" id="stone_modal" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-lg" role="document">
          <img className="capturedImage_full" src={stone} alt="stone"/>
        </div>
      </div>
      <div className="modal fade" id="sunset_modal" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-lg" role="document">
          <img className="capturedImage_full" src={sunset} alt="sunset"/>
        </div>
      </div>
      <div className="modal fade" id="temple_modal" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-lg" role="document">
          <img className="capturedImage_full" src={temple} alt="temple"/>
        </div>
      </div>
      <div className="modal fade" id="tree_peak_modal" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-lg" role="document">
          <img className="capturedImage_full" src={tree_peak} alt="tree_peak"/>
        </div>
      </div>
      <div className="modal fade" id="tree_modal" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-lg" role="document">
          <img className="capturedImage_full" src={tree} alt="tree"/>
        </div>
      </div>
      <div className="modal fade" id="woman_modal" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-lg" role="document">
          <img className="capturedImage_full" src={woman} alt="woman"/>
        </div>
      </div>
</div>
    </div>
  );
}

export default Capturecollapse;