/** @jsx jsx */
import { jsx, Container, Flex, Button } from "theme-ui";
import { keyframes } from "@emotion/core";
import { Link } from "react-scroll";
import Logo from "components/logo";
import LogoDark from "assets/logo.png";
import LogoWhite from "assets/logo.png";
import { DrawerProvider } from "../../contexts/drawer/drawer.provider";
import MobileDrawer from "./mobile-drawer";
import menuItems from "./header.data";

export default function Header({ className }) {
  const handleOpenAppClick = (e) => {
    e.preventDefault();
    window.open("https://dashboard.langchain.space");
  };
  return (
    <DrawerProvider>
      <header sx={styles.header} className={className} id="header">
        <Container sx={styles.container}>
          <Logo src={className === "sticky" ? LogoDark : LogoWhite} text={"LangChain.Space"}/>

          <Flex as="nav" sx={styles.nav}>
            {menuItems.map(({ path, label, external , offset=-70}, i) => (
                external ?
                <a
                  href={path}
                  target="_blank"
                  rel="noopener noreferrer"
                  key={i}
                  style={{
                          color: "white",
                          textDecoration: "none",
                        }}
                >
                  {label}
                </a>
              :
              <Link
                activeClass="active"
                to={path}
                spy={true}
                smooth={true}
                offset={offset}
                duration={500}
                key={i}
              >
                {label}
              </Link>
            ))}
          </Flex>

          <Button
            className="donate__btn"
            variant="secondary"
            // aria-label="Sign Up"
            // onClick={handleOpenAppClick}
          >
            <Link
                to="pricing"
                spy={true}
                smooth={true}
                duration={500}
                key={100}
              >
              Start for free
            </Link>
          </Button>



          <MobileDrawer />
        </Container>
      </header>
    </DrawerProvider>
  );
}

const positionAnim = keyframes`
  from {
    position: fixed;
    opacity: 1;
  }
  to {
    position: absolute;
    opacity: 1;
    transition: all 0.4s ease;
  }
`;

const styles = {
  header: {
    color: "white",
    fontWeight: "normal",
    py: 4,
    width: "100%",
    position: "absolute",
    top: 0,
    left: 0,
    backgroundColor: "transparent",
    transition: "all 0.5s ease",
    animation: `${positionAnim} 0.4s ease`,
    ".donate__btn": {
      flexShrink: 0,
      mr: [15, 20, null, null, 0],
      ml: ["auto", null, null, null, 0],
    },
    "&.sticky": {
      position: "fixed",
      backgroundColor: "background",
      color: "#000000",
      boxShadow: "0 1px 2px rgba(0, 0, 0, 0.06)",
      py: 3,
      "nev > a": {
        color: "text",
      },
      ".donate__btn": {
        borderColor: "primary",
        color: "primary",
        "&:hover": {
          boxShadow: "rgba(31, 62, 118, 0.57) 0px 9px 20px -5px",
          backgroundColor: "primary",
          color: "white",
        },
      },
    },
  },
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  nav: {
    mx: "auto",
    display: "none",
    "@media screen and (min-width: 1024px)": {
      display: "flex",
      gap: "2rem",
      justifyContent: "space-between"
    },
    a: {
      fontSize: "1.05rem",
      fontWeight: "400",
      cursor: "pointer",
      lineHeight: "1.2",
      "&.active": {
        color: "secondary",
      },
      "@media screen and (min-width: 1220px)": {
        fontSize: "1.2rem",
      }
    },
  },
};
