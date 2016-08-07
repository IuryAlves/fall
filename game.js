(function(){
    var state = {
        preload: function(){}, 
        create: function(){},
        update: function(){} 
    };

    var game = new Phaser.Game(800, 600, Phaser.AUTO, ''); 
    game.state.add('main', state);
    game.state.start('main');
})();