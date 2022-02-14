import '../styles/FP.scss'
import '../styles/guarantee.scss'
import '../styles/mobile.scss'
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
import lightningPicture from '../photo/lightningImage.svg'
import smallDots from '../photo/dotsSecond.svg'
import lockPicture from '../photo/lockImage.svg'
import tickPicture from '../photo/tickImage.svg'
import truckPicture from '../photo/truckImage.svg'
import headphonesPicture from '../photo/headphonesImage.svg'
import heartPicture from '../photo/heartImage.svg'
import walletPicture from '../photo/wallet.svg'


const changeStyle = () =>{

}


const Guarantee = () =>{
    return(
        <div className="general-block">
            <div className = 'header-first-page bIsao5BYuYCwVF5aY_we'>
            <div className='dop'>
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
                <div className="guarantee-container PVzl14Yw_LwAZu_u6jXO">
                    <div className="guarantee-title tPwT_Dotf88bTo_mFlxl">
                        <img className="title-background BtXdi1zw9BDLwrP9gQnZ" src={titleBackground} alt="" />
                        <div className="guarantee-title_inscription jkTCn5AErQxwRrk3BZEg">Гарантии</div>
                    </div>
                    <div className="guarantee-section GguhH7HiGJbJH7Em_Ebn">
                        <div className="section_block _6sGO4p_Dw8ZTIFSFLVt">
                            <div className="section-block_image fZQ1i5YhpfNyVtNj4Pfn">
                                <div className="image_circle UAmWxXhKhatc6lWOSrRJ">
                                    <img src={lightningPicture} alt="" />
                                </div>
                                <img className="image-dots eI36CGR9IKRBc7F_Rvoo" src={smallDots} alt="" />
                            </div>
                            <div className="section-block_inscription wRH75OYzMKdGgmu6TQt_">
                                <div className="inscription-title_text BLMMzmVIZPjDfUjLISse">Моментально</div>
                                <div className="inscription-underline _QEyVmcGuTTGBesSh4T9"></div>
                                <img src={smallDots} className="second-dots kikg3B9Fxsg964yEu1yO"></img>
                                <div className="inscription-main_text qc6LDCj9MhYIkwViH3uA">Вы получите свой товар моментально, сразу после успешной оплаты.</div>
                            </div>
                        </div>
                        <div className="section_block _6sGO4p_Dw8ZTIFSFLVt">
                            <div className="section-block_image fZQ1i5YhpfNyVtNj4Pfn">
                                <div className="image_circle UAmWxXhKhatc6lWOSrRJ">
                                    <img src={lockPicture} alt="" />
                                </div>
                                <img className="image-dots eI36CGR9IKRBc7F_Rvoo" src={smallDots} alt="" />
                            </div>
                            <div className="section-block_inscription wRH75OYzMKdGgmu6TQt_">
                                <div className="inscription-title_text BLMMzmVIZPjDfUjLISse">Безопасно</div>
                                <div className="inscription-underline _QEyVmcGuTTGBesSh4T9"></div>
                                <img src={smallDots} class="second-dots kikg3B9Fxsg964yEu1yO"></img>
                                <div className="inscription-main_text qc6LDCj9MhYIkwViH3uA">Полученные нами данные о вас остаются конфиденциальны.</div>
                            </div>
                        </div>
                        <div className="section_block _6sGO4p_Dw8ZTIFSFLVt">
                            <div className="section-block_image fZQ1i5YhpfNyVtNj4Pfn">
                                <div className="image_circle UAmWxXhKhatc6lWOSrRJ">
                                    <img src={tickPicture} alt="" />
                                </div>
                                <img className="image-dots eI36CGR9IKRBc7F_Rvoo" src={smallDots} alt="" />
                            </div>
                            <div className="section-block_inscription wRH75OYzMKdGgmu6TQt_">
                                <div className="inscription-title_text BLMMzmVIZPjDfUjLISse">Качественно</div>
                                <div className="inscription-underline _QEyVmcGuTTGBesSh4T9"></div>
                                <img src={smallDots} className="second-dots kikg3B9Fxsg964yEu1yO"></img>
                                <div className="inscription-main_text qc6LDCj9MhYIkwViH3uA">Мы предлагаем качественный и удобный сервис для вас</div>
                            </div>
                        </div>
                    </div>
                    <div className="guarantee-second_title tPwT_Dotf88bTo_mFlxl">
                        <img className="second-title_dots BtXdi1zw9BDLwrP9gQnZ" src={titleBackground} alt="" />
                        <div className="second_title_text second-title_inscription jkTCn5AErQxwRrk3BZEg _r0RpY0UScQyzeKLnyho">Все еще не уверены?</div>
                    </div>
                    <div className="more-website_info JEuoirJBmIeoLHipS80O">
                        <div className="more-website_info-block _6sGO4p_Dw8ZTIFSFLVt">
                            <div className="website_info-image_block fZQ1i5YhpfNyVtNj4Pfn">
                                <div className="image-block_circle image-block_picture UAmWxXhKhatc6lWOSrRJ _rJ6P6HNbrsl3z_y_UVV">
                                    <img src={truckPicture} alt="" />
                                </div>
                                <img className="guarantee-dots_image eI36CGR9IKRBc7F_Rvoo" src={smallDots} alt="" />
                            </div>
                            <div className="guarantee-main_text-block wRH75OYzMKdGgmu6TQt_">
                                <div className="inscription-title_text BLMMzmVIZPjDfUjLISse">Множество поставщиков</div>
                                <div className="inscription-title_text-underline _QEyVmcGuTTGBesSh4T9"></div>
                                <img className="title-text_right-dots JIHNjGgb0sQYgh7fq3jk" src={smallDots} alt="" />
                                <div className="guarantee-main_text-block_text qc6LDCj9MhYIkwViH3uA">Сотрудничество с поставщиками увеличивает наш ассортимент и поддерживает рубрику “Случайный аккаунт</div>
                            </div>
                        </div>
                        <div className="more-website_info-block _6sGO4p_Dw8ZTIFSFLVt">
                            <div className="website_info-image_block fZQ1i5YhpfNyVtNj4Pfn">
                                <div className="image-block_circle image-block_picture UAmWxXhKhatc6lWOSrRJ _rJ6P6HNbrsl3z_y_UVV">
                                    <img src={headphonesPicture} alt="" />
                                </div>
                                <img className="guarantee-dots_image eI36CGR9IKRBc7F_Rvoo" src={smallDots} alt="" />
                            </div>
                            <div className="guarantee-main_text-block wRH75OYzMKdGgmu6TQt_">
                                <div className="inscription-title_text BLMMzmVIZPjDfUjLISse">Техническая поддержка</div>
                                <div className="inscription-title_text-underline _QEyVmcGuTTGBesSh4T9"></div>
                                <img className="title-text_right-dots JIHNjGgb0sQYgh7fq3jk" src={smallDots} alt="" />
                                <div className="guarantee-main_text-block_text qc6LDCj9MhYIkwViH3uA">У нас работает квалифицированная техническая поддержка, которая оперативно ответит на все ваши вопросы.</div>
                            </div>
                        </div>
                        <div className="more-website_info-block _6sGO4p_Dw8ZTIFSFLVt">
                            <div className="website_info-image_block fZQ1i5YhpfNyVtNj4Pfn">
                                <div className="image-block_circle image-block_picture UAmWxXhKhatc6lWOSrRJ _rJ6P6HNbrsl3z_y_UVV">
                                    <img src={heartPicture} alt="" />
                                </div>
                                <img className="guarantee-dots_image eI36CGR9IKRBc7F_Rvoo" src={smallDots} alt="" />
                            </div>
                            <div className="guarantee-main_text-block wRH75OYzMKdGgmu6TQt_">
                                <div className="inscription-title_text BLMMzmVIZPjDfUjLISse">Безопасная сделка</div>
                                <div className="inscription-title_text-underline _QEyVmcGuTTGBesSh4T9"></div>
                                <img className="title-text_right-dots JIHNjGgb0sQYgh7fq3jk" src={smallDots} alt="" />
                                <div className="guarantee-main_text-block_text qc6LDCj9MhYIkwViH3uA">При возникновений проблем и спорных ситуаций всегда принимается справедливое решение. Мы несем ответсвенность за безопасность вашей сделки.</div>
                            </div>
                        </div>
                        <div className="more-website_info-block _6sGO4p_Dw8ZTIFSFLVt">
                            <div className="website_info-image_block fZQ1i5YhpfNyVtNj4Pfn">
                                <div className="image-block_circle image-block_picture UAmWxXhKhatc6lWOSrRJ _rJ6P6HNbrsl3z_y_UVV">
                                    <img src={walletPicture} alt="" />
                                </div>
                                <img className="guarantee-dots_image eI36CGR9IKRBc7F_Rvoo" src={smallDots} alt="" />
                            </div>
                            <div className="guarantee-main_text-block wRH75OYzMKdGgmu6TQt_">
                                <div className="inscription-title_text BLMMzmVIZPjDfUjLISse">Многообразие оплаты</div>
                                <div className="inscription-title_text-underline _QEyVmcGuTTGBesSh4T9"></div>
                                <img className="title-text_right-dots JIHNjGgb0sQYgh7fq3jk" src={smallDots} alt="" />
                                <div className="guarantee-main_text-block_text qc6LDCj9MhYIkwViH3uA">Мы поддерживаем множество способов оплаты, в том числе и зарубежные переводы.</div>
                            </div>
                        </div>
                    </div>
                    <div className="sertificate-button_block _FNfzSPP8SDzlzQv9FVO">
                    <a className="sertificate-text sertificate-inscription sertificate-button GLW2mbSD7kIKpK_u1OXW kwTCKEzB9tIvCcFC_esk xWdGqLEXFZPsLMJoP2TP">Сертификат о сайте</a>
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



export default Guarantee;