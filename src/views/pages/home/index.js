import '../../../App.css';
import MenuBar from '../../../components/menuBar';




function Home() {
  return (
    <>
      <MenuBar ></MenuBar>
       <a href="/">home</a><br/>
       <a href="/login">login</a><br/>
       <a href="/register">register</a><br/>
       <a href="/newlead">newlead</a><br/>
       <a href="/lead">lead</a><br/>


    </>

  );
}

export default Home;
