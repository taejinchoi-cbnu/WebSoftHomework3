import { forwardRef } from "react";
import { Navbar, Nav, Container, Button, Form } from "react-bootstrap";
import logoSmall from "../public/logoSmall.png"

const AppNavbar = forwardRef(({ transparent = false }, ref) => {

  // 네비게이션 바 클래스 계산
  const navbarClass = "dashboard-navbar";

  return (
    <Navbar 
      variant="light" 
      expand="lg" 
      className={navbarClass} 
      fixed="top"
    >
      <Container>
        {/* 브랜드 로고 및 제목 */}
        <Navbar.Brand className="d-flex align-items-center navbar-brand-container">
          <img
            src={logoSmall}
            alt="StudyBuddy Logo"
            height="30"
            className="d-inline-block align-top me-2"
          />
          <span className="fw-bold">
            STUDYBUDDY
          </span>
        </Navbar.Brand>
        
        {/* 모바일 토글 버튼 */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav>
            <div className="navbar-right-items">
              <div className="nav-button-group">
                <div className="toggle-switch-wrapper">
                  <Form.Check 
                    type="switch"
                    id="dark-mode-switch"
                    className="dark-mode-toggle"
                    label="☀️"
                    disabled={true}
                  />
                </div>
                
                {/* 로그인/회원가입 버튼들 */}
                <Button 
                  variant="outline-dark"
                  className="login-button"
                >
                  로그인
                </Button>
                <Button 
                  className="signup-button"
                >
                  회원가입
                </Button>
              </div>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
});

export default AppNavbar;