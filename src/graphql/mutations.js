/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
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
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
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
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
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
export const createReport = /* GraphQL */ `
  mutation CreateReport(
    $input: CreateReportInput!
    $condition: ModelReportConditionInput
  ) {
    createReport(input: $input, condition: $condition) {
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
export const updateReport = /* GraphQL */ `
  mutation UpdateReport(
    $input: UpdateReportInput!
    $condition: ModelReportConditionInput
  ) {
    updateReport(input: $input, condition: $condition) {
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
export const deleteReport = /* GraphQL */ `
  mutation DeleteReport(
    $input: DeleteReportInput!
    $condition: ModelReportConditionInput
  ) {
    deleteReport(input: $input, condition: $condition) {
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
export const createContact = /* GraphQL */ `
  mutation CreateContact(
    $input: CreateContactInput!
    $condition: ModelContactConditionInput
  ) {
    createContact(input: $input, condition: $condition) {
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
export const updateContact = /* GraphQL */ `
  mutation UpdateContact(
    $input: UpdateContactInput!
    $condition: ModelContactConditionInput
  ) {
    updateContact(input: $input, condition: $condition) {
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
export const deleteContact = /* GraphQL */ `
  mutation DeleteContact(
    $input: DeleteContactInput!
    $condition: ModelContactConditionInput
  ) {
    deleteContact(input: $input, condition: $condition) {
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
export const createCompany = /* GraphQL */ `
  mutation CreateCompany(
    $input: CreateCompanyInput!
    $condition: ModelCompanyConditionInput
  ) {
    createCompany(input: $input, condition: $condition) {
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
export const updateCompany = /* GraphQL */ `
  mutation UpdateCompany(
    $input: UpdateCompanyInput!
    $condition: ModelCompanyConditionInput
  ) {
    updateCompany(input: $input, condition: $condition) {
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
export const deleteCompany = /* GraphQL */ `
  mutation DeleteCompany(
    $input: DeleteCompanyInput!
    $condition: ModelCompanyConditionInput
  ) {
    deleteCompany(input: $input, condition: $condition) {
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
export const createContactCompany = /* GraphQL */ `
  mutation CreateContactCompany(
    $input: CreateContactCompanyInput!
    $condition: ModelContactCompanyConditionInput
  ) {
    createContactCompany(input: $input, condition: $condition) {
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
export const updateContactCompany = /* GraphQL */ `
  mutation UpdateContactCompany(
    $input: UpdateContactCompanyInput!
    $condition: ModelContactCompanyConditionInput
  ) {
    updateContactCompany(input: $input, condition: $condition) {
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
export const deleteContactCompany = /* GraphQL */ `
  mutation DeleteContactCompany(
    $input: DeleteContactCompanyInput!
    $condition: ModelContactCompanyConditionInput
  ) {
    deleteContactCompany(input: $input, condition: $condition) {
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
