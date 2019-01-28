export class Annotation {
    private _caption: string = "ANNOT";
    left: number;
    right: number;
    top: number;
    bottom: number;
    id:number;

    constructor(id:number, l:number=0, b:number=0, r:number=0, t:number=0, c:string="Add Caption") {
        this.id = id;
        this.left = l;
        this.right = r;
        this.top = t;
        this.bottom = b;
        this.caption = c;
    }
    
    set caption(t: string) {
        this._caption = t;
    }

    get caption():string {
        return this._caption;
    }

    width():number {
        return this.right - this.left;
    }

    height():number {
        return this.bottom - this.top;
    }
}