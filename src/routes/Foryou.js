import React from 'react';
import './Foryou.css';

import styled from "styled-components";
import kakaoLogo from "./small_circle_kakao_logo.png";
const KakaoShareButton = styled.a`
    cursor: pointer;
`;
const KakaoIcon = styled.img`
width: 48px;
height: 48px;
border-radius: 24px;
`;

class Foryou extends React.Component {
  state = {
    today_msg: [
      '오늘은 행운이 가득한 날입니다',
      '다른 사람의 말을 잘 들어야 합니다',
      '당신은 지금 자신의 능력을 보여줄 준비가 되어 있습니다',
      '좋은 소식이 곧 도착할 것입니다',
      '당신은 정말 운이 좋은 사람입니다',
      '당신은 지금 이 순간 최선을 다하고 있습니다',
      '좋은 일이 생길 것입니다',
      '당신의 능력을 보여주세요',
      '자신의 능력을 과소평가하고 있어요',
      '당신의 삶에 새로운 변화가 찾아올 것입니다',
      '당신의 능력을 발휘할 수 있는 기회가 올 것입니다',
      '당신은 지금 당장 무엇을 해야 할지 알고 있습니다',
      '오늘 하루는 당신의 날입니다',
      '당신은 당신이 생각하는 것보다 훨씬 더 많이 알고 있습니다',
      '당신이 원하는 것을 위해 노력하세요',
      '당신의 매력이 빛을 발하고 있습니다',
      '좋은 인연을 만날 수 있는 날입니다',
      '당신은 지금 행복한 삶을 살고 있습니다',
      '당신은 지금 무엇을 해야 할지 알고 있습니다',
      '당신은 이미 충분히 잘하고 있어요',
      '당신의 아이디어가 빛을 발할 것입니다',
      '당신은 행운을 누릴 자격이 충분합니다',
      '오늘은 당신이 주인공입니다',
      '주변의 도움을 받으세요',
      '사랑의 기운이 당신을 감싸고 있습니다',
      '당신의 능력을 인정받을 수 있는 기회가 찾아옵니다',
      '당신의 능력을 마음껏 발휘하세요',
      '현재 상황을 잘 파악하고 있습니다',
      '당신의 능력을 인정받게 됩니다',
      '당신의 노력은 반드시 보상을 받을 것입니다',
      '오늘은 당신의 날입니다',
      '당신의 마음이 가는 대로 행동하세요',
      '새로운 시도를 해보세요',
      '자신의 능력을 믿고 당당하게 행동하세요',
      '새로운 것을 시작하기에 좋은 시기입니다',
      '당신은 새로운 도전을 할 준비가 되어 있습니다',
      '당신의 능력을 마음껏 발휘해 보세요',
      '당신은 무엇이든 할 수 있는 능력이 있습니다',
      '당신은 지금 행복을 누릴 자격이 있습니다',
      '당신의 능력을 보여줄 때입니다',
      '너무 완벽하려고 하지 마세요',
      '주변 사람들의 말에 너무 신경 쓰지 마세요',
      '좋은 기회가 찾아올 것입니다',
      '당신은 지금 최선을 다하고 있습니다',
      '당신은 원하는 것을 얻을 수 있습니다',
      '좋은 인연을 만나게 될 것입니다',
      '자신의 능력에 대해 너무 큰 기대를 하고 있습니다',
      '당신의 능력을 마음껏 발휘해보세요',
      '당신은 자신의 능력을 과소평가하고 있습니다',
      '새로운 기회가 찾아올 것입니다',
      '당신은 지금 행복한 시간을 보내고 있습니다',
      '자신을 믿고 행동하세요',
      '당신은 새로운 것을 시도할 준비가 되어 있습니다',
      '당신의 꿈은 이루어질 것입니다',
      '당신은 지금 아주 잘하고 있습니다',
      '다른 사람의 도움을 받을 수 있습니다',
      '당신은 지금 이 순간 무엇을 해야 할지 알고 있습니다',
      '당신의 열정은 무엇입니까?',
      '자신의 능력을 너무 과대평가하고 있습니다',
      '당신은 지금 당신이 하고 있는 일에 만족하고 있습니다',
      '당신은 충분히 해낼 수 있습니다',
      '당신의 아이디어는 매우 훌륭합니다',
      '너무 큰 기대는 실망을 가져옵니다',
      '당신은 지금 하고 있는 일에 최선을 다하고 있습니다',
      '당신의 능력을 발휘할 수 있는 좋은 기회입니다',
      '당신은 이 세상에서 가장 소중한 사람입니다',
      '당신의 능력을 인정받게 될 것입니다',
      '당신은 오늘 운이 좋습니다',
      '당신의 꿈이 이루어질 것입니다',
      '자신을 너무 몰아붙이고 있어요',
      '당신은 운이 좋은 사람입니다',
      '당신이 원하는 것을 얻을 수 있는 좋은 기회입니다',
      '당신의 아이디어가 인정받을 것입니다',
      '당신은 지금 당신의 능력을 최대한 발휘하고 있습니다',
      '모든 일이 잘 풀리고 있습니다',
      '당신은 너무 완벽하려고 합니다',
      '당신은 오늘 당신의 능력을 보여줄 수 있습니다',
      '당신의 아이디어가 빛을 발하고 있습니다',
      '당신은 오늘 최고의 날을 보낼 것입니다',
      '당신은 이 세상에서 가장 소중한 존재입니다',
      '자신의 감정을 솔직하게 표현하세요',
      '당신의 꿈은 이루어집니다',
      '당신은 당신이 원하는 것을 얻기 위해 최선을 다하고 있습니다',
      '당신의 기분은 최고입니다',
      '당신의 능력을 너무 과소평가하고 있습니다',
      '주변을 잘 살펴보세요',
      '오늘은 당신에게 좋은 일이 생길 것입니다',
      '당신은 지금 사랑을 하고 있어요',
      '당신의 마음을 열고 다른 사람의 말을 들어보세요',
      '당신은 지금 당신이 원하는 것을 향해 가고 있습니다',
      '자신의 능력을 과소평가하고 있습니다',
      '당신이 원하는 것을 얻을 수 있을 거예요',
      '당신은 지금 새로운 변화를 시도하고 있습니다',
      '당신은 지금 행복한 고민을 하고 있습니다',
      '당신은 지금 매우 중요한 시기를 지나고 있습니다',
      '당신의 능력을 인정받을 수 있는 기회가 찾아올 것입니다',
      '당신은 지금 이 순간을 즐기고 있습니다',
      '당신이 원하는 것을 얻기 위해서는 노력이 필요합니다',
      '마음을 편안하게 가지세요',
      '당신은 매력적입니다',
      '당신은 다른 사람의 도움을 받을 수 있습니다',
      '마음이 안정되고 여유가 생기는 시기입니다',
      '당신은 이미 충분히 잘하고 있습니다',
      '다른 사람을 도와주세요',
      '당신의 능력을 인정받을 수 있는 날입니다',
      '새로운 사랑이 시작될 것입니다',
      '당신이 원하는 것을 얻을 수 있습니다',
      '오늘은 돈을 절약하는 것이 좋습니다',
      '당신의 힘을 믿으세요',
      '새로운 인연이 기다리고 있습니다',
      '당신은 오늘 당신의 능력을 제대로 발휘하지 못하고 있습니다',
      '당신의 능력을 인정받고 있습니다',
      '당신의 노력이 곧 결실을 맺을 것입니다',
      '지금 하는 일이 당신에게 딱 맞습니다',
      '원하는 것을 얻게 될 것입니다',
      '당신은 지금 행복합니다',
      '지금 당신은 너무 지쳐 있습니다',
      '지금 당신의 상황은 당신이 만든 것입니다',
      '당신의 능력을 발휘할 수 있는 기회가 찾아옵니다',
      '당신은 그 일을 해낼 수 있습니다',
      '새로운 도전을 해보세요',
      '당신은 지금 자신이 가진 것을 소중히 여겨야 합니다',
      '당신의 인생에 새로운 기회가 다가오고 있습니다',
      '새로운 것을 시도해 보세요',
      '좋은 결과를 기대해도 좋습니다',
      '오늘은 당신에게 행운이 따르는 날입니다',
      '주변 사람들에게 관심을 가지세요',
      '당신의 노력이 결실을 맺을 것입니다',
      '당신은 지금 하고 있는 일에 대해 자신감을 갖고 있습니다',
      '당신은 지금 아주 중요한 일을 하고 있습니다',
      '당신의 인생은 당신 손에 달려 있습니다',
      '오늘 하루는 당신에게 행운이 있을 것입니다',
      '당신은 지금 이 순간을 즐길 자격이 있습니다',
      '오늘은 당신의 것입니다',
      '당신은 당신이 생각하는 것보다 훨씬 더 능력이 있습니다',
      '주변 사람들의 도움이 필요합니다',
      '좋은 기운이 당신을 감싸고 있습니다',
      '오늘 하루 당신에게 행운이 가득할 것입니다',
      '당신은 지금 아주 중요한 시기를 보내고 있습니다',
      '당신이 바라던 일이 곧 이루어질 것입니다',
      '자신의 의견을 표현하세요'
    ][(parseInt(navigator.userAgent.replace(/[^0-9]/g,'').substring(0, Math.floor(navigator.userAgent.replace(/[^0-9]/g,'').length/4)))
      +parseInt(navigator.userAgent.replace(/[^0-9]/g,'').substring(Math.floor(navigator.userAgent.replace(/[^0-9]/g,'').length/4), Math.floor(navigator.userAgent.replace(/[^0-9]/g,'').length/4)*2))
      +parseInt(navigator.userAgent.replace(/[^0-9]/g,'').substring(Math.floor(navigator.userAgent.replace(/[^0-9]/g,'').length/4)*2, Math.floor(navigator.userAgent.replace(/[^0-9]/g,'').length/4)*2)*3)
      +parseInt(navigator.userAgent.replace(/[^0-9]/g,'').substring(Math.floor(navigator.userAgent.replace(/[^0-9]/g,'').length/4)*3, navigator.userAgent.replace(/[^0-9]/g,'').length))
      +(new Date().getDate())+ (new Date().getMonth() + 1)+(new Date().getFullYear()) )% 141]
  };

  componentDidMount() {
    // var that = this;
    // var date = new Date().getDate(); //Current Date
    // var month = new Date().getMonth() + 1; //Current Month
    // var year = new Date().getFullYear(); //Current Year
    // that.setState({
    //   //Setting the value of the date time
    //   date:
    //     date + month + year,
    // });

    const { today_msg } = this.state;
    
    window.Kakao.init('d24648a3a619d4d3c5a3232f29182174')
    console.log('initialize check');
    console.log(window.Kakao.isInitialized());

    window.Kakao.Link.createDefaultButton({
      container: '#kakao-link-btn',
      objectType: 'feed',
      content: {
        title: '오늘의 포춘쿠키',
        description: today_msg,
        // imageUrl: "https://drive.google.com/uc?id=1ECmJQEyJsH_Q-tFzr81X0TovVFfAk4dW",
        imageUrl: "https://mblogthumb-phinf.pstatic.net/MjAyMTEwMzBfNjIg/MDAxNjM1NTg2MTkwMDkw.Gsiz4UCtbSsvyAKqtJp34BbXFQT3oALVSy5yqIT7RGQg.m1kdAV001TKx2wQj5OqHNvdODBL0INF8xZqJfB7F96Mg.JPEG.bbanzzac0427/PNG_image-CB479C1D8F88-1.jpg?type=w800",
        link: {
          mobileWebUrl: 'https://jjisu89.github.io/fortune_cookie_202112/#/open',
          webUrl: 'https://jjisu89.github.io/fortune_cookie_202112/#/open'
        }
      },
      // social: {
      //   likeCount: 2020,
      //   commentCount: 11,
      //   sharedCount: 7
      // },
      buttons: [
        {
          title: '더 보기',
          link: {
            mobileWebUrl: 'https://jjisu89.github.io/fortune_cookie_202112/#/open',
            webUrl: 'https://jjisu89.github.io/fortune_cookie_202112/#/open'
          }
        },
        {
          title: '내꺼 열기',
          link: {
            mobileWebUrl: 'https://jjisu89.github.io/fortune_cookie_202112/#/',
            webUrl: 'https://jjisu89.github.io/fortune_cookie_202112/#/'
          }
        } //,
        // {
        //   title: '앱으로 보기',
        //   link: {
        //     mobileWebUrl: 'https://jjisu89.github.io/fortune_znzl_2021/#/open',
        //     webUrl: 'https://jjisu89.github.io/fortune_znzl_2021/#/open'
        //   }
        // }
      ]
    });
  }
  onClickKakao = () => {
    window.open('https://sharer.kakao.com/talk/friends/picker/link')
  }

  render() {
    const { today_msg } = this.state;

    return (
      <>
      <h1> </h1>
      {/* <div className="foryou__container">
        {messages[Math.floor(Math.random() * messages_len)]}
      </div> */}
      <div className="today_cookie">
        {'오늘의 포춘쿠키'}
      </div>
      <div className="foryou__container">
        {today_msg}
        {/* <br/>
        <button id="kakao-link-btn" onClick={this.onClickKakao} ><img src='https://app.stopbook.com/images/img-sub/btn-att-kak.png' alt="kakao" className="photo45240"/></button> */}
      </div>
      <h1> </h1>
      <div class='center'> 
        <KakaoShareButton id="kakao-link-btn" onClick={this.onClickKakao}>
          <KakaoIcon src={kakaoLogo}></KakaoIcon>
        </KakaoShareButton>
      </div>
      <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1026389413626208"
         crossorigin="anonymous"></script>
      <ins class="adsbygoogle"
          style="display:block"
          data-ad-format="fluid"
          data-ad-layout-key="-fb+5w+4e-db+86"
          data-ad-client="ca-pub-1026389413626208"
          data-ad-slot="5291896144"></ins>
      <script>
          (adsbygoogle = window.adsbygoogle || []).push({});
      </script>
      </>
    );
  }
}

export default Foryou;