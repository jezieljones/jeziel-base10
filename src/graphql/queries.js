/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
      id
      firstName
      lastName
      userType
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        firstName
        lastName
        userType
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getReport = /* GraphQL */ `
  query GetReport($id: ID!) {
    getReport(id: $id) {
      id
      revenue
      cashburn
      companyID
      createdBy {
        id
        firstName
        lastName
        userType
        createdAt
        updatedAt
        __typename
      }
      arpu
      ltv
      cac
      cashOnHand
      ebitda
      grossProfitAmount
      customerCount
      grossProfitPercentage
      nextFundraiseDate
      reportCreatedDate
      createdAt
      updatedAt
      reportCreatedById
      __typename
    }
  }
`;
export const listReports = /* GraphQL */ `
  query ListReports(
    $filter: ModelReportFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listReports(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        revenue
        cashburn
        companyID
        createdBy {
          id
          firstName
          lastName
          userType
          createdAt
          updatedAt
          __typename
        }
        arpu
        ltv
        cac
        cashOnHand
        ebitda
        grossProfitAmount
        customerCount
        grossProfitPercentage
        nextFundraiseDate
        reportCreatedDate
        createdAt
        updatedAt
        reportCreatedById
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getContact = /* GraphQL */ `
  query GetContact($id: ID!) {
    getContact(id: $id) {
      id
      firstName
      lastName
      userType
      linkedinProfileUrl
      companyContacts {
        items {
          id
          contactId
          companyId
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listContacts = /* GraphQL */ `
  query ListContacts(
    $filter: ModelContactFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listContacts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        firstName
        lastName
        userType
        linkedinProfileUrl
        companyContacts {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getCompany = /* GraphQL */ `
  query GetCompany($id: ID!) {
    getCompany(id: $id) {
      id
      name
      industry
      founderQuality
      businessModel
      businessModelNote
      contacts {
        items {
          id
          contactId
          companyId
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      headquarters
      location
      features
      financialReports {
        items {
          id
          revenue
          cashburn
          companyID
          arpu
          ltv
          cac
          cashOnHand
          ebitda
          grossProfitAmount
          customerCount
          grossProfitPercentage
          nextFundraiseDate
          reportCreatedDate
          createdAt
          updatedAt
          reportCreatedById
          __typename
        }
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listCompanies = /* GraphQL */ `
  query ListCompanies(
    $filter: ModelCompanyFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCompanies(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        industry
        founderQuality
        businessModel
        businessModelNote
        contacts {
          nextToken
          __typename
        }
        headquarters
        location
        features
        financialReports {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getContactCompany = /* GraphQL */ `
  query GetContactCompany($id: ID!) {
    getContactCompany(id: $id) {
      id
      contactId
      companyId
      contact {
        id
        firstName
        lastName
        userType
        linkedinProfileUrl
        companyContacts {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      company {
        id
        name
        industry
        founderQuality
        businessModel
        businessModelNote
        contacts {
          nextToken
          __typename
        }
        headquarters
        location
        features
        financialReports {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listContactCompanies = /* GraphQL */ `
  query ListContactCompanies(
    $filter: ModelContactCompanyFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listContactCompanies(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        contactId
        companyId
        contact {
          id
          firstName
          lastName
          userType
          linkedinProfileUrl
          createdAt
          updatedAt
          __typename
        }
        company {
          id
          name
          industry
          founderQuality
          businessModel
          businessModelNote
          headquarters
          location
          features
          createdAt
          updatedAt
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const reportsByCompanyID = /* GraphQL */ `
  query ReportsByCompanyID(
    $companyID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelReportFilterInput
    $limit: Int
    $nextToken: String
  ) {
    reportsByCompanyID(
      companyID: $companyID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        revenue
        cashburn
        companyID
        createdBy {
          id
          firstName
          lastName
          userType
          createdAt
          updatedAt
          __typename
        }
        arpu
        ltv
        cac
        cashOnHand
        ebitda
        grossProfitAmount
        customerCount
        grossProfitPercentage
        nextFundraiseDate
        reportCreatedDate
        createdAt
        updatedAt
        reportCreatedById
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const contactCompaniesByContactId = /* GraphQL */ `
  query ContactCompaniesByContactId(
    $contactId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelContactCompanyFilterInput
    $limit: Int
    $nextToken: String
  ) {
    contactCompaniesByContactId(
      contactId: $contactId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        contactId
        companyId
        contact {
          id
          firstName
          lastName
          userType
          linkedinProfileUrl
          createdAt
          updatedAt
          __typename
        }
        company {
          id
          name
          industry
          founderQuality
          businessModel
          businessModelNote
          headquarters
          location
          features
          createdAt
          updatedAt
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const contactCompaniesByCompanyId = /* GraphQL */ `
  query ContactCompaniesByCompanyId(
    $companyId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelContactCompanyFilterInput
    $limit: Int
    $nextToken: String
  ) {
    contactCompaniesByCompanyId(
      companyId: $companyId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        contactId
        companyId
        contact {
          id
          firstName
          lastName
          userType
          linkedinProfileUrl
          createdAt
          updatedAt
          __typename
        }
        company {
          id
          name
          industry
          founderQuality
          businessModel
          businessModelNote
          headquarters
          location
          features
          createdAt
          updatedAt
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
