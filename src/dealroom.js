import {
  Card,
  Grid,
  Title,
  Text,
  Tab,
  TabList,
  TabGroup,
  TabPanel,
  TabPanels,
  Callout,
  Metric,
  Flex,
  Button
} from "@tremor/react";
import DataTable from "./table.js"
import { useEffect } from "react";

import { TrendingUpIcon, TrendingDownIcon } from "@heroicons/react/solid";
import CreateCompany from "./createCompany.js";
import CreateReport from "./createReport.js";
import KpiCard from "./reportKPICard.js";

import { API } from "aws-amplify";
import { GRAPHQL_AUTH_MODE } from '@aws-amplify/api';
import { listContacts } from "./graphql/queries.js";

export default function Dealroom() {
  useEffect(()=> {
    const getContacts = async () => {
      const data = await API.graphql({query: listContacts, authMode: GRAPHQL_AUTH_MODE.API_KEY})
      console.log("DATA", data)
    }
    getContacts()
  }, [])
  return (
      <TabGroup className="mt-6">
        <TabList>
          <Tab>Create A Company</Tab>
          <Tab>Create A Report</Tab>
          <Tab>Active Deals</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <Grid numItemsMd={2} numItemsLg={2} className="gap-6 mt-6">
              <Card>
                {/* Placeholder to set height */}
                <Callout
                  title="Top of the pack!"
                  icon={TrendingUpIcon}
                  color="blue"
                >
                  You've created 2 companies this month. Keep it up!
                </Callout>
              </Card>
              <Card>
                <Metric className="mb-2">Fintech, Aerospace</Metric>
                <Text>Investment Profile</Text>
                {/* Placeholder to set height */}
              </Card>
            </Grid>
            <div className="mt-6">
              <Card>
                <CreateCompany/>
              </Card>
            </div>
          </TabPanel>
          
          <TabPanel>
            <Grid numItemsMd={2} numItemsLg={2} className="gap-6 mt-6">
              <Card>
                {/* Placeholder to set height */}
                <Callout
                  title="Market Headwinds"
                  icon={TrendingDownIcon}
                  color="yellow"
                >
                  Down month for the market, but keep trying!
                </Callout>
              </Card>
              <KpiCard/>
            </Grid>
            <div className="mt-6">
              <Card>
                <CreateReport/>
              </Card>
            </div>
          </TabPanel>
          
          <TabPanel>
            <DataTable/>
          </TabPanel>
        </TabPanels>
      </TabGroup>
  );
}