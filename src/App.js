import "./App.css";
import Button from "./components/Button";
import ProfileImage from "./components/ProfileImage";

function App() {
  return (
    <div className="App">
      <ProfileImage />
      <p style={{ fontWeight: 600, fontSize: 36, color: "#FFF" }}>Yusuf Kara</p>
      <p style={{ fontSize: 18, color: "#FFF" }}>🏗️ digital products, 📱 apps and experience.</p>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          width: "300px",
          marginTop: 20,
        }}
      >
        <Button text="GitHub" url="https://www.github.com/yusufkara95" />
        <Button text="Behance" url="https://www.behance.net/yusufkara95" />
      </div>
    </div>
  );
}

export default App;
