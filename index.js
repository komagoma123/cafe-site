const menuButtons = document.querySelectorAll('.menu-btn');
const menuCards = document.querySelectorAll('.menu-card');

menuButtons.forEach(button =>{ //buttonは引数であり、その時に選択されたボタンがbuttonに入る
    button.addEventListener('click', () =>{

        //menu-txtの選択されたボタンだけを緑色にする
        menuButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');

        //選択されたmenu-txtのカテゴリに該当するmenu-cardだけを表示する処理
        //クリックされたボタンのテキスト(All, Drink, Food)を判定する
        const category = button.textContent; //caregoryに選択したボタンのテキストを入れた

        //カードの表示非表示を切り替える
        menuCards.forEach(card =>{ //cardは選択されたmenu-txtのカテゴリに該当するmenu-card全てのこと
            if(category === 'All'){
                //Allなら全部表示する(is-hiddenクラスを外す)
                card.classList.remove('is-hidden');
            } else if(category === 'Drink'){
                //Drinkなら、drinkクラスを持つカードだけを表示し、それ以外は非表示にする
                if (card.classList.contains('drink')){
                    card.classList.remove('is-hidden');
                } else{
                    card.classList.add('is-hidden');
                }
            } else if(category === 'Food'){
                //Foodならfood句r素を持つカードだけ表示し、それ以外を非表示にする
                if(card.classList.contains('food')){
                    card.classList.remove('is-hidden');
                } else{
                    card.classList.add('is-hidden');
                }
            }
        })

    })
})

// FAQのアコーディオン処理
const faqCards = document.querySelectorAll('.faq-card');

faqCards.forEach(card => {
    card.addEventListener('click', () => {
        // クリックされたカードに 'is-open' クラスがあれば削除、なければ追加する
        card.classList.toggle('is-open');
    });
});

// 1. スクロールされるたびに、現在の縦の位置をブラウザの「sessionStorage」に保存する
window.addEventListener('scroll', () =>{
    sessionStorage.setItem('scrollPos', window.scrollY);
});

//sessionStrageはStorageというクラスから作られたオブジェクトである
//setItemはデータを保存って意味
//window.scrollYはウィンドウの縦の位置のこと
//scrollPosはデータの名前（キー）のことであり、ついさっき開発者が名前を付けた。名前の由来は「Scroll Position（スクロール・ポジション）」の略。
//キーはデータを引き出すときに必要な呼び出す名前のこと

// 2. ページが読み込まれたとき、保存した位置があればそこに一瞬で戻す
window.addEventListener('load', () =>{
    const savedPos = sessionStorage.getItem('scrollPos');
    if (savedPos !== null){
        // スムーズスクロールを切って、一瞬で元の位置にジャンプさせる
        window.scrollTo(0, parseInt(savedPos, 10));
    }
});

//scrollToはウィンドウを指定したスクロール位置に一瞬で移動させるメソッド（命令）のこと
//スクロール位置は縦の位置のこと

$(function(){
    $(".hamburger-menu, .close-btn, .sp-menu a, .overlay").on("click", function(){

            $(".hamburger-menu").toggleClass("open");
            $("body").toggleClass("menu-open");
        
            let rightVal = $(".hamburger-menu").hasClass("open") ? 0 : -280;

        $(".sp-menu").stop().animate({
            right: rightVal
        }, 200);
    });
});

$(function(){
    // 1. ページが少しでもスクロールされたときの処理
    $(window).on("scroll", function(){
        // 100px以上スクロールしたら
        if ($(this).scrollTop() > 100) {
            $("#page-top").addClass("is-show"); // ボタンを表示
        } else {
            $("#page-top").removeClass("is-show"); // ページの一番上にいるときは隠す
        }
    });

    // 2. ボタンがクリックされたときの処理
    $("#page-top").on("click", function(){
        window.scrollTo({
            top: 0,
            behavior: 'smooth' // ブラウザ標準のなめらかなスクロールを使う
        });
        return false;
    });
});