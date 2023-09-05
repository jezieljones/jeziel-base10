'use client'

import {
    Card,
    NumberInput,
    Subtitle,
    Grid, 
    Col,
    Text,
    TextInput,
    Flex,
    Button,
    DatePicker
  } from "@tremor/react";
  import { SearchIcon, CurrencyDollarIcon } from "@heroicons/react/solid";
import SelectTimeFrame from "./selectTimeFrame.js"
import SelectDropdown from "./selectDropdown.js"
import SelectCompanyDropdown from "./selectCompanyDropdown.js"

import { useEffect, useState } from "react";

import {
  createReport as createReportMutation,
} from "./graphql/mutations";

import { onCreateReport, onCreateCompany } from "./graphql/subscriptions.js"

import { API, graphqlOperation } from "aws-amplify";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { listCompanies } from "./graphql/queries.js";

const userId = "chadOchoCinco"

const convertToMonthly = (origTimeFrame, val) => {
  if (origTimeFrame === "year") {
    return val / 12
  } else if (origTimeFrame === "quarter") {
    return val / 3
  } else {
    return val
  }
}

export default function CreateReport() {
  const [reportData, setReportData] = useState({
    companyName: '',
    // revenue: 124,
    // cashburn: 4.5,
    // companyID: 1235,
    // customerCount: 1234,
    // reportCreatedById: 1234,
    nextFundraiseDate: new Date()
  })

  const [companies, setCompanies] = useState([])
  const handleOnChange = (e) => {
    setReportData(prevState => ({
      ...prevState,
      [e.target.name]: e.target.value
    }));
  }

  const handleOnDateChange = (e) => {
    setReportData(prevState => ({
      ...prevState,
      ["nextFundraiseDate"]: e
    }));
  }

  const handleOnSelectChange = (e, type) => {
    setReportData(prevState => ({
      ...prevState,
      [type]: e
    }));
  }

  useEffect(()=> {
    const getCompanies = async () => {
      const companies = await API.graphql({query: listCompanies})
      setCompanies(companies.data.listCompanies.items)
    }
    getCompanies()
  }, [])

  useEffect(() => {
    const subscription = API.graphql({
      query: onCreateCompany
    }).subscribe({
      next: data => {
        setCompanies((prevState) => [...prevState,
          data.value.data.onCreateCompany])
      }
    })

    return () => subscription.unsubscribe()
  }, [])

  useEffect(() => {
    const subscription = API.graphql({
      query: onCreateReport
    }).subscribe({
      next: async data => {
        const createdName = companies.find(c=> c.id === `${data.value.data.onCreateReport.companyID}`).name
        toast.success(`🦄 created report for ${createdName}`, {
          position: "top-center",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        })
        setReportData({
          revenue: "",
          cashburn: "",
          companyID: "",
          arpu: "",
          ltv: "",
          cac: "",
          cashOnHand: "",
          ebitda: "",
          customerCount: "",
          grossProfitPercentage: "",
          nextFundraiseDate: new Date(),
          grossProfitAmount: ""
        })
      }
    })

    return () => subscription.unsubscribe()
  }, [companies])

  async function createReport() {
    reportData.revenue = convertToMonthly(reportData.reportTimeFrame, reportData.revenue)
    reportData.cashburn = convertToMonthly(reportData.reportTimeFrame, reportData.cashburn)
    reportData.grossProfitPercentage = convertToMonthly(reportData.reportTimeFrame, reportData.grossProfitPercentage)
    reportData.grossProfitAmount = convertToMonthly(reportData.reportTimeFrame, reportData.grossProfitAmount)
    reportData.ebitda = convertToMonthly(reportData.reportTimeFrame, reportData.ebitda)
    reportData.cashOnHand = convertToMonthly(reportData.reportTimeFrame, reportData.cashOnHand)
    reportData.ltv = convertToMonthly(reportData.reportTimeFrame, reportData.ltv)
    reportData.cac = convertToMonthly(reportData.reportTimeFrame, reportData.cac)
    reportData.arpu = convertToMonthly(reportData.reportTimeFrame, reportData.arpu)
    reportData.nextFundraiseDate = reportData.nextFundraiseDate.toDateString()
    reportData.companyID = reportData.companyID.replace(/["]+/g, '')
    delete reportData.reportTimeFrame
    delete reportData.companyName

    try {
      await API.graphql(graphqlOperation(createReportMutation, {input: reportData}))
    } catch (err) {
      console.log('error creating report:', err)
    }
  }

  if (companies.length < 1) return null

  return (
    <>
      <Subtitle className="mb-8">Report Details</Subtitle>
      <Grid numItems={1} numItemsSm={2} numItemsLg={3} className="gap-4">
          <Col>
            <Card>
              <Text className="pb-4">Company Name</Text>
              <SelectCompanyDropdown selections={companies} name="companyID" onChange={handleOnSelectChange} value={reportData["companyID"]}/>
            </Card>
          </Col>
          <Col>
            <Card>
              <Text className="pb-4">Report Time Frame</Text>
              <SelectDropdown selections={["year","month", "quarter"]} name="reportTimeFrame" onChange={handleOnSelectChange} value={reportData["reportTimeFrame"]}/>
            </Card>
          </Col>
          <Col>
            {/* Nothing here needed */}
          </Col>
          <Col>
            <Card>
              <Text className="pb-4">Revenue</Text>
                <NumberInput enableStepper={false} icon={CurrencyDollarIcon} placeholder="Revenue" name="revenue" onChange={handleOnChange} value={reportData["revenue"]}/>
            </Card>
          </Col>
          <Col>
            <Card>
              <Text className="pb-4">Cash Burn</Text>
                <NumberInput enableStepper={false} icon={CurrencyDollarIcon} placeholder="Cash Burn"  name="cashburn" onChange={handleOnChange} value={reportData["cashburn"]}/>
            </Card>
          </Col>
          <Col>
            <Card>
              <Text className="pb-4">Gross Profit %</Text>
                <NumberInput enableStepper={false} placeholder="%"  name="grossProfitPercentage" onChange={handleOnChange} value={reportData["grossProfitPercentage"]}/>
            </Card>
          </Col>
          <Col>
            <Card>
              <Text className="pb-4">Gross Profit $</Text>
                <NumberInput enableStepper={false} icon={CurrencyDollarIcon} placeholder="$"  name="grossProfitAmount" onChange={handleOnChange} value={reportData["grossProfitAmount"]}/>
            </Card>
          </Col>
          <Col>
            <Card>
              <Text className="pb-4">EBITDA</Text>
                <NumberInput enableStepper={false} placeholder="EBITDA" name="ebitda" onChange={handleOnChange} value={reportData["ebitda"]}/>
            </Card>
          </Col>
          <Col>
            <Card>
              <Text className="pb-4">Cash on Hand</Text>
                <NumberInput enableStepper={false} icon={CurrencyDollarIcon} placeholder="Cash on Hand" name="cashOnHand" onChange={handleOnChange} value={reportData["cashOnHand"]}/>
            </Card>
          </Col>
          <Col>
            <Card>
              <Text className="pb-4">CAC</Text>
                <NumberInput enableStepper={false} icon={CurrencyDollarIcon} placeholder="CAC" name="cac" onChange={handleOnChange} value={reportData["cac"]}/>
            </Card>
          </Col>
          <Col>
            <Card>
              <Text className="pb-4">LTV</Text>
                <NumberInput enableStepper={false} icon={CurrencyDollarIcon} placeholder="LTV" name="ltv" onChange={handleOnChange} value={reportData["ltv"]}/>
            </Card>
          </Col>
          <Col>
            <Card>
              <Text className="pb-4">ARPU</Text>
                <NumberInput enableStepper={false} icon={CurrencyDollarIcon} placeholder="ARPU" name="arpu" onChange={handleOnChange} value={reportData["arpu"]}/>
            </Card>
          </Col>
          <Col>
            <Card>
              <Text className="pb-4">Customer Count</Text>
                <NumberInput enableStepper={false} placeholder="Customer Count" name="customerCount" onChange={handleOnChange} value={reportData["customerCount"]} />
            </Card>
          </Col>
          <Col>
            <Card>
              <Text className="pb-4">Next Estimated Fundraise</Text>
              <DatePicker className="max-w-sm mx-auto" name="nextFundraiseDate" onValueChange={handleOnDateChange} value={reportData["nextFundraiseDate"]} defaultValue={new Date()}/>
            </Card>
          </Col>
          <Col numColSpan={3}>
            <div className="mt-6">
                <Flex justifyContent="end" className="space-x-2 border-t pt-4 mt-8">
                  <Button variant="secondary" onClick={createReport} disabled={Object.keys(reportData).length < 3 ? true : false}>
                    Create report
                  </Button>
                </Flex>
            </div>
          </Col>
        </Grid>
    </>
    
  );
}
