import Layout from "../../components/Layout"
import Link from "next/link"

export const getServerSideProps = async () => {
    const res = await fetch(`https://opendata.camden.gov.uk/resource/2eiu-s2cw.json`, {
        headers: {
            "X-App-Token": process.env.CAMDEN_APP_TOKEN
        }
    })
    const plans = await res.json()
    return { props: { plans } }
}

const Index = ({ plans }) => (
  <Layout>
    {console.log(plans)}
    <h1>Plans</h1>
    <table>
      <thead>
        <tr>
          <th>Addess</th>
          <th>Description</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {plans.map(plan => (
          <tr key={plan.id}>
            <td>{plan.development_address}</td>
            <td>{plan.development_description}</td>
            <td>
              <Link href={`/plans/${plan.id}`}>
                <a>Show</a>
              </Link>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </Layout>
)

export default Index