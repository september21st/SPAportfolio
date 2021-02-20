import AbstractView from './AbstractView.js';

export default class extends AbstractView {
  constructor() {
    super();
    this.setTitle('Bora Choi | Works');
  }

  async getHtml() {
    return `
     <h1>Works </h1>
     <span>Click image to move to site</span>
     <article class="project">
        <a href="http://3.34.110.152:8080/CalendarProject/calendar/index.html" target="blank" class="project__link">
            <img src = "/static/image/1.png" class="project__thumbnail" alt="스케줄러프로젝트"/>
        </a>
        <p>
            <b>프로젝트 기간</b><br/>
            2020.<br/> 
            <b>사용기술</b><br/>
            HTML, CSS, JQuery, Oracle DB, Java<br/>
           <b>개인프로젝트</b>
        </p>
     </article>
     <article class="project">
        <a href="http://3.34.110.152:8080/PetProject/home.jsp" target="blank" class="project__link">
            <img src = "/static/image/2.png" class="project__thumbnail" alt="펫엔미프로젝트"/>
        </a>
        <p>
            <b>프로젝트 기간</b><br/>
            2020.11.26-2020.12.09<br/> 
            <b>사용기술</b><br/>
            HTML,CSS,JQuery,Oracle DB, Java<br/>
            <b>팀 구성</b><br/>
            PL : 최보라 <br/>
            팀원 : 김경오, 도가영, 박진우, 소다미, 이승민 <br/>
            <b>역할</b><br/>
            소개페이지, 로그인 및 회원가입, 후기페이지, 후기등록
        </p>
     </article>
     <article class="project">
        <a href="http://www.raonnadri.tk" target="blank" class="project__link">
            <img src = "/static/image/3.png" class="project__thumbnail" alt="라온나드리"/>
        </a>
        <p>
        <b>프로젝트 기간</b><br/>
        2021.01.11-2021.02.15<br/> 
        <b>사용기술</b><br/>
        Thymeleaf, HTML, CSS , JavaScript<br/>
        <b>팀 구성</b><br/>
            PL : 최보라 <br/>
            프론트엔드 : 소다미, 이승민, 정수진, 최보라<br/>
            백엔드 : 김경오, 도가영, 박진우, 이지영 <br/>
            <b>역할</b><br/>
            메인 페이지, 축제 메뉴, 검색 페이지, 코스 수정 알고리즘
        </p>
     </article>
     <article class="project">
        <a href="http://www.raonhomestay.tk" target="blank" class="project__link">
            <img src = "/static/image/4.png" class="project__thumbnail" alt="라온홈스테이"/>
        </a>
        <p>
        <b>프로젝트 기간</b><br/>
        2021.01.11-2021.02.15<br/> 
        <b>사용기술</b><br/>
        React.js , Redux <br/>
        <b>팀 구성</b><br/>
            PL : 최보라 <br/>
            프론트엔드 : 소다미, 이승민, 정수진, 최보라<br/>
            백엔드 : 김경오, 도가영, 박진우, 이지영 <br/>
            <b>역할</b><br/>
            호스트 신청 , 호스트 메뉴, 예약 달력 알고리즘, 소셜 로그인
        </p>
     </article>
      `;
  }
}
