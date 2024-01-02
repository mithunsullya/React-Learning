const App = () => {
  return React.createElement('div', { 'id': 'react-elem'},  React.createElement('h1', { "className": 'h1 heading'}, 'This is heading'))
}
const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(React.createElement(App));