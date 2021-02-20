import AbstractView from './AbstractView.js';

export default class extends AbstractView {
  constructor() {
    super();
    this.setTitle('Bora Choi | Contact');
  }

  async getHtml() {
    return `
      <h1>Contact me!</h1>
      <p class="contact">
      
       <a href="mailto:tsuilook@gmail.com"><i class="fas fa-envelope-square"></i></a>
       <a href="https://www.linkedin.com/in/bora-Aspyn-choi" target="blank"><i class="fab fa-linkedin"></i></a> 
       <a href="https://github.com/september21st" target="blank"><i class="fab fa-github-square"></i></a>
      </p>
      `;
  }
}
