import React, { Component } from 'react';

import './FullPost.css';

class FullPost extends Component {
    render () {
        let post = <p style ={{textAlign : 'center'}}>Bir yazı seçin</p>;
        if (this.props.id) {
            post = (
                <div className="FullPost">
                    <h1>Başlık</h1>
                    <p>İçerik</p>
                    <div className="Edit">
                        <button className="Delete">Sil</button>
                    </div>
                </div>
    
            );
        }
        
        return post;
    }
}

export default FullPost;