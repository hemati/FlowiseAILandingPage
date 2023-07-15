/** @jsx jsx */
import { jsx, Image } from "theme-ui";
import { Link } from "components/link";

export default function Logo({ src, text, ...rest }) {
  return (
    <Link
      path="/"
      sx={{
        variant: "links.logo",
        display: "flex",
        cursor: "pointer",
        alignItems: 'center',
        flexDirection: 'row',
        mr: 15,
          textDecoration:'none',
          color:"white",
          fontSize:24
      }}
      {...rest}
    >
      <Image sx={{ objectFit: 'contain', height: 'auto', width: 50, marginRight: 2}}
             src={src} alt={text} />
        {text}
    </Link>
  );
}
