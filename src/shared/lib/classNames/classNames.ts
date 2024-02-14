type Mods = Record<string, string | boolean>;

export function classNames(cls: string, mods: Mods, additional: string[]): string {
    return [
        cls,
        ...additional,
        Object.entries(mods)
            .filter(([className, val]) => Boolean(val))
            .map(([className, val]) => className)
    ].join(' ');
}