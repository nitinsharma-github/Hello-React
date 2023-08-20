//create elements
const heading1 = React.createElement('h1', {id : "heading"},
                                            "Hello World! Phir bhi dil ha Hindustani.");


const heading2 = React.createElement('div-root',{id:"div-root"},
                     [
                        React.createElement('div',{id:"div1"},
                            [
                                React.createElement('h1',{},"Haldwani 1"),
                                React.createElement('h2',{},"Lucknow 2")

                            ])
                        ,
                        React.createElement('div',{id:"div2"},
                        [
                            React.createElement('h1',{},"Sydney 3"),
                            React.createElement('h2',{},"NewYork 4")

                        ])
                        
                        
                     ]);


// create and render roots using created elements as parameter
const root1 = ReactDOM.createRoot(document.getElementById("root"));
root1.render(heading1);

const root2 = ReactDOM.createRoot(document.getElementById("div-root"));
root2.render(heading2);