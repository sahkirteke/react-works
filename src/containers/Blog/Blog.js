import React, { Component } from 'react';
import Posts from './Posts/Posts';
import './Blog.css';
import {Route} from 'react-router-dom';
import NewPost from './NewPost/NewPost';



class Blog extends Component {

    render () {   

        return (
            <div className="Blog">
                <header>
                    <nav>
                        <ul>
                            <li><a href="/">Ana Sayfa</a></li>
                            <li><a href="/new-post">Yeni Yazı</a></li>
                        </ul>
                    </nav>
                </header>
                {/*<Route path="/" exact render= {()=><h1>Ana Sayfa</h1>}/>    */}
                <Route path="/" exact component ={Posts} />         
                <Route path="/new-post" exact component ={NewPost} />                  
         
                {/* <section>
                    <FullPost id = {this.state.selectedPostId} />
                </section>
                <section>
                    <NewPost />
                </section> */}
            </div>
        );
    }
}

export default Blog;