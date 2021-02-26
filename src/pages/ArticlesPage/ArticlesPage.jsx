import React from 'react';
import {Button} from 'reactstrap';
import './ArticlesPage.style.scss';
import ArticlesListItem from '../../componentsforArticlesPage/ArticlesListItem/ArticlesListItem';
import DATA from '../../componentsforArticlesPage/ArticlesListData/ArticlesListData';


const ArticlesPage=()=>{
    const {sections}=DATA;
      return (
        <div className="col-12 learningPage" >
           
            <div className="lp-header">
                  <h2 className="lp-Title">ARTICLES</h2>
            </div>
            {sections.map((item)=>(
            <div className="lp-content ">
                <ArticlesListItem key={item.id} item={item}/>
            
            </div>
            ))}
        </div>
    );
}

export default ArticlesPage;