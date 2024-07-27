const breakpoints = {
    xs: '320px',
    sm: '640px',
    md: '768px',
    lg: '1034px',
    xl: '1260px',
}

export const devices = {
    xxs: `(max-width: ${breakpoints.xs})`,
    xs: `(min-width: ${breakpoints.xs})`,
    sm: `(min-width: ${breakpoints.sm})`,
    md: `(min-width: ${breakpoints.md})`,
    lg: `(min-width: ${breakpoints.lg})`,
    xl: `(min-width: ${breakpoints.xl})`,
}