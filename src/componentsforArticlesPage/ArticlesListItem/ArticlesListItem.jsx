import React from 'react';
import { Button } from 'reactstrap';
import './ArticlesListItem.scss';
import {withRouter,Link} from 'react-router-dom';

const ArticlesListItem=({item})=>{
    const {imageUrl,title,summary}=item;
    return (
        <div className="lp-list-item ">
            <div className="lp-img-container">
                <img  className="lp-img" src={imageUrl} />
            </div>
            <div className="lp-item-content ">
                <div className="lp-item-title">
                    <Link to={{pathname: `/Learning/${title}`,state:{item}}}>
                        {title}
                    </Link>
                </div>
               
                <div className="lp-item-txt">
                     {summary}
                </div>
                <div className="lp-item-btn-container">
                    <Link to={{pathname: `/Learning/${title}`,state:{item}}}>
                    <button className="lp-item-btn" >Read More..</button>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default withRouter(ArticlesListItem);