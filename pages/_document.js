import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render () {
    return (
      <Html lang='en'>
        <Head>
          <script async src='https://www.googletagmanager.com/gtag/js?id=G-KP53EQEWPD' />
          <script>
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-KP53EQEWPD');
          </script>
	  <link rel='icon' href='/favicon.ico' />
          <link rel='stylesheet' href='https://use.typekit.net/vrj7xjc.css' />
          <script src='https://kit.fontawesome.com/62785f7405.js' crossOrigin='anonymous' async />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
