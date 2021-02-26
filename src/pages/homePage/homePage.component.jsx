import React from 'react';
import './homePage.style.scss';
import {withRouter} from 'react-router-dom';

function HomePage({history}) {
    return (
    <div className="container col-12">
        <div
            className='h-page-item'
                onClick={() => history.push('/ArticlesPage')}
             >
            <div
                className='background-image'
                style={{
                    backgroundImage: `url(https://i.ibb.co/k3kFP2K/https-www-backpacker-com-image-MTU3-NTE5-MTg2-Njkw-Nj-Q3-Mj-Qy-bp0918gear-kit-mountaineering-christi.jpg)`
                }}
                />
        
            <div className='content'>
                <h1 className='title'>Articles</h1>
               
                </div>
            </div>
             <div
            className='h-page-item'
            onClick={() => history.push('/ShopPage')}
             >
            <div
                className='background-image'
                style={{
                    backgroundImage: `url(https://i.ibb.co/s9rhPDB/van-dragt-061819-0174-mountaineering-gear.jpg)`
                }}
            />
        
            <div className='content'>
                <h1 className='title'>Store</h1>
            </div>
            </div>
    </div>
    );
}

export default withRouter(HomePage);

// https://i.ibb.co/s9rhPDB/van-dragt-061819-0174-mountaineering-gear.jpg
// https://i.ibb.co/r7M6vxn/i1080x475.jpg
// https://i.ibb.co/LzdDcC3/cover.jpg
// https://i.ibb.co/7RDsHSg/altitude-sickness-thumb-1-732x549.jpg