import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as ActionTypes from '../store/actions/Tweet';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';

let id = 1;
class TweetUI extends Component {

    state = {
        commentMessage: ''
    }

    handleChange = (event) => {
        this.setState({ commentMessage: event.target.value });
    }

    handlePostComment = (event) => {
        // prevent default submit 
        event.preventDefault();
        let listComments = [];
        // Don't post message if it is blank 
        if (this.state.commentMessage) {
            listComments = [...this.props.comments, { id: id++, value: this.state.commentMessage }];
            console.log(listComments)
            this.props.createTweet(listComments);
            // After submit Clear text from textarea
            this.setState({ commentMessage: '' });
        }
    }

    render() {
        return (
            <div className='text-wrapper align-center'>
                <Card className='card'>
                    <CardContent>
                        <textarea onChange={this.handleChange} value={this.state.commentMessage} required></textarea>
                        <Button variant="outlined" color='secondary' type="submit" onClick={this.handlePostComment}> Post a comment</Button>
                    </CardContent>
                </Card>
            </div>
        )
    }
}
const mapStateToProps = state => {
    const comments = state.commentMessages
    return { comments }
}

const mapDispatchToProps = dispatch => {
    return {
        createTweet: (value) => dispatch({ type: ActionTypes.ADD_TWEET, value })
    }
};


export default connect(mapStateToProps, mapDispatchToProps)(TweetUI);
