exports.menu = (comando, prefix, hora, data, pushname) => {
return `
╭─┤🚀 CAOS BOT 🚀├─┤
│❨👤❩ CHAMOU: ${pushname}
│❨🤖❩ BOT: ${botName}
│❨👨‍💻❩ DONO: ${donoName}
│❨⏰❩ HORAS: ${hora}
│❨📅❩ DATA: ${data}
│❨💬❩ PREFIXO: ${prefix}
╰──────────────┤
╭──┤BASICO├──────
│⏤͟͟͞͞🚀${prefix}ddd
│⏤͟͟͞͞🚀${prefix}cep
│⏤͟͟͞͞🚀${prefix}calcular "1+1"
╰──────────────┤
╭──┤CMD DIVERSÃO├──
│⏤͟͟͞͞🎮${prefix}chifre
│⏤͟͟͞͞🎮${prefix}cassino
│⏤͟͟͞͞🎮${prefix}gado
│⏤͟͟͞͞🎮${prefix}ppt
│⏤͟͟͞͞🎮${prefix}sn "pergunta"
│⏤͟͟͞͞🎮${prefix}nazista
│⏤͟͟͞͞🎮${prefix}gostoso
╰──────────────┤
╭──┤CMD ADM├
│⏤͟͟͞͞👑${prefix}menuadm
╰──────────────┤
╭──┤CMD DONO├
│⏤͟͟͞͞👻${prefix}menudono
╰──────────────┤
╭──┤CMD FIGURINHA
│⏤͟͟͞͞🚀${prefix}Figurinha
│⏤͟͟͞͞🚀${prefix}Fig
│⏤͟͟͞͞🚀${prefix}S
╰──────────────┤
╭──┤SUPORTE├──
│⏤͟͟͞͞🛠️${prefix}report "txt"
╰──────────────┤ `
}