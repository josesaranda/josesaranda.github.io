import './index.less';

const sayHelloTitle = () : void => {
  let initialTitle = document.title;

  setInterval(() => {
    if(document.title === initialTitle)
      document.title = "Hello!";
    else
      document.title = initialTitle;
  },5000);
}

sayHelloTitle();