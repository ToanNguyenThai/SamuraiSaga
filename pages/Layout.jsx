import Header from './Main/Header'
import Section from './Main/Section'
import Footer from './Main/Footer'
import Script from 'next/script'


export default function Main() {


    return (
        <div>
            <Header></Header>
            <Section></Section>
            <Footer></Footer>
            <Script src="https://d3e54v103j8qbb.cloudfront.net/js/jquery-3.5.1.min.dc5e7f18c8.js?site=618920e5b4d12352352ee7e3"
                type="text/javascript" integrity="sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0="
                crossorigin="anonymous" strategy="beforeInteractive"></Script>
            <Script src="https://uploads-ssl.webflow.com/618920e5b4d12352352ee7e3/js/webflow.413ee098b.js"
                type="text/javascript" strategy="beforeInteractive"></Script>

            <Script src="//cdnjs.cloudflare.com/ajax/libs/placeholders/3.0.2/placeholders.min.js" strategy="beforeInteractive"></Script>
            <Script src="https://min30327.github.io/luxy.js/dist/js/luxy.js" strategy="beforeInteractive"></Script>
        </div>

    )
}