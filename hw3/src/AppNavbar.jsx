import { forwardRef } from "react";
import { Navbar, Nav, Container, Button, Form } from "react-bootstrap";
import logoSmall from "./assets/logoSmall.png";

const AppNavbar = forwardRef(() => {

  return (
    <Navbar 
      variant="light" 
      expand="lg" 
      className="dashboard-navbar" 
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
          <span className="navbar-brand">
            STUDYBUDDY
          </span>
        </Navbar.Brand>
                
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav>
            <div className="navbar-right-items">
              <div className="nav-button-group">
                {/* 다크모드 토글 (라이트모드 고정 과제용) */}
                <div className="toggle-switch-wrapper">
                  <Form.Check 
                    type="switch"
                    id="dark-mode-switch"
                    className="dark-mode-toggle"
                    label="☀️"
                    disabled={true}
                  />
                </div>
                
                {/* 로그인/회원가입 버튼 */}
                <Button 
                  variant="outline-dark"
                  className="login-button"
                >
                  로그인
                </Button>
                <Button 
                  variant="primary"
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