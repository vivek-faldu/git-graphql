import React, { Component } from "react";
import { Query } from "react-apollo";
import { gql } from "apollo-boost";
import { Avatar, Button } from "@material-ui/core";
import "styled-components/macro";

const GET_VIWER = gql`
  {
    viewer {
      name
      avatarUrl
      id
    }
  }
`;
export default class SideBar extends Component {
  render() {
    return (
      <aside>
        <Query query={GET_VIWER}>
          {({ loading, error, data }) => {
            if (loading) return <p>Loading...</p>;
            if (error) return <p>Error :(</p>;
            return (
              <>
                <div>
                  <Avatar src={data.viewer.avatarUrl} alt={data.viewer.name} />
                </div>
                <div css={{ color: "#0f375e" }}>{data.viewer.name} </div>
              </>
            );
          }}
        </Query>
        <Button
          css={{ width: 30, height: 30 }}
          color="primary"
          variant="contained"
          onClick={() => {
            localStorage.clear();
            window.location.reload();
          }}
        >
          Logout
        </Button>
      </aside>
    );
  }
}
