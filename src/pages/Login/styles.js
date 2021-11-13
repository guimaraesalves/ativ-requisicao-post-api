import styled from "styled-components";

export const Container = styled.form`
  width: 400px;
  position: relative;

  
  border-radius: 5px;
  background-color: #3a3f47;
  padding: 20px 20px 20px 20px;
  

 /* style inputs and link buttons */
input {
  width: 80%;
  padding: 12px;
  border: none;
  border-radius: 4px;
  margin: 10px auto;
  opacity: 0.85;
  display: inline-block;
  font-size: 17px;
  line-height: 20px;
  text-decoration: none; /* remove underline from anchors */
}
 
button {
  width: 80%;
  padding: 12px;
  border: none;
  border-radius: 4px;
  margin: 10px auto;
  opacity: 0.85;
  
  font-size: 17px;
  line-height: 20px;
  text-decoration: none; /* remove underline from anchors */
  background-color: #04AA6D;
  color: white;
  cursor: pointer;
}
button:hover {
  opacity: 0.8;
}

span {
  font-size: 15px;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: center;

}
.App-logo {
  height: 20vmin;
  pointer-events: none;
  margin: 10px;
}

@media (prefers-reduced-motion: no-preference) {
  .App-logo {
    animation: App-logo-spin infinite 20s linear;
  }
}

@keyframes App-logo-spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

`;
