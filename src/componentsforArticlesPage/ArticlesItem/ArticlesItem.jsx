import React,{useEffect,useState} from 'react';
import {withRouter} from 'react-router-dom';
import  './ArticlesItem.styles.scss';

function ArticlesItem({location}) {
    const prop=location.state.item;
    const {title,imageUrl,text}=prop;
    
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
    
    return (
    <div className="lp-itemView-Container">
        <div className="lp-item-view col-10">
                <h1  className="item-view-title">
                    {title}
                </h1>
           
            <div className="item-img-container">
                <img src={imageUrl} alt="image"/>
            </div>
            <div>
                <p className="item-p">
                    {text}
                </p> 
            </div>
        </div>
    </div>
    );
}

export default withRouter(ArticlesItem);