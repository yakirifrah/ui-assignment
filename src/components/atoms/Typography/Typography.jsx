import { Typography as MatTypography } from '@material-ui/core';

const Typography = {
  ExtraSmallText: ({ children, color }) => (
    <MatTypography variant="body2" color={color}>
      {children}
    </MatTypography>
  ),
  LargeText: ({ children, color }) => (
    <MatTypography variant="h1" color={color}>
      {children}
    </MatTypography>
  ),
  HeaderTextForChart: ({ children, color }) => (
    <MatTypography variant="h2" color={color}>
      {children}
    </MatTypography>
  ),
  MediumText: ({ children, color }) => (
    <MatTypography variant="h3" color={color}>
      {children}
    </MatTypography>
  ),
  SmallText: ({ children, color, variant }) => (
    <MatTypography variant={variant} color={color}>
      {children}
    </MatTypography>
  ),
  UppercaseText: ({ children, color }) => (
    <MatTypography variant="subtitle2" color={color}>
      {children}
    </MatTypography>
  ),
  SubtitleText: ({ children, color }) => (
    <MatTypography variant="body1" color={color}>
      {children}
    </MatTypography>
  ),
};
export default Typography;
