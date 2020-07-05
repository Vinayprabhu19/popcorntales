import '../static/css/Detail.css'
import '../static/css/Home.css'
import '../static/css/card.css'
import '../static/css/review.css'
import '../static/css/analytics.css'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}