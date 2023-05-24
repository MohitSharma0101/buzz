const commonColors = {
  primaryColor:"#0378F9",
  green:"#53D08B",
  gray:"#D9D9D9",
}

export const lightTheme = {
    background:"#F8F9FB",
    text:"black",
    onSurface:"white",
    secondaryColor:"hsl(212,96%,50%, 0.2)",
    borderColor:"#E1E1E1",
    secondayText : "#8B8B8B",
    lessFocusedText : "#ADADAD",

    ...commonColors
  }
  
 export const darkTheme = {
    background:"#000200",
    text:"white",
    onSurface:"hsl(220,20%,7%)",
    secondaryColor:"hsl(212,96%,50%, 0.2)",
    borderColor:"#252629",
    secondayText : "#ADADAD",
    lessFocusedText : "#8B8B8B",

    ...commonColors
}