
	var particleSystem = null;
	var stage = null;

	//ウィンドウのロードが終わり次第、初期化コードを呼び出す。
	window.addEventListener("load", function () {
	// Stageオブジェクトを作成します。表示リストのルートになります。
	stage = new createjs.Stage("canvas");

	// パーティクルシステム作成します。
	particleSystem = new particlejs.ParticleSystem();

	// パーティクルシステムの描画コンテナーを表示リストに登録します。
	stage.addChild(particleSystem.container);

	// Particle Develop( http://ics-web.jp/projects/particle-develop/ ) から書きだしたパーティクルの設定を読み込む
	particleSystem.importFromJson(
	// パラメーターJSONのコピー＆ペースト ここから--
	{
	    "bgColor": "#553561",
	    "width": 570,
	    "height": 507,
	    "emitFrequency": 17,
	    "startX": 481,
	    "startXVariance": 963,
	    "startY": 730,
	    "startYVariance": 56,
	    "initialDirection": 70,
	    "initialDirectionVariance": "360",
	    "initialSpeed": 0.5,
	    "initialSpeedVariance": "0.7",
	    "friction": 0.0215,
	    "accelerationSpeed": 0.012,
	    "accelerationDirection": 270.0,
	    "startScale": 0.15,
	    "startScaleVariance": 0.33,
	    "finishScale": "0",
	    "finishScaleVariance": 0.09,
	    "lifeSpan": 600,
	    "lifeSpanVariance": "188",
	    "startAlpha": 0.74,
	    "startAlphaVariance": 0.62,
	    "finishAlpha": "0",
	    "finishAlphaVariance": 0.5,
	    "shapeIdList": [
	        "square"
	    ],
	    "startColor": {
	        "hue": 251,
	        "hueVariance": "41",
	        "saturation": "59",
	        "saturationVariance": "0",
	        "luminance": 79,
	        "luminanceVariance": 18
	    },
	    "blendMode": true,
	    "alphaCurveType": "0"
	}
	// パラメーターJSONのコピー＆ペースト ここまで---
	);

	// フレームレートの設定
	createjs.Ticker.framerate = 60;
	// requestAnimationFrameに従った呼び出し
	createjs.Ticker.timingMode = createjs.Ticker.RAF;
	// 定期的に呼ばれる関数を登録
	createjs.Ticker.addEventListener("tick", handleTick);
	});

	function handleTick() {
	// パーティクルの発生・更新
	particleSystem.update();

	// 描画を更新する
	stage.update();
	}
