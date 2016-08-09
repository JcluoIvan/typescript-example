
declare module "text-load/app.html" {
    let html: string;
    export = html;
}

declare function require(name: string): string;

// todolist . rows
declare namespace todoList {
    interface Item {
        complete: boolean;
        text: string;
    }
}

