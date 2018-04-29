import { NestContainer } from '../injector/container';
import { MiddlewareContainer } from './container';
import { NestModule } from '@nestjs/common/interfaces/modules/nest-module.interface';
import { MiddlewareConfiguration } from '@nestjs/common/interfaces/middleware/middleware-configuration.interface';
import { Module } from '../injector/module';
import { ApplicationConfig } from '../application-config';
export declare class MiddlewareModule {
    private readonly routerProxy;
    private readonly routerMethodFactory;
    private routerExceptionFilter;
    private routesMapper;
    private resolver;
    register(middlewareContainer: MiddlewareContainer, container: NestContainer, config: ApplicationConfig): Promise<void>;
    resolveMiddleware(middlewareContainer: MiddlewareContainer, modules: Map<string, Module>): Promise<void>;
    loadConfiguration(middlewareContainer: MiddlewareContainer, instance: NestModule, module: string): void;
    registerMiddleware(middlewareContainer: MiddlewareContainer, applicationRef: any): Promise<void>;
    registerMiddlewareConfig(middlewareContainer: MiddlewareContainer, config: MiddlewareConfiguration, module: string, applicationRef: any): Promise<void>;
    registerRouteMiddleware(middlewareContainer: MiddlewareContainer, routePath: string, config: MiddlewareConfiguration, module: string, applicationRef: any): Promise<void>;
    private bindHandler(instance, metatype, applicationRef, method, path);
    private bindHandlerWithProxy(exceptionsHandler, router, middleware, path);
}