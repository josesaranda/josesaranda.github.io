import React, { Component } from "react";
import moment from 'moment';
import { changePageTitle, hideMenu } from "../../util";

import wallpaper from './assets/wallpaper.jpeg';

import './Wedding.less';

type WeddingPageProps = {};

type WeddingPageState = {
  date: string;
};

export class WeddingPage extends Component<WeddingPageProps, WeddingPageState> {

  private timer: number;
  private endDate = moment().year(2021).month(6).date(17).hour(12).minutes(59).seconds(59);

  constructor(props: WeddingPageProps){
    super(props);
    this.state = {
      date: ''
    };
  }

  private getDate = (): string => {
    let actualDate = moment();
    let seconds = this.endDate.diff(actualDate, 'seconds');
    var years = Math.floor(seconds / (3600*24*365));
    seconds -= years*3600*24*365;
    var days = Math.floor(seconds / (3600*24));
    seconds  -= days*3600*24;
    var hrs   = Math.floor(seconds / 3600);
    seconds  -= hrs*3600;
    var mnts = Math.floor(seconds / 60);
    seconds  -= mnts*60;
    let result = "";
    if(years) result += years + "a ";
    if(days) result += days + "d ";
    result += hrs + "h ";
    result += mnts + "m ";
    result += seconds + "s ";
    return result;
  }

  componentDidMount(){
    changePageTitle('Wedding');
    hideMenu();

    let date = this.getDate()
    this.setState({date});
    this.timer = setInterval(()=>{
      let date = this.getDate()
      this.setState({date});
    },1000);
  }

  componentWillUnmount(){
    if(this.timer)
      clearInterval(this.timer);
  }

  render() {
    return (
      <div className="josesaranda-wedding" style={{backgroundImage: `url(${wallpaper})`}}>
        <div className="middle">
          <h1>Wedding</h1>
          <hr/>
          <p id="timer">
            {this.state.date}
          </p>
        </div>
      </div>
    );
  }
}