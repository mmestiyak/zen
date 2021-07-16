import React from 'react';


const Button = ({background, color, onClick: onClicked, children, className}) => {
  return (
    <button
    onClick={onClicked && onClicked}
     
     className={`${className} text-uppercase border-0 button`}
     style={{
      background,
      color
      }}>

      {children}
    </button>
  );
};
Button.defaultProps = {
  background: '#ff8618',
  color: '#fff'
}
export default Button;