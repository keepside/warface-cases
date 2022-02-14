import '../styles/FP.scss'
import '../styles/review.scss'
import sellLogo from '../photo/cart.svg'
import favorite from '../photo/favorite.svg'
import history from '../photo/list.svg'
import heart from '../photo/heart.svg'
import sf from '../photo/warFace.svg'
import ve from '../photo/Vector.svg'
import alarm from '../photo/alarm.svg'
import ava from '../photo/ava.png'
import add from '../photo/2068204226775625365c.svg'
import onlc from '../photo/onlineLogocopy.svg'
import gift from '../photo/Shape.svg'
import imgLogo from '../photo/img.png'
import blueCas from '../photo/blueCase.png'
import Aw4 from '../photo/Arrow4.png'
import offer from '../photo/Group123.png'
import Rank from '../photo/Rank.png'
import dstos from '../photo/dsots.svg'
import rankere from '../photo/Ротатер.svg'
import gun from '../photo/631e1465d7ef61dde713.png'
import avorite from '../photo/6e13cbbb50ab61951fab.svg'
import photo from '../photo/el.png'
import more from '../photo/487b5c72c244942cc36c.svg'
import headphon from '../photo/headphones.svg'
import mmail from '../photo/chat.svg'
import insta from '../photo/717b8dd2035235767fc2.svg'
import discord from '../photo/4958ce576e17636b4d3e.svg'
import vk from '../photo/6da4ba6803ebc97b8766.svg'
import you from '../photo/1dd35c3a942639272e7c.svg'
import avatar from '../photo/avatar.png'
import dots from '../photo/dots.svg'
import leftArrow from '../photo/leftArrow.svg'
import rightArrow from'../photo/rightArrow.svg'
import dotsPicture from '../photo/dots-picture.svg'
import sendReviewButton from '../photo/sendReview.svg'

const changeStyle = () =>{

}

const Reviews = () =>{
    return(
        <div className="general-block">
            <div className = 'header-first-page'>
            <div className = 'left-side'>
                <div className='left-side-logo'></div>
                <div className = 'stats'>
                    <div className = 'buy-stat'>
                        <div className='ssttaatter'></div>
                    </div>
                    <div className='buy-text'>
                        <p className='number-buy'>181 924 36</p>
                        <p className='stat-name'>Купленно товаров</p>
                    </div>
                    <div className = 'online-stat'>
                        <div className='onlineLoger'></div>
                    </div>
                    <div className='buy-text'>
                        <p className='number-buy'>486 532</p>
                        <p className='stat-name'>Пользователей</p>
                    </div>
                </div>
                <div className = 'section-button'>
                    <div className = 'sell-button'>
                        <div className = 'sell-logo'>
                        <img src={sellLogo} alt={"bgc-logo"}/>
                        </div>
                        <p className='txtButton'>Продать товар</p>
                    </div>
                    <div className = 'sell-button'>
                        <div className = 'sell-logo'>
                        <img src={favorite} alt={"bgc-logo"}/>
                        </div>
                        <p className='txtButton'>закладки</p>
                    </div>
                    <div className = 'sell-button'>
                        <div className = 'sell-logo'>
                        <img src={history} alt={"bgc-logo"}/>
                        </div>
                        <p className='txtButton'>история просмотра.</p>
                    </div>
                    <div className = 'sell-button'>
                        <div className = 'sell-logo'>
                        <img src={heart} alt={"bgc-logo"}/>
                        </div>
                        <p className='txtButton'>история покупок и продаж</p>
                    </div>
                </div>
                <div className='dwerrt'>
                <div className='select-sec'>
                    <div className='default-option'>
                        <img src={sf} alt={"bgc-logo"} className='wf-logo'/>
                        <p className='warppp'>warface</p>
                        <img src={ve} alt={"bgc-logo"} className='angel-down'/>
                    </div>
                </div>
                <div className='sec-support'>
                <div className='myMail'>
                    <img src={mmail} alt={"bgc-logo"} className='mmrai'/>
                    Мои Сообщения
                </div>
                <div className='mySp'>
                    <img src={headphon} alt={"bgc-logo"} className='mmrai'/>
                    Тех. Поддержка
                </div>
                </div>
                </div>
                </div>
            <div className='dop'>
                <div className='right-side'>
                <div className='menu-top'>
                    <div className='menu'>
                    <a className='menu-option' id='select' onClick={changeStyle} href='http://localhost:3000'>главная</a>
                    <a className='menu-option' id='unselect' onClick={changeStyle} href='http://localhost:3000'>Аккаунты</a>
                    <a className='menu-option' id='unselect' onClick={changeStyle} href='http://localhost:3000'>Пин-коды</a>
                    <a className='menu-option' id='unselect' onClick={changeStyle} href='http://localhost:3000'>Топ Юзеров</a>
                    <a className='menu-option' id='unselect' onClick={changeStyle} href='http://localhost:3000'>Отзывы</a>
                    <a className='menu-option' id='unselect' onClick={changeStyle} href='http://localhost:3000'>Гарантии</a>
                    <a className='menu-option' id='unselect' onClick={changeStyle} href='http://localhost:3000'>случайные аккаунты</a>
                    <a className='menu-option' id='unselect' onClick={changeStyle} href='http://localhost:3000'>Форум</a>
                    
                    </div>
                    <div className='kompani'>
                        <button className='alart'>
                            <img src={alarm} alt={"bgc-logo"}/>
                        </button>
                        <div className='sherder'>
                            <div className='banance'>
                                <button className='bBalance'>5 100B</button>
                                <button className='realBalance'>5 100₽ <img src={add} alt={"bgc-logo"} className='spit'/></button>
                            </div> 
                            <div className='TextName'>
                                <img src={ava} alt={"bgc-logo"} className='ttr'/>
                                Shenderro
                            </div>
                        </div> 
                    </div> 
                </div>
                <div className='block1'>
                        <div className='activity'>
                            <div className='top-active'>
                                <div className="dot">
                                    <div className="dot1"></div>
                                    <div className="dot1"></div>
                                    <div className="dot1"></div>
                                </div>
                                <div class="blockOnline">
                                    <div class="greendot"></div>
                                    <div class="stat">
                                        <div class="numberOnline">2 381</div>
                                        <div>Online</div>
                                    </div>
                                </div>
                            </div>
                            <div className='botom-active'>
                                <div className='activeUser'>
                                    <img src={onlc} alt={"bgc-logo"} className='onlcc'/>
                                </div>
                                <div className='boxBlock'>
                                    <img src={gift} alt={"bgc-logo"} className='gift'/>
                                </div>
                            </div>
                        </div>
                        <div className='scroll'>
                                <div className='spg'>
                                    <img src={blueCas} alt={"bgc-logo"} className='blueCase'/>
                                    <img src={imgLogo} alt={"bgc-logo"} className='girlImage'/>
                                    <div className='nameOfBuyer'>
                                            <div className='textOfBuyer'>Santc..</div>
                                    </div>  
                                </div>
                                <div className='spg'>
                                    <img src={blueCas} alt={"bgc-logo"} className='blueCase'/>
                                    <img src={imgLogo} alt={"bgc-logo"} className='girlImage'/>
                                    <div className='nameOfBuyer'>
                                            <div className='textOfBuyer'>Santc...</div>
                                    </div>  
                                </div>
                                <div className='spg'>
                                    <img src={blueCas} alt={"bgc-logo"} className='blueCase'/>
                                    <img src={imgLogo} alt={"bgc-logo"} className='girlImage'/>
                                    <div className='nameOfBuyer'>
                                            <div className='textOfBuyer'>Santc...</div>
                                    </div>  
                                </div>
                                <div className='spg'>
                                    <img src={blueCas} alt={"bgc-logo"} className='blueCase'/>
                                    <img src={imgLogo} alt={"bgc-logo"} className='girlImage'/>
                                    <div className='nameOfBuyer'>
                                            <div className='textOfBuyer'>Santc...</div>
                                    </div>  
                                </div>
                                <div className='spg'>
                                    <img src={blueCas} alt={"bgc-logo"} className='blueCase'/>
                                    <img src={imgLogo} alt={"bgc-logo"} className='girlImage'/>
                                    <div className='nameOfBuyer'>
                                            <div className='textOfBuyer'>Santc...</div>
                                    </div>  
                                </div>
                                <div className='spg'>
                                    <img src={blueCas} alt={"bgc-logo"} className='blueCase'/>
                                    <img src={imgLogo} alt={"bgc-logo"} className='girlImage'/>
                                    <div className='nameOfBuyer'>
                                            <div className='textOfBuyer'>Santc...</div>
                                    </div>  
                                </div>
                                <div className='spg'>
                                    <img src={blueCas} alt={"bgc-logo"} className='blueCase'/>
                                    <img src={imgLogo} alt={"bgc-logo"} className='girlImage'/>
                                    <div className='nameOfBuyer'>
                                            <div className='textOfBuyer'>Santc...</div>
                                    </div>  
                                </div>
                                <div className='spg'>
                                    <img src={blueCas} alt={"bgc-logo"} className='blueCase'/>
                                    <img src={imgLogo} alt={"bgc-logo"} className='girlImage'/>
                                    <div className='nameOfBuyer'>
                                            <div className='textOfBuyer'>Santc...</div>
                                    </div>  
                                </div>
                                <div className='spg'>
                                    <img src={blueCas} alt={"bgc-logo"} className='blueCase'/>
                                    <img src={imgLogo} alt={"bgc-logo"} className='girlImage'/>
                                    <div className='nameOfBuyer'>
                                            <div className='textOfBuyer'>Santc...</div>
                                    </div>  
                                </div>
                                <div className='spg'>
                                    <img src={blueCas} alt={"bgc-logo"} className='blueCase'/>
                                    <img src={imgLogo} alt={"bgc-logo"} className='girlImage'/>
                                    <div className='nameOfBuyer'>
                                            <div className='textOfBuyer'>Santc...</div>
                                    </div>  
                                </div>
                                <div className='spg'>
                                    <img src={blueCas} alt={"bgc-logo"} className='blueCase'/>
                                    <img src={imgLogo} alt={"bgc-logo"} className='girlImage'/>
                                    <div className='nameOfBuyer'>
                                            <div className='textOfBuyer'>Santc...</div>
                                    </div>  
                                </div>
                        </div>

                </div>
                <div className="reviews-container">
                <div className='titleBlock'>
                    <img src={dstos} alt={"bgc-logo"} className='dsot'/>
                    <div className='title-titleBlock'>
                        Отзывы
                    </div>
                    <div className="reviews-count">
                        <div className="reviews-count_text">Количество отзывов:  753</div>
                    </div>
                </div>
                <div className="reviews-section">
                <div className="reviews">
                        <div className="reviews_user reviews_user-location">
                            <div className="user-general_info">
                            <div className="user-avatar"><img className="avatar" src={avatar} alt="" /></div>
                            <div className="user-info">
                                <div>
                                <div className="nickname">Santchezz</div>
                                <div className="user-info_date">01:05 27.12.2019</div>
                                </div>
                            </div>
                            </div>
                            <div className="sphere-between">
                                <div className="sphere-between_circle">
                                    <div className="sphere-between_circle2"></div>
                                </div>
                            </div>
                        </div>
                        <div className="reviews_comment">
                            <div className="comment-text">Потрясный сайт! Без обманов, с реальным процентом полезных выигрышей,даже самое слабое из возможных оправдывает свои деньги! Сделано потрясающе! Спасибо ребятам</div>
                        </div>
                </div>
                <div className="reviews">
                        <div className="reviews_user reviews_user-location">
                            <div className="user-general_info">
                            <div className="user-avatar"><img className="avatar" src={avatar} alt="" /></div>
                            <div className="user-info">
                                <div>
                                <div className="nickname">Santchezz</div>
                                <div className="user-info_date">01:05 27.12.2019</div>
                                </div>
                            </div>
                            </div>
                            <div className="sphere-between">
                                <div className="sphere-between_circle">
                                    <div className="sphere-between_circle2"></div>
                                </div>
                            </div>
                        </div>
                        <div className="reviews_comment">
                            <div className="comment-text">Потрясный сайт! Без обманов, с реальным процентом полезных выигрышей,даже самое слабое из возможных оправдывает свои деньги! Сделано потрясающе! Спасибо ребятам</div>
                        </div>
                </div>
                <div className="reviews">
                        <div className="reviews_user reviews_user-location">
                            <div className="user-general_info">
                            <div className="user-avatar"><img className="avatar" src={avatar} alt="" /></div>
                            <div className="user-info">
                                <div>
                                <div className="nickname">Santchezz</div>
                                <div className="user-info_date">01:05 27.12.2019</div>
                                </div>
                            </div>
                            </div>
                            <div className="sphere-between">
                                <div className="sphere-between_circle">
                                    <div className="sphere-between_circle2"></div>
                                </div>
                            </div>
                        </div>
                        <div className="reviews_comment">
                            <div className="comment-text">Потрясный сайт! Без обманов, с реальным процентом полезных выигрышей,даже самое слабое из возможных оправдывает свои деньги! Сделано потрясающе! Спасибо ребятам</div>
                        </div>
                </div>
                </div>
                <div className="more-comments">
                    <a className="more-comments_link more-comments_link-location more-comments_link-color" href="">Показать еще 5
                    <img src={dots} alt="" />
                    </a>
                </div>
                <div className="review-pages">
                    <div className="arrow"><img src={leftArrow} alt="" /></div>
                    <a className="page-number page-location page-color page-style page-options page-more_styles" href="">1</a>
                    <a className="page-number page-location page-color page-style page-options page-more_styles" href="">2</a>
                    <a className="page-number page-location page-color_gradient page-style page-options page-more_styles" href="">3</a>
                    <a className="page-number page-location page-color page-style page-options page-more_styles" href="">334</a>
                    <div className="arrow"><img src={rightArrow} alt="" /></div>
                </div>
                <div className="leave-review_title">
                    <img className="leave-review_image" src={dotsPicture} alt="" />
                    <div className="leave-review_inscription">Оставить отзыв</div>
                </div>
                <div className="review-write_area">
                <textarea rows="2" class="review-area_text" type="text" placeholder="Напишите свой отзыв"></textarea>
                <div className="send-review">
                    <div className="send-review_button">
                        <img src={sendReviewButton} alt="" />
                    </div>
                </div>
                </div>
                <div class="review-bottom_text">Спасибо. Ваш отзыв будет размещен в течение дня.</div>
                </div>
                </div>
            </div>
        </div>
        <div className='footer'>
                <div className="basicClasser">
                    <div className='_PZP6NWvi7HMX5fjkcLy'>
                    <div className='whiter'>DealkGo.com</div> — Крупнейший проект по продажам цифровых
                            товаров.<br/>
                    </div> 
                    © 2020, Все права защищены.
                </div> 
                <ul className='contact'>
                    <li>Пользовательское соглашение</li>
                    <li>Контакты</li>
                    <li>Частые вопросы</li>
                </ul>
                <div className='socialicon'>
                    <img src={insta} alt={"bgc-logo"}/>
                    <img src={discord} alt={"bgc-logo"}/>
                    <img src={vk} alt={"bgc-logo"}/>
                    <img src={you} alt={"bgc-logo"}/>
                </div>  
                </div>
        </div>
    );
}



export default Reviews;