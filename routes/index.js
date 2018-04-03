import React, { Component } from 'react';

class Index extends Component {
    state = {
        user: {}
    }   
    async getInitialProps(req){
          console.log(req.req.mongoDB.User.find({}, result => result))
    }
    render() {
        return (
            <h1>This is my mini Project!</h1>
        )
    }
}
export default Index;