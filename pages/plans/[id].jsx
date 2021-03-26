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
  return { props: { plans } }
}

const Show = ({ plans }) => (
  <Layout>
    <h1>Plans</h1>
    {/* content here */}
  </Layout>
)

export default Show
