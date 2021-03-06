import gql from "graphql-tag";

export default gql`
  mutation ($accountId: ID!, $groupId: ID!) {
    removeAccountFromGroup(input: { accountId: $accountId, groupId: $groupId }) {
      group {
        _id
      }
    }
  }
`;
