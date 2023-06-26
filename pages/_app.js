import { useEffect } from 'react';
import '../styles/globals.css'
import { ThemeProvider } from "next-themes";
import AOS from "aos";
import "aos/dist/aos.css";
import Script from 'next/script';
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
// <!-- Google tag (gtag.js) -->
{/* <script async src="https://www.googletagmanager.com/gtag/js?id=G-Q0SZQE7CST"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-Q0SZQE7CST');
</script> */}

export default function App({ Component, pageProps }) {


    useEffect(() => {
      AOS.init();
      AOS.refresh();
    }, []);
   return (
     <ThemeProvider enableSystem={true} attribute="class">
       <ToastContainer />
       <Component {...pageProps} />
       <Script
         id="google"
         src={`https://www.googletagmanager.com/gtag/js?id=G-${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
         type="text/javascript"
         strategy="lazyOnload"
       />
       <Script strategy="lazyOnload" id="googler">
         {` window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config','G-W6FXH2Z651' );`}
       </Script>
     </ThemeProvider>
   );
}
