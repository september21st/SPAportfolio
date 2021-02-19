import AbstractView from './AbstractView.js';

export default class extends AbstractView {
  constructor() {
    super();
    this.setTitle('About Bora Choi');
  }

  async getHtml() {
    return `
      <h1>Hi, I'm Bora Choi.</h1>
      <p>
        안녕하세요. 프론트엔드 개발자 최보라입니다.
      </p>
      `;
  }
}
