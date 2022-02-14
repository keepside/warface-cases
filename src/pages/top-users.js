import '../styles/FP.scss'
import '../styles/top-users.scss'
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
import titleBackground from '../photo/titleBG.svg'
import backArrow from '../photo/backArrow.svg'
import exlamationMark from '../photo/exclamation.png'
import smallDots from '../photo/dotsSecond.svg'
import bottomArrow from '../photo/arrowBottom.png'
import avatar from '../photo/avatar.png'
import topUserStar from '../photo/topUserStar.svg'
import arrowLeft from '../photo/arrowLeft.png'
import arrowRight from '../photo/arrowRight.png'


const changeStyle = () =>{

}

const TopUsers = () =>{
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
                    <div className="top-users_container">
                    <div className="top-users-title">
                        <img className="title-background" src={titleBackground} alt="" />
                        <div className="top-users-title_inscription">Топ Юзеров</div>
                    </div>
                    <div className="top-users_section">
                        <div className="top-three-users_block">
                            <div className="top-three-users_block-section">
                                <div className="top-user-main_block">
                                    <div className="top-user-main_block-avatar_block">
                                        <img className="img-avatar" src={avatar} alt="" />
                                        <div className="user-place_block-background user-place_block-background-styles_second">
                                            <img className="top-user_star-image" src={topUserStar} alt="" />
                                            2 Место
                                        </div>
                                    </div>
                                    <div className="top-user-main_block-nickname_block">Santchezz</div>
                                    <div className="top-user-main_block-info_block">
                                        <div className="bought-items_block">
                                            <div className="bought-items_count">34,281</div>
                                            <div className="bought-items_inscription">Купленные товары</div>
                                        </div>
                                        <div className="earned-items_block">
                                            <div className="bought-items_count">118,523₽</div>
                                            <div className="bought-items_inscription">Заработано</div>
                                        </div>
                                    </div>
                                    <div className="circle-decoration_block circle-decoration_block-styles">
                                        <div className="circle-inside">
                                            <div className="small-circle_inside"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="top-three-users_block-section">
                                <div className="top-user-main_block">
                                    <div className="top-user-main_block-avatar_block">
                                        <img className="img-avatar" src={avatar} alt="" />
                                        <div className="user-place_block-background user-place_block-background-styles_first">
                                            <img className="top-user_star-image" src={topUserStar} alt="" />
                                            1 Место
                                        </div>
                                    </div>
                                    <div className="top-user-main_block-nickname_block">Santchezz</div>
                                    <div className="top-user-main_block-info_block">
                                        <div className="bought-items_block">
                                            <div className="bought-items_count">34,281</div>
                                            <div className="bought-items_inscription">Купленные товары</div>
                                        </div>
                                        <div className="earned-items_block">
                                            <div className="bought-items_count">118,523₽</div>
                                            <div className="bought-items_inscription">Заработано</div>
                                        </div>
                                    </div>
                                    <div className="circle-decoration_block circle-decoration_block-styles">
                                        <div className="circle-inside">
                                            <div className="small-circle_inside"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="top-three-users_block-section">
                                <div className="top-user-main_block">
                                    <div className="top-user-main_block-avatar_block">
                                        <img className="img-avatar" src={avatar} alt="" />
                                        <div className="user-place_block-background user-place_block-background-styles_third">
                                            <img className="top-user_star-image" src={topUserStar} alt="" />
                                            3 Место
                                        </div>
                                    </div>
                                    <div className="top-user-main_block-nickname_block">Santchezz</div>
                                    <div className="top-user-main_block-info_block">
                                        <div className="bought-items_block">
                                            <div className="bought-items_count">34,281</div>
                                            <div className="bought-items_inscription">Купленные товары</div>
                                        </div>
                                        <div className="earned-items_block">
                                            <div className="bought-items_count">118,523₽</div>
                                            <div className="bought-items_inscription">Заработано</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="your-place_inscription-block">Ваше место</div>
                        <table className="place-table_block">
                            <tbody>
                                <tr>
                                <td data-label="Место">4856</td>
                                <td data-label="Пользователь">
                                    <div>
                                        <img src={avatar} alt="" />
                                        Shenderro
                                    </div>
                                </td>
                                <td data-label="Купленные товары">863</td>
                                <td data-label="Заработано">58 924₽</td>
                                </tr>
                            </tbody>
                        </table>
                        <div className="option-list">
                            <div className="option-item first-item">
                                Место
                            </div>
                            <div className="option-item second-item">
                                Пользователь
                            </div>
                            <div className="option-item third-item">
                                Купленные товары
                            </div>
                            <div className="option-item fourth-item">
                                Заработано
                            </div>
                        </div>
                        <table className="place-table_block">
                            <thead>
                                <tr>
                                    <td>Место</td>
                                    <td>Пользователь</td>
                                    <td>Купленные товары</td>
                                    <td>Заработано</td>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td data-label="Место">4</td>
                                    <td data-label="Пользователь">
                                        <div>
                                            <img src={avatar} alt="" />
                                            Evhen_823
                                        </div>
                                    </td>
                                    <td data-label="Купленные товары">863</td>
                                    <td data-label="Заработано">58 924₽</td>
                                </tr>
                            </tbody>
                        </table>
                        <table className="place-table_block">
                            <thead>
                                <tr>
                                    <td>Место</td>
                                    <td>Пользователь</td>
                                    <td>Купленные товары</td>
                                    <td>Заработано</td>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td data-label="Место">5</td>
                                    <td data-label="Пользователь">
                                        <div>
                                            <img src={avatar} alt="" />
                                            Evhen_823
                                        </div>
                                    </td>
                                    <td data-label="Купленные товары">863</td>
                                    <td data-label="Заработано">58 924₽</td>
                                </tr>
                            </tbody>
                        </table>
                        <table className="place-table_block">
                            <thead>
                                <tr>
                                    <td>Место</td>
                                    <td>Пользователь</td>
                                    <td>Купленные товары</td>
                                    <td>Заработано</td>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td data-label="Место">6</td>
                                    <td data-label="Пользователь">
                                        <div>
                                            <img src={avatar} alt="" />
                                            Evhen_823
                                        </div>
                                    </td>
                                    <td data-label="Купленные товары">863</td>
                                    <td data-label="Заработано">58 924₽</td>
                                </tr>
                            </tbody>
                        </table>
                        <table className="place-table_block">
                            <thead>
                                <tr>
                                    <td>Место</td>
                                    <td>Пользователь</td>
                                    <td>Купленные товары</td>
                                    <td>Заработано</td>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td data-label="Место">7</td>
                                    <td data-label="Пользователь">
                                        <div>
                                            <img src={avatar} alt="" />
                                            Evhen_823
                                        </div>
                                    </td>
                                    <td data-label="Купленные товары">863</td>
                                    <td data-label="Заработано">58 924₽</td>
                                </tr>
                            </tbody>
                        </table>
                        <div className="pages-list">
                            <div className="pages-list_arrow">
                                <img src={arrowLeft} alt="" />
                            </div>
                            <a className="pages-list_item pages-list_item-style pages-list_item-color pages-list_item-dimensions pages-list_item-dimentions_second pages-list_item-media_style" href="">1</a>
                            <a className="pages-list_item pages-list_item-style pages-list_item-color pages-list_item-dimensions pages-list_item-dimentions_second pages-list_item-media_style" href="">2</a>
                            <a className="pages-list_item pages-list_item-style pages-list_item-color-different pages-list_item-dimensions pages-list_item-dimentions_second pages-list_item-media_style" href="">3</a>
                            <a className="pages-list_item pages-list_item-style pages-list_item-color pages-list_item-dimensions pages-list_item-dimentions_second pages-list_item-media_style" href="">334</a>
                            <div className="pages-list_arrow">
                                <img src={arrowRight} alt="" />
                            </div>
                        </div>
                    </div>
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



export default TopUsers;
