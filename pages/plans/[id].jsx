import Layout from "../../components/Layout"
import Link from "next/link"

export const getServerSideProps = async () => {
  const res = await fetch(
    `https://opendata.camden.gov.uk/resource/2eiu-s2cw.json`,
    {
      headers: {
        "X-App-Token": process.env.CAMDEN_APP_TOKEN,
      },
    }
  )
  const plans = await res.json()
  // either have an api endpoint for a single plan, or add a plans.filter() logic to grab only the one we're interested in
  return { props: { plan } }
}

const Show = ({ plan }) => (
  <Layout>
    <h1>Plans</h1>
    {/* content here */}
  </Layout>
)

export default Show
