var user_hand = prompt('ジャンケンの手をグー、チョキ、パーから選んでください');

var js_hand = getJShand();

var judge = winLose(user_hand, js_hand);

alert('あなたの選んだ手は' + user_hand + 'です。\nJavascriptの選んだ手は'　+  js_hand + 'です。\n結果は' + judge + 'です。');

function getJShand(){
	var js_hand_num = Math.floor( Math.random () * 3 );
	var hand_name;
}