import {
    Card,
    Table,
    TableRow,
    TableCell,
    TableHead,
    TableHeaderCell,
    TableBody,
  } from "@tremor/react";
  
  import React, { useState, useEffect } from 'react';
  import { API } from 'aws-amplify'
  import { listReports, listCompanies } from './graphql/queries'
  import { GRAPHQL_AUTH_MODE } from '@aws-amplify/api';
  import {onCreateCompany, onCreateReport} from "./graphql/subscriptions.js"

  
  export default function Example() {
  const [reports, setReports] = useState([])
  const [companies, setCompanies] = useState([])

    useEffect(()=> {
      const getReports = async () => {
        const data = await API.graphql({query: listReports, authMode: GRAPHQL_AUTH_MODE.API_KEY})
        setReports(data.data.listReports.items)
      }
      getReports()
    }, [])
    useEffect(()=> {
      const getCompanies = async () => {
        const data = await API.graphql({query: listCompanies, authMode: GRAPHQL_AUTH_MODE.API_KEY})
        setCompanies(data.data.listCompanies.items)
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
        next: data => {
          setReports((prevState) => [...prevState,
            data.value.data.onCreateReport])
        }
      })
  
      return () => subscription.unsubscribe()
    }, [])

    return (
      <Card className="gap-6 mt-6">
        <Table>
          <TableHead>
            <TableRow>
              <TableHeaderCell className="text-right">Id</TableHeaderCell>
              <TableHeaderCell className="text-right">rev</TableHeaderCell>
              <TableHeaderCell className="text-right">burn</TableHeaderCell>
              <TableHeaderCell className="text-right">arpu</TableHeaderCell>
              <TableHeaderCell className="text-right">ltv</TableHeaderCell>
              <TableHeaderCell className="text-right">cac</TableHeaderCell>
              <TableHeaderCell className="text-right">cash</TableHeaderCell>
              <TableHeaderCell className="text-right">ebitda</TableHeaderCell>
              <TableHeaderCell className="text-right">gp$</TableHeaderCell>
              <TableHeaderCell className="text-right">gp %</TableHeaderCell>
              <TableHeaderCell className="text-right">cust count</TableHeaderCell>
              <TableHeaderCell className="text-right">next raise date</TableHeaderCell>
            </TableRow>
          </TableHead>
  
          <TableBody>
            {reports.map((item, idx) => (
              <TableRow key={idx}>
                <TableCell>{companies.find(c=> c.id === item.companyID) ? companies.find(c=> c.id === item.companyID).name : ""}</TableCell>
                <TableCell className="text-right">{item.revenue.toFixed(2)}</TableCell>
                <TableCell className="text-right">{item.cashburn.toFixed(2)}</TableCell>
                <TableCell className="text-right">{item.arpu.toFixed(2)}</TableCell>
                <TableCell className="text-right">{item.ltv.toFixed(2)}</TableCell>
                <TableCell className="text-right">{item.cac.toFixed(2)}</TableCell>
                <TableCell className="text-right">{item.cashOnHand.toFixed(2)}</TableCell>
                <TableCell className="text-right">{item.ebitda.toFixed(2)}</TableCell>
                <TableCell className="text-right">{item.grossProfitAmount.toFixed(2)}</TableCell>
                <TableCell className="text-right">{item.grossProfitPercentage.toFixed(2)}</TableCell>
                <TableCell className="text-right">{item.customerCount}</TableCell>
                <TableCell className="text-right">{item.nextFundraiseDate}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Card>
    );
  }