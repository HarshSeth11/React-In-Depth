const rootElement = document.getElementById("root");

const myElement = {
  tag : "a",
  props : {
    href : "https://www.google.com",
    target : "_blank"
  },
  children : "Chick here to open Google"
}

function customRender(myElement, rootElement) {
  const newElement = document.createElement(myElement.tag);

  for(let prop in myElement.props) {
    newElement.setAttribute(prop, myElement.props[prop]);
  }

  newElement.innerHTML = myElement.children;

  rootElement.appendChild(newElement);
}

customRender(myElement, rootElement);