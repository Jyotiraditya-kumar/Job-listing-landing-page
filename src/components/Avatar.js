function Avatar({ imageUrl }) {
  //   console.log(imageUrl.slice(2));
  let imageName = imageUrl.slice(2);
  // console.log(imageName);
  let img = require(`../../src/${imageName}`);

  return <img className="card-logo" src={img} alt="profile"></img>;
}
export default Avatar;
