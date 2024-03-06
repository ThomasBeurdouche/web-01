import { parseUrl } from "./utils";
import template from "../views/score.html";
import { Component } from "./component";

/* class ScoreComponent */
export class ScoreComponent extends Component {
  constructor(){
    super(template)

    let params = parseUrl();

    this.name = params.name;
    this.size = parseInt(params.size);
    this.time = parseInt(params.time);
  }


  init() {
    document.getElementById("name").innerText = this.name;
    document.getElementById("size").innerText = this.size;
    document.getElementById("time").innerText = this.time;
  }
}



