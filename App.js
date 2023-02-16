import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div >

<header>
    <ul className="navlist">
        <li><a href="#section1">Дома</a></li>
        <li><a href="#section2">Омилени</a></li>
        <li><a href="#section3">Галерија</a></li>
        <li><a href="#section4">Блог</a></li>
        <li><a href="#section5">Анкета</a></li>
        <li><a href="#section6">Контакт</a></li> 
    </ul>
</header>
<div className="pocetna" id="section1">
    <img src="doma-slika.jpg" alt="slika"/> 
</div>
<p className="tabela">Jас сум Магдалена Јакимовска.<br/>Средно образование завршив во Приватното средно училиште
        САБА.<br/> Сега сум студент на ФЕИТ.<br/>
        Во мои омилени нешта припаѓаат музиката, добри книги и вкусна храна.<br/> Во слободно време сум некаде надвор во природа,
        со велосипед или трчам.<br/> Обожавам да патувам и купувам облека. Сакам да се сликам и прилично сум активна<br/>
        на социјалните мрежи.<br/> Сакам искрени луѓе, мразам неорганизираност (и снег).
</p>
<div className="omileni-n" id="section2">
    <p/>
      Вообичаено пишувам поезија и проза и веќе имам издадено 2 дела. <br/>
      Немам една конкретна омилена книга, тешко е да се одлучам бидејќи постојано читам.<br/>
      Автор на кој се восхитувам е Dan Brown <br/>
      Понекогаш гледам серии и филмови, од секаков тип - се додека ми го задржуваат вниманието.<br/>
      Еден од омилените градови ми е Барселона.
      Често сакам да готвам и многу сакам тортиљи.
 
</div>


<div className="galerija" id="section3"/>

  <img src="slika1.png" alt="slika" id="slika1"/>
  <img src="slika3.png" alt="slika" id="slika3"/>
  <img src="slika4.png" alt="slika" id="slika4"/>

  <input type="checkbox" id="heart1" onclick="lajk1()"/>
  

  <p id="likes1">Likes: </p>
  <p id="br-lajk1">354</p>
  <label for="heart1" id="srce1">&#9825</label>
  <label for="heart3" id="srce3">&#9825</label>
  <label for="heart4" id="srce4">&#9825</label>
  <br/>
  <br/>

  <input type="checkbox" id="heart3" onclick="lajk3()"/>
  

  <p id="likes3">Likes: </p>
  <p id="br-lajk3">414</p>
  <br/>
  <br/>

  

  <input type="checkbox" id="heart4" onclick="lajk4()"/>
  

  <p id="likes4">Likes: </p>
  <p id="br-lajk4">289</p>
  <br/>
  <br/>

  <img src="slika5.png" alt="slika" id="slika5"/>
  <img src="slika6.png" alt="slika" id="slika6"/>
  <img src="slika2.jpg" alt="slika" id="slika2"/>

  <input type="checkbox" id="heart5" onclick="lajk5()"/>
  

  <p id="likes5">Likes: </p>
  <p id="br-lajk5">503</p>
  <label for="heart5" id="srce5">&#9825</label>
  <br/>
  <br/>

  

  <input type="checkbox" id="heart6" onclick="lajk6()"/>
  

  <p id="likes6">Likes: </p>
  <p id="br-lajk6">348</p>
  <label for="heart6" id="srce6">&#9825</label>
  


  <input type="checkbox" id="heart2" onclick="lajk2()"/>
  

  <p id="likes2">Likes: </p>
  <p id="br-lajk2">276</p>
  <label for="heart2" id="srce2">&#9825</label>
  <br/>

<main id="section4">
    <ul id="carousel">
      <li className="slide" id="1">
        <img src="blog1.jpg" alt="1" />
      </li>
      <li className="slide" id="2">
        <img src="blog2.jpg" alt="2" />
      </li>
      <li className="slide" id="3">
        <img src="blog3.jpg" alt="3" />
      </li>
    </ul>
  </main>
  <nav>
    <h2 id="">кликнете овде</h2>
    <a href="#1">1</a>
    <a href="#2">2</a>
    <a href="#3">3</a>
  </nav>


  <div className="container" id="section5">  
    <form id="contact" action="" method="post">
     
      <fieldset>
        <input placeholder="Име" type="name" tabindex="1"/>
      </fieldset>
      <fieldset>
        <input placeholder="Презиме" type="lastname" tabindex="2" />
      </fieldset>
      <fieldset>
        <textarea placeholder="Твојата порака...." tabindex="3"></textarea>
      </fieldset>
      <fieldset>
        <button name="submit" type="submit" id="contact-submit" data-submit="...Sending">Испрати</button>
      </fieldset>
    
    </form>
    <hr/>
  </div>
    

<div className="kontakt" id="section6">
    
    <br/>
    <a href ="https://www.instagram.com/jakimovska.m/"><i className="fa fa-instagram" style="font-size:50px"></i></a>
    <a href="https://www.facebook.com/magdalena.jakimovska.54/"> <i className="fa fa-facebook-f" style="font-size:43px"></i></a>

</div>


</div>

  );
}

export default App;
