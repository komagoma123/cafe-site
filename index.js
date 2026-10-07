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

