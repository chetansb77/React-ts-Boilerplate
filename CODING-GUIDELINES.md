# Coding Guidelines

## Coding Practices

1. Refer to all colors in the application only from colors.scss file
2. Only colors.scss and typography.scss can be imported into the styling files
3. To prevent the leaking of CSS styles, encapsulate it in a parent class
4. Asset management: Keep assets only in the global asset folder
5. Limit the number of lines of code in each file to be <200. In case it is not possible: move prop types to a separate file
6. Avoid {' '} from tsx
7. Avoid prop spreading in code
8. Font and other reusable properties to be blacklisted
9. Use the Svg preview plugin to view SVG's
