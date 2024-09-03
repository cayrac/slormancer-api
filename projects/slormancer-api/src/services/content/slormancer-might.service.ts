import { Injectable } from '@angular/core';

@Injectable()
export class SlormancerMightService {

    constructor() { }

    public readonly VALUES = [
        [0,   713],
        [1,   713],
        [2,   714],
        [3,   714],
        [4,   714],
        [5,   714],
        [6,   714],
        [7,   714],
        [8,   714],
        [9,   715],
        [10,  715],
        [11,  715],
        [12,  715],
        [13,  715],
        [14,  716],
        [15,  716],
        [16,  716],
        [17,  716],
        [18,  716],
        [19,  717],
        [20,  717],
        [21,  717],
        [22,  717],
        [23,  717],
        [24,  717],
        [25,  718],
        [26,  718],
        [27,  718],
        [28,  718],
        [29,  718],
        [30,  719],
        [31,  719],
        [32,  719],
        [33,  719],
        [34,  719],
        [35,  719],
        [36,  720],
        [37,  720],
        [38,  720],
        [39,  720],
        [40,  720],
    ];

    public test() {
        
    } 

    public getSkillMight(investedSlorm: number): number {
        return 0;
    }

    public getAncestralMight(investedSlorm: number): number {
        return 0;
    }
}