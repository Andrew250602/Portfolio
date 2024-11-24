
const homeElement = `
        <div class="app__header">
            <div class="navigation__ocean" id="navigationOcean">
                <div class="navigation__ocean-navbar">
                    <div class="navigation__ocean-icon" >
                        <button class="navigation__ocean-name" id="buttonOpenOcean">OPEN</button>
                            <img 
                            src="https://ik.imagekit.io/fyhbxzra7/portpolio__journey/journey__image/helm.svg?ik-sdk-version=javascript-1.4.3&updatedAt=1675947577572" 
                            alt="ErrorImage" 
                            class="navigation__ocean-image">
                        <span class="navigation__ocean-span-anchor"></span>
                    </div>
                </div>
                <div class="navigation__ocean-title">
                    <div class="navigation__ocean-boat">
                        <h1 class="navigation__ocean-ship">
                            <img 
                                src="https://ik.imagekit.io/alejk5lwty/product_card/maybay.png?updatedAt=1732342991038" 
                                alt="ErrorImage" 
                                class="navigation__ocean-shiping"/>
                        </h1>
                    </div>
                </div>
            </div>

            <div class="navigation__choose" id="navigationChoose">
                <div class="navigation__choose-navbar">
                    <div class="navigation__choose-icon">
                        <button class="navigation__choose-name" id="buttonCloseOcean">CLOSE</button>
                        <img 
                            src="https://ik.imagekit.io/fyhbxzra7/portpolio__journey/journey__image/helm.svg?ik-sdk-version=javascript-1.4.3&updatedAt=1675947577572" 
                            alt="ErrorImage" 
                            class="navigation__choose-image">
                        <span class="navigation__choose-span-anchor"></span>
                    </div>
                </div>
                <nav class="navigation__choose-navbar-choice">
                    <ul class="navigation__choose-list">
                        <li class="navigation__choose-item">
                            <a href="/" class="navigation__choose-link">HOME</a>
                            <span class="navigation__choose-overplay"></span>
                        </li>
                        <li class="navigation__choose-item">
                            <a href="/project" class="navigation__choose-link" id="buttonProject">PROJECTS</a>
                            <span class="navigation__choose-overplay"></span>
                        </li>
                        <li class="navigation__choose-item">
                            <a href="#" class="navigation__choose-link" id="buttonService">SERVICES</a>
                            <span class="navigation__choose-overplay"></span>
                        </li>
                        <li class="navigation__choose-item">
                            <a href="#" class="navigation__choose-link" id="buttonAbout">ABOUT ME</a>
                            <span class="navigation__choose-overplay"></span>
                        </li>
                        <li class="navigation__choose-item">
                            <a href="#" class="navigation__choose-link" id="buttonBlog">BLOG</a>
                            <span class="navigation__choose-overplay"></span>
                        </li>
                        <li class="navigation__choose-item">
                            <a href="#" class="navigation__choose-link" id="buttonContact">CONTACT ME</a>
                            <span class="navigation__choose-overplay"></span>
                        </li>
                    </ul>
                </nav>
                <div class="navigation__choose-contact" id="navigationChooseContact">
                    <div class="navigation__choose-box">
                        <h3 class="navigation__choose-heading">LET'S TALK</h3>
                        <span class="navigation__choose-span">0837441290</span>
                    </div>
                    <div class="navigation__choose-box">
                        <h3 class="navigation__choose-heading">SEND ME AN EMAIL</h3>
                        <span class="navigation__choose-span">trieuvyxka1@gmail.com</span>
                    </div>
                </div>
            </div>
        </div>
`;

const homeCSS = `
    .app__header{
        --width-anchor: 50px;
        overflow-x: hidden; 
        overflow-y: hidden; /* Ẩn phần vượt quá chiều dọc */
        
    }
    .app__header 
    .navigation__ocean{
        background-image: url('https://i.pinimg.com/originals/b1/43/d7/b143d7a7b4ff38f5d427448f87edbba3.gif');
        background-repeat:no-repeat;
        background-size: 100% 100%;
        background-attachment: fixed;
        height:100vh
    }

    .app__header 
    .navigation__ocean
    .navigation__ocean-navbar
    .navigation__ocean-icon{
        display:flex;
        justify-content:right;
        align-items:center;
        // overflow: hidden; /* Ẩn phần nội dung vượt quá kích thước phần tử */
        position: relative;
        
    }
    .app__header 
    .navigation__ocean
    .navigation__ocean-navbar
    .navigation__ocean-icon
    .navigation__ocean-name{
        margin-right: 25px;
        position: absolute;
        z-index:1;
        // background: black;
        color:white;
        background: transparent; /* Không có nền */
        border: none;        /* Không có viền */
        outline: none;
    } 
    .app__header 
    .navigation__ocean 
    .navigation__ocean-navbar 
    .navigation__ocean-icon 
    .navigation__ocean-image{
        height: 50px;
    }
    .app__header 
    .navigation__ocean 
    .navigation__ocean-navbar 
    .navigation__ocean-icon:hover 
    .navigation__ocean-image{
        cursor: pointer;
        transform: rotate(1turn);
        transition: transform 1s ease-in;
    }
    // .app__header 
    // .navigation__ocean
    // .navigation__ocean-navbar
    // .navigation__ocean-icon
    // .navigation__ocean-span-anchor::before{
    //     position: absolute;
    //     content: "";
    //     background-color:  #0F1317 ;
    //     width: var(--width-anchor);
    //     height:50px;
    //     clip-path: inset(0 0 0 25px);
    //     top:0;
    //     right:calc(var(--width-anchor) / 2);
    // }
    
    @keyframes ship-bounce{
        0% {
            transform: translateY(0);
        }
        50% {
            transform: translateY(-10px);
        }
        100% {
            transform: translateY(0);
        }
    }

    @keyframes ship-move {
        0% {
            left: -100%;
        }
        100% {
            left: 100%;
        }
    }


    // .app__header 
    // .navigation__ocean
    // .navigation__ocean-title
    // .navigation__ocean-boat{
        
    // }
    .app__header 
    .navigation__ocean
    .navigation__ocean-title
    .navigation__ocean-boat
    .navigation__ocean-ship{
        display:flex;
        align-items: center;
        justify-content: center;
    }

    .app__header 
    .navigation__ocean
    .navigation__ocean-title
    .navigation__ocean-boat
    .navigation__ocean-ship 
    .navigation__ocean-shiping{
        height:200px;
        position: relative;
        animation: ship-bounce 3s ease-in-out infinite;
            //  ship-move 2s linear infinite;
    }


    .app__header
    .navigation__choose{
        background-image: url('https://i.pinimg.com/originals/b1/43/d7/b143d7a7b4ff38f5d427448f87edbba3.gif');
         background-repeat:no-repeat;
        background-size: 100% 100%;
        background-attachment: fixed;
        height:100vh
    }
    .app__header
    .navigation__choose
    .navigation__choose-navbar 
    .navigation__choose-name{
        margin-right: 25px; /* lề bên phải */
        position: absolute;  /* vị trí theo */
        z-index:1;  /* vị trí ưu tiên font or back */
        color:white;        /* màu chữ */
        background: transparent; /* Không có nền */
        border: none;        /* Không có viền */
        outline: none;      /* Không có viền */
    }


    .app__header
    .navigation__choose
    .navigation__choose-navbar 
    .navigation__choose-icon{
        display:flex;
        justify-content:right;
        align-items: center;
        position: relative;
    }


    .app__header
    .navigation__choose
    .navigation__choose-navbar
    .navigation__choose-icon
    .navigation__choose-image{
        height: 50px;
    }

    .app__header
    .navigation__choose
    .navigation__choose-navbar
    .navigation__choose-icon:hover  
    .navigation__choose-image{
        cursor: pointer;
        transform: rotate(1turn);
        transition: transform 1s ease-in;
    }


    .app__header
    .navigation__choose
    .navigation__choose-navbar-choice{
        position:absolute;
        right: 25px;
        top: 20%;
    }


    .app__header
    .navigation__choose
    .navigation__choose-contact{
        position:absolute;
        left: 25px;
        top: 25px;
        color:white
    }

    .app__header
    .navigation__choose
    .navigation__choose-navbar-choice
    .navigation__choose-list{
        list-style: none;
    }
    .app__header
    .navigation__choose
    .navigation__choose-navbar-choice
    .navigation__choose-list
    .navigation__choose-item
    .navigation__choose-link{
        text-decoration: none;
        color: white;
        font-weight: bold;
        font-size: 20px;
        margin: 20px 0;
        display: block;
    }
    .app__header
    .navigation__choose
    .navigation__choose-navbar-choice
    .navigation__choose-list
    .navigation__choose-item
    .navigation__choose-link:hover{
        color:red
    }


`;
//clip-path: inset(0 22px 0 0);
// top: 0px (không cắt bỏ phần trên)
// right: 22px (cắt bỏ 22 pixel từ cạnh phải)
// bottom: 0px (không cắt bỏ phần dưới)
// left: 0px (không cắt bỏ phần trái)
module.exports = {
    homeElement,
    homeCSS
};