import express from 'express'
export abstract class commonRouteConfig{
    app:express.Application;
    name:string
    constructor(_app:express.Application, _name:string){
        this.app=_app;
        this.name=_name;
        this.configureRoute()
    }
    abstract configureRoute():express.Application
}