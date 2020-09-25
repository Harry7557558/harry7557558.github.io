
const ColorFunction = {
	clamp: function(x) {
		return Math.floor(255.99*(x<0.?0.:x>1.?1.:x));
	},
	AlpineColors: function(t) {
		var r = (((((-1.457875*t+6.527702)*t-10.971846)*t+8.210421)*t-1.951239)*t+0.374501)*t+0.272210;
		var g = (((((-2.507661*t+6.237158)*t-6.335271)*t+4.405196)*t-1.906471)*t+0.758703)*t+0.346705;
		var b = (((((-7.551174*t+32.503633)*t-53.019755)*t+40.056187)*t-12.547639)*t+1.020391)*t+0.461027;
		return 'rgb('+this.clamp(r)+','+this.clamp(g)+','+this.clamp(b)+')';
	},
	LakeColors: function(t) {
		var r = (((((3.347933*t-11.237823)*t+14.573876)*t-8.920889)*t+2.280045)*t+0.607145)*t+0.292182;
		var g = (((((13.060978*t-36.515634)*t+38.632037)*t-19.742950)*t+4.345912)*t+1.084922)*t+0.053821;
		var b = (((((14.277127*t-49.725012)*t+66.775645)*t-42.002737)*t+10.795192)*t+0.170451)*t+0.541365;
		return 'rgb('+this.clamp(r)+','+this.clamp(g)+','+this.clamp(b)+')';
	},
	ArmyColors: function(t) {
		var r = (((((-11.671448*t+30.860665)*t-27.870470)*t+9.190199)*t-0.147334)*t-0.063830)*t+0.457363;
		var g = (((((-15.619310*t+38.543162)*t-32.686937)*t+11.467993)*t-1.626843)*t+0.072369)*t+0.589528;
		var b = (((((-5.385223*t+11.253527)*t-5.614350)*t-1.772938)*t+2.449935)*t-0.793549)*t+0.511945;
		return 'rgb('+this.clamp(r)+','+this.clamp(g)+','+this.clamp(b)+')';
	},
	MintColors: function(t) {
		var r = (((((1.459587*t-4.460008)*t+5.221324)*t-2.959753)*t+0.270589)*t+0.919312)*t+0.458167;
		var g = (((((1.311616*t-3.767648)*t+4.083370)*t-2.112463)*t+0.188629)*t-0.063608)*t+0.973596;
		var b = (((((1.827630*t-5.498474)*t+6.369063)*t-3.580561)*t+0.459281)*t+0.573998)*t+0.633161;
		return 'rgb('+this.clamp(r)+','+this.clamp(g)+','+this.clamp(b)+')';
	},
	AtlanticColors: function(t) {
		var r = (((((2.446963*t-18.780176)*t+35.977626)*t-28.374461)*t+9.248922)*t-0.215484)*t+0.144681;
		var g = (((((-0.622497*t-7.653657)*t+23.027382)*t-23.569575)*t+9.131625)*t-0.016620)*t+0.171958;
		var b = (((((-0.435492*t-7.745894)*t+22.224017)*t-22.727499)*t+9.144488)*t-0.043583)*t+0.176319;
		return 'rgb('+this.clamp(r)+','+this.clamp(g)+','+this.clamp(b)+')';
	},
	NeonColors: function(t) {
		var r = (((((-6.294503*t+22.395445)*t-29.173076)*t+16.637190)*t-4.021755)*t+0.552943)*t+0.709963;
		var g = (((((21.884162*t-54.454631)*t+43.230946)*t-9.664665)*t-0.415705)*t-1.271427)*t+0.921473;
		var b = (((((24.117901*t-76.320225)*t+88.498887)*t-44.826834)*t+9.871994)*t-0.873899)*t+0.311434;
		return 'rgb('+this.clamp(r)+','+this.clamp(g)+','+this.clamp(b)+')';
	},
	AuroraColors: function(t) {
		var r = (((((-1.716563*t-2.227622)*t+19.189025)*t-25.905140)*t+12.920496)*t-1.663346)*t+0.272786;
		var g = (((((-1.332008*t+16.726742)*t-33.602305)*t+20.837416)*t-2.252656)*t-0.363662)*t+0.257752;
		var b = (((((2.653907*t-7.869200)*t+0.127784)*t+12.729489)*t-8.934837)*t+1.992685)*t+0.242272;
		return 'rgb('+this.clamp(r)+','+this.clamp(g)+','+this.clamp(b)+')';
	},
	PearlColors: function(t) {
		var r = (((((2.839902*t-7.543239)*t+2.986475)*t+7.505402)*t-6.644985)*t+0.926987)*t+0.888512;
		var g = (((((3.156568*t-9.507490)*t+6.631244)*t+4.578655)*t-6.150725)*t+1.285650)*t+0.819411;
		var b = (((((5.305974*t-14.114644)*t+7.073495)*t+8.425159)*t-8.096689)*t+1.631607)*t+0.753979;
		return 'rgb('+this.clamp(r)+','+this.clamp(g)+','+this.clamp(b)+')';
	},
	AvocadoColors: function(t) {
		var r = (((((-7.573324*t+27.755821)*t-38.657852)*t+23.612007)*t-4.330422)*t+0.192012)*t+0.000119;
		var g = (((((6.122226*t-21.127226)*t+28.010867)*t-16.710136)*t+3.059908)*t+1.642388)*t-0.009722;
		var b = (((((-0.043174*t-1.053249)*t+2.818188)*t-2.129551)*t+0.347262)*t+0.294788)*t-0.003434;
		return 'rgb('+this.clamp(r)+','+this.clamp(g)+','+this.clamp(b)+')';
	},
	PlumColors: function(t) {
		var r = (((((0.698800*t-3.460046)*t+5.826126)*t-1.192933)*t-3.402177)*t+2.484869)*t-0.021223;
		var g = (((((-0.130548*t+0.004955)*t+0.516159)*t+0.189126)*t-0.147679)*t+0.474906)*t-0.003788;
		var b = (((((1.171168*t-2.677967)*t+1.985399)*t-2.424780)*t+2.166263)*t+0.194940)*t+0.002409;
		return 'rgb('+this.clamp(r)+','+this.clamp(g)+','+this.clamp(b)+')';
	},
	BeachColors: function(t) {
		var r = (((((-8.641307*t+24.785284)*t-22.076044)*t+6.902319)*t-1.059187)*t+0.264122)*t+0.848538;
		var g = (((((-7.122828*t+20.268803)*t-17.608654)*t+5.125770)*t-1.130565)*t+0.992126)*t+0.494538;
		var b = (((((6.951751*t-20.034880)*t+17.043127)*t-3.320181)*t-0.113278)*t+0.203845)*t+0.256872;
		return 'rgb('+this.clamp(r)+','+this.clamp(g)+','+this.clamp(b)+')';
	},
	RoseColors: function(t) {
		var r = (((((-18.663522*t+56.544713)*t-60.260427)*t+25.334043)*t-3.796088)*t+1.391436)*t+0.141690;
		var g = (((((-15.590809*t+47.581595)*t-51.133120)*t+21.411346)*t-2.967309)*t+0.519299)*t+0.302366;
		var b = (((((-9.282516*t+28.166681)*t-29.688633)*t+11.881706)*t-1.846065)*t+0.790168)*t+0.082644;
		return 'rgb('+this.clamp(r)+','+this.clamp(g)+','+this.clamp(b)+')';
	},
	CandyColors: function(t) {
		var r = (((((-10.531411*t+24.338526)*t-15.096477)*t-0.378791)*t+0.559307)*t+1.361145)*t+0.397229;
		var g = (((((-21.219812*t+64.222029)*t-72.261162)*t+35.460804)*t-6.030600)*t+0.491628)*t+0.196064;
		var b = (((((-10.608469*t+33.708247)*t-40.344926)*t+20.403440)*t-2.866001)*t+0.237444)*t+0.339044;
		return 'rgb('+this.clamp(r)+','+this.clamp(g)+','+this.clamp(b)+')';
	},
	SolarColors: function(t) {
		var r = (((((6.937746*t-22.945514)*t+29.286428)*t-17.081017)*t+3.040708)*t+1.302481)*t+0.459023;
		var g = (((((-0.906724*t+5.759409)*t-10.729611)*t+7.331839)*t-1.131422)*t+0.497409)*t-0.001756;
		var b = (((((-0.704653*t+2.739852)*t-4.002012)*t+2.537311)*t-0.421481)*t-0.036779)*t+0.014353;
		return 'rgb('+this.clamp(r)+','+this.clamp(g)+','+this.clamp(b)+')';
	},
	CMYKColors: function(t) {
		var r = (((((9.270347*t-32.656921)*t+40.777609)*t-24.729841)*t+6.156415)*t+0.989395)*t+0.294212;
		var g = (((((-40.726347*t+155.312492)*t-229.753031)*t+155.695956)*t-44.834393)*t+3.754226)*t+0.639866;
		var b = (((((-36.722960*t+94.862080)*t-98.799400)*t+54.630702)*t-15.919296)*t+1.104321)*t+0.898886;
		return 'rgb('+this.clamp(r)+','+this.clamp(g)+','+this.clamp(b)+')';
	},
	SouthwestColors: function(t) {
		var r = (((((-9.083745*t+41.756003)*t-68.877532)*t+50.735816)*t-18.127495)*t+3.584249)*t+0.357235;
		var g = (((((-5.414068*t+17.471348)*t-15.680159)*t-1.507366)*t+6.341505)*t-0.938664)*t+0.321203;
		var b = (((((-63.397571*t+191.561433)*t-203.361904)*t+88.411490)*t-12.672347)*t+0.144801)*t+0.196895;
		return 'rgb('+this.clamp(r)+','+this.clamp(g)+','+this.clamp(b)+')';
	},
	DeepSeaColors: function(t) {
		var r = (((((-7.273108*t+13.326162)*t-3.860028)*t-1.802002)*t-0.540391)*t+0.777837)*t+0.154574;
		var g = (((((-3.518310*t+14.239161)*t-21.352945)*t+13.486462)*t-2.223622)*t+0.295068)*t-0.000842;
		var b = (((((5.590208*t-16.146986)*t+17.726117)*t-9.461455)*t+1.914947)*t+1.079907)*t+0.295912;
		return 'rgb('+this.clamp(r)+','+this.clamp(g)+','+this.clamp(b)+')';
	},
	StarryNightColors: function(t) {
		var r = (((((-6.480020*t+25.292800)*t-37.270647)*t+23.973834)*t-5.853121)*t+1.217690)*t+0.073046;
		var g = (((((-2.088517*t+11.288922)*t-19.222372)*t+12.666892)*t-3.373281)*t+1.402559)*t+0.133380;
		var b = (((((-4.743538*t+16.130653)*t-18.874128)*t+7.987805)*t-1.409015)*t+1.072884)*t+0.196357;
		return 'rgb('+this.clamp(r)+','+this.clamp(g)+','+this.clamp(b)+')';
	},
	FallColors: function(t) {
		var r = (((((8.311413*t-23.977117)*t+22.965880)*t-8.239236)*t+1.112287)*t+0.524292)*t+0.255366;
		var g = (((((12.500649*t-37.398937)*t+37.381194)*t-12.607942)*t+0.417214)*t+0.109119)*t+0.391184;
		var b = (((((-2.727743*t+8.556337)*t-9.699272)*t+4.340174)*t+0.144028)*t-0.752309)*t+0.399342;
		return 'rgb('+this.clamp(r)+','+this.clamp(g)+','+this.clamp(b)+')';
	},
	SunsetColors: function(t) {
		var r = (((((-10.207601*t+20.527934)*t-4.649334)*t-12.519233)*t+6.321373)*t+1.506509)*t+0.004140;
		var g = (((((6.237170*t-15.358003)*t+10.741139)*t-0.696871)*t-0.861747)*t+0.946992)*t-0.008050;
		var b = (((((38.757137*t-113.558912)*t+110.608123)*t-28.159246)*t-11.834895)*t+5.299287)*t-0.072056;
		return 'rgb('+this.clamp(r)+','+this.clamp(g)+','+this.clamp(b)+')';
	},
	FruitPunchColors: function(t) {
		var r = (((((4.322006*t-13.191029)*t+12.200604)*t-1.183618)*t-2.452111)*t+0.273100)*t+0.990487;
		var g = (((((-5.116477*t+14.646661)*t-12.495067)*t+3.311223)*t-1.396415)*t+0.930723)*t+0.489408;
		var b = (((((9.402825*t-26.688894)*t+22.614837)*t-6.205279)*t+1.541499)*t-0.156899)*t+0.003415;
		return 'rgb('+this.clamp(r)+','+this.clamp(g)+','+this.clamp(b)+')';
	},
	ThermometerColors: function(t) {
		var r = (((((-1.801506*t+2.290092)*t+5.383878)*t-12.620400)*t+6.617256)*t+0.486544)*t+0.163178;
		var g = (((((9.909064*t-31.460648)*t+43.829953)*t-32.400926)*t+8.511813)*t+1.579476)*t+0.114388;
		var b = (((((-5.270180*t+15.330250)*t-15.455714)*t+7.522402)*t-4.166883)*t+1.415372)*t+0.782505;
		return 'rgb('+this.clamp(r)+','+this.clamp(g)+','+this.clamp(b)+')';
	},
	IslandColors: function(t) {
		var r = (((((-2.693447*t+8.829757)*t-4.031802)*t-11.440328)*t+12.570201)*t-3.371519)*t+0.793934;
		var g = (((((-0.921446*t+7.163315)*t-14.690156)*t+13.202243)*t-7.145362)*t+2.834217)*t+0.340332;
		var b = (((((-3.084243*t+16.349326)*t-29.221930)*t+24.727652)*t-13.224244)*t+4.589624)*t+0.169477;
		return 'rgb('+this.clamp(r)+','+this.clamp(g)+','+this.clamp(b)+')';
	},
	WatermelonColors: function(t) {
		var r = (((((6.266784*t-18.093502)*t+16.612227)*t-5.057856)*t-0.374390)*t+1.428119)*t+0.088573;
		var g = (((((6.125246*t-17.444842)*t+16.579878)*t-7.071965)*t+0.064711)*t+1.991091)*t+0.087062;
		var b = (((((9.604760*t-27.069481)*t+24.119687)*t-8.839295)*t+1.742794)*t+0.669156)*t+0.096114;
		return 'rgb('+this.clamp(r)+','+this.clamp(g)+','+this.clamp(b)+')';
	},
	BrassTones: function(t) {
		var r = (((((36.004998*t-122.779611)*t+162.982964)*t-105.016647)*t+29.829358)*t-1.051302)*t+0.189380;
		var g = (((((31.513775*t-108.386099)*t+145.377879)*t-94.948387)*t+27.588707)*t-1.195862)*t+0.198569;
		var b = (((((14.466413*t-50.314795)*t+68.460992)*t-45.614728)*t+13.531521)*t-0.555763)*t+0.068279;
		return 'rgb('+this.clamp(r)+','+this.clamp(g)+','+this.clamp(b)+')';
	},
	GreenPinkTones: function(t) {
		var r = (((((-48.866797*t+147.727485)*t-158.310679)*t+62.366807)*t-2.071967)*t-0.698327)*t+0.025668;
		var g = (((((-49.789658*t+138.370960)*t-135.732080)*t+59.313906)*t-17.518067)*t+5.210791)*t+0.179635;
		var b = (((((-52.849625*t+164.240914)*t-185.109715)*t+83.567554)*t-10.201125)*t+0.495809)*t+0.026590;
		return 'rgb('+this.clamp(r)+','+this.clamp(g)+','+this.clamp(b)+')';
	},
	BrownCyanTones: function(t) {
		var r = (((((-6.365502*t+15.960065)*t-11.876375)*t+1.603512)*t-1.183118)*t+1.855946)*t+0.335123;
		var g = (((((-2.984370*t+8.249451)*t-8.960632)*t+3.948879)*t-1.791756)*t+1.983214)*t+0.185116;
		var b = (((((-4.970243*t+13.352967)*t-12.714038)*t+3.580400)*t-0.273616)*t+1.703454)*t+0.073467;
		return 'rgb('+this.clamp(r)+','+this.clamp(g)+','+this.clamp(b)+')';
	},
	PigeonTones: function(t) {
		var r = (((((7.647661*t-27.121173)*t+31.856985)*t-14.380514)*t+2.277900)*t+0.507859)*t+0.193688;
		var g = (((((4.913618*t-19.142944)*t+24.612771)*t-12.254593)*t+1.944331)*t+0.745219)*t+0.170473;
		var b = (((((6.689221*t-25.433397)*t+32.278448)*t-15.850256)*t+2.388190)*t+0.700026)*t+0.214917;
		return 'rgb('+this.clamp(r)+','+this.clamp(g)+','+this.clamp(b)+')';
	},
	CherryTones: function(t) {
		var r = (((((4.039087*t-12.567447)*t+13.413731)*t-3.386891)*t-3.694747)*t+3.009556)*t+0.189802;
		var g = (((((-2.214665*t+6.898432)*t-7.764316)*t+3.133193)*t+1.387805)*t-0.655652)*t+0.221340;
		var b = (((((-1.256786*t+4.090281)*t-4.751016)*t+1.619576)*t+1.772079)*t-0.691505)*t+0.222071;
		return 'rgb('+this.clamp(r)+','+this.clamp(g)+','+this.clamp(b)+')';
	},
	RedBlueTones: function(t) {
		var r = (((((-9.897553*t+33.647833)*t-38.366000)*t+17.127763)*t-4.711232)*t+1.903089)*t+0.434132;
		var g = (((((-13.707818*t+35.859381)*t-28.526327)*t+1.849032)*t+4.003657)*t+0.652329)*t+0.157344;
		var b = (((((-4.661057*t+17.186205)*t-23.190435)*t+11.901943)*t-1.892505)*t+0.988597)*t+0.205607;
		return 'rgb('+this.clamp(r)+','+this.clamp(g)+','+this.clamp(b)+')';
	},
	CoffeeTones: function(t) {
		var r = (((((8.127929*t-25.006403)*t+27.976048)*t-13.111802)*t+1.538980)*t+1.054636)*t+0.397858;
		var g = (((((11.632033*t-35.742984)*t+39.226204)*t-17.189254)*t+1.868352)*t+0.888756)*t+0.321446;
		var b = (((((12.956129*t-41.321428)*t+46.680771)*t-19.767908)*t+1.560278)*t+0.640278)*t+0.267592;
		return 'rgb('+this.clamp(r)+','+this.clamp(g)+','+this.clamp(b)+')';
	},
	RustTones: function(t) {
		var r = (((((-26.592200*t+79.557547)*t-86.407730)*t+40.463572)*t-8.206417)*t+2.194393)*t-0.021321;
		var g = (((((-12.624146*t+37.802042)*t-41.156398)*t+19.378630)*t-3.965445)*t+1.035600)*t-0.005218;
		var b = (((((4.126851*t-12.320012)*t+13.345690)*t-6.219981)*t+1.246402)*t-0.334727)*t+0.191608;
		return 'rgb('+this.clamp(r)+','+this.clamp(g)+','+this.clamp(b)+')';
	},
	FuchsiaTones: function(t) {
		var r = (((((4.116040*t-11.518395)*t+11.711884)*t-5.614490)*t+0.929763)*t+1.249812)*t+0.092099;
		var g = (((((13.373851*t-38.595778)*t+38.826420)*t-16.126419)*t+2.973218)*t+0.378597)*t+0.099165;
		var b = (((((6.413797*t-18.470732)*t+19.136541)*t-8.889577)*t+1.599919)*t+1.079930)*t+0.093403;
		return 'rgb('+this.clamp(r)+','+this.clamp(g)+','+this.clamp(b)+')';
	},
	SiennaTones: function(t) {
		var r = (((((6.422362*t-21.619085)*t+28.023627)*t-16.472595)*t+2.890774)*t+1.210428)*t+0.457737;
		var g = (((((2.603240*t-5.570676)*t+3.379285)*t-0.762087)*t+0.384434)*t+0.675612)*t+0.170172;
		var b = (((((-3.421204*t+13.845493)*t-20.748659)*t+13.100916)*t-2.213770)*t+0.179467)*t+0.068112;
		return 'rgb('+this.clamp(r)+','+this.clamp(g)+','+this.clamp(b)+')';
	},
	GrayTones: function(t) {
		var r = (((((9.696142*t-28.533653)*t+29.308397)*t-12.068006)*t+1.881202)*t+0.537588)*t+0.096012;
		var g = (((((8.182887*t-24.257081)*t+25.303515)*t-10.697423)*t+1.632873)*t+0.662199)*t+0.095328;
		var b = (((((7.434519*t-22.184002)*t+23.398558)*t-9.958900)*t+1.272715)*t+0.827617)*t+0.092908;
		return 'rgb('+this.clamp(r)+','+this.clamp(g)+','+this.clamp(b)+')';
	},
	ValentineTones: function(t) {
		var r = (((((5.764634*t-16.703250)*t+17.087102)*t-7.456448)*t+1.354166)*t+0.395494)*t+0.516024;
		var g = (((((1.662099*t-3.943563)*t+2.312529)*t+0.074703)*t+0.446313)*t+0.175848)*t+0.110100;
		var b = (((((3.980856*t-10.824271)*t+9.732643)*t-3.421127)*t+0.969858)*t+0.237756)*t+0.197329;
		return 'rgb('+this.clamp(r)+','+this.clamp(g)+','+this.clamp(b)+')';
	},
	GrayYellowTones: function(t) {
		var r = (((((-0.097609*t+2.178084)*t-4.752535)*t+2.215097)*t+0.544782)*t+0.663330)*t+0.176230;
		var g = (((((0.091989*t+1.346181)*t-3.869021)*t+1.621461)*t+0.678730)*t+0.644886)*t+0.209786;
		var b = (((((1.947821*t-4.884143)*t+3.028903)*t-2.144500)*t+1.311101)*t+0.666643)*t+0.291123;
		return 'rgb('+this.clamp(r)+','+this.clamp(g)+','+this.clamp(b)+')';
	},
	DarkTerrain: function(t) {
		var r = (((((-23.071561*t+67.536225)*t-72.561438)*t+38.458323)*t-12.531675)*t+3.217179)*t-0.031514;
		var g = (((((-30.317605*t+85.295058)*t-86.843182)*t+43.947663)*t-14.791254)*t+3.696191)*t+0.030654;
		var b = (((((-31.019294*t+85.659850)*t-82.869517)*t+36.777025)*t-8.976234)*t+1.007231)*t+0.448579;
		return 'rgb('+this.clamp(r)+','+this.clamp(g)+','+this.clamp(b)+')';
	},
	LightTerrain: function(t) {
		var r = (((((-1.651420*t+5.417972)*t-5.463151)*t+0.039970)*t+2.535528)*t-0.534014)*t+0.552385;
		var g = (((((-2.029634*t+7.660998)*t-9.780219)*t+3.204736)*t+2.338757)*t-1.275535)*t+0.779117;
		var b = (((((-2.211085*t+7.241773)*t-8.601948)*t+2.602875)*t+3.184522)*t-2.177797)*t+0.861109;
		return 'rgb('+this.clamp(r)+','+this.clamp(g)+','+this.clamp(b)+')';
	},
	GreenBrownTerrain: function(t) {
		var r = (((((-0.660063*t+3.241000)*t+0.239267)*t-5.753081)*t+2.653839)*t+1.301418)*t-0.006687;
		var g = (((((-0.044927*t-2.876857)*t+13.384120)*t-14.360170)*t+3.028202)*t+1.902701)*t-0.009759;
		var b = (((((2.385596*t-6.014332)*t+7.320941)*t-0.524493)*t-4.868949)*t+2.750449)*t-0.019675;
		return 'rgb('+this.clamp(r)+','+this.clamp(g)+','+this.clamp(b)+')';
	},
	SandyTerrain: function(t) {
		var r = (((((11.582236*t-25.289019)*t+19.305546)*t-7.660869)*t+0.853719)*t+0.865371)*t+0.649950;
		var g = (((((15.232869*t-48.370602)*t+62.984823)*t-42.291457)*t+12.664391)*t-0.182389)*t+0.326886;
		var b = (((((0.495769*t+1.730916)*t-4.601068)*t+3.013130)*t-1.094847)*t+0.453542)*t+0.200802;
		return 'rgb('+this.clamp(r)+','+this.clamp(g)+','+this.clamp(b)+')';
	},
	BrightBands: function(t) {
		var r = (((((77.650875*t-207.910766)*t+185.551137)*t-56.927532)*t+2.348061)*t-0.656314)*t+0.957174;
		var g = (((((24.247108*t-33.562103)*t-8.516235)*t+28.225093)*t-13.433507)*t+3.733721)*t+0.101177;
		var b = (((((204.678234*t-645.611473)*t+768.622011)*t-415.779713)*t+91.882647)*t-3.555087)*t+0.309299;
		return 'rgb('+this.clamp(r)+','+this.clamp(g)+','+this.clamp(b)+')';
	},
	DarkBands: function(t) {
		var r = (((((-165.680843*t+469.737719)*t-479.484821)*t+207.632921)*t-32.376163)*t+0.424196)*t+0.603694;
		var g = (((((-10.031410*t+25.051378)*t-24.546316)*t+13.530880)*t-3.374079)*t-0.552711)*t+0.811142;
		var b = (((((22.069555*t-71.850529)*t+84.189477)*t-47.450279)*t+16.791384)*t-4.478069)*t+1.043188;
		return 'rgb('+this.clamp(r)+','+this.clamp(g)+','+this.clamp(b)+')';
	},
	Aquamarine: function(t) {
		var r = (((((-0.169793*t-0.686677)*t+2.411877)*t+0.297775)*t-2.838140)*t+0.959899)*t+0.668248;
		var g = (((((-0.637441*t+1.199595)*t-0.363539)*t+1.137181)*t-2.075071)*t+0.753406)*t+0.725285;
		var b = (((((-0.218402*t+0.040181)*t+0.775538)*t+0.448186)*t-1.383193)*t+0.349444)*t+0.843527;
		return 'rgb('+this.clamp(r)+','+this.clamp(g)+','+this.clamp(b)+')';
	},
	Pastel: function(t) {
		var r = (((((20.472478*t-56.236842)*t+56.655630)*t-26.877218)*t+5.501692)*t+0.149051)*t+0.763604;
		var g = (((((-2.471453*t+18.719604)*t-37.040404)*t+28.682613)*t-9.702862)*t+2.072319)*t+0.449123;
		var b = (((((-51.592767*t+156.014818)*t-185.346168)*t+108.333522)*t-29.449861)*t+2.004699)*t+0.918692;
		return 'rgb('+this.clamp(r)+','+this.clamp(g)+','+this.clamp(b)+')';
	},
	BlueGreenYellow: function(t) {
		var r = (((((-2.487209*t+7.229554)*t-7.975121)*t+4.596242)*t-0.295102)*t-0.262868)*t+0.122536;
		var g = (((((1.507596*t-5.442563)*t+7.725828)*t-4.956871)*t+0.401562)*t+1.663430)*t-0.002091;
		var b = (((((1.135207*t-3.998409)*t+5.446333)*t-2.791229)*t-0.667403)*t+0.835818)*t+0.388376;
		return 'rgb('+this.clamp(r)+','+this.clamp(g)+','+this.clamp(b)+')';
	},
	Rainbow: function(t) {
		var r = (((((33.038589*t-100.425221)*t+116.136811)*t-67.842553)*t+23.470346)*t-4.018730)*t+0.498427;
		var g = (((((39.767595*t-128.776104)*t+160.884144)*t-98.285228)*t+27.859936)*t-1.455343)*t+0.123248;
		var b = (((((31.953017*t-102.708635)*t+118.024799)*t-53.054309)*t+3.232700)*t+2.168052)*t+0.513964;
		return 'rgb('+this.clamp(r)+','+this.clamp(g)+','+this.clamp(b)+')';
	},
	DarkRainbow: function(t) {
		var r = (((((5.052752*t+17.940295)*t-62.906984)*t+54.671799)*t-15.888768)*t+1.698409)*t+0.202670;
		var g = (((((55.741830*t-133.942022)*t+112.920656)*t-42.905298)*t+8.487562)*t-0.332495)*t+0.338125;
		var b = (((((-8.166417*t+46.807367)*t-85.946244)*t+66.844005)*t-21.270276)*t+1.417417)*t+0.552708;
		return 'rgb('+this.clamp(r)+','+this.clamp(g)+','+this.clamp(b)+')';
	},
	TemperatureMap: function(t) {
		var r = (((((-4.223371*t+4.502093)*t+11.836295)*t-21.790174)*t+9.769176)*t+0.521465)*t+0.190308;
		var g = (((((9.510784*t-28.358531)*t+33.747474)*t-22.811508)*t+6.799552)*t+0.922202)*t+0.311198;
		var b = (((((-103.525411*t+293.023881)*t-297.805072)*t+130.284782)*t-24.635394)*t+1.858951)*t+0.902008;
		return 'rgb('+this.clamp(r)+','+this.clamp(g)+','+this.clamp(b)+')';
	},
	LightTemperatureMap: function(t) {
		var r = (((((-19.973980*t+65.588130)*t-78.163420)*t+40.225459)*t-9.585910)*t+2.615993)*t+0.137618;
		var g = (((((5.297876*t-15.181455)*t+15.866296)*t-7.081513)*t-1.691684)*t+2.880894)*t+0.263543;
		var b = (((((-25.395674*t+70.814630)*t-67.393997)*t+23.782360)*t-2.725137)*t+0.148411)*t+0.936166;
		return 'rgb('+this.clamp(r)+','+this.clamp(g)+','+this.clamp(b)+')';
	},
};



function LoadColorFunction() {
	var t = document.getElementById("ColorFunction");
	t.innerHTML += ("<option value='_AlpineColors'>AlpineColors</option>");
	t.innerHTML += ("<option value='_LakeColors'>LakeColors</option>");
	t.innerHTML += ("<option value='_ArmyColors'>ArmyColors</option>");
	t.innerHTML += ("<option value='_MintColors'>MintColors</option>");
	t.innerHTML += ("<option value='_AtlanticColors'>AtlanticColors</option>");
	t.innerHTML += ("<option value='_NeonColors'>NeonColors</option>");
	t.innerHTML += ("<option value='_AuroraColors'>AuroraColors</option>");
	t.innerHTML += ("<option value='_PearlColors'>PearlColors</option>");
	t.innerHTML += ("<option value='_AvocadoColors'>AvocadoColors</option>");
	t.innerHTML += ("<option value='_PlumColors'>PlumColors</option>");
	t.innerHTML += ("<option value='_BeachColors'>BeachColors</option>");
	t.innerHTML += ("<option value='_RoseColors'>RoseColors</option>");
	t.innerHTML += ("<option value='_CandyColors'>CandyColors</option>");
	t.innerHTML += ("<option value='_SolarColors'>SolarColors</option>");
	t.innerHTML += ("<option value='_CMYKColors'>CMYKColors</option>");
	t.innerHTML += ("<option value='_SouthwestColors'>SouthwestColors</option>");
	t.innerHTML += ("<option value='_DeepSeaColors'>DeepSeaColors</option>");
	t.innerHTML += ("<option value='_StarryNightColors'>StarryNightColors</option>");
	t.innerHTML += ("<option value='_FallColors'>FallColors</option>");
	t.innerHTML += ("<option value='_SunsetColors'>SunsetColors</option>");
	t.innerHTML += ("<option value='_FruitPunchColors'>FruitPunchColors</option>");
	t.innerHTML += ("<option value='_ThermometerColors'>ThermometerColors</option>");
	t.innerHTML += ("<option value='_IslandColors'>IslandColors</option>");
	t.innerHTML += ("<option value='_WatermelonColors'>WatermelonColors</option>");
	t.innerHTML += ("<option value='_BrassTones'>BrassTones</option>");
	t.innerHTML += ("<option value='_GreenPinkTones'>GreenPinkTones</option>");
	t.innerHTML += ("<option value='_BrownCyanTones'>BrownCyanTones</option>");
	t.innerHTML += ("<option value='_PigeonTones'>PigeonTones</option>");
	t.innerHTML += ("<option value='_CherryTones'>CherryTones</option>");
	t.innerHTML += ("<option value='_RedBlueTones'>RedBlueTones</option>");
	t.innerHTML += ("<option value='_CoffeeTones'>CoffeeTones</option>");
	t.innerHTML += ("<option value='_RustTones'>RustTones</option>");
	t.innerHTML += ("<option value='_FuchsiaTones'>FuchsiaTones</option>");
	t.innerHTML += ("<option value='_SiennaTones'>SiennaTones</option>");
	t.innerHTML += ("<option value='_GrayTones'>GrayTones</option>");
	t.innerHTML += ("<option value='_ValentineTones'>ValentineTones</option>");
	t.innerHTML += ("<option value='_GrayYellowTones'>GrayYellowTones</option>");
	t.innerHTML += ("<option value='_DarkTerrain'>DarkTerrain</option>");
	t.innerHTML += ("<option value='_LightTerrain'>LightTerrain</option>");
	t.innerHTML += ("<option value='_GreenBrownTerrain'>GreenBrownTerrain</option>");
	t.innerHTML += ("<option value='_SandyTerrain'>SandyTerrain</option>");
	t.innerHTML += ("<option value='_BrightBands'>BrightBands</option>");
	t.innerHTML += ("<option value='_DarkBands'>DarkBands</option>");
	t.innerHTML += ("<option value='_Aquamarine'>Aquamarine</option>");
	t.innerHTML += ("<option value='_Pastel'>Pastel</option>");
	t.innerHTML += ("<option value='_BlueGreenYellow'>BlueGreenYellow</option>");
	t.innerHTML += ("<option value='_Rainbow'>Rainbow</option>");
	t.innerHTML += ("<option value='_DarkRainbow'>DarkRainbow</option>");
	t.innerHTML += ("<option value='_TemperatureMap'>TemperatureMap</option>");
	t.innerHTML += ("<option value='_LightTemperatureMap'>LightTemperatureMap</option>");
}


function MtColor(t) {
	switch (colorfv) {
		case "_AlpineColors": return ColorFunction.AlpineColors(t); break;
		case "_LakeColors": return ColorFunction.LakeColors(t); break;
		case "_ArmyColors": return ColorFunction.ArmyColors(t); break;
		case "_MintColors": return ColorFunction.MintColors(t); break;
		case "_AtlanticColors": return ColorFunction.AtlanticColors(t); break;
		case "_NeonColors": return ColorFunction.NeonColors(t); break;
		case "_AuroraColors": return ColorFunction.AuroraColors(t); break;
		case "_PearlColors": return ColorFunction.PearlColors(t); break;
		case "_AvocadoColors": return ColorFunction.AvocadoColors(t); break;
		case "_PlumColors": return ColorFunction.PlumColors(t); break;
		case "_BeachColors": return ColorFunction.BeachColors(t); break;
		case "_RoseColors": return ColorFunction.RoseColors(t); break;
		case "_CandyColors": return ColorFunction.CandyColors(t); break;
		case "_SolarColors": return ColorFunction.SolarColors(t); break;
		case "_CMYKColors": return ColorFunction.CMYKColors(t); break;
		case "_SouthwestColors": return ColorFunction.SouthwestColors(t); break;
		case "_DeepSeaColors": return ColorFunction.DeepSeaColors(t); break;
		case "_StarryNightColors": return ColorFunction.StarryNightColors(t); break;
		case "_FallColors": return ColorFunction.FallColors(t); break;
		case "_SunsetColors": return ColorFunction.SunsetColors(t); break;
		case "_FruitPunchColors": return ColorFunction.FruitPunchColors(t); break;
		case "_ThermometerColors": return ColorFunction.ThermometerColors(t); break;
		case "_IslandColors": return ColorFunction.IslandColors(t); break;
		case "_WatermelonColors": return ColorFunction.WatermelonColors(t); break;
		case "_BrassTones": return ColorFunction.BrassTones(t); break;
		case "_GreenPinkTones": return ColorFunction.GreenPinkTones(t); break;
		case "_BrownCyanTones": return ColorFunction.BrownCyanTones(t); break;
		case "_PigeonTones": return ColorFunction.PigeonTones(t); break;
		case "_CherryTones": return ColorFunction.CherryTones(t); break;
		case "_RedBlueTones": return ColorFunction.RedBlueTones(t); break;
		case "_CoffeeTones": return ColorFunction.CoffeeTones(t); break;
		case "_RustTones": return ColorFunction.RustTones(t); break;
		case "_FuchsiaTones": return ColorFunction.FuchsiaTones(t); break;
		case "_SiennaTones": return ColorFunction.SiennaTones(t); break;
		case "_GrayTones": return ColorFunction.GrayTones(t); break;
		case "_ValentineTones": return ColorFunction.ValentineTones(t); break;
		case "_GrayYellowTones": return ColorFunction.GrayYellowTones(t); break;
		case "_DarkTerrain": return ColorFunction.DarkTerrain(t); break;
		case "_LightTerrain": return ColorFunction.LightTerrain(t); break;
		case "_GreenBrownTerrain": return ColorFunction.GreenBrownTerrain(t); break;
		case "_SandyTerrain": return ColorFunction.SandyTerrain(t); break;
		case "_BrightBands": return ColorFunction.BrightBands(t); break;
		case "_DarkBands": return ColorFunction.DarkBands(t); break;
		case "_Aquamarine": return ColorFunction.Aquamarine(t); break;
		case "_Pastel": return ColorFunction.Pastel(t); break;
		case "_BlueGreenYellow": return ColorFunction.BlueGreenYellow(t); break;
		case "_Rainbow": return ColorFunction.Rainbow(t); break;
		case "_DarkRainbow": return ColorFunction.DarkRainbow(t); break;
		case "_TemperatureMap": return ColorFunction.TemperatureMap(t); break;
		case "_LightTemperatureMap": return ColorFunction.LightTemperatureMap(t); break;
		default: throw "Invalid Color Function \"" + colorfv + "\"";
	}
}


