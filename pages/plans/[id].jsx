import Layout from "../../components/Layout"
import Link from "next/link"

export const getServerSideProps = async ({params}) => {
  const id = Number(params?.id);
  //console.log("id", id)
  const res = await fetch(
    `https://opendata.camden.gov.uk/resource/2eiu-s2cw.json?pk=${id}`,
    {
      headers: {
        "X-App-Token": process.env.CAMDEN_APP_TOKEN,
      },  
    }
  )
  const [ plan ] = await res.json()
  // {pk, application_number, development_address, development_description, decision_type, valid_from_date, registered_date, registered_in_last_7_working_days, registered_in_last_28_working_days, earliest_decision_date, decision_date, decison_level, system_status, system_status_change_date, applicant_name, ward, conservation_areas, case_officer, case_officer_team, responsibility_type, comment, full_application, application_type, easting, northing, longitude, latitude, spatial_accuracy, last_uploaded, location, socrata_id, organisation_uri}
  return { props: { plan }  }
}

const Show = ({ plan }) => (
  <Layout>
    <h1>Plan</h1>
    <p>Application number: {plan.application_number}</p>
    <p>Development address: {plan.development_address}</p>
    <p>Latitude: {plan.latitude}</p>
    <p>Longitude: {plan.longitude}</p>
  </Layout>
)

export default Show
