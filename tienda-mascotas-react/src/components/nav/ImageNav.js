const ImageNav = ({ src, alt }) => {
  const style = { width: "25px", height: "auto" };

  return <img src={src} alt={alt} style={style} />;
};

export default ImageNav;
