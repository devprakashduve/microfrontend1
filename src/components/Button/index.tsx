function Button() {
  const handleClick = () => {
    console.log('Why you click me?');
  };
  // this is test button
  return (
    <button type="button" onClick={handleClick}>
      Click me
    </button>
  );
}

export default Button;
