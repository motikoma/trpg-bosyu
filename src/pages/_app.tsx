
import React,{useEffect} from "react";
import '../../styles/globals.css';
import {
  ThemeProvider as MaterialUIThemeProvider,
  StylesProvider
} from '@material-ui/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import theme from "../../styles/theme";

function MyApp({ Component, pageProps }) {
  // Remove the server-side injected CSS.(https://material-ui.com/guides/server-rendering/)
  useEffect(() => {
    const jssStyles = document.querySelector('#jss-server-side')
    if (jssStyles && jssStyles.parentNode) {
      jssStyles.parentNode.removeChild(jssStyles)
    }
  }, [])
  return (
    <MaterialUIThemeProvider theme={theme}>
      <CssBaseline />
      <Component {...pageProps} />
    </MaterialUIThemeProvider>
  );
}

export default MyApp
