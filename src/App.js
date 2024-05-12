
import React from 'react';
import './App.css';
import { FaPhoneVolume } from "react-icons/fa6";
import { AiOutlineMail } from "react-icons/ai";
import { IoMdContact } from "react-icons/io";
import { ImFacebook } from "react-icons/im";
import { FaTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { FiSearch } from "react-icons/fi";
import { IoBag } from "react-icons/io5";

function App() {
  return (<>
    <div className="nav">
      <div className="nav-left">
        <h5 id="h51"><FaPhoneVolume id="phone" /> +1 1234567890</h5>
        <h5 id="h52"> <AiOutlineMail id="mail" />example@gmail.com</h5>
      </div>

      <div className="nav-right">
        <div id="contact"><IoMdContact /></div>
        <div className="login-reg">
          <p>Login / Register</p>
        </div>
        <div id="col"></div>
        <div id="col-1"><ImFacebook /> </div>
        <div id="col-2"><FaTwitter /> </div>
        <div id="col-3"><FaYoutube /> </div>
        <div id="col-4"><AiFillInstagram />
        </div>

      </div>

    </div>
    <div className="nav-2">
      <h2><span id="travel">Travel</span>sy</h2>
      <ul>
        <li>Home </li>
        <li>About Us</li>
        <li>Host A Venue</li>
        <li>Hotels</li>
        <li>Blog</li>
        <li><div id="search"><FiSearch /></div></li>
        <li><button id="btn">Contact Us<FaPhoneVolume id="phone-2" /></button></li>
      </ul>

    </div>
    <div className="body-rig">
      <div className="body-left">
        <p>Relax & Enjoy the Vacation</p>
        <div className='para1'>
          <h1>Choose <span id="travel1">Travelsy</span> ToBook Your Hotel</h1>
          <div className="para2">Lorem ipsum dolor sit amet consectetur. Hac consequat hac arcu sed. Lectus ante ut in mattis ornare commodo nisi. Tortor tincidunt fames  quam fusce convallis eget pulvinar.</div>

          <button id="btn2">Make Reservation<IoBag id="bag" /></button>
        </div>
      </div>

      <div className="body-right">
        <img src="\images\img1.png" id="img1" />
        <img src="\images\img2.png" id="img2" />
        <img src="\images\img3.png" id="img3" />
        <img src="\images\img4.png" id="img4" />
      </div>
    </div>
    <div className='footer'>
      <input type="text" placeholder='Type Of Venue*' id="ptext1" />
      <input type="text" placeholder='Pick A Date*' id="ptext2" />
      <input type="text" placeholder='Zip Code*' id="ptext3" />
      <button id="btn3">Search<img src="\images\arrow.png" /></button>

    </div>
    <div className='rectangle'>
      <img src="\images\Rectangle.png" />

      <div className='footer1'>
        <div id="foot-left">
          <img src="\images\Rectangle 1.png" id="rec1" />
          <img src="\images\Rectangle 2.png" id="rec2" />
          <img src="\images\Rectangle 3.png" id="rec3" />


        </div>
        <div id="foot-right">
          <h1><span id="font2">Get About Us</span></h1>
          <h1>More About Travelsy</h1>
          <div id="p1">
            <p>Amet cursus sit amet dictum. At erat pellentesque adipiscing commodo. Sit amet volutpat consequat mauris nunc congue nisi vitae suscipit. In arcu cursus euismod quis viverra nibh cras pulvinar. Vulputate eu sceler felis imperdiet proin fermentum. Arcu vitae elementum curabitur vitae nunc sed velit.</p><br /> </div>
          <div id="p2">
            <p>Rutrum quisque non tellus orci ac. Varius vel pharetra vel turpis nunc eget lorem dolor sed. Interdum posuere lorem ipsum dolor sit. Egestas maecenas pharetra convallis posuere morbi.</p></div>

          <div id="box1"><img src="\images\box1.png" /> Donec adipiscing tristique risus nec feugiat in<br />
            <img src="\images\box1.png" /> Donec adipiscing tristique risus nec feugiat in<br />
            <img src="\images\box1.png" /> Donec adipiscing tristique risus nec feugiat in<br /></div>
          <button id="btn4">Read More<img src="\images\arrow.png" /></button>

        </div>
      </div>

    </div>
    <div className='page-2'>
      <div id="top">
        <h2>Top Destinations</h2><br />
        <p>Popular Hotels For Booking</p>
      </div>
      <div id="tbody">

        <div className="card"><img src="\images\Blog 1.png" />
          <div className="content1">Some Amazing Title Here</div>
          <p>Lorem ipsum dolor sit amet, alina adipisci<br /> elite. Egestas elementum enim netus amet turpis lectus.</p>
          <div className="content2"><img src="\images\icon1.png" id="i1" />Museums  <img src="\images\icon2.png" id="i2" />
            12 Person Capacity </div>
          <div className="content3"><span>$150/</span><small>Per Night</small>  <img src="\images\icon3.png" /></div>
        </div>

        <div className="card"><img src="\images\Blog 2.png" /> <div className="content1">Some Amazing Title Here</div>
          <p>Lorem ipsum dolor sit amet, alina adipisci<br /> elite. Egestas elementum enim netus amet turpis lectus.</p>
          <div className="content2"><img src="\images\icon1.png" id="i1" />Museums  <img src="\images\icon2.png" id="i2" />
            12 Person Capacity </div>
          <div className="content3"><span>$250/</span><small>Per Night</small>  <img src="\images\icon3.png" /></div></div>

        <div className="card"><img src="\images\Blog 3.png" /> <div className="content1">Some Amazing Title Here</div>
          <p>Lorem ipsum dolor sit amet, alina adipisci<br /> elite. Egestas elementum enim netus amet turpis lectus.</p>
          <div className="content2"><img src="\images\icon1.png" id="i1" />Museums  <img src="\images\icon2.png" id="i2" />
            12 Person Capacity </div>
          <div className="content3"><span>$280/</span><small>Per Night</small>  <img src="\images\icon3.png" /></div></div>
      </div>
      <img src="\images\Arrow1.png" id="arrow1" />

      <img src="\images\Rectangle 5.png" id="rec4" />
    </div>
    <div className='tbody1'>
      <div className='slide'><img src="\images\b1.png" id="b1" /><br /><p>1000+</p>Hotel</div>
      <div className='slide'><img src="\images\b2.png" id="b1" /><br /><p>4500+</p>Rooms Available</div>
      <div className='slide'><img src="\images\b3.png" id="b1" /><br /><p>30+</p>Beaches View</div>
      <div className='slide'><img src="\images\b4.png" id="b1" /><br /><p>8000+</p>Guests</div>
    </div>
    <div className='tbody2'>
      <div id="best1">Best Places For Your Party</div>
      <div id="best2">Place That Accommodates Your Guest</div>
      <div id="imgr">
        <img src="\images\Rectangle 6.png" id="rec6" />
        <img src="\images\Rectangle 7.png" id="rec7" />
        <img src="\images\Rectangle 8.png" id="rec8" />
        <img src="\images\Rectangle 9.png" id="rec9" />
        <p id="p11">Wedding</p>
        <p id="p12">Birthday</p>
        <p id="p13">Corporate</p>
        <p id="p14">Baby </p>
      </div>
      <img src="\images\Arrow1.png" id="ar1" />
    </div>
    <img src="\images\Rectangle.png" />
    <div id="ft1">
      <p>Testimonials</p>
      <h1>What Our Traveler Say’s</h1>
    </div>
    <div id="ft2">
      <img src="\images\i1.png" id="i1" />
      <img src="\images\i2.png" id="i2" />
      <img src="\images\i3.png" id="i3" />
      <div id="passage">
        <h1>Tommy Murphy</h1>
        <p>Global Directives Architect</p>
        <p>Donec adipiscing tristique risus nec feugiat in. Ullamcorper morbi tincidunt ornare massa eget egestas purus viverra. Pharetra sit amet aliquam id diam maecenas ultricies mi eget. Aenean euismod elementum nisi quis eleifend. Sit amet facilisis magna etiam tempor orci. Vitae et leo duis ut. Arcu cursus vitae congue mauris.</p>
        <img src="\images\icon3.png" id="i4" />
      </div>

    </div>
    <div id="page3">
      <div id="page31">
        <div id="page32">
          <h1>Are You Ready To<br /> Travel? Remember Us !!</h1>

          <p> Amet nisl purus in mollis nunc. Blandit libero volutpat sed cras ornare. In pellentesque massa placerat duis ultricies lacus sed. Nisl suscipit adipiscing bibendum est ultricies integer quis auctor. Id consectetur purus ut faucibus pulvinar elementum integer enim.</p>
          <button id="btn7">Book Now <img src="\images\arrow2.png" id="i5" /></button>
        </div>
      </div>

    </div>
    <div id="page4">
      <h2>Latest News</h2>
      <h1>Read Latest Blogs</h1>
    </div>
    <img src="\images\Rectangle 5.png" id="rec11" />
    <div id="page5">
      <div className='profile'>
        <img src="\images\g1.png" />
        <h2>Journeys Are Best Measured In New Friends</h2>
        <p>Lorem ipsum dolor sit amet, consect adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis pul leo.</p><br />
        <a href="">Read More</a>
      </div>

      <div className='profile'>
        <img src="\images\g2.png" />
        <h2>A Lot Of Traveling Turns You Into A Storyteller</h2>
        <p>Lorem ipsum dolor sit amet, consect adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis pul leo.</p><br />
        <a href="">Read More</a>
      </div>

      <div className='profile'>
        <img src="\images\g3.png" />
        <h2>Travel Makes One Modest And Opened To Ideas</h2>
        <p>Lorem ipsum dolor sit amet, consect adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis pul leo.</p><br />
        <a href="">Read More</a>
      </div>
    </div>
    <div id="page6">
      <div className='page61'>
        <h1>Subscribe for <br />Latest Newsletter</h1>
        <input type="text" placeholder='Your Email Address' id="text12" />
        <button id="btn12">Subscribe</button>
      </div>
    </div>
    <div id="page7">
      <div id="page71">
        <h1><span>Travel</span>sy</h1>
        <br />
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p><br />
        <div id="s-icon">
          <img src="\images\f.png" />
          <img src="\images\t.png" />
          <img src="\images\in.png" />
          <img src="\images\y.png" />
        </div>
      </div>
      <div id="page72">
        <h3>Quick Links</h3>
        <p>Home</p>
        <p>About Us</p>
        <p>Host A Venue</p>
        <p>Blog</p>
        <p>Hotel</p>
        <p>Contact Us</p>
      </div>
      <div id="page73">
        <h2>Get In Touch</h2>
        <div id="c1"><img src="\images\c1.png" /> <p>+1 12345 67890</p></div>
        <div id="c2"><img src="\images\c2.png" />  <p>example@gmail.com</p></div>
        <div id="c3"><img src="\images\c3.png" />  <p>1014 N Main St, Miami, Oklahoma, 74354, United States</p></div>
      </div>
      <div id="page74">
        <h3>Follow Us On @instagram</h3>
        <div id="page741">
          <img src="\images\d1.png" />
          <img src="\images\d2.png" />
          <img src="\images\d3.png" />
          <img src="\images\d4.png" />
          <img src="\images\d5.png" />
          <img src="\images\d6.png" />
        </div>
      </div>
    </div>
    <div id="page8">
      <h3>© 2023 All rights reserved</h3>
    </div>
  </>
  );
}

export default App;
