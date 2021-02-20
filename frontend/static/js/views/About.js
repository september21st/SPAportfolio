import AbstractView from './AbstractView.js';

export default class extends AbstractView {
  constructor() {
    super();
    this.setTitle('Bora Choi | About Bora Choi');
  }

  async getHtml() {
    return `
      <h1>Hi, I'm Bora Choi.</h1>
      <p>
        안녕하세요. 누구보다 열정 넘치는 프론트엔드 개발자 최보라입니다.
      </p>
      <h2>Career</h2>
      <p>
      <b>2017.4 - 2019.8</b> ANA Airport Service Co. Tokyo, Japan. <br/>
      Baggage service supervisor and customer service agent 
      </p>
      <h2>Education</h2>
      <p>
      <b>2020.9 - 2021.2</b> 직업능력개발훈련 디지털 컨버전스 기반 UI/UX Front-end 전문 개발자 앙성과정 수료.<br/>
      <b>2012.3 - 2017.2</b> Catholic University Of Korea , International Studies.
      </p>
     
   
      `;
  }
}
