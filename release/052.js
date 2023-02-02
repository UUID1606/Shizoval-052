if (.52 != GM_info.script.version) throw alert("У вас установлена устаревшая версия скрипта!\n\nYou have an outdated version of the script installed!"), window.open("https://raw.githubusercontent.com/sheezzmee/shizoval/main/shizoval.user.js", "_blank").focus(), new Error("stop");
class Utils {
    getRootElement = null;
    getRootObject = null;
    getRenderElement = null;
    getRandomArbitrary = null;
    isNotOpenChat = null;
    isNotKillZone = null;
    isGameReady = null;
    isPlayerEnemy = null;
    getPlayers = null;
    getPlayerById = null;
    getPlayerName = null;
    getBodyById = null;
    getPlayerBody = null;
    saveStates = null;
    getStates = null
}
utilsObjects = {
    rootElement: null,
    rootObject: null
};
class ImGui_Var {
    constructor(e) {
        this.value = e, this.access = (e = this.value) => this.value = e
    }
}
Utils.getRootElement = function() {
    return utilsObjects.rootElement ? utilsObjects.rootElement : document.getElementById("root") ? utilsObjects.rootElement = document.getElementById("root")._reactRootContainer : null
}, Utils.getRootObject = function() {
    if (utilsObjects.rootObject) return utilsObjects.rootObject.store.state.shop.enabled = !0, utilsObjects.rootObject;
    let e = Utils.getRootElement();
    return e && e.hasOwnProperty("_internalRoot") ? utilsObjects.rootObject = e._internalRoot.current.memoizedState.element.type.prototype : null
}, Utils.getRenderElement = function() {
    return document.getElementsByClassName("sc-bwzfXH hjlOfi").item(0)
}, Utils.getRandomArbitrary = function(e, t) {
    return Math.random() * (t - e) + e
}, Utils.isNotOpenChat = function() {
    return null == document.getElementsByClassName("sc-bwzfXH iokmvL").item(0)
}, Utils.isNotKillZone = function(e, t) {
    if (!e) return !1;
    let a = e.entities_0.array_hd7ov6$_0.at(0).components_0.array.at(0).bounds;
    return !!a && ((0 == t.x || !(t.x >= a.maxX || t.x <= a.minX)) && (0 == t.y || !(t.y >= a.maxY || t.y <= a.minY)))
}, Utils.isGameReady = function() {
    let e = Utils.getRootObject();
    if (!e) return !1;
    if (!e.store.state.battleStatistics.battleLoaded) return !1;
    let t = GameObjects.getLocalPlayer();
    return !!t && 0 != t.length
}, Utils.isPlayerEnemy = function(e, t) {
    if (!t || !e) return null;
    if (!t.at(0)) return null;
    let a = t.at(0).team;
    if (!a) return null;
    let i = a.name$;
    return i ? "NONE" == e.at(0).team.name$ || e.at(0).team.name$ != i : null
}, Utils.getPlayers = function(e, t, a = !1) {
    if (!e || !t) return null;
    let i = e.physicsScene_0.bodies_0.toArray();
    if (!i) return null;
    let r = [];
    for (let e = 0; e < i.length; e++) {
        if (!i.at(e)) continue;
        let n = i.at(e).data;
        if (!n) continue;
        let o = n.components_0;
        o && (o = o.array, o && 0 != o.length && (a && 0 == Utils.isPlayerEnemy(t, o) || t != o && r.push(o)))
    }
    return r
}, Utils.getPlayerById = function(e, t, a) {
    if (!e || !t || !a) return null;
    let i = Utils.getPlayers(e, t);
    if (!i) return null;
    if (0 == i.length) return null;
    for (let e = 0; e < i.length; e++)
        for (let t = 0; t < i.at(e).length; t++)
            if (i.at(e).at(t).__proto__.hasOwnProperty("userId") && a == i.at(e).at(t).userId) return i.at(e);
    return null
}, Utils.getPlayerName = function(e) {
    if (!e) return null;
    if (0 == e.length) return null;
    let t;
    for (let a = 0; a < e.length; a++)
        if (e.at(a).hasOwnProperty("configuration_0")) {
            t = e.at(a).configuration_0;
            break
        } return t && t.userName ? t.userName : null
}, Utils.getBodyById = function(e, t, a) {
    if (!e || !t || !a) return null;
    let i = Utils.getPlayerById(e, t, a);
    if (!i) return null;
    for (let e = 0; e < i.length; e++)
        if (i.at(e).__proto__.hasOwnProperty("tankBody_0")) return tankBody_0 = i.at(e).tankBody_0, tankBody_0 || null;
    return null
}, Utils.getPlayerBody = function(e) {
    if (!e) return null;
    for (let t = 0; t < e.length; t++)
        if (e.at(t).__proto__.hasOwnProperty("tankBody_0")) return tankBody_0 = e.at(t).tankBody_0, tankBody_0 || null;
    return null
};
const s = atob("c2hpem92YWw=");
clearCookies = function() {
    Cookies.remove(s)
}, Utils.saveStates = function() {
    if (init) try {
        Cookies.set(s, JSON.stringify({
            airBreak: airBreak,
            boxTeleport: boxTeleport,
            clickerData: clickerData,
            flagTeleportData: flagTeleportData,
            noKnockbackMply: noKnockbackMply,
            otherData: otherData,
            removeMines: removeMines,
            stickData: stickData,
            strikerData: strikerData,
            syncData: syncData,
            espData: espData,
            colorEnemyRGB: colorEnemyRGB,
            colorTeamRGB: colorTeamRGB,
            colorTargetRGB: colorTargetRGB
        }))
    } catch {}
}, Utils.getStates = function() {
    let e = Cookies.get(s);
    e ? (e = JSON.parse(e), airBreak.enabled.value = e.airBreak.enabled.value, airBreak.airWalk.value = e.airBreak.airWalk.value, airBreak.speed.value = e.airBreak.speed.value, airBreak.smooth.value = e.airBreak.smooth.value, boxTeleport.value = e.boxTeleport.value, clickerData.autoSupplies.value = e.clickerData.autoSupplies.value, clickerData.autoMining.value = e.clickerData.autoMining.value, clickerData.autoHealingData.state.value = e.clickerData.autoHealingData.state.value, clickerData.autoHealingData.delay.value = e.clickerData.autoHealingData.delay.value, clickerData.autoHealingData.mply.value = e.clickerData.autoHealingData.mply.value, flagTeleportData.state.value = e.flagTeleportData.state.value, noKnockbackMply.value = e.noKnockbackMply.value, otherData.speedHack.value = e.otherData.speedHack.value, otherData.noCollision.value = e.otherData.noCollision.value, otherData.gravity.value = e.otherData.gravity.value, otherData.rapidUpdateData.delay.value = e.otherData.rapidUpdateData.delay.value, otherData.rapidUpdateData.state.value = e.otherData.rapidUpdateData.state.value, otherData.rapidUpdateData.mply.value = e.otherData.rapidUpdateData.mply.value, removeMines.value = e.removeMines.value, strikerData.aimBot.value = e.strikerData.aimBot.value, strikerData.shellsTeleport.value = e.strikerData.shellsTeleport.value, strikerData.getTargetWithScope.value = e.strikerData.getTargetWithScope.value, syncData.state.value = e.syncData.state.value, syncData.antiMine.value = e.syncData.antiMine.value, syncData.antiMineHeight.value = e.syncData.antiMineHeight.value, syncData.randomTeleport.value = e.syncData.randomTeleport.value, syncData.spinner.value = e.syncData.spinner.value, syncData.antiStrikerHackData.state.value = e.syncData.antiStrikerHackData.state.value, syncData.fakeLagData.state.value = e.syncData.fakeLagData.state.value, syncData.fakeLagData.distance.value = e.syncData.fakeLagData.distance.value, syncData.deSyncData.state.value = e.syncData.deSyncData.state.value, syncData.deSyncData.teleportToRealPosition.value = e.syncData.deSyncData.teleportToRealPosition.value, espData.enabled.value = e.espData.enabled.value, espData.onlyEnemy.value = e.espData.onlyEnemy.value, espData.boxGlow.value = e.espData.boxGlow.value, espData.colorEnemy = e.espData.colorEnemy, espData.colorTarget = e.espData.colorTarget, espData.colorTeam = e.espData.colorTeam, colorEnemyRGB.value = e.colorEnemyRGB.value, colorTeamRGB.value = e.colorTeamRGB.value, colorTargetRGB.value = e.colorTargetRGB.value) : Utils.saveStates()
};
class GameObjects {
    getWorld = null;
    getGameMode = null;
    getGameActions = null;
    getMines = null;
    getFlags = null;
    getLocalPlayer = null;
    getPhysicsComponent = null;
    getHealthComponent = null;
    getCamera = null;
    getTrackedChassis = null;
    getSpeedCharacteristics = null;
    getServerUpdates = null;
    getStrikerComponent = null
}
gameObjects = {
    localPlayer: null,
    world: null,
    gameMode: null,
    gameActions: null,
    mines: null,
    flags: null,
    physicsComponent: null,
    healthComponent: null,
    camera: null,
    trackedChassis: null,
    speedCharacteristics: null,
    serverUpdates: null,
    strikerComponent: null
}, GameObjects.getWorld = function() {
    if (gameObjects.world) return gameObjects.world;
    let e = Utils.getRootObject();
    if (!e) return null;
    let t = e.store.subscribers.toArray();
    if (!t) return null;
    let a = t.find((e => null != e.tank && e.tank.hasOwnProperty("world")));
    return a ? gameObjects.world = a.tank.world : null
}, GameObjects.getGameActions = function() {
    if (gameObjects.gameActions) return Array.from(gameObjects.gameActions);
    let e = GameObjects.getWorld();
    return e ? Array.from(gameObjects.gameActions = e.inputManager.input.gameActions_0.map) : null
}, GameObjects.getGameMode = function() {
    if (gameObjects.gameMode) return gameObjects.gameMode;
    let e = GameObjects.getWorld();
    return e ? gameObjects.gameMode = e.entities_0.toArray().at(0).components_0.array : null
}, GameObjects.getMines = function() {
    if (gameObjects.mines) return gameObjects.mines;
    if (!GameObjects.getLocalPlayer()) return null;
    let e = GameObjects.getGameMode();
    return e ? gameObjects.mines = e.at(16) : null
}, GameObjects.getFlags = function() {
    if (gameObjects.flags) return gameObjects.flags;
    let e = GameObjects.getGameMode();
    if (!e) return null;
    for (let t = 0; t < e.length; t++)
        if (e.at(t).hasOwnProperty("flags_0") && e.at(t).flags_0.internalMap_uxhen5$_0) return gameObjects.flags = e.at(t).flags_0.internalMap_uxhen5$_0.backingMap_0;
    return null
}, GameObjects.getLocalPlayer = function() {
    if (gameObjects.localPlayer) return gameObjects.localPlayer;
    let e = GameObjects.getWorld();
    if (!e) return null;
    let t = e.physicsScene_0.bodies_0.toArray();
    for (let e = 0; e < t.length; e++)
        if (1 == t.at(e).data.isPossessed) return gameObjects.localPlayer = t.at(e).data.components_0.array;
    return null
}, GameObjects.getPhysicsComponent = function() {
    if (gameObjects.physicsComponent) return gameObjects.physicsComponent;
    let e = GameObjects.getLocalPlayer();
    if (!e) return null;
    for (let t = 0; t < e.length; t++)
        if (e.at(t).__proto__.hasOwnProperty("tankPhysicsComponent_0")) return gameObjects.physicsComponent = e.at(t).tankPhysicsComponent_0;
    return null
}, GameObjects.getHealthComponent = function() {
    if (gameObjects.healthComponent) return gameObjects.healthComponent;
    let e = GameObjects.getLocalPlayer();
    if (!e) return null;
    for (let t = 0; t < e.length; t++)
        if (e.at(t).__proto__.hasOwnProperty("health")) return gameObjects.healthComponent = e.at(t);
    return null
}, GameObjects.getCamera = function() {
    if (gameObjects.camera) return gameObjects.camera;
    let e = GameObjects.getLocalPlayer();
    if (!e) return null;
    for (let t = 0; t < e.length; t++)
        if (e.at(t).__proto__.hasOwnProperty("followCamera_0")) return gameObjects.camera = e.at(t).followCamera_0.currState_0;
    return null
}, GameObjects.getTrackedChassis = function() {
    if (gameObjects.trackedChassis) return gameObjects.trackedChassis;
    let e = GameObjects.getLocalPlayer();
    if (!e) return null;
    for (let t = 0; t < e.length; t++)
        if (e.at(t).__proto__.hasOwnProperty("trackedChassis_0")) return gameObjects.trackedChassis = e.at(t).trackedChassis_0.params_0;
    return null
}, GameObjects.getSpeedCharacteristics = function() {
    if (gameObjects.speedCharacteristics) return gameObjects.speedCharacteristics;
    let e = GameObjects.getLocalPlayer();
    if (!e) return null;
    for (let t = 0; t < e.length; t++)
        if (e.at(t).__proto__.hasOwnProperty("speedCharacteristics_0") && e.at(t).__proto__.hasOwnProperty("maxSpeedSmoother_0")) return gameObjects.speedCharacteristics = e.at(t);
    return null
}, GameObjects.getServerUpdates = function() {
    if (gameObjects.serverUpdates) return gameObjects.serverUpdates;
    let e = GameObjects.getLocalPlayer();
    if (!e) return null;
    for (let t = 0; t < e.length; t++)
        if (e.at(t).hasOwnProperty("needImmediateUpdate_0")) return gameObjects.serverUpdates = e.at(t);
    return null
}, GameObjects.getStrikerComponent = function() {
    if (gameObjects.strikerComponent) return gameObjects.strikerComponent;
    let e = GameObjects.getLocalPlayer();
    if (!e) return null;
    for (let t = 0; t < e.length; t++) {
        if (e.at(t).__proto__.hasOwnProperty("strikerWeapon_0")) return strikerData.type = "striker", gameObjects.strikerComponent = e.at(t).strikerWeapon_0;
        if (e.at(t).hasOwnProperty("scorpioData_7x2wz0$_0")) return strikerData.type = "scorpion", gameObjects.strikerComponent = e.at(t)
    }
    return null
};
class AirBreak {
    process = null
}
airBreak = {
    enabled: new ImGui_Var(!0),
    isShiftPressed: !1,
    state: !1,
    airWalk: new ImGui_Var(!1),
    speed: new ImGui_Var(70),
    position: {
        x: 0,
        y: 0,
        z: 0
    },
    smooth: new ImGui_Var(2)
};
let startSpeed = {
    forward: 0,
    right: 0,
    up: 0
};
document.addEventListener("keyup", (e => {
    16 == e.keyCode && 2 == e.location && Utils.isGameReady() && Utils.isNotOpenChat() && (airBreak.isShiftPressed = !0)
})), AirBreak.process = function(e) {
    if (!airBreak.enabled.value) return;
    if (!e) return;
    let t = GameObjects.getWorld();
    if (!t) return;
    let a = GameObjects.getPhysicsComponent();
    if (!a) return;
    let i = GameObjects.getTrackedChassis(),
        r = GameObjects.getCamera();
    if (!r) return;
    let n = t.physicsScene_0.bodies_0.array_hd7ov6$_0;
    if (!n) return;
    if (!airBreak.state.value && i && (i.maxRayLength = 50, i.dampingCoeff = 2e3, i.springCoeff = 16e3), airBreak.isShiftPressed)
        if (airBreak.isShiftPressed = !1, airBreak.state = !airBreak.state, startSpeed = {
                forward: 0,
                right: 0,
                up: 0
            }, airBreak.state) airBreak.position.x = a.body.state.position.x, airBreak.position.y = a.body.state.position.y, airBreak.position.z = a.body.state.position.z;
        else {
            a.body.movable = !0, a.body.state.velocity.x = 0, a.body.state.velocity.y = 0, a.body.state.velocity.z = 0, a.body.state.angularVelocity.x = 0, a.body.state.angularVelocity.y = 0, a.body.state.angularVelocity.z = 0;
            for (let e = 0; e < n.length; e++) n.at(e).state.velocity.x = 0, n.at(e).state.velocity.y = 0, n.at(e).state.velocity.z = 0, n.at(e).state.angularVelocity.x = 0, n.at(e).state.angularVelocity.y = 0, n.at(e).state.angularVelocity.z = 0, n.at(e).movable = !0
        } if (!airBreak.state) return;
    let o = t.physicsScene_0.dt * airBreak.smooth.value,
        s = r.direction;
    if (!airBreak.airWalk.value) {
        if (KeyPressing.isKeyPressed(87) && Utils.isNotOpenChat()) {
            startSpeed.forward += (airBreak.speed.value - startSpeed.forward) * o;
            let e = {
                x: airBreak.position.x + startSpeed.forward * Math.sin(-s),
                y: airBreak.position.y + startSpeed.forward * Math.cos(-s),
                z: 0
            };
            Utils.isNotKillZone(t, e) && (airBreak.position.x = e.x, airBreak.position.y = e.y)
        } else if (startSpeed.forward > 0) {
            startSpeed.forward += (0 - startSpeed.forward) * (1.3 * o);
            let e = {
                x: airBreak.position.x + startSpeed.forward * Math.sin(-s),
                y: airBreak.position.y + startSpeed.forward * Math.cos(-s),
                z: 0
            };
            Utils.isNotKillZone(t, e) && (airBreak.position.x = e.x, airBreak.position.y = e.y)
        }
        if (KeyPressing.isKeyPressed(83) && Utils.isNotOpenChat()) {
            startSpeed.forward -= (airBreak.speed.value - -startSpeed.forward) * o;
            let e = {
                x: airBreak.position.x + startSpeed.forward * Math.sin(-s),
                y: airBreak.position.y + startSpeed.forward * Math.cos(-s),
                z: 0
            };
            Utils.isNotKillZone(t, e) && (airBreak.position.x = e.x, airBreak.position.y = e.y)
        } else if (startSpeed.forward < 0) {
            startSpeed.forward -= (0 - -startSpeed.forward) * (1.3 * o);
            let e = {
                x: airBreak.position.x + startSpeed.forward * Math.sin(-s),
                y: airBreak.position.y + startSpeed.forward * Math.cos(-s),
                z: 0
            };
            Utils.isNotKillZone(t, e) && (airBreak.position.x = e.x, airBreak.position.y = e.y)
        }
        if (KeyPressing.isKeyPressed(65) && Utils.isNotOpenChat()) {
            startSpeed.right -= (airBreak.speed.value - -startSpeed.right) * o;
            let e = {
                x: airBreak.position.x + startSpeed.right * Math.sin(-(s - Math.PI / 2)),
                y: airBreak.position.y + startSpeed.right * Math.cos(-(s - Math.PI / 2)),
                z: 0
            };
            Utils.isNotKillZone(t, e) && (airBreak.position.x = e.x, airBreak.position.y = e.y)
        } else if (startSpeed.right < 0) {
            startSpeed.right -= (0 - -startSpeed.right) * (1.3 * o);
            let e = {
                x: airBreak.position.x + startSpeed.right * Math.sin(-(s - Math.PI / 2)),
                y: airBreak.position.y + startSpeed.right * Math.cos(-(s - Math.PI / 2)),
                z: 0
            };
            Utils.isNotKillZone(t, e) && (airBreak.position.x = e.x, airBreak.position.y = e.y)
        }
        if (KeyPressing.isKeyPressed(68) && Utils.isNotOpenChat()) {
            startSpeed.right += (airBreak.speed.value - startSpeed.right) * o;
            let e = {
                x: airBreak.position.x + startSpeed.right * Math.sin(-(s - Math.PI / 2)),
                y: airBreak.position.y + startSpeed.right * Math.cos(-(s - Math.PI / 2)),
                z: 0
            };
            Utils.isNotKillZone(t, e) && (airBreak.position.x = e.x, airBreak.position.y = e.y)
        } else if (startSpeed.right > 0) {
            startSpeed.right += (0 - startSpeed.right) * (1.3 * o);
            let e = {
                x: airBreak.position.x + startSpeed.right * Math.sin(-(s - Math.PI / 2)),
                y: airBreak.position.y + startSpeed.right * Math.cos(-(s - Math.PI / 2)),
                z: 0
            };
            Utils.isNotKillZone(t, e) && (airBreak.position.x = e.x, airBreak.position.y = e.y)
        }
    }
    if (KeyPressing.isKeyPressed(81) && Utils.isNotOpenChat() ? (startSpeed.up += (airBreak.speed.value - startSpeed.up) * o, airBreak.position.z += startSpeed.up) : startSpeed.up > 0 && (startSpeed.up += (0 - startSpeed.up) * (1.3 * o), airBreak.position.z += startSpeed.up), KeyPressing.isKeyPressed(69) && Utils.isNotOpenChat() ? (startSpeed.up -= (airBreak.speed.value - -startSpeed.up) * o, airBreak.position.z += startSpeed.up) : startSpeed.up < 0 && (startSpeed.up -= (0 - -startSpeed.up) * (1.3 * o), airBreak.position.z += startSpeed.up), airBreak.airWalk.value) {
        for (let e = 0; e < n.length; e++) n.at(e).movable = !0;
        i && (i.maxRayLength = 1e100, i.dampingCoeff = 0, i.springCoeff = 0)
    } else {
        for (let e = 0; e < n.length; e++) n.at(e).state.velocity.x = 0, n.at(e).state.velocity.y = 0, n.at(e).state.velocity.z = 0, n.at(e).state.angularVelocity.x = 0, n.at(e).state.angularVelocity.y = 0, n.at(e).state.angularVelocity.z = 0, n.at(e).movable = !1;
        a.body.state.position.x = airBreak.position.x, a.body.state.position.y = airBreak.position.y, a.body.state.velocity.x = 0, a.body.state.velocity.y = 0, a.body.state.angularVelocity.z = 0, syncData.deSyncData.state.value && syncData.deSyncData.teleportToRealPosition.value ? (a.body.state.orientation.w = syncData.deSyncData.orientation.w, a.body.state.orientation.z = syncData.deSyncData.orientation.z) : (a.body.state.orientation.w = Math.sin(-(r.direction - Math.PI) / 2), a.body.state.orientation.z = Math.cos(-(r.direction - Math.PI) / 2))
    }
    a.body.state.position.z = airBreak.position.z, a.body.state.angularVelocity.x = 0, a.body.state.angularVelocity.y = 0, a.body.state.velocity.z = 0, a.body.state.orientation.x = 0, a.body.state.orientation.y = 0
};
class Clicker {
    process = null
}
clickerData = {
    autoMining: new ImGui_Var(!1),
    autoSupplies: new ImGui_Var(!1),
    autoHealingData: {
        delay: new ImGui_Var(0),
        timeout: null,
        state: new ImGui_Var(!1),
        mply: new ImGui_Var(1),
        supplyData: {
            firstAID: null,
            mine: null
        }
    }
}, Clicker.process = function(e) {
    if (!clickerData.autoSupplies.value && !clickerData.autoMining.value && !clickerData.autoHealingData.state.value) return;
    if (KeyPressing.isKeyPressed(pingKey) && Utils.isNotOpenChat()) return;
    if (!e) return;
    let t = GameObjects.getGameActions();
    if (t) {
        if (!clickerData.autoHealingData.supplyData.firstAID || !clickerData.autoHealingData.supplyData.mine)
            for (let t = 0; t < e.length; t++)
                if (e.at(t).hasOwnProperty("supplyTypeConfigs_0")) {
                    let a = e.at(t).supplyTypeConfigs_0.map_97q5dv$_0.internalMap_uxhen5$_0.backingMap_0;
                    for (let e in a) "FIRST_AID" == a[e].key_5xhq3d$_0.name$ && (clickerData.autoHealingData.supplyData.firstAID = a[e]._value_0._value_0), "MINE" == a[e].key_5xhq3d$_0.name$ && (clickerData.autoHealingData.supplyData.mine = a[e]._value_0._value_0);
                    break
                } if (clickerData.autoSupplies.value && (t.at(6).at(1).wasPressed = !0, t.at(6).at(1).wasReleased = !0, t.at(7).at(1).wasPressed = !0, t.at(7).at(1).wasReleased = !0, t.at(8).at(1).wasPressed = !0, t.at(8).at(1).wasReleased = !0), clickerData.autoMining.value && (t.at(9).at(1).wasPressed = !0, t.at(9).at(1).wasReleased = !0), clickerData.autoHealingData.state.value && clickerData.autoHealingData.supplyData.firstAID && clickerData.autoHealingData.supplyData.mine)
            if (0 === clickerData.autoHealingData.delay.value)
                for (let e = 0; e < clickerData.autoHealingData.mply.value; e++) clickerData.autoHealingData.supplyData.firstAID.onUserActivatedSupply(), clickerData.autoHealingData.supplyData.mine.onUserActivatedSupply();
            else clickerData.autoHealingData.timeout || (clickerData.autoHealingData.timeout = setTimeout((() => {
                for (let e = 0; e < clickerData.autoHealingData.mply.value; e++) clickerData.autoHealingData.supplyData.firstAID.onUserActivatedSupply(), clickerData.autoHealingData.supplyData.mine.onUserActivatedSupply();
                clickerData.autoHealingData.timeout = null
            }), clickerData.autoHealingData.delay.value))
    }
};
class FlagTeleport {
    process = null
}
flagTeleportData = {
    state: new ImGui_Var(!1),
    cooldown: !0
}, FlagTeleport.process = function(e) {
    if (!flagTeleportData.state.value) return;
    if (!e) return;
    let t = GameObjects.getWorld();
    if (!t) return;
    let a = GameObjects.getFlags();
    if (!a) return;
    let i = GameObjects.getPhysicsComponent();
    if (!i) return;
    let r = GameObjects.getServerUpdates();
    if (r && flagTeleportData.cooldown) {
        let n, o;
        if (a[0].value.teamType.name != e.at(0).team.name ? (o = a[0].value, n = a[1].value) : (o = a[1].value, n = a[0].value), "AT_BASE" == n.state.name && "CARRIED" != o.state.name) {
            flagTeleportData.cooldown = !1;
            let e = o.interpolatedStatus_o5md0j$_0.position,
                a = n.interpolatedStatus_o5md0j$_0.position,
                s = i.getInterpolatedBodyState();
            return s.position.x = e.x, s.position.y = e.y, s.position.z = e.z, r.sendUpdate_0(s, t.physicsTime), s.position.x = a.x, s.position.y = a.y, s.position.z = a.z, r.sendUpdate_0(s, t.physicsTime), void setTimeout((() => {
                flagTeleportData.cooldown = !0
            }), 5e3)
        }
    }
};
class BoxTeleport {
    process = null
}
let boxTeleport = new ImGui_Var(!1);
BoxTeleport.process = function(e) {
    if (!boxTeleport.value) return;
    if (!e) return;
    let t = GameObjects.getWorld();
    if (!t) return;
    let a = GameObjects.getPhysicsComponent();
    if (!a) return;
    let i = GameObjects.getCamera();
    if (!i) return;
    let r = t.triggers_0.triggers_0.array;
    if (r && 0 != r.length)
        for (let e = 0; e < r.length; e++)
            if (r.at(e).enabled) {
                let t = r.at(e).bonus_0;
                if (!t) continue;
                if (!t.hasOwnProperty("_bonusMesh_0")) continue;
                if (t = t._bonusMesh_0.object3d.aabb, !t) continue;
                a.body.state.position.x = t.center.x, a.body.state.position.y = t.center.y, a.body.state.position.z = t.maxZ, a.body.state.orientation.w = Math.sin(-(i.direction - Math.PI) / 2), a.body.state.orientation.z = Math.cos(-(i.direction - Math.PI) / 2), a.body.state.orientation.x = 0, a.body.state.orientation.y = 0, a.body.state.angularVelocity.x = 0, a.body.state.angularVelocity.y = 0, a.body.state.angularVelocity.z = 0, a.body.state.velocity.x = 0, a.body.state.velocity.y = 0, a.body.state.velocity.z = 0
            }
};
class NoKnockback {
    init = null
}
noKnockbackMply = new ImGui_Var(1), NoKnockback.init = function(e) {
    if (!e) return;
    let t = GameObjects.getPhysicsComponent();
    t && (t.body.addWorldForce_f5o1bj$ = function(e, t, a) {
        var i = (a *= noKnockbackMply.value) * t.x,
            r = a * t.y,
            n = a * t.z;
        this.forceAccum_0.x = this.forceAccum_0.x + i, this.forceAccum_0.y = this.forceAccum_0.y + r, this.forceAccum_0.z = this.forceAccum_0.z + n;
        var o = this.state.position,
            s = e.x - o.x,
            l = e.y - o.y,
            u = e.z - o.z;
        this.torqueAccum_0.x = this.torqueAccum_0.x + (l * n - u * r), this.torqueAccum_0.y = this.torqueAccum_0.y + (u * i - s * n), this.torqueAccum_0.z = this.torqueAccum_0.z + (s * r - l * i)
    })
};
class Sync {
    init = null
}

function calculateDistance(e, t) {
    var a = t.x - e.x,
        i = t.y - e.y,
        r = t.z - e.z;
    return Math.sqrt(a * a + i * i + r * r)
}

function getDeSyncState(e) {
    syncData.deSyncData.position.x = e.position.x, syncData.deSyncData.position.y = e.position.y, syncData.deSyncData.position.z = e.position.z, syncData.deSyncData.orientation.w = e.orientation.w, syncData.deSyncData.orientation.x = e.orientation.x, syncData.deSyncData.orientation.y = e.orientation.y, syncData.deSyncData.orientation.z = e.orientation.z
}
syncData = {
    state: new ImGui_Var(!1),
    antiMine: new ImGui_Var(!0),
    antiMineHeight: new ImGui_Var(60),
    randomTeleport: new ImGui_Var(!1),
    spinner: new ImGui_Var(!1),
    antiStrikerHackData: {
        state: new ImGui_Var(!0),
        process: null,
        randomTeleport: !1
    },
    fakeLagData: {
        state: new ImGui_Var(!1),
        process: null,
        temp: !1,
        position: {
            x: 0,
            y: 0,
            z: 0
        },
        distance: new ImGui_Var(300)
    },
    deSyncData: {
        state: new ImGui_Var(!1),
        temp: !1,
        orientation: {
            w: 0,
            x: 0,
            y: 0,
            z: 0
        },
        position: {
            x: 0,
            y: 0,
            z: 0
        },
        teleportToRealPosition: new ImGui_Var(!1)
    }
}, Sync.init = function(e) {
    if (!e) return;
    let t = GameObjects.getWorld();
    if (!t) return;
    let a = GameObjects.getPhysicsComponent();
    if (!a) return;
    let i = GameObjects.getServerUpdates();
    i && (i.sendState_0 = function(e) {
        if (!KeyPressing.isKeyPressed(pingKey) || !Utils.isNotOpenChat()) {
            if (KeyPressing.isKeyPressed(46) && Utils.isNotOpenChat()) return e.position.z = 99999, void this.sendUpdate_0(e, this.world.physicsTime);
            if (syncData.state.value) {
                if (syncData.spinner.value && (e.orientation.w = Utils.getRandomArbitrary(-1, 1), e.orientation.x = Utils.getRandomArbitrary(-1, 1), e.orientation.y = Utils.getRandomArbitrary(-1, 1), e.orientation.z = Utils.getRandomArbitrary(-1, 1)), syncData.antiMine.value && (e.position.z += syncData.antiMineHeight.value), 1 == syncData.fakeLagData.process(this, e, a)) return;
                if (1 == syncData.deSyncData.process(this, e, a)) return;
                if (syncData.antiStrikerHackData.process(this, e), syncData.randomTeleport.value) {
                    let a = t.entities_0.toArray().at(0).components_0.array.at(0).bounds;
                    for (let t = 0; t < 2; t++) e.position.x = Utils.getRandomArbitrary(a.minX, a.maxX), e.position.y = Utils.getRandomArbitrary(a.minY, a.maxY), e.position.z = Utils.getRandomArbitrary(a.maxZ + 60, a.maxZ + 1900), this.sendUpdate_0(e, this.world.physicsTime);
                    return
                }
            }
            this.sendUpdate_0(e, this.world.physicsTime)
        }
    })
}, syncData.antiStrikerHackData.process = function(e, t) {
    if (!syncData.antiStrikerHackData.state.value) return void(syncData.antiStrikerHackData.randomTeleport = !1);
    let a = GameObjects.getLocalPlayer();
    if (!a) return;
    let i = GameObjects.getWorld();
    if (!i) return;
    if (syncData.antiStrikerHackData.randomTeleport) {
        let a = i.entities_0.toArray().at(0).components_0.array.at(0).bounds;
        t.position.x = Utils.getRandomArbitrary(a.minX, a.maxX), t.position.y = Utils.getRandomArbitrary(a.minY, a.maxY), t.position.z = Utils.getRandomArbitrary(a.maxZ + 60, a.maxZ + 2e3), e.sendUpdate_0(t, i.physicsTime), t.position.x = Utils.getRandomArbitrary(a.minX, a.maxX), t.position.y = Utils.getRandomArbitrary(a.minY, a.maxY), t.position.z = Utils.getRandomArbitrary(a.maxZ + 200, a.maxZ + 2e3)
    }
    let r = Utils.getPlayers(i, a);
    if (r && 0 != r.length)
        for (let e = 0; e < r.length; e++)
            for (let t = 0; t < r.at(e).length; t++) {
                let a, i;
                if (r.at(e).at(t).hasOwnProperty("shellCache_0") && (i = r.at(e).at(t), i.rocketLauncherCC_0 && 8 == i.rocketLauncherCC_0.salvoSize && (a = r.at(e).at(t).shellCache_0.itemsInUse.toArray(), r.at(e).at(t).tempTimeout || (r.at(e).at(t).tempTimeout = null), r.at(e).at(t).tempState || (r.at(e).at(t).tempState = !1), 1 != r.at(e).at(t).tempState))) {
                    for (let e = 0; e < a.length; e++) a.at(e).components_0.array.at(1).direction.x = 0, a.at(e).components_0.array.at(1).direction.y = 0, a.at(e).components_0.array.at(1).direction.z = 0;
                    null == r.at(e).at(t).tempTimeout && 8 == a.length && (r.at(e).at(t).tempTimeout = setTimeout((() => {
                        r.at(e).at(t).tempState = syncData.antiStrikerHackData.randomTeleport = !0, setTimeout((() => {
                            syncData.antiStrikerHackData.randomTeleport = !1, r.at(e).at(t).tempTimeout = null, r.at(e).at(t).tempState = !0
                        }), 500), setTimeout((() => {
                            r.at(e).at(t).tempState = !1
                        }), 1e3)
                    }), 1600));
                    break
                }
            }
}, syncData.fakeLagData.process = function(e, t, a) {
    if (syncData.fakeLagData.temp && !syncData.fakeLagData.state.value) return syncData.fakeLagData.temp = !1, syncData.fakeLagData.position.x = t.position.x, syncData.fakeLagData.position.y = t.position.y, syncData.fakeLagData.position.z = t.position.z, e.sendUpdate_0(t, e.world.physicsTime), !0;
    if (!syncData.fakeLagData.temp && syncData.fakeLagData.state.value) return syncData.fakeLagData.temp = !0, syncData.fakeLagData.position.x = t.position.x, syncData.fakeLagData.position.y = t.position.y, syncData.fakeLagData.position.z = t.position.z, e.sendUpdate_0(t, e.world.physicsTime), !0;
    if (syncData.fakeLagData.state.value) {
        let i = calculateDistance(syncData.fakeLagData.position, a.body.state.position);
        return t.velocity.z += 1 / 0, !(i >= syncData.fakeLagData.distance.value) || (syncData.fakeLagData.position.x = t.position.x, syncData.fakeLagData.position.y = t.position.y, syncData.fakeLagData.position.z = t.position.z, e.sendUpdate_0(t, e.world.physicsTime), !0)
    }
    return !1
}, syncData.deSyncData.process = function(e, t, a) {
    return syncData.deSyncData.temp && !syncData.deSyncData.state.value ? (syncData.deSyncData.temp = !1, getDeSyncState(t), e.sendUpdate_0(t, e.world.physicsTime), !0) : !syncData.deSyncData.temp && syncData.deSyncData.state.value ? (syncData.deSyncData.temp = !0, getDeSyncState(t), e.sendUpdate_0(t, e.world.physicsTime), !0) : !!syncData.deSyncData.state.value && (syncData.deSyncData.teleportToRealPosition.value && !airBreak.state && (a.body.state.position.x = syncData.deSyncData.position.x, a.body.state.position.y = syncData.deSyncData.position.y, a.body.state.position.z = syncData.deSyncData.position.z, a.body.state.orientation.w = syncData.deSyncData.orientation.w, a.body.state.orientation.x = syncData.deSyncData.orientation.x, a.body.state.orientation.y = syncData.deSyncData.orientation.y, a.body.state.orientation.z = syncData.deSyncData.orientation.z, a.body.state.angularVelocity.x = 0, a.body.state.angularVelocity.y = 0, a.body.state.angularVelocity.z = 0, a.body.state.velocity.x = 0, a.body.state.velocity.y = 0, a.body.state.velocity.z = 0), !0)
};
class Stick {
    process = null
}
stickData = {
    state: new ImGui_Var(!1),
    temp: !1,
    target: null
}, Stick.process = function(e) {
    if (!stickData.state.value && 0 == stickData.temp) return;
    if (!e) return;
    if (!GameObjects.getWorld()) return;
    let t = GameObjects.getPhysicsComponent();
    if (t && GameObjects.getCamera() && stickData.target) {
        if (!stickData.state.value && 1 == stickData.temp) return stickData.temp = !1, t.body.state.velocity.x = 0, t.body.state.velocity.y = 0, void(t.body.state.velocity.z = 0);
        stickData.temp = !0, t.body.state.position.x = stickData.target.state.position.x, t.body.state.position.y = stickData.target.state.position.y, t.body.state.position.z = stickData.target.state.position.z, t.body.state.orientation.w = stickData.target.state.orientation.w, t.body.state.orientation.z = stickData.target.state.orientation.z, t.body.state.orientation.x = stickData.target.state.orientation.x, t.body.state.orientation.y = stickData.target.state.orientation.y, t.body.state.angularVelocity.x = 0, t.body.state.angularVelocity.y = 0, t.body.state.angularVelocity.z = 0, t.body.state.velocity.x = 0, t.body.state.velocity.y = 0, t.body.state.velocity.z = 1e5
    }
};
class Other {
    process = null
}
otherData = {
    gravity: new ImGui_Var(-1e3),
    noCollision: new ImGui_Var(!1),
    speedHack: new ImGui_Var(!1),
    rapidUpdateData: {
        delay: new ImGui_Var(0),
        timeout: null,
        state: new ImGui_Var(!0),
        mply: new ImGui_Var(1)
    }
}, Other.process = function(e) {
    if (!e) return;
    let t = GameObjects.getWorld();
    if (!t) return;
    let a = GameObjects.getPhysicsComponent();
    if (!a) return;
    let i = GameObjects.getSpeedCharacteristics();
    if (!i) return;
    let r = i.maxSpeedSmoother_0;
    if (!r) return;
    let n = GameObjects.getServerUpdates();
    if (n && (otherData.speedHack.value ? r.currentValue = 1e100 : r.currentValue = r.targetValue, t.physicsScene_0.gravity.z = otherData.gravity.value, otherData.noCollision.value ? a.tankCollisionBox.collisionMask = 76 : a.tankCollisionBox.collisionMask = 75, (!KeyPressing.isKeyPressed(pingKey) || !Utils.isNotOpenChat()) && otherData.rapidUpdateData.state.value))
        if (0 === otherData.rapidUpdateData.delay.value)
            for (let e = 0; e < otherData.rapidUpdateData.mply.value; e++) n.sendState_0(a.getInterpolatedBodyState());
        else otherData.rapidUpdateData.timeout || (otherData.rapidUpdateData.timeout = setTimeout((() => {
            for (let e = 0; e < otherData.rapidUpdateData.mply.value; e++) n.sendState_0(a.getInterpolatedBodyState());
            otherData.rapidUpdateData.timeout = null
        }), otherData.rapidUpdateData.delay.value))
};
class RemoveMines {
    process = null
}
let removeMines = new ImGui_Var(!0);
RemoveMines.process = function(e) {
    if (!removeMines.value) return;
    if (!e) return;
    let t = GameObjects.getMines();
    var a;
    if (t)
        for (a = t.minesByUser_0.keys.iterator(); a.hasNext();) {
            var i = a.next();
            t.removeAllMines_0(i)
        }
};
class Striker {
    init = null;
    process = null
}
strikerData = {
    aimBot: new ImGui_Var(!0),
    shellsTeleport: new ImGui_Var(!0),
    state: !1,
    salvoRocketsCount: 8,
    shellsTimeout: null,
    type: "striker",
    shellCache: null,
    getTargetWithScope: new ImGui_Var(!0)
}, Striker.init = function(e) {
    if (!e) return;
    if (!GameObjects.getWorld()) return;
    let t = GameObjects.getStrikerComponent();
    if (t) {
        if ("striker" == strikerData.type) {
            if (strikerData.salvoRocketsCount = t.salvoRocketsCount, t.targetingSystem_0 && t.targetingSystem_0.targetingSystem_vutpoz$_0) {
                let e = t.targetingSystem_0.targetingSystem_vutpoz$_0;
                if (e.directionCalculator_0 && e.directionCalculator_0.targetingSectorsCalculator_0) {
                    let t = e.directionCalculator_0.targetingSectorsCalculator_0;
                    t.maxElevationAngle_0 = 1e5, t.minElevationAngle_0 = -1e5
                }
            }
        } else strikerData.salvoRocketsCount = t.scorpioData_0.secondarySalvoSize;
        t.lockTarget_gcez93$ = function(e, t, a) {
            return strikerData.aimBot.value ? (strikerData.getTargetWithScope.value ? targetId = t : e.targetId = targetId, this.lockTarget_gcez93$$default(e, targetId), !0) : (void 0 === t && (t = null), a ? a(e, t) : this.lockTarget_gcez93$$default(e, t))
        };
        for (let t = 0; t < e.length; t++)
            if (e.at(t).hasOwnProperty("shellCache_0")) {
                strikerData.shellCache = e.at(t).shellCache_0.itemsInUse.array_hd7ov6$_0;
                break
            }
    }
}, Striker.process = function(e) {
    if (!e) return;
    let t = GameObjects.getWorld();
    if (!t) return;
    if (!GameObjects.getStrikerComponent()) return;
    if (!strikerData.shellCache) return;
    if (!strikerData.shellsTeleport.value) return;
    if (!targetId) return;
    KeyPressing.isKeyPressed(82) && Utils.isNotOpenChat() && (strikerData.state = !0), strikerData.state || strikerData.shellCache.length != strikerData.salvoRocketsCount || strikerData.shellsTimeout || (strikerData.shellsTimeout = setTimeout((() => {
        strikerData.state = !0, strikerData.shellsTimeout = null
    }), "striker" == strikerData.type ? 2e3 : 4e3));
    let a = Utils.getBodyById(t, e, targetId);
    if (a && a.state && a.state.position && Utils.getPlayerById(t, e, targetId))
        if (strikerData.state) {
            for (let e = 0; e < strikerData.shellCache.length; e++) strikerData.shellCache.at(e).components_0.array.at(1).direction.x = 0, strikerData.shellCache.at(e).components_0.array.at(1).direction.y = 0, strikerData.shellCache.at(e).components_0.array.at(1).direction.z = 0, strikerData.shellCache.at(e).components_0.array.at(1).position.x = a.state.position.x, strikerData.shellCache.at(e).components_0.array.at(1).position.y = a.state.position.y, strikerData.shellCache.at(e).components_0.array.at(1).position.z = a.state.position.z;
            0 == strikerData.shellCache.length && (strikerData.state = !1)
        } else
            for (let e = 0; e < strikerData.shellCache.length; e++) strikerData.shellCache.at(e).components_0.array.at(1).direction.x = 0, strikerData.shellCache.at(e).components_0.array.at(1).direction.y = 0, strikerData.shellCache.at(e).components_0.array.at(1).direction.z = 0
};
class WallHack {
    process = null
}
let espData = {
    enabled: new ImGui_Var(!0),
    colorEnemy: 10027085,
    colorTarget: 6750054,
    colorTeam: 10066431,
    onlyEnemy: new ImGui_Var(!1),
    boxGlow: new ImGui_Var(!0)
};

function drawEsp(e, t) {
    if (!e) return;
    if (0 == e.length) return;
    let a, i, r, n;
    for (let t = 0; t < e.length; t++)
        if (e.at(t).__proto__.hasOwnProperty("weaponSkin_0")) {
            a = e.at(t).weaponSkin_0.root, i = a.children_ich852$_0.array, r = e.at(t).weaponSkin_0.hullSkinComponent_0.hull, n = r.children_ich852$_0.array;
            break
        } if (a && r && i && n)
        if (0 != t) {
            a.outlined = !0, a.outlineBold = !1, a.outlineColor = t, r.outlined = !0, r.outlineBold = !1, r.outlineColor = t;
            for (let e = 0; e < i.length; e++) i.at(e).outlined = !0, i.at(e).outlineBold = !1, i.at(e).outlineColor = t;
            for (let e = 0; e < n.length; e++) n.at(e).outlined = !0, n.at(e).outlineBold = !1, n.at(e).outlineColor = t
        } else {
            a.outlined = !1, r.outlined = !1;
            for (let e = 0; e < i.length; e++) i.at(e).outlined = !1;
            for (let e = 0; e < n.length; e++) n.at(e).outlined = !1
        }
}
WallHack.process = function(e) {
    if (!e) return;
    let t = GameObjects.getWorld();
    if (!t) return;
    let a = Utils.getPlayers(t, e);
    if (!a) return;
    if (0 == a.length) return;
    for (let i = 0; i < a.length; i++) espData.enabled.value ? Utils.getPlayerById(t, e, targetId) != a.at(i) ? Utils.isPlayerEnemy(e, a.at(i)) ? drawEsp(a.at(i), espData.colorEnemy) : espData.onlyEnemy.value ? drawEsp(a.at(i), 0) : drawEsp(a.at(i), espData.colorTeam) : drawEsp(a.at(i), espData.colorTarget) : drawEsp(a.at(i), 0);
    let i = t.triggers_0.triggers_0.array;
    if (i && 0 != i.length)
        for (let e = 0; e < i.length; e++) {
            if (!i.at(e).enabled) continue;
            if (!i.at(e).bonus_0) continue;
            let t = i.at(e).bonus_0.bonusMesh;
            if (!t) continue;
            let a = t.object3d;
            if (!a) continue;
            let r = i.at(e).bonus_0.bonusData_0;
            r && (a.outlineColor = r.bonusLight.lightColor.color, espData.boxGlow.value && espData.enabled.value ? (a.outlineBold = !1, a.outlined = !0) : a.outlined = !1)
        }
};
class CheatMenu {
    draw = null
}
class Tabs {
    localPlayer = null;
    weapon = null;
    visuals = null;
    players = null
}
document.exitPointerLock = document.exitPointerLock || document.mozExitPointerLock || document.webkitExitPointerLock;
let menuShow = !1;
!async function() {
    await ImGui.default(), ImGui.CreateContext(), ImGui.StyleColorsDark();
    const e = document.getElementById("output") || document.body,
        t = document.createElement("canvas"),
        a = t.getContext("webgl2", {
            alpha: !0
        }) || t.getContext("webgl", {
            alpha: !0
        });
    e.appendChild(t), t.tabIndex = 1e3, t.id = "canvas__imgui", t.style.position = "absolute", t.style.left = "0px", t.style.right = "0px", t.style.top = "0px", t.style.bottom = "0px", t.style.width = "100%", t.style.height = "100%", t.style.userSelect = "none", t.style.visibility = "hidden", ImGui_Impl.Init(t), ImGui_Impl.gl = a
}(), document.addEventListener("keyup", (e => {
    if (45 == e.keyCode && Utils.isGameReady() && Utils.isNotOpenChat()) {
        menuShow = !menuShow;
        let e = document.getElementById("canvas__imgui");
        e.style.visibility = menuShow ? "" : "hidden", menuShow && document.exitPointerLock()
    }
})), CheatMenu.draw = function(e) {
    menuShow && (ImGui_Impl.NewFrame(e), ImGui.NewFrame(), ImGui.SetNextWindowSize(new ImGui.ImVec2(650, 370), ImGui.Cond.FirstUseEver), ImGui.Begin(s, null, ImGui.WindowFlags.NoCollapse), ImGui.BeginTabBar("##tabbar", ImGui.TabBarFlags.None) && (ImGui.BeginTabItem("Local Player") && (Tabs.localPlayer(), ImGui.EndTabItem()), ImGui.BeginTabItem("Weapon") && (Tabs.weapon(), ImGui.EndTabItem()), ImGui.BeginTabItem("Visuals") && (Tabs.visuals(), ImGui.EndTabItem()), ImGui.BeginTabItem("Players") && (Tabs.players(), ImGui.EndTabItem()), ImGui.EndTabBar()), ImGui.End(), ImGui.EndFrame(), ImGui.Render(), ImGui_Impl.RenderDrawData(ImGui.GetDrawData()))
}, ImGui.StyleColorsDark = function() {
    let e = ImGui.GetStyle().Colors;
    ImGui.GetStyle().WindowPadding = new ImGui.ImVec2(5, 5), ImGui.GetStyle().FramePadding = new ImGui.ImVec2(5, 5), ImGui.GetStyle().ItemSpacing = new ImGui.ImVec2(5, 5), ImGui.GetStyle().ItemInnerSpacing = new ImGui.ImVec2(2, 2), ImGui.GetStyle().TouchExtraPadding = new ImGui.ImVec2(0, 0), ImGui.GetStyle().IndentSpacing = 0, ImGui.GetStyle().ScrollbarSize = 10, ImGui.GetStyle().GrabMinSize = 10, ImGui.GetStyle().WindowBorderSize = 1, ImGui.GetStyle().ChildBorderSize = 1, ImGui.GetStyle().PopupBorderSize = 1, ImGui.GetStyle().FrameBorderSize = 1, ImGui.GetStyle().TabBorderSize = 1, ImGui.GetStyle().WindowRounding = 5, ImGui.GetStyle().ChildRounding = 5, ImGui.GetStyle().FrameRounding = 5, ImGui.GetStyle().PopupRounding = 5, ImGui.GetStyle().ScrollbarRounding = 5, ImGui.GetStyle().GrabRounding = 5, ImGui.GetStyle().TabRounding = 5, ImGui.GetStyle().WindowTitleAlign.x = .5, ImGui.GetStyle().WindowTitleAlign.y = .5, ImGui.GetStyle().ButtonTextAlign.x = .5, ImGui.GetStyle().ButtonTextAlign.y = .5, ImGui.GetStyle().SelectableTextAlign.x = .5, ImGui.GetStyle().SelectableTextAlign.y = .5, ImGui.GetStyle().WindowPadding.x = 5, ImGui.GetStyle().WindowPadding.y = 5, ImGui.GetStyle().FramePadding.x = 5, ImGui.GetStyle().FramePadding.y = 5, ImGui.GetStyle().ItemSpacing.x = 5, ImGui.GetStyle().ItemSpacing.y = 5, ImGui.GetStyle().ItemSpacing.x = 2, ImGui.GetStyle().ItemSpacing.y = 2, ImGui.GetStyle().TouchExtraPadding.x = 0, ImGui.GetStyle().TouchExtraPadding.y = 0, e[ImGui.Col.Text] = new ImGui.Vec4(1, 1, 1, 1), e[ImGui.Col.TextDisabled] = new ImGui.Vec4(.5, .5, .5, 1), e[ImGui.Col.WindowBg] = new ImGui.Vec4(.07, .07, .07, 1), e[ImGui.Col.ChildBg] = new ImGui.Vec4(.07, .07, .07, 1), e[ImGui.Col.PopupBg] = new ImGui.Vec4(.07, .07, .07, 1), e[ImGui.Col.Border] = new ImGui.Vec4(.25, .25, .26, .54), e[ImGui.Col.BorderShadow] = new ImGui.Vec4(0, 0, 0, 0), e[ImGui.Col.FrameBg] = new ImGui.Vec4(.12, .12, .12, 1), e[ImGui.Col.FrameBgHovered] = new ImGui.Vec4(.25, .25, .26, 1), e[ImGui.Col.FrameBgActive] = new ImGui.Vec4(.25, .25, .26, 1), e[ImGui.Col.TitleBg] = new ImGui.Vec4(.12, .12, .12, 1), e[ImGui.Col.TitleBgActive] = new ImGui.Vec4(.12, .12, .12, 1), e[ImGui.Col.TitleBgCollapsed] = new ImGui.Vec4(.12, .12, .12, 1), e[ImGui.Col.MenuBarBg] = new ImGui.Vec4(.12, .12, .12, 1), e[ImGui.Col.ScrollbarBg] = new ImGui.Vec4(.12, .12, .12, 1), e[ImGui.Col.ScrollbarGrab] = new ImGui.Vec4(0, 0, 0, 1), e[ImGui.Col.ScrollbarGrabHovered] = new ImGui.Vec4(.41, .41, .41, 1), e[ImGui.Col.ScrollbarGrabActive] = new ImGui.Vec4(.51, .51, .51, 1), e[ImGui.Col.CheckMark] = new ImGui.Vec4(1, 1, 1, 1), e[ImGui.Col.SliderGrab] = new ImGui.Vec4(.21, .2, .2, 1), e[ImGui.Col.SliderGrabActive] = new ImGui.Vec4(.21, .2, .2, 1), e[ImGui.Col.Button] = new ImGui.Vec4(.12, .12, .12, 1), e[ImGui.Col.ButtonHovered] = new ImGui.Vec4(.21, .2, .2, 1), e[ImGui.Col.ButtonActive] = new ImGui.Vec4(.41, .41, .41, 1), e[ImGui.Col.Header] = new ImGui.Vec4(.12, .12, .12, 1), e[ImGui.Col.HeaderHovered] = new ImGui.Vec4(.2, .2, .2, 1), e[ImGui.Col.HeaderActive] = new ImGui.Vec4(.47, .47, .47, 1), e[ImGui.Col.Separator] = new ImGui.Vec4(.12, .12, .12, 1), e[ImGui.Col.SeparatorHovered] = new ImGui.Vec4(.12, .12, .12, 1), e[ImGui.Col.SeparatorActive] = new ImGui.Vec4(.12, .12, .12, 1), e[ImGui.Col.ResizeGrip] = new ImGui.Vec4(1, 1, 1, .25), e[ImGui.Col.ResizeGripHovered] = new ImGui.Vec4(1, 1, 1, .67), e[ImGui.Col.ResizeGripActive] = new ImGui.Vec4(1, 1, 1, .95), e[ImGui.Col.Tab] = new ImGui.Vec4(.12, .12, .12, 1), e[ImGui.Col.TabHovered] = new ImGui.Vec4(.28, .28, .28, 1), e[ImGui.Col.TabActive] = new ImGui.Vec4(.3, .3, .3, 1), e[ImGui.Col.TabUnfocused] = new ImGui.Vec4(.07, .1, .15, .97), e[ImGui.Col.TabUnfocusedActive] = new ImGui.Vec4(.14, .26, .42, 1), e[ImGui.Col.PlotLines] = new ImGui.Vec4(.61, .61, .61, 1), e[ImGui.Col.PlotLinesHovered] = new ImGui.Vec4(1, .43, .35, 1), e[ImGui.Col.PlotHistogram] = new ImGui.Vec4(.9, .7, 0, 1), e[ImGui.Col.PlotHistogramHovered] = new ImGui.Vec4(1, .6, 0, 1), e[ImGui.Col.TextSelectedBg] = new ImGui.Vec4(1, 0, 0, .35), e[ImGui.Col.DragDropTarget] = new ImGui.Vec4(1, 1, 0, .9), e[ImGui.Col.NavHighlight] = new ImGui.Vec4(.26, .59, .98, 1), e[ImGui.Col.NavWindowingHighlight] = new ImGui.Vec4(1, 1, 1, .7), e[ImGui.Col.NavWindowingDimBg] = new ImGui.Vec4(.8, .8, .8, .2), e[ImGui.Col.ModalWindowDimBg] = new ImGui.Vec4(0, 0, 0, .7)
}, Tabs.localPlayer = function() {
    ImGui.Checkbox("AirBreak [R. Shift]", airBreak.enabled.access), ImGui.SameLine(), ImGui.PushItemWidth(120), ImGui.SliderInt("Speed##airBreak.speed", airBreak.speed.access, 1, 300), ImGui.SameLine(), ImGui.SliderInt("Smooth##airBreak.smooth", airBreak.smooth.access, 1, 20), ImGui.PopItemWidth(2), ImGui.SameLine(), ImGui.Checkbox("AirWalk", airBreak.airWalk.access), ImGui.Checkbox("Sync", syncData.state.access), syncData.state.value && (ImGui.SetCursorPosX(ImGui.GetCursorPosX() + 15), ImGui.Checkbox("Anti Mine", syncData.antiMine.access), syncData.antiMine.value && (ImGui.SameLine(), ImGui.InputInt("Height", syncData.antiMineHeight.access, 10, 10)), ImGui.SetCursorPosX(ImGui.GetCursorPosX() + 15), ImGui.Checkbox("Spinner", syncData.spinner.access), ImGui.SetCursorPosX(ImGui.GetCursorPosX() + 15), ImGui.Checkbox("Random Teleport", syncData.randomTeleport.access), syncData.randomTeleport.value && (syncData.deSyncData.state.value = !1, syncData.fakeLagData.state.value = !1, syncData.antiStrikerHackData.state.value = !1, syncData.spinner.value = !1, syncData.antiMine.value = !1), ImGui.SetCursorPosX(ImGui.GetCursorPosX() + 15), ImGui.Checkbox("deSync", syncData.deSyncData.state.access), syncData.deSyncData.state.value && (ImGui.SameLine(), ImGui.Checkbox("Teleport to Real Position", syncData.deSyncData.teleportToRealPosition.access), syncData.randomTeleport.value = !1, syncData.fakeLagData.state.value = !1, syncData.antiStrikerHackData.state.value = !1, syncData.spinner.value = !1, syncData.antiMine.value = !1), ImGui.SetCursorPosX(ImGui.GetCursorPosX() + 15), ImGui.Checkbox("Fake Lag", syncData.fakeLagData.state.access), syncData.fakeLagData.state.value && (ImGui.SameLine(), ImGui.InputInt("Distance", syncData.fakeLagData.distance.access, 10, 100), syncData.fakeLagData.distance.value < 0 && (syncData.fakeLagData.distance.value = 0), syncData.randomTeleport.value = !1, syncData.deSyncData.state.value = !1, syncData.antiStrikerHackData.state.value = !1), ImGui.SetCursorPosX(ImGui.GetCursorPosX() + 15), ImGui.Checkbox("Avoid Striker Hack", syncData.antiStrikerHackData.state.access), syncData.antiStrikerHackData.state.value && (syncData.randomTeleport.value = !1, syncData.deSyncData.state.value = !1, syncData.fakeLagData.state.value = !1)), ImGui.Checkbox("Auto Healing", clickerData.autoHealingData.state.access), clickerData.autoHealingData.state.value && (ImGui.SameLine(), ImGui.PushItemWidth(120), ImGui.SliderInt("Multiply##AHM", clickerData.autoHealingData.mply.access, 1, 5), ImGui.SameLine(), ImGui.InputInt("Delay##AHD", clickerData.autoHealingData.delay.access, 10), ImGui.PopItemWidth(2), clickerData.autoHealingData.delay.value < 0 && (clickerData.autoHealingData.delay.value = 0)), ImGui.Checkbox("Auto Mining", clickerData.autoMining.access), ImGui.SameLine(), ImGui.Checkbox("Auto Supplies", clickerData.autoSupplies.access), ImGui.Checkbox("No Collision", otherData.noCollision.access), ImGui.SliderInt("Gravity", otherData.gravity.access, -1e3, 1e3), ImGui.SliderFloat("No Knockback", noKnockbackMply.access, 0, 2), ImGui.Checkbox("Box Teleport", boxTeleport.access), ImGui.Checkbox("SpeedHack", otherData.speedHack.access), ImGui.Checkbox("Flag Teleport", flagTeleportData.state.access), ImGui.Checkbox("Rapid Update", otherData.rapidUpdateData.state.access), otherData.rapidUpdateData.state.value && (ImGui.SameLine(), ImGui.PushItemWidth(120), ImGui.SliderInt("Multiply##RUM", otherData.rapidUpdateData.mply.access, 1, 5), ImGui.SameLine(), ImGui.InputInt("Delay##RUD", otherData.rapidUpdateData.delay.access, 10), ImGui.PopItemWidth(2), otherData.rapidUpdateData.delay.value < 0 && (otherData.rapidUpdateData.delay.value = 0))
}, Tabs.weapon = function() {
    ImGui.Text("Striker / Scorpion"), ImGui.Checkbox("Aim-Bot##striker", strikerData.aimBot.access), ImGui.SameLine(), ImGui.Checkbox("Rockets Teleport##striker", strikerData.shellsTeleport.access), ImGui.SameLine(), ImGui.Checkbox("Lock Target With Scope##striker", strikerData.getTargetWithScope.access), ImGui.Separator()
};
const rgbToHex = e => [parseInt((255 * e[0]).toFixed(1)), parseInt((255 * e[1]).toFixed(1)), parseInt((255 * e[2]).toFixed(1))].map((e => {
    const t = e.toString(16);
    return 1 === t.length ? "0" + t : t
})).join("");
let colorEnemyRGB = new ImGui_Var([.6, 0, .3]),
    colorTeamRGB = new ImGui_Var([.6, .6, 1]),
    colorTargetRGB = new ImGui_Var([.4, 1, .4]);
Tabs.visuals = function() {
    ImGui.Checkbox("Glow ESP", espData.enabled.access), espData.enabled.value && (ImGui.SetCursorPosX(ImGui.GetCursorPosX() + 15), ImGui.Checkbox("Only Enemy", espData.onlyEnemy.access), ImGui.SetCursorPosX(ImGui.GetCursorPosX() + 15), ImGui.Checkbox("Box ESP", espData.boxGlow.access), ImGui.SetCursorPosX(ImGui.GetCursorPosX() + 15), ImGui.ColorEdit3("Color Enemy", colorEnemyRGB.value), espData.colorEnemy = parseInt(rgbToHex(colorEnemyRGB.value), 16), ImGui.SetCursorPosX(ImGui.GetCursorPosX() + 15), ImGui.ColorEdit3("Color Team", colorTeamRGB.value), espData.colorTeam = parseInt(rgbToHex(colorTeamRGB.value), 16), ImGui.SetCursorPosX(ImGui.GetCursorPosX() + 15), ImGui.ColorEdit3("Color Target", colorTargetRGB.value), espData.colorTarget = parseInt(rgbToHex(colorTargetRGB.value), 16)), ImGui.Checkbox("Remove Mines", removeMines.access)
};
let targetId, selected = new ImGui_Var(-1),
    selectedPlayerName = "none",
    onlyEnemy = new ImGui_Var(!1);
Tabs.players = function() {
    let e = GameObjects.getLocalPlayer();
    if (!e) return;
    let t = GameObjects.getWorld();
    if (!t) return;
    if (!GameObjects.getPhysicsComponent()) return;
    if (!GameObjects.getCamera()) return;
    ImGui.Checkbox("Only enemy", onlyEnemy.access);
    let a = Utils.getPlayers(t, e, onlyEnemy.value);
    if (!a) return null;
    if (0 == a.length) return null;
    for (let e = 0; e < a.length; e++) {
        if (!a.at(e)) continue;
        if (0 == a.at(e).length) continue;
        let t = Utils.getPlayerName(a.at(e));
        ImGui.Selectable(t, selected.value === e) && (selectedPlayerName = t, selected.value = e)
    }
    if (ImGui.Separator(), selected.value >= 0) {
        if (!a.at(selected.value)) return;
        if (0 == a.at(selected.value).length) return;
        ImGui.Text(`Selected player: ${selectedPlayerName}`);
        let e = Utils.getPlayerBody(a.at(selected.value));
        if (!e) return;
        if (ImGui.Button("Set target"))
            for (let e = 0; e < a.at(selected.value).length; e++)
                if (a.at(selected.value).at(e).__proto__.hasOwnProperty("userId")) {
                    targetId = a.at(selected.value).at(e).userId;
                    break
                } ImGui.SameLine(), ImGui.Checkbox("Stick", stickData.state.access), stickData.state.access && (stickData.target = e)
    }
};
let init = !1,
    frameCounter = 0,
    pingKey = 74;

function reset() {
    init = airBreak.state = stickData.state.value = menuShow = !1, flagTeleportData.cooldown = !0, document.getElementById("canvas__imgui").style.visibility = "hidden", stickData.target = null, gameObjects = {
        localPlayer: null,
        world: null,
        gameMode: null,
        gameActions: null,
        mines: null,
        flags: null,
        physicsComponent: null,
        healthComponent: null,
        camera: null,
        trackedChassis: null,
        speedCharacteristics: null,
        serverUpdates: null,
        strikerComponent: null
    }, clickerData.autoHealingData.supplyData = {
        firstAID: null,
        mine: null
    }
}

function mainEvent(e) {
    if (!init && Utils.isGameReady()) {
        let e = GameObjects.getLocalPlayer();
        e && (init = !0, Sync.init(e), Striker.init(e), NoKnockback.init(e))
    } else init && !Utils.isGameReady() && reset();
    if (init) {
        let t = GameObjects.getLocalPlayer();
        Stick.process(t), AirBreak.process(t), BoxTeleport.process(t), FlagTeleport.process(t), Clicker.process(t), Other.process(t), frameCounter++, frameCounter >= 2 && (Striker.process(t), WallHack.process(t), RemoveMines.process(t), frameCounter = 0), CheatMenu.draw(e)
    }
    requestAnimationFrame(mainEvent)
}
Utils.getStates(), setInterval(Utils.saveStates, 5e3), requestAnimationFrame(mainEvent), console.clear(), alert("Используйте только на тестовом сервере и только в режиме паркур!\n\nUse only on the test server and only in parkour mode!");