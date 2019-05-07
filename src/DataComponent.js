import React, { Component } from "react";

import { Query } from "react-apollo";
import { gql } from "apollo-boost";
import Avatar from "./Avatar";
import RepoCard from "./RepoCard";
import "styled-components/macro";

const GET_USERDATA = gql`
  query($user: String!) {
    user(login: $user) {
      avatarUrl
      name
      starredRepositories(last: 10) {
        edges {
          node {
            id
            createdAt
            viewerHasStarred
            nameWithOwner
            owner {
              avatarUrl
            }
            url
            repositoryTopics(first: 4) {
              edges {
                node {
                  id
                  topic {
                    id
                    name
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`;

export default class DataComponent extends Component {
  render() {
    return (
      <Query query={GET_USERDATA} variables={{ user: "vivek-faldu" }}>
        {({ loading, error, data }) => {
          if (loading) return <p>Loading...</p>;
          if (error) return <p>Error :(</p>;
          return (
            <>
              <div
                css={{
                  alignItems: "center",
                  display: "flex",
                  padding: "0 0 16px"
                }}
              >
                <Avatar src={data.user.avatarUrl} width={25} height={25} />
                <div css={{ marginLeft: 12 }}>{data.user.name}</div>
              </div>
              {data.user.starredRepositories.edges.map(({ node }) => (
                <RepoCard data={node} key={node.id} />
              ))}
            </>
          );
        }}
      </Query>
    );
  }
}
