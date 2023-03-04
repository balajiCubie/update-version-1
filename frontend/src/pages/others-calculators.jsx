
// ** MUI Imports
import Grid from '@mui/material/Grid'
import Dropdown from 'react-bootstrap/Dropdown';

// import CurrencyUsd from 'mdi-material-ui/CurrencyUsd'
// import HelpCircleOutline from 'mdi-material-ui/HelpCircleOutline'
// import BriefcaseVariantOutline from 'mdi-material-ui/BriefcaseVariantOutline'

// ** Custom Components Imports
// import CardStatisticsVerticalComponent from 'src/@core/components/card-statistics/card-stats-vertical'

// ** Styled Component Import
import ApexChartWrapper from 'src/@core/styles/libs/react-apexcharts'

// ** Demo Components Imports
// import Table from 'src/views/dashboard/Table'

import Trophy from 'src/views/dashboard/Trophy'

// import TotalEarning from 'src/views/dashboard/TotalEarning'
// import StatisticsCard from 'src/views/dashboard/StatisticsCard'
// import WeeklyOverview from 'src/views/dashboard/WeeklyOverview'
// import DepositWithdraw from 'src/views/dashboard/DepositWithdraw'
// import SalesByCountries from 'src/views/dashboard/SalesByCountries'

// Sanity
import { createClient } from 'next-sanity'

const client = createClient({
  projectId: 't0tgcmpy',
  dataset: 'production',
  apiVersion: '2021-10-14',
  useCdn: false
})

export async function getStaticProps() {
  const app = await client.fetch(`*[_type == "others"]`)

  return {
    props: {
      app
    }
  }
}

const Calculators = ({ app }) => {
  return (
    <ApexChartWrapper>

      <Grid container spacing={6}>
        {/* {app.length > 0 && ( */}
          <>
            {app.slice(0).reverse().map(app => (
              <Grid item xs={12} md={4} key={app._id}>
                <Trophy name={app?.name} desc={app?.desc} slug={app?.slug} content={app?.content} typCal={app?.typCal} url={"other"}/>
                {/* <li >{app?.name}</li> */}
              </Grid>
            ))}
          </>
        {/* )} */}
      </Grid>
    </ApexChartWrapper>
  )
}

export default Calculators
