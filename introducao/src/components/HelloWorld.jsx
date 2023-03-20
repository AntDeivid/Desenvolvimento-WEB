import React from "react";
//V0
/*function HelloWorld() {
  return (
    <div>
      <h1>Hello World</h1>
    </div>
  );
}*/

//V1
/*const HelloWorld = () => {
    return (
        <div>
          <h1>Hello World</h1>
        </div>
      );
}*/

//V2
/*const HelloWorld = () =>
    <div>
        <h1>Hello World</h1>
    </div>
*/

//V3
class HelloWorld extends React.Component {
    render() {
        return (
            <div>
                <h1>Hello com Classes</h1>
            </div>
        )
    }
}


export default HelloWorld;