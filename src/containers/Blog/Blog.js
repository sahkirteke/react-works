import React, { Component } from 'react';
import Posts from './Posts/Posts';
import './Blog.css';
import {Route , NavLink,Switch} from 'react-router-dom';
import asyncComponent from '../../hoc/asyncComponent';

const AsyncNewPost = asyncComponent(()=>{
    return import('./NewPost/NewPost');

});


class Blog extends Component {
    state = {
        auth:true
    }

    render () {   

        return (
            <div className="Blog">
                <header>
                    <nav>
                        <ul>
                            <li><NavLink 
                            to="/posts/" 
                            exact
                            activeClassName="my-active"
                            activeStyle= {{
                                color: '#fa923f',
                                textDecoration: 'underline'
                            }}>Ana Sayda</NavLink></li>
                            <li><NavLink to={{
                                pathname :'/new-post',
                                hash: '#submit',
                                search :'?quick-submit=true'
                            }}>Yeni yAzı</NavLink></li>
                        </ul>
                    </nav>
                </header>
                {/*<Route path="/" exact render= {()=><h1>Ana Sayfa</h1>}/>    */}
                 
                <Switch>                    
                   {this.state.auth ? <Route path="/new-post" exact component ={AsyncNewPost} /> : null} 
                    <Route path="/posts"  component ={Posts} />
                    <Route render = { () => <h2>Bulunamadı</h2>}/>        
                    {/* <Redirect from="/" to = "/posts" /> */}
            
                </Switch>
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