/** @jsx jsx */
import { jsx, Heading, Box, Container, Text } from "theme-ui";
import { Link } from "components/link";
import menuItems from "./footer.data";
export default function Footer() {
  return (
    <footer sx={styles.footer}>
      <Container sx={styles.footer.container}>
        <Box sx={styles.footer.footerTopArea}>
          {menuItems.map(({ header, items }, i) => (
            <Box sx={styles.footer.menus} key={i}>
              <Heading sx={styles.footer.heading}>{header}</Heading>
              <nav>
                {items.map(({ path, label, target="_self" }, i) => (
                  <Link
                    path={path}
                    key={i}
                    label={label}
                    sx={styles.footer.link}
                    target={target}
                  />
                ))}
              </nav>
            </Box>
          ))}
        </Box>
      </Container>
      <Text sx={styles.footer.copyright}>
        All right reserved - Design & Developed by
        <Link path="https://langflux.space/" target="_blank">
          langflux.space, Inc
        </Link>
      </Text>
    </footer>
  );
}

const styles = {
  footer: {
    container: {
      width: "100%",
      alignItems: "stretch",
    },
    footerTopArea: {
      borderTop: "1px solid",
      borderTopColor: "border_color",
      display: "flex",
      flexWrap: "wrap",
      pt: [7, null, 8],
      pb: ["10px", null, null, "20px"],
      px: [0, null, null, null, 4],
      justifyContent: 'space-between', // or 'space-around'
    },
    menus: {
      width: ["100%", null, null, "33%"], // Adjusted for 3 columns on larger screens
      display: "flex",
      flexDirection: "column",
      mb: ["10px", null, null, "40px"],
    },

    heading: {
      fontSize: [3, null, null, 4],
      color: "text_secondary",
      fontWeight: "500",
      mb: [3, 4, 5, null, 6],
      lineHeight: "1.35",
    },

    link: {
      fontSize: ["14px", null, 1],
      color: "text",
      fontWeight: "body",
      mb: 2,
      cursor: "pointer",
      transition: "all 0.35s",
      display: "block",
      textDecoration: "none",
      lineHeight: [1.5, null, null, 1.6, 1.8],
      ":hover": {
        color: "primary",
      },
      ":last-child": {
        mb: "0px",
      },
    },
    copyright: {
      fontSize: ["14px", null, 1],
      width: "100%",
      textAlign: "center",
      p: ["20px 20px"],
      backgroundColor: "#FCFDFE",
      color: "text",
      a: {
        textDecoration: "none",
        color: "inherit",
        pl: 1,
        transition: "all 0.25s",
        "&:hover": {
          color: "primary",
        },
      },
    },
  },
};
