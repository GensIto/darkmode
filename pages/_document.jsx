import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="ja">
        <Head />
        <body>
          <script
            dangerouslySetInnerHTML={{
              __html: themeInitializerScript,
            }}
          ></script>
        </body>
        <Main />
        <NextScript />
      </Html>
    );
  }
}

const themeInitializerScript = `(function() {
	${setInitialColorMode.toString()}
	setInitialColorMode();
})()
`;

function setInitialColorMode() {
  function getInitialColorMode() {
    // then
    const storedPreferenceMode = window.localStorage.getItem("theme");
    const hasStoredPreference = typeof storedPreferenceMode === "string";

    if (hasStoredPreference) {
      return storedPreferenceMode;
    }

    // now
    const preference = window.matchMedia("(prefers-color-scheme): dark");
    const hasMediaQueryPreference = typeof preference.matches === "boolean";

    if (hasMediaQueryPreference) {
      return preference.matches ? "dark" : "light";
    }
    return "light";
  }

  const currentColorMode = getInitialColorMode();
  if (currentColorMode === "dark") {
    document.documentElement.setAttribute("data-theme", "dark");
  }
}

export default MyDocument;
