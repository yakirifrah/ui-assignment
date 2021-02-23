import {Typography as MatTypography} from "@material-ui/core";


const Typography = {
    ExtraSmallText: ({ children, color }) => (
        <MatTypography variant="body2" color={color}>
            {children}
        </MatTypography>
    ),
        SmallText: ({ children, color, variant }) => (
        // variant will get `subtitle1` if its use in navbar and selected. `subtitle2` will use if not selected in navbar.
        <MatTypography variant={variant} color={color}>
            {children}
        </MatTypography>
    ),
        MediumText: ({ children, color }) => (
        <MatTypography variant="h5" color={color}>
            {children}
        </MatTypography>
    ),
        LargeText: ({ children, color }) => (
        <MatTypography variant="h6" color={color}>
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
}
export default Typography;
