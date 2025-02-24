import {PlayerAnimationDirections} from "./Animation";
import {GameScene} from "../Game/GameScene";
import {UserInputEvent, UserInputManager} from "../UserInput/UserInputManager";
import {Character} from "../Entity/Character";

export const hasMovedEventName = "hasMoved";
export interface CurrentGamerInterface extends Character{
    moveUser(delta: number) : void;
    say(text : string) : void;
}

export class Player extends Character implements CurrentGamerInterface {
    private previousDirection: string = PlayerAnimationDirections.Down;
    private wasMoving: boolean = false;

    constructor(
        Scene: GameScene,
        x: number,
        y: number,
        name: string,
        texturesPromise: Promise<string[]>,
        direction: PlayerAnimationDirections,
        moving: boolean,
        private userInputManager: UserInputManager,
        companion: string|null
    ) {
        super(Scene, x, y, texturesPromise, name, direction, moving, 1);

        //the current player model should be push away by other players to prevent conflict
        this.getBody().setImmovable(false);

        if (typeof companion === 'string') {
            this.addCompanion(companion);
        }
    }

    moveUser(delta: number): void {
        //if user client on shift, camera and player speed
        let direction = null;
        let moving = false;

        const activeEvents = this.userInputManager.getEventListForGameTick();
        const speedMultiplier = activeEvents.get(UserInputEvent.SpeedUp) ? 25 : 9;
        const moveAmount = speedMultiplier * 20;

        let x = 0;
        let y = 0;
        if (activeEvents.get(UserInputEvent.MoveUp)) {
            y = -moveAmount;
            direction = PlayerAnimationDirections.Up;
            moving = true;
        } else if (activeEvents.get(UserInputEvent.MoveDown)) {
            y = moveAmount;
            direction = PlayerAnimationDirections.Down;
            moving = true;
        }
        if (activeEvents.get(UserInputEvent.MoveLeft)) {
            x = -moveAmount;
            direction = PlayerAnimationDirections.Left;
            moving = true;
        } else if (activeEvents.get(UserInputEvent.MoveRight)) {
            x = moveAmount;
            direction = PlayerAnimationDirections.Right;
            moving = true;
        }
        moving = moving || activeEvents.get(UserInputEvent.JoystickMove);

        if (x !== 0 || y !== 0) {
            this.move(x, y);
            this.emit(hasMovedEventName, {moving, direction, x: this.x, y: this.y});
        } else if (this.wasMoving && moving) {
            // slow joystick movement
            this.move(0, 0);
            this.emit(hasMovedEventName, {moving, direction: this.previousDirection, x: this.x, y: this.y});
        } else if (this.wasMoving && !moving) {
            this.stop();
            this.emit(hasMovedEventName, {moving, direction: this.previousDirection, x: this.x, y: this.y});
        }

        if (direction !== null) {
            this.previousDirection = direction;
        }
        this.wasMoving = moving;
    }
}
