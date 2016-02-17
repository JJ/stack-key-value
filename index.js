'use strict';

/**
 * Custom exception related with stack
 * @param {string} message - message which will be shown when exception will be thrown
 */
export function StackException(message) {
   this.message = message;
   this.name = "StackException";
}

/** Class representing a stack data structure. */
export class Stack {
    
    /**
     * Initialize stack as empty.
     */
    constructor() {
        this._stack = [];
        this._lastIndex = 0;
    }
    
    /**
     * Puts element into stack.
     * @param {object} elem - object which will be putted into stack
     * @return {Stack} stack with pushed element.
     */
    push(elem) {
        if (!elem) {
            throw new StackException("Parameter should not be empty");
            return;
        }
        if (this._stack.length === 0) {
            this._stack[0] = elem;
            this._lastIndex++;
        }
        else
            this._stack[this._lastIndex++] = elem;
            
        return this;
    }
    
    /**
     * Takes top element from the stack. Throws an ```StackException``` when the stack is empty.
     * @return {object} elem which will be taken from stack.
     */
    pop() {
        if (this._stack.length === 0) {
            throw new StackException("Stack is empty");
            return;
        }
        
        this._lastIndex = this._stack.length - 1;
        let elem = this._stack[this._lastIndex];
        this._stack.splice(this._lastIndex, 1);
        return elem;
    }
   
    /**
     * Peeks at the top element of the stack. Throws an ```Error``` when the stack is empty.
     * @return {object} elem - object which will be picked from stack.
     */
    peek() {
        if (this._stack.length === 0) {
            throw new StackException("Stack is empty");
            return;
        }
        
        return this._stack[this._lastIndex];
    }
    
    /**
     * Returns the size of the stack. 
     * @return {number} size of stack.
     */
    get size() {
        return this._stack.length;
    }
}