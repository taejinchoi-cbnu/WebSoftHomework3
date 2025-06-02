import { useRef, useEffect } from "react";
import AppNavbar from "./AppNavbar";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

import logoHome from "./assets/logoHome.png";
import logoSmall from "./assets/logoSmall.png";
import peoples from "./assets/peoples.png";
import calendar from "./assets/calendar.png";


const App = () => {
  const navbarRef = useRef();
  const featuresRef = useRef();
  const serviceIntroRef = useRef();

  const FeatureItem = ({ imgSrc, imgAlt, title, description, benefits }) => (
    <div className="feature-item">
      <div className="feature-image-container">
        <img src={imgSrc} alt={imgAlt} className="feature-image" />
      </div>
      <div className="feature-text-container">
        <h3 className="feature-title">{title}</h3>
        <p className="feature-description">{description}</p>
        
        {benefits && (
          <div className="feature-benefits">
            {benefits.map((benefit, index) => (
              <div key={index} className="feature-benefit-item">
                <div className="benefit-icon">✓</div>
                <span>{benefit}</span>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );

  useEffect(() => {
    const handleScroll = () => {
      // Features 섹션 애니메이션 처리
      if (featuresRef.current) {
        const featureItems = featuresRef.current.querySelectorAll(".feature-item");
        
        featureItems.forEach((item) => {
          const rect = item.getBoundingClientRect();
          const windowHeight = window.innerHeight;
          
          if (rect.top < windowHeight * 0.8) {
            item.classList.add("animate-in");
          }
        });
      }

      // 서비스 소개 섹션 애니메이션 처리
      if (serviceIntroRef.current) {
        const rect = serviceIntroRef.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        
        if (rect.top < windowHeight * 0.7) {
          serviceIntroRef.current.classList.add("animate-in");
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="main-layout home-page">
      <div className="transparent-navbar-wrapper" style={{ position: 'absolute', zIndex: 1050 }}>
        <AppNavbar 
          transparent={true}
          ref={navbarRef}
        />
      </div>
      
      <main className="main-content">
        <section className="hero-section">
          <div className="hero-content">
            <div className="hero-text-section">
              <h1 className="hero-title">
                Welcome<br />
                <span className="hero-title-highlight">to</span><br />
                StudyBuddy
              </h1>
              <p className="hero-description">
                같은 꿈을 꾸는 우리가 만나는 곳, StudyBuddy에서<br />
                함께 성장하고 목표를 달성해보세요.
              </p>
              
              <div className="hero-buttons">
                <button 
                  type="button" 
                  className="hero-button-primary"
                >
                  시작하기
                </button>
                <button 
                  type="button" 
                  className="hero-button-secondary"
                >
                  로그인
                </button>
              </div>
            </div>
          </div>
          
          <div className="hero-image-container">
            <img 
              src={logoHome}
              alt="StudyBuddy 메인 이미지" 
              className="hero-main-image"
              loading="eager"
            />
          </div>
        </section>

        <section className="service-intro-section" ref={serviceIntroRef}>
          <div className="service-intro-content">
            <div className="service-image-container">
              <img 
                src={logoSmall}
                alt="StudyBuddy 기본 로고" 
                className="service-intro-image"
              />
            </div>
            <div className="service-text-container">
              <p className="service-subtitle">How we help</p>
              <h2 className="service-title">
                적절한 팀원을 구하는게 어려웠는데,<br />
                스터디 버디로 해결했어요!
              </h2>
              <p className="service-text">Jack Sparrow (Current User)</p>
            </div>
            <div className="service-testimonials">
              <div className="testimonial-avatars">
                <div className="testimonial-avatar">
                  <img src={logoHome} alt="사용자 후기 1" className="avatar-image" />
                </div>
              </div>
              <div className="testimonial-content">
                <span className="testimonial-rating">평점: ★★★★★</span>
              </div>
            </div>
          </div>
        </section>

        <section className="features-section" ref={featuresRef}>
          <FeatureItem 
            imgSrc={peoples}
            imgAlt="사람들 이미지" 
            title="파트너 찾기" 
            description="같은 목표를 가진 학생들과 팀을 이루고 함께 성장해보세요. 관심사와 목표가 맞는 팀원을 쉽게 찾을 수 있습니다."
            benefits={[
              "관심사 기반 매칭",
              "목표 지향적 팀 구성",
              "지속적인 동기 부여"
            ]}
          />
          
          <FeatureItem 
            imgSrc={calendar}
            imgAlt="캘린더 이미지" 
            title="스마트 일정 조율" 
            description="스케줄 맞추기의 고민을 덜어드립니다. 스케줄 자동 분석으로 모두에게 최적화된 미팅 시간을 제안합니다."
            benefits={[
              "자동 시간 분석",
              "최적 시간 추천",
              "실시간 스케줄 동기화"
            ]}
          />
        </section>

        <section className="cta-section">
          <h2 className="cta-title">함께 배우고 성장하세요</h2>
          <p className="cta-text">
            StudyBuddy에 가입하고 팀 활동을 시작해보세요!
          </p>
          <button 
            type="button" 
            className="cta-button"
          >
            지금 가입하기
          </button>
        </section>
      </main>
    </div>
  );
};

export default App;