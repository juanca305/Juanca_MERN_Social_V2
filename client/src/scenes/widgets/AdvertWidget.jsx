import { Typography, useTheme } from "@mui/material";
import FlexBetween from "components/FlexBetween";
import WidgetWrapper from "components/WidgetWrapper";

const AdvertWidget = () => {
  const { palette } = useTheme();
  const dark = palette.neutral.dark;
  const main = palette.neutral.main;
  const medium = palette.neutral.medium;

  return (
    <WidgetWrapper>
      <FlexBetween>
        <Typography color={dark} variant="h5" fontWeight="500">
          Sponsored
        </Typography>
        <Typography color={medium}>Create Ad</Typography>
      </FlexBetween>
      <img
        width="100%"
        height="auto"
        alt="advert"
        src="https://juanca-mern-social-v2.onrender.com/assets/beatles_guitars.jpg"
        style={{ borderRadius: "0.75rem", margin: "0.75rem 0" }}
      />
      <FlexBetween>
        <Typography color={main}>Beatles Guitars</Typography>
        <Typography color={medium}>beatlesguitars.com</Typography>
      </FlexBetween>
      <Typography color={medium} m="0.5rem 0">
        {/* Your pathway to stunning and immaculate beauty and made sure your skin
        is exfoliating skin and shining like light. */}
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus at
        praesentium consequatur rem error repellendus? Labore ab libero sequi
        vero!
      </Typography>
    </WidgetWrapper>
  );
};

export default AdvertWidget;
