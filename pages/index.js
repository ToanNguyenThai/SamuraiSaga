import Head from 'next/head'
import Layout from './Layout'


export default function Home() {

    return (
        <div>
            <Head>
                <meta charSet="utf-8" />
                <title>Samurai Saga</title>
                <meta content="If they stand behind you, protect them · If they stand beside you, respect them · If they stand against you, defeat them." name="description" />
                <meta content="Samurai Saga" property="og:title" />
                <meta content="If they stand behind you, protect them · If they stand beside you, respect them · If they stand against you, defeat them." property="og:description" />
                <meta content="https://uploads-ssl.webflow.com/618920e5b4d12352352ee7e3/61901345756c4c1360e0a020_ss-open-graph.png" property="og:image" />
                <meta content="Samurai Saga" property="twitter:title" />
                <meta content="If they stand behind you, protect them · If they stand beside you, respect them · If they stand against you, defeat them." property="twitter:description" />
                <meta content="https://uploads-ssl.webflow.com/618920e5b4d12352352ee7e3/61901345756c4c1360e0a020_ss-open-graph.png" property="twitter:image" />
                <meta property="og:type" content="website" />
                <meta content="summary_large_image" name="twitter:card" />
                <meta content="width=device-width, initial-scale=1" name="viewport" />
                <meta content="Webflow" name="generator" />

                <link href="https://uploads-ssl.webflow.com/618920e5b4d12352352ee7e3/619012093f58e7f20158cb86_ss-fav.png" rel="shortcut icon" type="image/x-icon" />
                <link href="https://uploads-ssl.webflow.com/618920e5b4d12352352ee7e3/61901217d9f1200cac44132c_ss-clip.png" rel="apple-touch-icon" />

                {/* Global site tag (gtag.js) - Google Analytics */}
                <style type="text/css" dangerouslySetInnerHTML={{ __html: "\n        .hero-jp {\n            pointer-events: none;\n        }\n    " }} />
                <style dangerouslySetInnerHTML={{ __html: "\n        ::-webkit-scrollbar {\n            width: 4px;\n        }\n\n        /* Track */\n        ::-webkit-scrollbar-track {}\n\n        /* Handle */\n        ::-webkit-scrollbar-thumb {\n\n\n            background: rgba(184, 7, 7, 1);\n\n        }\n    " }} />
            </Head>
            <Layout></Layout>
        </div>
    )
}
