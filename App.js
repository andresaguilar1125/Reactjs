import "./styles.css";

function MyFunctionComponent() {
  //El return es necesario en cada functional component
  return <span>Hello</span>;
}

export default function App() {
  return (
    // Return es necesario en cada functional compoment
    <div className="App">
      {/* Una function se puede invocar directamente como componente */}
      <MyFunctionComponent />
    </div>
  );
}
