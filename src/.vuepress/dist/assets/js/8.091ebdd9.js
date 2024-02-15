(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{176:function(t,a,s){"use strict";s.r(a);var n=s(0),e=Object(n.a)({},(function(){var t=this,a=t._self._c;return a("div",{staticClass:"content"},[t._m(0),t._v(" "),a("p",[t._v("Discord Trivia is a "),a("a",{attrs:{href:"https://discord.js.org",target:"_blank",rel:"noopener noreferrer"}},[t._v("Discord.JS"),a("OutboundLink")],1),t._v(" based library designed to implement fully-fledged trivia/quiz games through your Discord bot. This library enables developers to fetch API questions from +20 categories with support for custom questions, configurable game settings, configurable designs, and a built-in leaderboard system.")]),t._v(" "),t._m(1),t._v(" "),a("p",[t._v("You are currently viewing the preview for Discord Trivia v3. To try it out, clone the v3 branch: "),a("a",{attrs:{href:"https://github.com/Elitezen/discord-trivia/tree/v3",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://github.com/Elitezen/discord-trivia/tree/v3"),a("OutboundLink")],1)]),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),t._m(4),a("p",[t._v("Define your first trivia game with "),a("code",[t._v("manager.createGame(channel)")]),t._v(", where "),a("code",[t._v("channel")]),t._v(" is a "),a("a",{attrs:{href:"https://discord.js.org/docs/packages/discord.js/14.14.1/TextBasedChannel:TypeAlias",target:"_blank",rel:"noopener noreferrer"}},[t._v("TextBasedChannel"),a("OutboundLink")],1),t._v(" from a "),a("a",{attrs:{href:"https://discord.js.org/docs/packages/discord.js/14.14.1/Message:Class",target:"_blank",rel:"noopener noreferrer"}},[t._v("Message"),a("OutboundLink")],1),t._v(", "),a("a",{attrs:{href:"https://discord.js.org/docs/packages/discord.js/14.14.1/CommandInteraction:Class",target:"_blank",rel:"noopener noreferrer"}},[t._v("Command Interaction"),a("OutboundLink")],1),t._v(", or fetched channel.")]),t._v(" "),t._m(5),t._v(" "),t._m(6),t._m(7),t._v(" "),a("p",[t._v("Handle errors that may occur with your game using a "),a("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/try...catch",target:"_blank",rel:"noopener noreferrer"}},[t._v("try...catch"),a("OutboundLink")],1),t._v(" block or "),a("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/catch",target:"_blank",rel:"noopener noreferrer"}},[t._v("then()...catch()"),a("OutboundLink")],1),t._v(" callbacks.")]),t._v(" "),t._m(8),t._m(9),t._v(" "),a("p",[t._v("Your final code will have this general structure:")]),t._v(" "),t._m(10),a("p",[t._v("That's it! Your bot will serve your channel with a complete trivia game experience. For further customization, continue reading to learn how to configure and customize your trivia games to your liking.")])])}),[function(){var t=this._self._c;return t("h1",{attrs:{id:"introduction"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#introduction"}},[this._v("#")]),this._v(" Introduction")])},function(){var t=this._self._c;return t("h2",{attrs:{id:"installation"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#installation"}},[this._v("#")]),this._v(" Installation")])},function(){var t=this._self._c;return t("h2",{attrs:{id:"basic-setup"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#basic-setup"}},[this._v("#")]),this._v(" Basic Setup")])},function(){var t=this._self._c;return t("p",[this._v("Begin by importing "),t("code",[this._v("GameManager")]),this._v(" from the package and assigning it to a variable. Your game manager will be responsible for creating and managing trivia games. You can have multiple trivia games simultaneously, but only one trivia manager.")])},function(){var t=this,a=t._self._c;return a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" GameManager "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'discord-trivia'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" manager "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("GameManager")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])},function(){var t=this._self._c;return t("p",[this._v("To start the game, call "),t("code",[this._v("game.startQueue()")]),this._v(". If your game was created via a command interaction, you can supply the interaction as a parameter to ensure it is replied to.")])},function(){var t=this,a=t._self._c;return a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Message Command")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" game "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" manager"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("createGame")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("message"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("channel"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\ngame"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("startQueue")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Slash Command")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" game "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" manager"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("createGame")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("interaction"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("channel"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Automated interaction reply")]),t._v("\ngame"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("startQueue")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("interaction"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Or use your own interaction.reply()")]),t._v("\ngame"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("startQueue")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" \n\ninteraction"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("reply")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])},function(){var t=this._self._c;return t("h2",{attrs:{id:"error-handling"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#error-handling"}},[this._v("#")]),this._v(" Error Handling")])},function(){var t=this,a=t._self._c;return a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Try...Catch")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("try")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" game"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("startQueue")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("interaction"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("catch")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("err"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("error")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token template-string"}},[a("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("An error occurred: ")]),a("span",{pre:!0,attrs:{class:"token interpolation"}},[a("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("${")]),t._v("err"),a("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("}")])]),a("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Then...Catch")]),t._v("\ngame"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("startQueue")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("interaction"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("catch")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("err")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("error")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token template-string"}},[a("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("An error occurred: ")]),a("span",{pre:!0,attrs:{class:"token interpolation"}},[a("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("${")]),t._v("err"),a("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("}")])]),a("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])},function(){var t=this._self._c;return t("h2",{attrs:{id:"complete-basic-setup"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#complete-basic-setup"}},[this._v("#")]),this._v(" Complete Basic Setup")])},function(){var t=this,a=t._self._c;return a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" GameManager "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'discord-trivia'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" manager "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("GameManager")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// -- Inside your command function --")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" game "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" manager"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("createGame")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("interaction"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("channel"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("try")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" game"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("startQueue")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("interaction"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("catch")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("err"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("error")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token template-string"}},[a("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("An error occurred: ")]),a("span",{pre:!0,attrs:{class:"token interpolation"}},[a("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("${")]),t._v("err"),a("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("}")])]),a("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])}],!1,null,null,null);a.default=e.exports}}]);