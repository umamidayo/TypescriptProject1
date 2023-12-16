import { makeHello } from "shared/module";
const Players = game.GetService("Players");

//print(makeHello("main.server.ts"));

Players.PlayerAdded.Connect((player: Player) => {
    print(player.Name + " joined the game!");
});