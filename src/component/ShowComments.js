import React from 'react';
import { connect } from 'react-redux'
import * as ActionTypes from '../store/actions/Tweet'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const showComments = (props) => {

    if (!props.comments) {
        return null;
    }
    return (
        <div>
            {
                props.comments.map((item) => {
                    return (
                        <div className='card-wrapper' key={item.id}>
                            <Card className='card'>
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="h2">
                                            {item.value}
                                    </Typography>
                                </CardContent>
                                <Button size="small" color="primary" onClick={() => props.handleDelete(item.id)}>Delete</Button>
                                <Button size="small" color="primary">Edit</Button>
                            </Card>
                        </div>
                    )
                })
            }
        </div>
    )
}
const mapStateToProps = state => {
    return {
        comments: state.commentMessages
    }
}
const mapDispatchToProps = dispatch => {
    return {
        handleDelete: id => dispatch({ type: ActionTypes.DELETE_TWEET, id })
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(showComments);