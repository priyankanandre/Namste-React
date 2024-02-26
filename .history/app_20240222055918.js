const heading = React.createElement("h1",{
    id:"heading", class:"headingclass", xyz:"abc"
},"Hello World from React");
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(heading);
