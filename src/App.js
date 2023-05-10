import logo from './logo.svg';
import './scss/App.scss';

function App() {
  return (
    <div className="App">
      <header className='header'>
        <img src={require("./image/Bitmap.png")} alt='logo' className='logo-image' />
        <div className='menu'>
          <div className='menu-item'>
            <div className='menu-item__item'>Home</div>
            <div className='menu-item__item'>About Application</div>
            <div className='menu-item__item'>Support</div>
            <div className='menu-item__item'>Blog</div>
          </div>
          <div className='menu-button'>
            <button className='button button--primary'>Get started</button>
            <button className='button button--secondary'>Buy now</button>
          </div>
        </div>
      </header>

      <div className='technology'>
        <div className='container'>
          <div className='row'>
            <div className='col col-style-2'
              style={{ "--col-xs": 12, "--col-sm": 6, "--col-md": 4, "--col-lg": 3 }}>
              <div className='text-box'>
                <div className='text-box__circle' style={{ "--circle-color": "#FBE9E9" }}></div>
                <div className='text-box__text'>
                  <div className='text__title'>WP + iOS + Android</div>
                  <div className='text__description'>
                    Based on ReactJS and React Native, HsBlog not only is a WP theme, but also let you to build your iOS + Android App Native App
                  </div>
                </div>
              </div>
            </div>

            <div className='col'
              style={{ "--col-xs": 12, "--col-sm": 6, "--col-md": 4, "--col-lg": 3 }}>
              <div className='text-box'>
                <div className='text-box__circle' style={{ "--circle-color": "#E7FAF9" }}></div>
                <div className='text-box__text'>
                  <div className='text__title'>Single page application</div>
                  <div className='text__description'>
                    SPA improves your Customer Experience. When navigating from a page to another page, HsBlog WILL NOT REFRESH Browser like other themes.
                  </div>
                </div>
              </div>
            </div>

            <div className='col'
              style={{ "--col-xs": 12, "--col-sm": 6, "--col-md": 4, "--col-lg": 3 }}>
              <div className='text-box'>
                <div className='text-box__circle' style={{ "--circle-color": "#F5ECFD" }}></div>
                <div className='text-box__text'>
                  <div className='text__title'>Drag & Drop Page Builder</div>
                  <div className='text__description'>
                    We have created our own Page Builder for HsBlog. It allows you to build either Web Page or App Home page.
                  </div>
                </div>
              </div>
            </div>

            <div className='col'
              style={{ "--col-xs": 12, "--col-sm": 6, "--col-md": 4, "--col-lg": 3 }}>
              <div className='text-box'>
                <div className='text-box__circle' style={{ "--circle-color": "#FBE9E9" }}></div>
                <div className='text-box__text'>
                  <div className='text__title'>Elite Support</div>
                  <div className='text__description'>
                    help.highspeedblog.com is our Help Center where you can find useful information on Documentation page and You can ask for us anything there.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='trust'>
        <div className='box-header'>
          <span className='box-header__title'>
            Trust by over <span style={{ "color": "rgb(94, 104, 249)" }}>1000</span> users
          </span>
          <p className='box-header__text'>
            There are many things that are important to catalog design. Your images must be sharp and appealing.
          </p>
        </div>

        <div className='container'>
          <div className='row'>
            <div className='col' style={{ "--col-xs": 12, "--col-sm": 12, "--col-md": 12, "--col-lg": 6 }}>
              <div className='image'>
                <div className='image__bg'></div>
                <img src={require("./image/1.png")} alt='product-image' className='image__product-image' />
              </div>
            </div>

            <div className='col' style={{ "--col-xs": 12, "--col-sm": 12, "--col-md": 12, "--col-lg": 6 }}>
              <div className='text-box text-box-style2'>
                <div className='text-box__circle text-box__circle-style2' style={{ "--circle-color": "#FDF1E7" }}></div>
                <div className='text-box__text'>
                  <i class="fa-solid fa-quote-right"></i>
                </div>
                <div className='text-box__comment'>
                  Only five stars! and this despite the fact that the topic is still under improvement. I hope future updates will help her become even better. A great team with a great idea of the catalog.
                </div>
                <div className='author'>
                  <div className='author__cross'></div>
                  <div className='author__name'>Dustin Barnes</div>
                </div>
                <div className='text-box__dot'>
                  <div className='dot'></div>
                  <div className='dot'></div>
                  <div className='dot-1'></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='features'>
        <div className='box-header'>
          <span className='box-header__title'>
            Essential <span style={{ "color": "rgb(94, 104, 249)" }}>features</span> for you
          </span>
          <p className='box-header__text'>
            There are many things that are important to catalog design. Your images must be sharp and appealing.
          </p>
        </div>

        <div className='container'>
          <div className='row'>
            <div className='col'
              style={{ "--col-xs": 12, "--col-sm": 6, "--col-md": 6, "--col-lg": 4 }}>
              <div className='feature-box'>
                <div className='feature-box__icon' style={{ "--bg-color": "#FFF1F0", "--icon-color": "#DFAFAF" }}>
                  <i class="fa-regular fa-heart"></i>
                </div>
                <div className='feature-box__text'>
                  <div className='text__title'>
                    Favorite Posts
                  </div>
                  <div className='text__description'>
                    It's a useful feature for your customers: They can SAVE an useful article and easily reach it in future under Favorite Store.
                  </div>
                </div>
              </div>
            </div>

            <div className='col'
              style={{ "--col-xs": 12, "--col-sm": 6, "--col-md": 6, "--col-lg": 4 }}>
              <div className='feature-box'>
                <div className='feature-box__icon' style={{ "--bg-color": "#F2E9FA", "--icon-color": "#AE70D5" }}>
                  <i class="fa-solid fa-clock-rotate-left"></i>
                </div>
                <div className='feature-box__text'>
                  <div className='text__title'>
                    Recently Viewed
                  </div>
                  <div className='text__description'>
                    Every time visits an article, HSBlog will remember it. Customers can easily reach it next time under Recently Reviewed area.
                  </div>
                </div>
              </div>
            </div>

            <div className='col'
              style={{ "--col-xs": 12, "--col-sm": 6, "--col-md": 6, "--col-lg": 4 }}>
              <div className='feature-box'>
                <div className='feature-box__icon' style={{ "--bg-color": "#E4F7FA", "--icon-color": "#5EBFCD" }}>
                  <i class="fa-regular fa-address-book"></i>
                </div>
                <div className='feature-box__text'>
                  <div className='text__title'>
                    Awesome Mega Menu
                  </div>
                  <div className='text__description'>
                    A useful feature helps you can add more information to your menu but still keep it simple and clean
                  </div>
                </div>
              </div>
            </div>

            <div className='col'
              style={{ "--col-xs": 12, "--col-sm": 6, "--col-md": 6, "--col-lg": 4 }}>
              <div className='feature-box'>
                <div className='feature-box__icon' style={{ "--bg-color": "#E4E6FB", "--icon-color": "#5961CC" }}>
                  <i class="fa-solid fa-gear"></i>
                </div>
                <div className='feature-box__text'>
                  <div className='text__title'>
                    Theme Options
                  </div>
                  <div className='text__description'>
                    Here you can customize Header Style, Footer Style, Heading Tags's Font, Social Networks, MailChimp, Youtube and much more ....
                  </div>
                </div>
              </div>
            </div>

            <div className='col'
              style={{ "--col-xs": 12, "--col-sm": 6, "--col-md": 6, "--col-lg": 4 }}>
              <div className='feature-box'>
                <div className='feature-box__icon' style={{ "--bg-color": "#FDE9F4", "--icon-color": "#D875A3" }}>
                  <i class="fa-regular fa-thumbs-up"></i>
                </div>
                <div className='feature-box__text'>
                  <div className='text__title'>
                    Social Login
                  </div>
                  <div className='text__description'>
                    In addition Default WordPress Login, Customer can easily signin / signup to your site with their Facebook and Apple.
                  </div>
                </div>
              </div>
            </div>

            <div className='col'
              style={{ "--col-xs": 12, "--col-sm": 6, "--col-md": 6, "--col-lg": 4 }}>
              <div className='feature-box'>
                <div className='feature-box__icon' style={{ "--bg-color": "#E4F9E6", "--icon-color": "#6BC973" }}>
                  <i class="fa-regular fa-circle-check"></i>
                </div>
                <div className='feature-box__text'>
                  <div className='text__title'>
                    Google reCaptcha V3
                  </div>
                  <div className='text__description'>
                    Protects your site website forms from spam entries while letting real people pass through with ease
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='post'>
        <div className='box-header'>
          <span className='box-header__title'>
            Popular posts
          </span>
          <p className='box-header__text'>
            There are many things that are important to catalog design. Your images must be sharp and appealing.
          </p>
        </div>

        <div className='container'>
          <div className='row'>
            <div className='col' style={{ "--col-xs": 12, "--col-sm": 6, "--col-md": 6, "--col-lg": 4 }}>
              <div className='detail'>
                <img src={require("./image/2.png")} alt='detail-image' className='detail__image' />
                <img src={require("./image/Group 26.png")} alt='design-image' className='detail__design-image' />
                <div className='detail__text'>
                  Alii autem quibus ego assentior
                </div>
                <div className='detail__small-text'>
                  November 9, 2019  •  03 Comments
                </div>
              </div>
            </div>

            <div className='col' style={{ "--col-xs": 12, "--col-sm": 6, "--col-md": 6, "--col-lg": 4 }}>
              <div className='detail'>
                <img src={require("./image/3.png")} alt='detail-image' className='detail__image' />
                <img src={require("./image/Group 26.png")} alt='design-image' className='detail__design-image' />
                <div className='detail__text'>
                  Sunt autem nusquam hoc epicurus in…
                </div>
                <div className='detail__small-text'>
                  November 9, 2019  •  03 Comments
                </div>
              </div>
            </div>

            <div className='col' style={{ "--col-xs": 12, "--col-sm": 6, "--col-md": 6, "--col-lg": 4 }}>
              <div className='detail'>
                <img src={require("./image/4.png")} alt='detail-image' className='detail__image' />
                <img src={require("./image/Group 26.png")} alt='design-image' className='detail__design-image' />
                <div className='detail__text'>
                  How To Write Better Advertising Copy
                </div>
                <div className='detail__small-text'>
                  November 9, 2019  •  03 Comments
                </div>
              </div>
            </div>

            <div className='col' style={{ "--col-xs": 12, "--col-sm": 6, "--col-md": 6, "--col-lg": 4 }}>
              <div className='detail'>
                <img src={require("./image/5.png")} alt='detail-image' className='detail__image' />
                <img src={require("./image/Group 26.png")} alt='design-image' className='detail__design-image' />
                <div className='detail__text'>
                  Omne animal simul atque in
                </div>
                <div className='detail__small-text'>
                  November 9, 2019  •  03 Comments
                </div>
              </div>
            </div>

            <div className='col' style={{ "--col-xs": 12, "--col-sm": 6, "--col-md": 6, "--col-lg": 4 }}>
              <div className='detail'>
                <img src={require("./image/6.png")} alt='detail-image' className='detail__image' />
                <img src={require("./image/Group 26.png")} alt='design-image' className='detail__design-image' />
                <div className='detail__text'>
                  Torquatos nostros quos tu tam
                </div>
                <div className='detail__small-text'>
                  November 9, 2019  •  03 Comments
                </div>
              </div>
            </div>

            <div className='col' style={{ "--col-xs": 12, "--col-sm": 6, "--col-md": 6, "--col-lg": 4 }}>
              <div className='detail'>
                <img src={require("./image/7.png")} alt='detail-image' className='detail__image' />
                <img src={require("./image/Group 26.png")} alt='design-image' className='detail__design-image' />
                <div className='detail__text'>
                  Promote With Postcards
                </div>
                <div className='detail__small-text'>
                  November 9, 2019  •  03 Comments
                </div>
              </div>
            </div>

            <div className='col' style={{ "--col-xs": 12, "--col-sm": 6, "--col-md": 6, "--col-lg": 4 }}>
              <div className='detail'>
                <img src={require("./image/8.png")} alt='detail-image' className='detail__image' />
                <img src={require("./image/Group 26.png")} alt='design-image' className='detail__design-image' />
                <div className='detail__text'>
                  Probabo, inquit, sic agam, ut ita ruant…
                </div>
                <div className='detail__small-text'>
                  November 9, 2019  •  03 Comments
                </div>
              </div>
            </div>

            <div className='col' style={{ "--col-xs": 12, "--col-sm": 6, "--col-md": 6, "--col-lg": 4 }}>
              <div className='detail'>
                <img src={require("./image/9.png")} alt='detail-image' className='detail__image' />
                <img src={require("./image/Group 26.png")} alt='design-image' className='detail__design-image' />
                <div className='detail__text'>
                  Epicurus in armatum hostem impetum
                </div>
                <div className='detail__small-text'>
                  November 9, 2019  •  03 Comments
                </div>
              </div>
            </div>

            <div className='col' style={{ "--col-xs": 12, "--col-sm": 6, "--col-md": 6, "--col-lg": 4 }}>
              <div className='detail'>
                <img src={require("./image/10.png")} alt='detail-image' className='detail__image' />
                <img src={require("./image/Group 26.png")} alt='design-image' className='detail__design-image' />
                <div className='detail__text'>
                  Low Cost Advertising
                </div>
                <div className='detail__small-text'>
                  November 9, 2019  •  03 Comments
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
