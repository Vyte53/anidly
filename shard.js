const { ShardingManager } = require('discord.js');

const bumbe = new ShardingManager('./index.js', { //main dosyanızı yazın!
	totalShards: 2, //Auto yazılabilir veya farklı bir sayı yazabilirsiniz.
    token: "NzIyMTIzOTM5NjAxNDQ5MDEx.XuegUw.N1t0pqrnDh5UqTQvL-Nhh2BBkvU" //Tokeninizi giriniz
});
bumbe.spawn();

bumbe.on('shardCreate', shard => {
    console.log(`${shard.id} İDli shard başlatıldı!`);
});