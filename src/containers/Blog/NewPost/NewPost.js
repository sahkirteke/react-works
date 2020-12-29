import React, { Component } from 'react';
import axios from 'axios';

import './NewPost.css';

class NewPost extends Component {
    state = {
        title: '',
        content: '',
        author: 'Husam'
    }

    postDataHandler = () => {
        const data ={
            title:this.state.title,
            body: this.state.content,
            author:this.state.author
        };
        axios.post('/posts',data)
            .then(res => {
                console.log(res);
            });
    }

    render () {
        return (
            <div className="NewPost">
                <h1>Yazı ekle</h1>
                <label>Başlık</label>
                <input type="text" value={this.state.title} onChange={(event) => this.setState({title: event.target.value})} />
                <label>İçerik</label>
                <textarea rows="4" value={this.state.content} onChange={(event) => this.setState({content: event.target.value})} />
                <label>Yazar</label>
                <select value={this.state.author} onChange={(event) => this.setState({author: event.target.value})}>
                    <option value="Husam">Husam</option>
                    <option value="Manu">Blyi(bilal)</option>
                </select>
                <button onClick= {this.postDataHandler}>YAzı ekle</button>
            </div>
        );
    }
}

export default NewPost;