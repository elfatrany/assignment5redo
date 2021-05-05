import './App.css';

function App() {
  return (
    <>
      <container className="container">
        <mainleft className="mainleft">
          <h1>Learn to code by watching others</h1>
          <p>See how experienced developers solve problems in real-time. Watching scripted tutorials is great, but understanding how developers think is invaluable.</p>
        </mainleft>

        <main className="main">
          <bannerrow className="bannerrow">
            <h2><span className="bolder">Try it free 7 days</span> then $20/mo. thereafter</h2>
          </bannerrow>
          <form2 className="backform">
            <form>
              <input type="text" id="fname" name="fname" placeholder="First Name"></input><br />
              <input type="text" id="lname" name="lname" placeholder="Last Name"></input><br />
              <input type="email" id="email" name="email" placeholder="E-mail Address"></input><br />
              <input type="password" id="pwd" name="pwd" placeholder="Password"></input><br />
            </form>
            <button className="button">CLAIM YOUR FREE TRIAL</button>
            <h6>By clicking the button, you are agreeing to our <a href="https://www.w3schools.com"> Terms and Services</a></h6>
          </form2>
        </main>
      </container>

    </>
  );
}

export default App;
