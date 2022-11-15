import React from 'react'
import './about.css'
import Me from '../../assets/me.png'
import {AiFillFolderOpen} from 'react-icons/ai'
import {MdContactPage} from 'react-icons/md'
import thinking from '../../assets/thinking.png'

const About = () => {
  return (
    <section id="about">
      <div className="color__scheme">
        <div id="a1">black</div><div id="2">white</div>
        <div id="a3">
          rgb(55, 55, 55);
        </div>
        <div id="a4">
          rgb(195, 206, 200);
        </div>
        <div id="a5">
          rgb(102, 102, 102);
        </div>
        <div id="a6">
          rgb(84, 84, 84);
        </div>
        <div id="a7">
          rgb(189, 189, 189);
        </div>
        <div id="a8">
                rgb(228, 228, 228);
        </div>
        <div id="a9">
          rgb(74, 74, 74);
        </div>
        <div id="a10">
          rgb(150, 150, 150);
        </div>
        <div id="a11">
          rgb(204, 219, 216);
        </div>
        <div id="a12">
          rgb(204, 210, 140);
        </div>
        <div id="a13">
          rgb(83, 93, 68);
        </div>
        <div id="a14">
          rgb(57, 87, 13);
        </div>
        <div id="a15">
          rgb(89, 125, 1);
        </div>
        <div id="a16">
          rgb(70, 99, 103);
        </div>
        <div id="a17">
          rgb(71, 92, 97);
        </div>
        <div id="a18">
          rgb(31, 51, 52);
        </div>
        <div id="a19">
          rgb(177, 207, 205);
        </div>
        <div id="a20">
          rgb(33, 33, 33);
        </div>
        <div id="a21">
          rgb(27, 27, 27);
        </div>
        <div id="a22">
                rgb(26, 35, 32);
        </div>
        <div id="a23">
          rgb(149, 202, 218);
        </div>
        <div id="a24">
              rgb(45, 74, 80);
        </div>
      </div>
      <h1>About Me</h1>
      <div className="about__container">
        <div className="img__container">
          <div className="about__img">
            <img src={Me}/>
          </div>
          <div className="cards">
          <div className="btn_about">
            <span></span>
            <a href="#contact" className="card">
              <button>
              <MdContactPage className="about__icon"/>
              <h5>Contact Me</h5>
              </button>
            </a>
          </div>
          <div className="btn_about">
            <span></span>
              <a href="#project" className="card">
            <button>
                <AiFillFolderOpen className="about__icon"/>
                <h5>Projects</h5>
            </button>
              </a>
          </div>
          </div>
        </div>
        <div className="about__content">
          <h3>blaljdjldf</h3>
          <p>
            dfhdlkfhd khfdhdfj hfdhdkjhfklhfd khfkdhfk<br />
            dlfjdl jfdlfjdo ifo ejoejf ;lefld dklfj dklfj dfj
            fdljfl djfldgge oihgei hoei;hfa lihd ;lfh;fdljf
            fldj;fkdj f;ldj;lk djfdjfdlj fldj f;djf;d jf;dj
          </p>
          <h3>blaljdjldf</h3>
          <p>
            dfhdlkfhd khfdhdfj hfdhdkjhfklhfd khfkdhfk<br />
            dlfjdl jfdlfjdo ifo ejoejf ;lefld dklfj dklfj dfj
            fdljfl djfldgge oihgei hoei;hfa lihd ;lfh;fdljf
            fldj;fkdj f;ldj;lk djfdjfdlj fldj f;djf;d jf;dj
          </p>
          <h3>blaljdjldf</h3>
          <p>
            dfhdlkfhd khfdhdfj hfdhdkjhfklhfd khfkdhfk<br />
            dlfjdl jfdlfjdo ifo ejoejf ;lefld dklfj dklfj dfj
            fdljfl djfldgge oihgei hoei;hfa lihd ;lfh;fdljf
            fldj;fkdj f;ldj;lk djfdjfdlj fldj f;djf;d jf;dj
          </p>
        </div>
      </div>
      <div className="skills">
        <h3>CORE SKILLS:</h3>
        <h4 className="skills__slide1">HTML CSS BOOTSTRAP JAVASCRIPT REACTJS GIT/GITHUB FIGMA BPMN2.0</h4>
        <h4 className="skills__slide2">HTML CSS BOOTSTRAP JAVASCRIPT REACTJS GIT/GITHUB FIGMA BPMN2.0</h4>
      </div>
    </section>
  )
}
      /*<div class="stage">
        <div class="cubespinner">
          <div class="face1">html</div>
          <div class="face2">css</div>
          <div class="face3">react</div>
          <div class="face4">bootstrap</div>
          <div class="face5">javascript</div>
          <div class="face6">figma</div>
        </div>
      </div>*/
export default About
