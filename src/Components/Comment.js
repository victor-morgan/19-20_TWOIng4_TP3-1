import React, { Component } from 'react';

class Comment extends Component {
    render() {
        return (
            <div class="box-last-comment">
                  <a>{this.props.Comment}</a>
                <button onClick={this.props.onClick}> super ! {this.props.super}</button>
            </div>
        );
    }
}

export default Comment;