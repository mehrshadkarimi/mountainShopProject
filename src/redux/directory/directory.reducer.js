const INITIAL_STATE = {
  sections: [
    {
   
      title: 'BackPack',
      imageUrl: 'https://i.ibb.co/qnhpRHW/Backpacking-Mental-Health.jpg',
      id: 1,
      linkUrl: '/shop/BackPack'
    },
    {
      title: 'Gore-tex',
      imageUrl: 'https://i.ibb.co/HYch24M/20161017-OM-Gore-Tex-heavy-P1-A8817-16bit-final.jpg',
      id: 2,
      linkUrl: '/shop/Goretex'
    },
    {
      title: 'Climbing Boot',
      imageUrl: 'https://i.ibb.co/yn2cH5D/Ribelle-Tech-Od.jpg',
      id: 3,
      linkUrl: '/shop/ClimbingBoot'
    },
    {
      title: 'Rock Climbing',
      imageUrl: 'https://i.ibb.co/CnXGHsp/climbing-hardware-880x.webp',
      size: 'large',
      id: 4,
      linkUrl: '/shop/RockClimbing'
    },
    // 
    // {

    //   title: '',
    //   imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
    //   size: 'large',
    //   id: 5,
    //   linkUrl: '/shop/mens'
    // }
  ]
};

const directoryReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default directoryReducer;
