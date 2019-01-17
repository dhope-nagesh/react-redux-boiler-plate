import React, { Component } from 'react'
import { Table, Image } from 'react-bootstrap';

import { connect } from 'react-redux'
import github from '../../reducers/github';
import { fetchUsers } from '../../actions/github';
import { FETCHING_USERS } from '../../constants/actions';

class TodoList extends Component {
  componentDidMount = () => {
    this.props.fetchUsers()
  }

  render() {
    const users = this.props.github.users.map((user, index) => {
      return (
        <tr key={index}>
          <td>{index + 1}</td>
          <td><Image src={user.avatar_url} style={{ maxHeight: '50px', maxHeight: '50px' }} rounded /></td>
          <td>{user.login}</td>
          <td><a target="_blank" href={`https://github.com/${user.login}`}>{`Check Profile`}</a></td>
        </tr>
      )
    })
    return (
      <div>
        {this.props.github.state === FETCHING_USERS ? 'fetching.........' :

          <Table responsive>
            <thead>
              <tr>
                <th>#</th>
                <th>Avatar</th>
                <th>Name</th>
                <th>Repos</th>
              </tr>
            </thead>
            <tbody>
              {users}
            </tbody>
          </Table>

        }

      </div>
    )
  }
}


const mapStateToProps = (state) => ({
  github: state.GithubReducer
})

const mapDispatchToProps = dispatch => ({
  fetchUsers: id => dispatch(fetchUsers())
})

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)