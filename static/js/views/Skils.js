import AbstractView from './AbstractView.js';

export default class extends AbstractView {
  constructor() {
    super();
    this.setTitle('Bora Choi | Skils');
  }

  async getHtml() {
    return `
      <h1>Skils</h1>
      <h2>programming languages</h2>
      <p>
      <i class="fab fa-html5"></i> HTML <i class="fab fa-css3-alt"></i>CSS  <i class="fab fa-js"></i>JavaScript <i class="fab fa-react"></i>React.js
      <i class="fab fa-java"></i>Java <i class="fab fa-linux"></i>Linux command line 
      </p>
      <h2>4 languages Speaker!</h2>
      <p>
     
        🇰🇷 Korean : Native <br/>
        🇯🇵 Japanese : Advnaced <br/>
        🇼🇸 English : Intermediate High<br/>
        🇨🇳 Chinese : Intermediate High<br/>
    </p>
      `;
  }
}
