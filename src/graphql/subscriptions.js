/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser($filter: ModelSubscriptionUserFilterInput) {
    onCreateUser(filter: $filter) {
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
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser($filter: ModelSubscriptionUserFilterInput) {
    onUpdateUser(filter: $filter) {
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
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser($filter: ModelSubscriptionUserFilterInput) {
    onDeleteUser(filter: $filter) {
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
export const onCreateReport = /* GraphQL */ `
  subscription OnCreateReport($filter: ModelSubscriptionReportFilterInput) {
    onCreateReport(filter: $filter) {
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
export const onUpdateReport = /* GraphQL */ `
  subscription OnUpdateReport($filter: ModelSubscriptionReportFilterInput) {
    onUpdateReport(filter: $filter) {
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
export const onDeleteReport = /* GraphQL */ `
  subscription OnDeleteReport($filter: ModelSubscriptionReportFilterInput) {
    onDeleteReport(filter: $filter) {
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
export const onCreateContact = /* GraphQL */ `
  subscription OnCreateContact($filter: ModelSubscriptionContactFilterInput) {
    onCreateContact(filter: $filter) {
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
export const onUpdateContact = /* GraphQL */ `
  subscription OnUpdateContact($filter: ModelSubscriptionContactFilterInput) {
    onUpdateContact(filter: $filter) {
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
export const onDeleteContact = /* GraphQL */ `
  subscription OnDeleteContact($filter: ModelSubscriptionContactFilterInput) {
    onDeleteContact(filter: $filter) {
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
export const onCreateCompany = /* GraphQL */ `
  subscription OnCreateCompany($filter: ModelSubscriptionCompanyFilterInput) {
    onCreateCompany(filter: $filter) {
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
export const onUpdateCompany = /* GraphQL */ `
  subscription OnUpdateCompany($filter: ModelSubscriptionCompanyFilterInput) {
    onUpdateCompany(filter: $filter) {
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
export const onDeleteCompany = /* GraphQL */ `
  subscription OnDeleteCompany($filter: ModelSubscriptionCompanyFilterInput) {
    onDeleteCompany(filter: $filter) {
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
export const onCreateContactCompany = /* GraphQL */ `
  subscription OnCreateContactCompany(
    $filter: ModelSubscriptionContactCompanyFilterInput
  ) {
    onCreateContactCompany(filter: $filter) {
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
export const onUpdateContactCompany = /* GraphQL */ `
  subscription OnUpdateContactCompany(
    $filter: ModelSubscriptionContactCompanyFilterInput
  ) {
    onUpdateContactCompany(filter: $filter) {
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
export const onDeleteContactCompany = /* GraphQL */ `
  subscription OnDeleteContactCompany(
    $filter: ModelSubscriptionContactCompanyFilterInput
  ) {
    onDeleteContactCompany(filter: $filter) {
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
