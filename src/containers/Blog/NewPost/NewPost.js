import React, { Component } from 'react';
import axios from 'axios';
import {Redirect} from 'react-router-dom';
import './NewPost.css';

class NewPost extends Component {
    state = {
        title: '',
        content: '',
        author: 'Husam',
        submitted : false
    }

    componentDidMount (){
        console.log(this.props);
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
                this.props.history.replace('/posts');  
                //this.setState({submitted:true});
            });
    }

    render () {
        let redirect = null;
        if (this.state.submitted){
            redirect =<Redirect to="/posts" />;
            //return redirect;
        }
        return (
            <div className="NewPost">
                {redirect}
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