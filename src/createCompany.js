import {
    Card,
    Subtitle,
    Grid, 
    Col,
    Text,
    TextInput,
    Flex,
    Button
  } from "@tremor/react";
  import { SearchIcon, CurrencyDollarIcon } from "@heroicons/react/solid";
import { useEffect, useState } from "react";
import SelectDropdown from "./selectDropdown.js"

import {
  createCompany as createCompanyMutation,
} from "./graphql/mutations";

import {onCreateCompany} from "./graphql/subscriptions.js"

import { API, graphqlOperation } from "aws-amplify";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function CreateCompany() {
  const [companyData, setCompanyData] = useState({
    name: "",
    industry: null,
    headquarters: "",
    businessModel: null,
    businessModelNote: "",
    founderQuality: null,
    features: ""
  })
  const handleOnChange = (e) => {

    setCompanyData(prevState => ({
      ...prevState,
      [e.target.name]: e.target.value
    }));
  }

  const handleOnSelectChange = (e, type) => {
    setCompanyData(prevState => ({
      ...prevState,
      [type]: e
    }));
  }
  useEffect(() => {
    const subscription = API.graphql({
      query: onCreateCompany
    }).subscribe({
      next: data => {
        toast.success(`🦄 created ${data.value.data.onCreateCompany.name}`, {
          position: "top-center",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        })
        setCompanyData({
          name: "",
          industry: null,
          headquarters: "",
          businessModel: null,
          businessModelNote: "",
          founderQuality: null,
          features: ""
        })
      }
    })

    return () => subscription.unsubscribe()
  }, [])

  async function createCompany() {
    try {
      await API.graphql(graphqlOperation(createCompanyMutation, {input: companyData}))
    } catch (err) {
      console.log('error creating company:', err)
    }
  }
  return (
    <>
      <Subtitle className="mb-8">Company Details</Subtitle>
      <Grid numItems={1} numItemsSm={2} numItemsLg={3} className="gap-4">
          <Col>
            <Card>
              <Text className="pb-4">Company Name</Text>
              <TextInput placeholder="Company Name" onChange={handleOnChange} name="name" value={companyData["name"]}/>
            </Card>
          </Col>
          <Col>
            <Card>
              <Text className="pb-4">Industry</Text>
              <SelectDropdown selections={["ECOMMERCE","AEROSPACE","MANUFACTURINGS", "FINTECH"]} name="industry" onChange={handleOnSelectChange} value={companyData["industry"]}/>
            </Card>
          </Col>
          <Col>
            <Card>
              <Text className="pb-4">HQ Location</Text>
              <TextInput placeholder="HQ Location" onChange={handleOnChange} name="headquarters" value={companyData["headquarters"]}/>
            </Card>
          </Col>
          <Col>
            <Card>
              <Text className="pb-4">Business Model</Text>
              <SelectDropdown selections={["SAAS_SUBSCRIPTION","TRANSACTIONAL","CUSTOM"]} name="businessModel" onChange={handleOnSelectChange} value={companyData["businessModel"]}/>
            </Card>
          </Col>
          <Col>
            <Card>
              <Text className="pb-4">Business Model Note</Text>
              <TextInput placeholder="Business Model Note" onChange={handleOnChange} name="businessModelNote" value={companyData["businessModelNote"]}/>
            </Card>
          </Col>
          
          <Col>
            <Card>
              <Text className="pb-4">Founder Quality</Text>
              <SelectDropdown selections={["EXCEPTIONAL","STRONG","AVERAGE", "UNKNOWN", "BELOW_AVERAGE"]} name="founderQuality" onChange={handleOnSelectChange} value={companyData["founderQuality"]}/>
            </Card>
          </Col>
          <Col numColSpan={3}>
            <Card>
              <Text className="pb-4">Feature Set</Text>
                <TextInput placeholder="Feature Set" onChange={handleOnChange} name="features" value={companyData["features"]}/>
            </Card>
          </Col>
          <Col numColSpan={3}>
            <div className="mt-6">
                <Flex justifyContent="end" className="space-x-2 border-t pt-4 mt-8">
                  <Button variant="secondary" onClick={createCompany} disabled={Object.keys(companyData).length < 6 ? true : false}>
                    Create Company
                  </Button>
                </Flex>
            </div>
          </Col>
          <ToastContainer
            position="top-center"
            autoClose={1000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
            />
        </Grid>
    </>
    
  );
}
