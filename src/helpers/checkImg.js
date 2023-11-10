const checkImg = (url) =>
  `${
    !url
      ? `https://img.freepik.com/premium-vector/video-production-logo-fun-modern-black_434503-786.jpg?w=1060`
      : `https://image.tmdb.org/t/p/w500${url}`
  }`;

export default checkImg;
