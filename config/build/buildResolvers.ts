import {ResolveOptions} from "webpack";
import {BuildOptions} from "./types/config";

export function buildResolvers(options: BuildOptions): ResolveOptions {
    return {
        extensions: ['.tsx', '.ts', '.js'],
        // чтобы webpack не ломался на абсолютгых импортах
        preferAbsolute: true,
        modules: [options.paths.src, 'node_modules'],
        // для каждого модуля главным будет index файл (в нем public API)
        mainFiles: ['index'],
        alias: {}
    }
}